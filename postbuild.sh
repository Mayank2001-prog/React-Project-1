#!/bin/bash

# Check the status of the build process
if [ $? -eq 0 ]; then
  ./notify-discord.sh success
else
  ./notify-discord.sh failure
fi
