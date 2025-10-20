#!/bin/zsh

rm -rf dist

npm run build

cp  src/static/favicon.ico /dist/favicon.ico
cp  src/static/index.html /dist/index.html

tree -a dist
