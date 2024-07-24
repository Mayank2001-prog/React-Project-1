#!/bin/bash

APP_ID="d3yrlzwczm76p"
REGION="us-east-1"
WEBHOOK_URL="https://discord.com/api/webhooks/1265376219747061840/2wVvQ0BFr4_Luwv3_s7wWrenJioXmIHY5TXkdkamkqFHBLGOPKGA2wJlilBd0bUvUN9E"

STATUS=$(aws amplify get-app --app-id $APP_ID --region $REGION 2>&1)

if [[ $STATUS == *"ResourceNotFoundException"* ]]; then
  ./notify-discord.sh deletion deletion
fi
