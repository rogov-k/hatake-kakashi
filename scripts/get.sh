#!/bin/zsh

. ./../.env

curl -s "https://$VERCEL_URL/api/cache?key=user:$1" \
| jq -r '.key + " " + .value'
