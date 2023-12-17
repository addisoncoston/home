#!/bin/bash

# Ask for password
cat << EOF
### THIS WILL INSTALL THE LATEST DEVELOPMENT BUILDS OF THE HELMUT MICROSERVICES
### BE AWARE THAT THOSE BUILDS ARE MAINLY UNTESTED AND CAN CAUSE PROBLEMS
### CONTINUE ON YOUR OWN RISK
### WE ADVISE TO MAKE A BACKUP BEFORE UPDATING
###
### PLEASE USE SNAPSHOTS FOR MORE STAGING/PRODUCTION SYSTEMS
###
### IF YOU WANT TO REQUEST THE UPDATER PASSWORD OR EXPERIENCE ANY PROBLEMS, PLEASE CONTACT support@moovit.de

EOF

read -s -p "Please provide the password for the helmut updater: `echo $'\n> '`" PASSWORD </dev/tty
echo
if [ -z "$PASSWORD" ] || [ $PASSWORD != "public" ]
then
echo "Invalid password, please contact support@moovit.de for further information"
exit 1
fi

#read -s -p "Are you sure you want to continue (y/n)? " -n 1 -r </dev/tty
#echo
#if [[ ! $REPLY =~ ^[Yy]$ ]]
#then
#   exit 1;
#fi

PASS=$1
if [ $# -eq 0 ]
  then
    PASS="admin"
fi

. /etc/os-release 2&>1

### UPDATE ###
JWT=$(http --ignore-stdin POST :9000/api/auth Username="admin" Password="${PASS}" | jq -r ".jwt")
if [ "null" = "${JWT}" ]
then
    read -s -p "Please provide the password for the admin portainer account: `echo $'\n> '`" PASS </dev/tty
    echo
    JWT=$(http --ignore-stdin POST :9000/api/auth Username="admin" Password="${PASS}" | jq -r ".jwt")

    if [ "null" = "${JWT}" ]
    then
	echo "Invalid credentials for admin portainer account"
	exit 1;
    fi
fi

STACKS=$(http --ignore-stdin GET :9000/api/stacks "Authorization:Bearer ${JWT}")
for row in $(echo "${STACKS}" | jq -r '.[] | @base64'); do
    _jq() {
        echo ${row} | base64 --decode | jq -r ${1}
    }

    if [[ $(_jq '.Name') == *"Helmut4"* ]] || [[ $(_jq '.Name') == *"helmut4"* ]]; then
        STACK="$(_jq '.Id')"
    fi
done

if test -z "${STACK}"
then
    echo "Helmut4 Stack not found - exiting.."
    exit 1;
fi


echo "Helmut4 Stack found with Id: ${STACK}"
echo "Updating Helmut4.." 
CONTENT=$(http --ignore-stdin GET :9000/api/stacks/${STACK}/file "Authorization:Bearer ${JWT}" | jq -r ".StackFileContent")
BUFILE=/tmp/helmut4_stack_$(date +\%Y-\%m-\%d-\%H\%M\%S).yaml
echo ${CONTENT} > ${BUFILE}
echo "Created stack file backup: ${BUFILE}"

# qnd fix for traefik:latest
CONTENT=$(echo "${CONTENT}" | sed "s/traefik:latest/traefik:4.0.2.4/g")

images=( mcc_traefik mcc_cronjob mcc_amqp mcc_language mcc_license mcc_logging mcc_metadata mcc_mongodb mcc_mongodb_backup mcc_preferences mcc_rabbitmq mcc_streams mcc_traefik mcc_users mcp_co mcp_fx mcp_hp mcp_hw mcp_io mcp_smd mcp_hk )
for i in "${images[@]}"
do
    TMPJWT=$(http --ignore-stdin POST "https://repo.moovit24.de/auth?scope=repository:$i:pull&service=repo.moovit24.de:443" "Authorization:Basic YWRtaW46VzlOQUtTdWhDaWMl" | jq -r ".access_token")
    RES=$(http --ignore-stdin GET "https://repo.moovit24.de/v2/$i/tags/list" "Authorization:Bearer ${TMPJWT}" | jq -r '.tags|map(if (.|split("e")|length)>1 then "0.0.0.0" else . end)|sort_by(split(".")|map(tonumber))|reverse[0]')
#    OLD=$(echo "${CONTENT}" | sed -n "s/\/$i:\([0-9]*\.[0-9]*\.[0-9]*\.[0-9]*\)/\/$i:\1/p" | sed "s/image: repo.moovit24.de:443\/${i}://g" | awk '{$1=$1};1')
    OLD=$(echo "${CONTENT}" | sed -n "s/\/$i:\(.*\)/\/$i:\1/p" | sed "s/image: repo.moovit24.de:443\/$i://g" | awk '{$1=$1};1')
    if ! [ -z "$OLD" ]
    then
#        CONTENT=$(echo "${CONTENT}" | sed "s/\/$i:\([0-9]*\.[0-9]*\.[0-9]*\.[0-9]*\)/\/${i}:${RES}/g")
        CONTENT=$(echo "${CONTENT}" | sed "s/\/$i:\(.*\)/\/${i}:${RES}/g")
        echo "Updated ${i}"
        echo "${OLD} -> ${RES}"
    fi
done


echo "Redeploying the Helmut Stack, this might take some time.. (Timeout is set to 10 minutes)"
http --ignore-stdin --timeout=1200 PUT ":9000/api/stacks/${STACK}?endpointId=1" "Authorization:Bearer ${JWT}" StackFileContent="${CONTENT}" Prune:=false
echo "Update done"
### /UPDATE ###

