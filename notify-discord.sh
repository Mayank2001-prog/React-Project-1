#!/bin/bash

WEBHOOK_URL="https://discord.com/api/webhooks/1265376219747061840/2wVvQ0BFr4_Luwv3_s7wWrenJioXmIHY5TXkdkamkqFHBLGOPKGA2wJlilBd0bUvUN9E"
STATUS=$1

if [ "$STATUS" == "success" ]; then
  MESSAGE="The build for your project has succeeded."
else
  MESSAGE="The build for your project has failed. Please check the logs for more details."
fi

PAYLOAD=$(cat <<EOF
{
  "username": "AWS Amplify",
  "content": "$MESSAGE"
}
EOF
)

curl -X POST -H "Content-Type: application/json" -d "$PAYLOAD" $WEBHOOK_URL
