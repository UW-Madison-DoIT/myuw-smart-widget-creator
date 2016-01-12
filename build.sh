#!/bin/bash
## Build static
# cd node_modules/uw-frame
# npm run build-static
# cd ../../

## Build static hack until we fix bower install on frame to run with root if needed

pushd node_modules/uw-frame
npm install
pushd uw-frame-static
## Reset
rm -rf target
mkdir -p target

## Resources
cp -r ../uw-frame-components/* ./target/

## Copy over superstatic configuration for dev superstatic instance
cp superstatic.json ./target

## Note index.html is copied in via grunt script

## Get bower stuff

pushd target
../../node_modules/bower/bin/bower --config.interactive=false --allow-root install
popd

## Build less
../node_modules/less/bin/lessc -x target/css/themes/uw-madison.less > target/css/themes/uw-madison.css
../node_modules/less/bin/lessc -x target/css/themes/uw-system.less > target/css/themes/uw-system.css

popd

grunt

popd
## Copy static to target
rm -rf dist
mkdir dist
cp -r node_modules/uw-frame/uw-frame-static/target/* ./dist/

## Overlay my-app
cp -r app/* dist/