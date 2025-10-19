#!/bin/zsh

rm -rf dist

npm run build
cp src/index.html dist/index.html
cp src/favicon.ico dist/favicon.ico
cp src/favicon.svg dist/favicon.svg

cd dist
tree -a
cd ../
