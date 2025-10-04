#!/bin/sh

curl -s -X POST https://apii-0.vercel.app/api/cache \
  -H 'Content-Type: application/json' \
  -d '{"key":"'"$1"'","value":"'"$2"'"}' \
| jq -r '(if .ok == true then "[OK]: " else "[ERROR]: " end) + .set.value'
