#!/bin/sh

curl -s https://apii-0.vercel.app/api/cache?key=user:$1 \
| jq '.key + " " + .value'
