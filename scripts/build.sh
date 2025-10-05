#!/bin/zsh

rm -rf dist
npm run build && cp src/index.html dist/index.html
cd dist
tree -a
