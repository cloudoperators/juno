#!/bin/bash

# exit on error
set -e

# if [ ! -f "CODEOWNERS" ]; then
#   echo "This script must run from root of juno repo"
#   exit 1
# fi

function help() {
  echo "Usage: build_assets.sh --asset-path||-ap --asset-name||-sn --asset-type||-at --output-path||-op --last-build-path||-lbp
    Example: ./ci/scripts/asset_build.sh --asset-name auth --asset-path ./apps/auth/ --output-path /tmp/juno-build
    --last-build-path is optional and only used when asset-type = lib is used to find out there was a new version found
    --asset-path is optional when --asset-type is given
    --asset-type -> app || lib"
  exit
}

if [[ "$1" == "--help" ]]; then
  help
fi

SCRIPTS_FOLDER=$(dirname $0)

OUTPUT_PATH="./build-result"
while [[ $# -gt 0 ]]; do
  case $1 in
  --asset-name | -an)
    ASSET_NAME="$2"
    shift # past argument
    shift # past value
    ;;
  --asset-path | -ap)
    ASSET_PATH="$2"
    shift # past argument
    shift # past value
    ;;
  --asset-type | -at)
    ASSET_TYPE="$2"
    if [[ "$ASSET_TYPE" != *"s" ]]; then
      ASSET_TYPE="${ASSET_TYPE}s"
    fi
    shift # past argument
    shift # past value
    ;;
  --last-build-path | -lbp)
    LAST_BUILD_PATH="$2"
    shift # past argument
    shift # past value
    ;;
  --output-path | -op)
    OUTPUT_PATH="$2"
    shift # past argument
    shift # past value
    ;;
  --help)
    help
    ;;
  *)
    echo "$1 unkown option!"
    exit 1
    ;;
  esac
done

if [[ -z "$ASSET_NAME" ]]; then
  echo "Error: no ASSET_NAME path found 😐"
  exit 1
fi

if [[ -z "$ASSET_TYPE" ]]; then
  echo "Error: no ASSET_TYPE path found 😐"
  exit 1
fi

if [[ -z "$ASSET_PATH" ]]; then
  if [[ -n "$ASSET_TYPE" ]]; then
    ASSET_PATH="$ASSET_TYPE/$ASSET_NAME"
  else
    echo "Error: no ASSET_PATH path found 😐"
    exit 1
  fi
fi

# check basic paths exist
if [ ! -d "$ASSET_PATH" ]; then
  echo "Error: directory ASSET_PATH $ASSET_PATH does not exist 😐"
  exit 1
fi
if [ ! -d "$OUTPUT_PATH" ]; then
  echo "Error: directory OUTPUT_PATH $OUTPUT_PATH does not exist 😐"
  exit 1
fi

echo "=================================="
echo "### build asset $ASSET_NAME ###"
echo "----------------------------------"
echo "use ASSET_TYPE  = $ASSET_TYPE"
echo "use ASSET_PATH  = $ASSET_PATH"
echo "use OUTPUT_PATH = $OUTPUT_PATH"

mkdir -p "$OUTPUT_PATH/$ASSET_PATH"

# check for new versions from last build
if [[ "$ASSET_TYPE" == "libs" ]] && [[ -n "$LAST_BUILD_PATH" ]]; then
  # Version handling, this is only relevant for lib
  echo "use LAST_BUILD_PATH = $LAST_BUILD_PATH"
  echo "----------------------------------"
  echo "Check Version..."

  if [ ! -d "$LAST_BUILD_PATH" ]; then
    echo "⚠️ Warning: No old build was found! It seems this lib is new and was never build before..."
  else
    if [ ! -f "$ASSET_PATH/package.json" ]; then
      echo "Error: $ASSET_PATH/package.json doesn't exist"
    fi
    CURRENT_VERSION=$(jq -r .version "$ASSET_PATH/package.json")
    echo "Current Version: $CURRENT_VERSION"
    if [ -f "$LAST_BUILD_PATH/libs/$ASSET_NAME/package.json" ]; then
      LAST_VERSION=$(jq -r .version "$LAST_BUILD_PATH/$ASSET_TYPE/$ASSET_NAME/package.json")
    else
      echo "⚠️ Warning: no package.json in '$LAST_BUILD_PATH/$ASSET_TYPE/$ASSET_NAME/' found"
      LAST_VERSION="not found"
    fi

    echo "Last build version: $LAST_VERSION"
    if [[ "$CURRENT_VERSION" != "$LAST_VERSION" ]]; then
      echo "New Version $CURRENT_VERSION! This will trigger a new build 🙂"
    else
      echo "No new version found. Nothing to build..."
      exit
    fi
  fi
