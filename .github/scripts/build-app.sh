#!/bin/bash
set -e

# collect the necessary information
entry_file=$(jq -r '.module // .main' $PACKAGE_PATH/package.json)
build_folder=$(dirname $entry_file)
package_name=$(jq -r '.name' $PACKAGE_PATH/package.json)

# Run build using turbo
npx turbo run build --filter $package_name

# Copy the necessary files
mkdir -p "$DEPLOY_PATH/$TARGET_FOLDER"
cp -r "$PACKAGE_PATH/$build_folder" "$DEPLOY_PATH/$TARGET_FOLDER/$build_folder"
cp "$PACKAGE_PATH/public/favicon.ico" "$DEPLOY_PATH/$TARGET_FOLDER/"

# Generate index.html and appProps.json
cp "$PACKAGE_PATH/docker/index.html" "$DEPLOY_PATH/$TARGET_FOLDER/index.html"
entry_file_escaped=$(echo "$entry_file" | sed 's/\//\\\//g')
sed -i "s/{{entry_file}}/$entry_file_escaped/g" "$DEPLOY_PATH/$TARGET_FOLDER/index.html"
echo "$APP_PROPS_BASE64" | base64 -d > "$DEPLOY_PATH/$TARGET_FOLDER/appProps.json"
