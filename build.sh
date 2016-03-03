#!/bin/bash

if [ "$1" = "y" ]; then
  ## Build static
  pushd node_modules/uw-frame
    npm run build-static
  popd
fi

## Copy static to target
rm -rf dist
mkdir dist

if [ "$1" = "y" ]; then
  cp -r node_modules/uw-frame/uw-frame-static/target/* ./dist/
fi
## Overlay my-app
cp -r app/* dist/

## Create index.html
grunt