fi
echo "----------------------------------"

echo "generate COMMUNICATOR.md in $ASSET_PATH"
node "$SCRIPTS_FOLDER/generate_communication_readme.mjs" --path="$ASSET_PATH"

# install and build libs
# npm run build-libs

# TEST AND BUILD ASSET
# IGNORE_EXTERNALS=true will results in a bundle which includes all dependencies.
# This is the case if the jspm cdn is unreachable!!!
echo "----------------------------------"
echo "run Tests for ...."
# since we removed all local dependencies (*) we don't need to use --workspace
# instead we can use the local path
ASSET_NAME=$(jq -r .name "$ASSET_PATH/package.json")
CURRENT_DIR=$(pwd)
cd "$ASSET_PATH"
npm run test --if-present
NODE_ENV=production IGNORE_EXTERNALS=false npm run build --if-present
cd "$CURRENT_DIR"

# get BUILD_DIR from package.json
# strip `leading` slash from BUILD_DIR and split by / and use first part
# Example: package.json#module = build/esm/index.js
# echo build/esm/index.js | sed -e 's/^\///' | cut -d/ -f1
# Result: build
echo "----------------------------------"
if [[ -z "$BUILD_DIR" ]]; then
  echo "Look for module in package.json"
  BUILD_DIR=$(jq -r .module "$ASSET_PATH/package.json")
fi

if [[ "$BUILD_DIR" == "null" ]]; then
  echo "No module found, look for main in package.json"
  BUILD_DIR=$(jq -r .main "$ASSET_PATH/package.json")
fi

if [[ "$BUILD_DIR" == "null" ]]; then
  echo "No main or module in package.json found, use default build for BUILD_DIR"
  BUILD_DIR="build"
else
  # $BUILD_DIR = build/index.js -> BUILD_DIR = build
  echo "Module or main found, extract BUILD_DIR"
  BUILD_DIR="$(echo "$BUILD_DIR" | sed -e 's/^\///' | cut -d/ -f1)"
fi

if [[ -z "$BUILD_DIR" ]]; then
  echo "Error: no BUILD_DIR found 😐"
  exit 1
fi

echo "----------------------------------"
echo "use BUILD_DIR = $BUILD_DIR"

echo "copy assets data from $ASSET_PATH/$BUILD_DIR to $OUTPUT_PATH/$ASSET_PATH/"
cp -r "$ASSET_PATH/$BUILD_DIR" "$OUTPUT_PATH/$ASSET_PATH/"
cp "$ASSET_PATH/package.json" "$OUTPUT_PATH/$ASSET_PATH/package.json"
if [ -f "$ASSET_PATH/COMMUNICATOR.md" ]; then
  cp -n "$ASSET_PATH/COMMUNICATOR.md" "$OUTPUT_PATH/$ASSET_PATH/COMMUNICATOR.md"
fi
cp "$ASSET_PATH/README.md" "$OUTPUT_PATH/$ASSET_PATH/README.md"

echo "create $OUTPUT_PATH/$ASSET_PATH/package.tgz"
cd "$OUTPUT_PATH/$ASSET_PATH"
# todo use npm-pack instead https://docs.npmjs.com/cli/v6/commands/npm-pack
tar --exclude="package.tgz" -czf package.tgz .

echo "----------------------------------"
echo "Build for $ASSET_NAME done 🙂"
echo "----------------------------------"
echo "Results:"
ls -la
echo "=================================="
