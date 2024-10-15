#!/bin/bash
set -e

# collect the necessary information
entry_file=$(jq -r '.module // .main' $PACKAGE_PATH/package.json)
build_folder=$(dirname $entry_file)
package_name=$(jq -r '.name' $PACKAGE_PATH/package.json)

# Run build using turbo
npx turbo run build:static --filter $package_name

# Copy build folder to deploy path
mkdir -p "$DEPLOY_PATH/$TARGET_FOLDER"
cp -r "$PACKAGE_PATH/$build_folder/." "$DEPLOY_PATH/$TARGET_FOLDER"

# Generate appProps.json if APP_PROPS_BASE64 is non-empty
if [ -n "$APP_PROPS_BASE64" ]; then
  echo "$APP_PROPS_BASE64" | base64 -d > "$DEPLOY_PATH/$TARGET_FOLDER/appProps.json"
fi