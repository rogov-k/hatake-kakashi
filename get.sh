#!/bin/sh

. ./.env

curl -s "$API_URL/api/cache?key=user:$1" \
| jq '.key + " " + .value'
