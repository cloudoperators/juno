#!/bin/bash

# NOTE: this script is only to build the asset-server image localy
#       it simulates the pipeline environment and downloads and prepares the inputs for the
#       asset-server image build
# usage example: ./ci/scripts/build_asset_server_lokal.sh SKIP_DOWNLOADS* SKIP_BASE_IMAGE_BUILD*
#                ./ci/scripts/build_asset_server_lokal.sh true true

# exit on error
set -e

cd /workspace/juno/

BUILD_ROOT="./assets_server_build"
JUNO_ASSETS="$BUILD_ROOT/juno-assets"
JUNO_3RD_PARTY="$BUILD_ROOT/juno-3rd-party"
DIST_PATH="$(pwd)/$BUILD_ROOT/dist"

mkdir -p "$DIST_PATH"
mkdir -p "$JUNO_ASSETS"
mkdir -p "$JUNO_3RD_PARTY"

if [ ! -f "CODEOWNERS" ]; then
  echo "this script must run from the root of the juno repository"
  exit 1
fi

SKIP_DOWNLOADS=$1
SKIP_BASE_IMAGE_BUILD=$2

if [[ "$SKIP_BASE_IMAGE_BUILD" != "true" ]]; then
  echo "Build Base Image from local juno sources"
  # we need to build the base image localy to have the latest sources in the base image, this images is used for the assets server build
  docker build -t keppel.eu-de-1.cloud.sap/ccloud/juno-v3-base:latest -f ci/Dockerfile.base .
fi

if [[ "$SKIP_DOWNLOADS" != "true" ]]; then

  if [ -f ~/.current_os_context ]; then
    echo "Workspaces and openstack context found, will use it 🙂"
    source ~/.current_os_context
  fi

  if [[ -z "$OS_STORAGE_URL" ]]; then
    echo "ERROR: no OS_STORAGE_URL found, please logon to Swift first"
    echo "you need to logon to"
    echo "region: eu-de-1"
    echo "domain: ccadmin"
    echo "project master"
    echo ""
    echo "in workspaces use 'osl --region eu-de-1 --domain ccadmin --project master'"
    exit 1
  fi

  if [[ "$OS_REGION_NAME" != "eu-de-1" ]]; then
    echo "ERROR: Please logon to region eu-de-1"
    echo ""
    echo "in workspaces use 'osl  --region eu-de-1 --domain ccadmin --project master'"
    exit 1
  fi

  if [[ "$OS_PROJECT_DOMAIN_NAME" != "ccadmin" ]]; then
    echo "ERROR: Please logon to donain ccadmin"
    echo ""
    echo "in workspaces use 'osl --region eu-de-1 --domain ccadmin --project master'"
    exit 1
  fi

  if [[ "$OS_PROJECT_NAME" != "master" ]]; then
    echo "ERROR: Please logon to project master"
    echo ""
    echo "in workspaces use 'osl --region eu-de-1 --domain ccadmin --project master'"
    exit 1
  fi

  echo "Task download-assets"

  # 1) download our own assets
  # check for new apps and libs the pipeline definition
  ./ci/scripts/asset_storage.sh --container juno-assets --asset-name auth --asset-path apps/auth --action download --root-path $JUNO_ASSETS
  ./ci/scripts/asset_storage.sh --container juno-assets --asset-name assets-overview --asset-path apps/assets-overview --action download --root-path $JUNO_ASSETS
  ./ci/scripts/asset_storage.sh --container juno-assets --asset-name user-activity --asset-path apps/user-activity --action download --root-path $JUNO_ASSETS
  ./ci/scripts/asset_storage.sh --container juno-assets --asset-name volta --asset-path apps/volta --action download --root-path $JUNO_ASSETS
  ./ci/scripts/asset_storage.sh --container juno-assets --asset-name whois --asset-path apps/whois --action download --root-path $JUNO_ASSETS
  ./ci/scripts/asset_storage.sh --container juno-assets --asset-name widget-loader --asset-path apps/widget-loader --action download --root-path $JUNO_ASSETS
  ./ci/scripts/asset_storage.sh --container juno-assets --asset-name dashboard --asset-path apps/dashboard --action download --root-path $JUNO_ASSETS
  ./ci/scripts/asset_storage.sh --container juno-assets --asset-name supernova --asset-path apps/supernova --action download --root-path $JUNO_ASSETS
  ./ci/scripts/asset_storage.sh --container juno-assets --asset-name exampleapp --asset-path apps/exampleapp --action download --root-path $JUNO_ASSETS
  ./ci/scripts/asset_storage.sh --container juno-assets --asset-name greenhouse --asset-path apps/greenhouse --action download --root-path $JUNO_ASSETS
  ./ci/scripts/asset_storage.sh --container juno-assets --asset-name heureka --asset-path apps/heureka --action download --root-path $JUNO_ASSETS
  ./ci/scripts/asset_storage.sh --container juno-assets --asset-name juno-ui-components --asset-path libs/juno-ui-components --action download --root-path $JUNO_ASSETS
  ./ci/scripts/asset_storage.sh --container juno-assets --asset-name messages-provider --asset-path libs/messages-provider --action download --root-path $JUNO_ASSETS
  ./ci/scripts/asset_storage.sh --container juno-assets --asset-name oauth --asset-path libs/oauth --action download --root-path $JUNO_ASSETS
  ./ci/scripts/asset_storage.sh --container juno-assets --asset-name policy-engine --asset-path libs/policy-engine --action download --root-path $JUNO_ASSETS
  ./ci/scripts/asset_storage.sh --container juno-assets --asset-name communicator --asset-path libs/communicator --action download --root-path $JUNO_ASSETS
  ./ci/scripts/asset_storage.sh --container juno-assets --asset-name url-state-provider --asset-path libs/url-state-provider --action download --root-path $JUNO_ASSETS
  ./ci/scripts/asset_storage.sh --container juno-assets --asset-name url-state-router --asset-path libs/url-state-router --action download --root-path $JUNO_ASSETS
  ./ci/scripts/asset_storage.sh --container juno-assets --asset-name utils --asset-path libs/utils --action download --root-path $JUNO_ASSETS

  # 2) download and check for name collission in juno-3rd-party assets
  # download 3rd party assets
  ./ci/scripts/asset_storage.sh --container juno-3rd-party --asset-type app --action download --root-path $JUNO_3RD_PARTY
  ./ci/scripts/check_3rd_party_name_collisions.sh --juno-assets-path $JUNO_ASSETS --third-party-assets-path $JUNO_3RD_PARTY --asset-type app

fi

echo "Task combine-builds"
rm -rf $DIST_PATH/*
./ci/scripts/compose_assets.sh --error-on-exit 1 --asset-type app --source-path $BUILD_ROOT --dist-path $DIST_PATH --kind juno-assets
./ci/scripts/compose_assets.sh --error-on-exit 0 --asset-type app --source-path $BUILD_ROOT --dist-path $DIST_PATH --kind juno-3rd-party

echo "Task build-assets-server"
# to simulate the assets server build in the pipeline we need to cd into dist as input for the build and cp the docker file into that folder
cp ci/Dockerfile.assets.server $DIST_PATH
cd $DIST_PATH
# Note: we use the ci scripts from /juno/ci/ that are comming from the base image
#       we also use the nodes_modules from the base image
docker build -t asset-server:latest -f Dockerfile.assets.server . &&
  echo "" &&
  echo "build done 🙂 you can now start the image with 'run --rm asset-server:latest'" &&
  echo "or if you want to look into the image use 'docker run --rm -it --entrypoint /bin/sh -w /usr/share/nginx/html asset-server:latest'"
