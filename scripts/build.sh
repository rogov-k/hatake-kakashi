#!/bin/zsh

rm -rf dist

npm run build
cp -R src/static /dist

tree -a dist
