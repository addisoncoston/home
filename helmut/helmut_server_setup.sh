#!/bin/bash

. /etc/os-release 2&>1
mkdir -p /etc/docker
echo "{\"log-driver\": \"json-file\",\"log-opts\": {\"max-size\": \"10m\",\"max-file\": \"3\"}}" > /etc/docker/daemon.json

if [[ $NAME == *"Debian"* ]]; then
### DEBIAN 9, 10 ###
sudo apt-get update -y
if [ $? != 0 ]; 
then
echo "aptitude is in use by someone else (maybe the system itself) - please retry later - exiting.."
exit 1
fi
sudo apt-get install apt-transport-https ca-certificates curl gnupg2 software-properties-common -y
curl -fsSL https://download.docker.com/linux/debian/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/debian $(lsb_release -cs) stable"
sudo apt-get update -y
sudo apt-get install docker-ce docker-ce-cli containerd.io -y
sudo apt-get install docker-compose -y
sudo apt-get install httpie jq -y
service docker start
sleep 10
### /DEBIAN ###
elif [[ $NAME == *"Ubuntu"* ]] || [[ $NAME == *"EditShare"* ]]; then
### UBUNTU 18 ###
sudo apt-get update -y
if [ $? != 0 ]; 
then
echo "aptitude is in use by someone else (maybe the system itself) - please retry later - exiting.."
exit 1
fi
sudo apt-get install apt-transport-https ca-certificates curl gnupg-agent software-properties-common  -y
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
sudo apt-get update -y
sudo apt-get install docker-ce docker-ce-cli containerd.io -y
sudo apt-get install docker-compose -y
sudo apt-get install httpie jq -y
service docker start
sleep 10
### /UBUNTU ###
elif [[ $NAME == *"CentOS"* ]]; then
### CENTOS 7 ###
sudo yum update -y
sudo yum --enablerepo=extras install epel-release -y
sudo yum update -y
sudo yum install -y yum-utils device-mapper-persistent-data lvm2 nano
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo 
sudo yum update -y
if [[ $(rpm --eval '%{centos_ver}') == "8" ]]; then
sudo yum install -y docker-ce docker-ce-cli containerd.io --nobest
pip3 install httpie
pip3 install docker-compose
else
sudo yum install -y docker-ce docker-ce-cli containerd.io
sudo yum install -y httpie docker-compose
fi
sudo yum -y install jq
sudo systemctl start docker
sudo systemctl enable /usr/lib/systemd/system/docker.service
sleep 10
### /CENTOS ###
else
echo "Unknown operating system - only Ubuntu and CentOS is supported - exiting.."
exit 1
fi

### GENERAL ###
touch /etc/localtime
touch /etc/timezone
docker run -it -d --restart=always -p 9000:9000 -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer --admin-password='$2y$05$WbcqfTqVa2T58lGrLO7Tp.30DMjKFo.6O4.XAmfBFg4a0jrVSbdW.' -H unix:///var/run/docker.sock
sleep 10
docker swarm init
docker swarm init --advertise-addr 127.0.0.1
docker swarm ca --cert-expiry 175200h --rotate
curl -s https://repo.moovit24.de/install/config/traefik.toml | docker config create traefik -
curl -s https://repo.moovit24.de/install/config/traefik-ssl.toml | docker config create traefik-ssl -
mkdir /root/certs
mkdir -p /mnt/helmut/Uploads/temp
mkdir -p /mnt/helmut/Projects
mkdir -p /mnt/helmut/Templates
mkdir -p /mnt/helmut/Profiles
mkdir -p /mnt/helmut/backup
mkdir -p /etc/helmut4 && chmod a+w /etc/helmut4
JWT=$(http --ignore-stdin POST :9000/api/auth Username="admin" Password="admin" | jq -r ".jwt")
SWARM_ID=$(http --ignore-stdin GET :9000/api/endpoints/1/docker/swarm "Authorization:Bearer ${JWT}" | jq -r ".ID")
http --ignore-stdin POST ":9000/api/registries" "Authorization:Bearer ${JWT}" Name="MoovIT GmbH" URL="repo.moovit24.de:443" Type:=3 Authentication:=true Username="moovit" Password="public"
echo "Deploying the Helmut Stack, this might take some time.. (Timeout is set to 10 minutes)"
STACK=$(curl -s https://repo.moovit24.de/install/config/docker-compose.yml)
http --ignore-stdin --timeout=1200 POST ":9000/api/stacks?method=string&type=1&endpointId=1" "Authorization:Bearer ${JWT}" Name="Helmut4" SwarmID="${SWARM_ID}" StackFileContent="${STACK}"
echo -e "#/bin/bash\\ncurl -s https://repo.moovit24.de/install/update.sh | bash" > /usr/sbin/helmut-update && chmod  a+x /usr/sbin/helmut-update
echo -e "#/bin/bash\\ncurl -s https://repo.moovit24.de/install/snapshot.sh | bash -s \${1}" > /usr/sbin/helmut-snapshot && chmod  a+x /usr/sbin/helmut-snapshot
# echo "Updating Helmut to stable release 4.0.5-release-0"
# helmut-snapshot 4.0.5-release-0
echo "Helmut setup done - you might want to change the portainer password from admin:admin to something more secure.."
### /GENERAL ###

