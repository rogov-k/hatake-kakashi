#!/bin/zsh

rm -rf dist

npm run build

mv  src/static/favicon.ico /dist/favicon.ico
mv  src/static/index.html /dist/index.html

tree -a dist
