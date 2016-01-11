
## Build static
cd node_modules/uw-frame
npm run build-static
cd ../../

## Copy static to target
rm -rf dist
mkdir dist
cp -r node_modules/uw-frame/uw-frame-static/target/* ./dist/

## Overlay my-app
cp -r app/* dist/