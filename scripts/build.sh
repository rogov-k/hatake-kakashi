#!/bin/zsh

rm -rf dist

npm run build

mkdir ./dist/static
cp  ./src/static/favicon.ico ./dist/static/favicon.ico
cp  ./src/static/index.html ./dist/static/index.html

tree -a dist
