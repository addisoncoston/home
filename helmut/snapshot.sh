#!/bin/bash

SNAPSHOT_VERSION="${1}"

if [ -z "${SNAPSHOT_VERSION}" ]
then
    echo "Error - please provide a snapshot"
    exit 1
fi

. /etc/os-release 2&>1

### SNAPSHOT ###
JWT=$(http --ignore-stdin POST :9000/api/auth Username="admin" Password="${PASS}" | jq -r ".jwt")
if [ "null" = "${JWT}" ]
then
    read -s -p "Please provide the password for the admin portainer account: `echo $'\n> '`" PASS </dev/tty
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
echo "Grabbing snapshot '${SNAPSHOT_VERSION}' for Helmut4.." 
CONTENT=$(http --ignore-stdin GET :9000/api/stacks/${STACK}/file "Authorization:Bearer ${JWT}" | jq -r ".StackFileContent")
SNAPSHOT=$(http --ignore-stdin GET https://repo.moovit24.de/install/snapshots/${SNAPSHOT_VERSION})

if [ -z "${SNAPSHOT}" ]
then
    echo "Could not get snapshot ${SNAPSHOT_VERSION} from server"
    exit 1
elif [[ ${SNAPSHOT} == *"<html>"* ]]; then
    echo "Error grabbing snapshot ${SNAPSHOT_VERSION} from server:"
    echo "${SNAPSHOT}"
    exit 1
else
    echo "Snapshot ${SNAPSHOT_VERSION} has been loaded from server"
fi

for j in ${SNAPSHOT}    
do
    IFS=: read -r ENDPOINT ENDPOINT_VERSION <<< "$j"
#    OLD=$(echo "${CONTENT}" | sed -n "s/\/${ENDPOINT}:\([0-9]*\.[0-9]*\.[0-9]*\.[0-9]*\)/\/${ENDPOINT}:\1/p" | sed "s/image: repo.moovit24.de:443\/${ENDPOINT}://g" | awk '{$1=$1};1')
     OLD=$(echo "${CONTENT}" | sed -n "s/\/${ENDPOINT}:\(.*\)/\/${ENDPOINT}:\1/p" | sed "s/image: repo.moovit24.de:443\/${ENDPOINT}://g" | awk '{$1=$1};1')
    if ! [ -z "$OLD" ]
    then
#         CONTENT=$(echo "${CONTENT}" | sed "s/\/${ENDPOINT}:\([0-9]*\.[0-9]*\.[0-9]*\.[0-9]*\)/\/${ENDPOINT}:${ENDPOINT_VERSION}/g")
         CONTENT=$(echo "${CONTENT}" | sed "s/\/${ENDPOINT}:\(.*\)/\/${ENDPOINT}:${ENDPOINT_VERSION}/g")
         echo "Updated ${ENDPOINT}"
         echo "${OLD} -> ${ENDPOINT_VERSION}"
     fi
done

echo "Redeploying the Helmut Stack, this might take some time.. (Timeout is set to 10 minutes)"
http --ignore-stdin --timeout=1200 PUT ":9000/api/stacks/${STACK}?endpointId=1" "Authorization:Bearer ${JWT}" StackFileContent="${CONTENT}" Prune:=false
mkdir -p /etc/helmut4 && chmod a+w /etc/helmut4
echo "${SNAPSHOT_VERSION}" > /etc/helmut4/helmut4.snapshot
echo "Update done"
### /SNAPSHOT ###

