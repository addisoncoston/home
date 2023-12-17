#!/bin/bash

#Changelog: 2nd Nov 2021
#adopted commands for Debian 11/Buster
#updated docker keyring & apt commands (Debian+Ubuntu+Streams8)
#Stack name Helmut4 -> helmut4
#CentOS Streams 8 installer

echo "\nStarting Helmut4 installation ...\n"
sleep 2

. /etc/os-release 2&>1
mkdir -p /etc/docker
echo "{\"log-driver\": \"json-file\",\"log-opts\": {\"max-size\": \"10m\",\"max-file\": \"3\"}}" > /etc/docker/daemon.json

if [[ $NAME == *"Debian"* ]]; then
### DEBIAN 9, 10, 11 ###
echo "\nStarting the Helmut4 installation on OS $NAME version $VERSION ...\n"
sleep 2

#Install sudo commands
apt-get install sudo -y
sudo apt-get update -y
if [ $? != 0 ]; 
then
echo "aptitude is in use by someone else (maybe the system itself) - please retry later - exiting.."
exit 1
fi

sudo apt-get install ca-certificates curl gnupg lsb-release -y
curl -fsSL https://download.docker.com/linux/debian/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg -y

echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/debian $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get install docker-ce docker-ce-cli containerd.io -y
sudo apt-get install docker-compose -y
sudo apt-get install httpie jq -y

systemctl restart docker.service
echo "\nOS installation part finished - switching over to Docker sub-process ...\n"
sleep 10
### /DEBIAN ###

elif [[ $NAME == *"Ubuntu"* ]] || [[ $NAME == *"EditShare"* ]]; then
### UBUNTU 18 ###
echo "\nStarting the Helmut4 installation on OS $NAME version $VERSION ...\n"
sleep 2

sudo apt-get update -y
if [ $? != 0 ]; 
then
echo "aptitude is in use by someone else (maybe the system itself) - please retry later - exiting.."
exit 1
fi
sudo apt-get install ca-certificates curl gnupg lsb-release -y
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg -y
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update -y
sudo apt-get install docker-ce docker-ce-cli containerd.io -y
sudo apt-get install docker-compose -y
sudo apt-get install httpie jq -y
sudo service docker start
echo "\nOS installation part finished - switching over to Docker sub-process ...\n"
sleep 10
### /UBUNTU ###

elif [[ $NAME == *"CentOS Stream"* ]] && [[ $VERSION == *"8"* ]]; then
### CENTOS Streams ###
echo "\nStarting the Helmut4 installation on OS $NAME version $VERSION ...\n"
sleep 2

sudo yum update -y
sudo yum install -y yum-utils device-mapper-persistent-data lvm2 nano
sudo yum install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm

sudo yum update -y

sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
sudo yum update -y --nobest --allowerasing
sudo yum install -y docker-ce docker-ce-cli containerd.io --nobest --allowerasing

sudo yum -y install httpie jq
sudo systemctl start docker
sudo systemctl enable /usr/lib/systemd/system/docker.service

echo "\nOS installation part finished - switching over to Docker sub-process ...\n"
sleep 10
### /CENTOS Streams###

elif [[ $NAME == *"CentOS"* ]] && [[ $NAME != *"CentOS Stream"* ]]; then
### CENTOS 7 ###
echo "\nStarting the Helmut4 installation on OS $NAME version $VERSION ...\n"
sleep 2

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

echo "\nOS installation part finished - switching over to Docker sub-process ...\n"
sleep 10
### /CENTOS ###

else
echo "Unknown or unsupported operating system - only Ubuntu, Debian and CentOS 7/8/Streams 8 is supported - exiting.."
exit 1
fi

echo "\nStarting configuring Docker, Portainer & the helmut4 stack ...\n"
### GENERAL ###
touch /etc/localtime
touch /etc/timezone

# -> Portainer CE latest v2.x.x
docker run -it -d --restart=always -p 9000:9000 --name=portainer -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:latest --admin-password='$2y$05$WbcqfTqVa2T58lGrLO7Tp.30DMjKFo.6O4.XAmfBFg4a0jrVSbdW.' -H unix:///var/run/docker.sock
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
http --ignore-stdin --timeout=1200 POST ":9000/api/stacks?method=string&type=1&endpointId=1" "Authorization:Bearer ${JWT}" Name="helmut4" SwarmID="${SWARM_ID}" StackFileContent="${STACK}"

echo "\nStack configuration sucessfull"
sleep 2

#DEBIAN - set update commands to /usr/local/bin
if [[ $NAME == *"Debian"* ]]; then
echo "\nSetting helmut update commands for $NAME ...\n"

echo -e "#/bin/bash\\ncurl -s https://repo.moovit24.de/install/update.sh | bash" > /usr/local/bin/helmut-update && chmod  a+x /usr/local/bin/helmut-update
echo -e "#/bin/bash\\ncurl -s https://repo.moovit24.de/install/snapshot.sh | bash -s \${1}" > /usr/local/bin/helmut-snapshot && chmod  a+x /usr/local/bin/helmut-snapshot
sleep 2

#UBUNTU/CentOS set update commands to /usr/sbin
else
echo "\nSetting helmut update commands for $NAME ...\n"
echo -e "#/bin/bash\\ncurl -s https://repo.moovit24.de/install/update.sh | bash" > /usr/sbin/helmut-update && chmod  a+x /usr/sbin/helmut-update
echo -e "#/bin/bash\\ncurl -s https://repo.moovit24.de/install/snapshot.sh | bash -s \${1}" > /usr/sbin/helmut-snapshot && chmod  a+x /usr/sbin/helmut-snapshot

sleep 2
fi

echo "Helmut4 setup done - you might want to change the portainer password from admin:admin to something more secure..."
### /GENERAL ###
