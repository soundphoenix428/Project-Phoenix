#!/bin/bash
set -e 
echo -e "\e[32m
# # # # # # # # # # # # # # # # # # # # # # # # # # # # #
#              Project Phoenix Start-up Script          #
#       This Script only works on Ubuntu & Debian       #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # #\e[0m"

#Check if user is a sudo user 
if [[ $EUITD -ne 0 ]]; then
    echo -e "\e{32m* Project Phoenix Start must be executed via sudo user. \e[0m" 1>&2
    exit 1
fi

# Would user like to continue the startup
while true; do
RESET="\e[0m"
GREEN="\e[32m"
read -p "$(echo -e $GREEN"\n* Start Project Phoenix? (Y/N)"$RESET)" yn
case $yn in
[yY] ) echo -e "\e[32m* Confirmed. Continuing..\e[0m";
break;;
[nN] ) echo -e "\e[32m* Confirmed. Exiting Startup..\e[0m";
exit;;
* ) echo -e "\3[32m* Invalid Response.\3[0m";;
esac
done

#Provide Error Code 
echo -e "\e[32m* Initalizing Startup..\3[0m"
echo -e "\e[32m* For Proper Startup Please go to https://ptero.joshsevero.dev"
echo -e "[ERROR] Startup Failed: Script not yet setup ERROR CODE: 1" 
exit;;
