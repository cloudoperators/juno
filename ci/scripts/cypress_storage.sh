#!/bin/bash

# exit on error
set -e

if [ ! -f "CODEOWNERS" ]; then
  echo "This script must run from root of juno repo"
  exit 1
fi

function help() {
  echo "Usage: swift_storage.sh --container||-c --root-path||-rp --project||-p version||-v --name||-n
  example: ./ci/scripts/asset_storage.sh --asset-name assets-overview --asset-type apps --action upload --root-path ../build_result
  --container    -> where to upload or download assets
  --root-path    -> absolute path to the root where the cypress folder is located
  --project      -> project name (this is used as root folder in the swift container)
  --name         -> name of the cypress test run
  --version      -> optional, if set it is used as a subfolder in the swift container  
  --cypress-path -> optional, default is cypress/

  possible ENV Vars:
  * OS_USER_DOMAIN_NAME: per default this is not set 
  * OS_PROJECT_DOMAIN_NAME: default is ccadmin
  * OS_PROJECT_NAME: default is master
  * OS_PROJECT_ID: per default this is not set 
  * OS_AUTH_URL: default is https://identity-3.qa-de-1.cloud.sap/v3
  * OS_USERNAME: this is not optional
  * OS_PASSWORD: this is not optional"
  exit
}

if [[ "$1" == "--help" ]]; then
  help
fi

if [[ -z "$OS_USERNAME" ]]; then
  echo "no OS_USERNAME given"
  exit 1
fi

while [[ $# -gt 0 ]]; do
  case $1 in
  --root-path | -rp)
    ROOT_PATH="$2"
    shift # past argument
    shift # past value
    ;;
  --cypress-path | -cp)
    CYPRESS_PATH="$2"
    shift # past argument
    shift # past value
    ;;
  --version | -v)
    VERSION="$2"
    shift # past argument
    shift # past value
    ;;
  --name | -n)
    NAME="$2"
    shift # past argument
    shift # past value
    ;;
  --container | -c)
    CONTAINER="$2"
    shift # past argument
    shift # past value
    ;;
  --project | -p)
    PROJECT="$2"
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

if [[ -z "$CYPRESS_PATH" ]]; then
  CYPRESS_PATH="cypress/"
fi

if [[ -z "$CONTAINER" ]]; then
  echo "Error: no CONTAINER given 😐"
  exit 1
fi

if [[ -z "$PROJECT" ]]; then
  echo "Error: no PROJECT given 😐"
  exit 1
fi

if [ ! -d "$ROOT_PATH" ]; then
  echo "Error: directory ROOT_PATH $ROOT_PATH does not exist 😐"
  exit 1
fi

if [[ -z "$OS_AUTH_URL" ]]; then
  OS_AUTH_URL="https://identity-3.qa-de-1.cloud.sap/v3"
fi

if [[ -z "$OS_PROJECT_DOMAIN_NAME" ]]; then
  OS_PROJECT_DOMAIN_NAME="ccadmin"
fi

if [[ -z "$OS_PROJECT_NAME" ]]; then
  OS_PROJECT_NAME="master"
fi

export OS_AUTH_VERSION=3
echo "OS_AUTH_URL: $OS_AUTH_URL"
export OS_AUTH_URL=$OS_AUTH_URL

if [[ -n "$OS_PROJECT_DOMAIN_NAME" ]]; then
  echo "OS_PROJECT_DOMAIN_NAME: $OS_PROJECT_DOMAIN_NAME"
  export OS_PROJECT_DOMAIN_NAME=$OS_PROJECT_DOMAIN_NAME
fi

echo "OS_USER_DOMAIN_NAME: $OS_USER_DOMAIN_NAME"
export OS_USER_DOMAIN_NAME=$OS_USER_DOMAIN_NAME

echo "OS_PROJECT_NAME: $OS_PROJECT_NAME"
export OS_PROJECT_NAME=$OS_PROJECT_NAME

if [[ -n "$OS_PROJECT_ID" ]]; then
  export OS_PROJECT_ID=$OS_PROJECT_ID
  echo "OS_PROJECT_ID: $OS_PROJECT_ID"
fi

echo "OS_PROJECT_ID: $OS_PROJECT_ID"
echo "OS_USERNAME: $OS_USERNAME"
export OS_USERNAME=$OS_USERNAME
export OS_PASSWORD=$OS_PASSWORD

# auth swift and set OS_STORAGE_URL and OS_AUTH_TOKEN
eval "$(swift auth)"

echo "----------------------------------"
echo "use CONTAINER   = $CONTAINER"
echo "----------------------------------"

# https://docs.openstack.org/ocata/cli-reference/swift.html
function upload() {

  cd "$ROOT_PATH"
  if [ ! -d "$CYPRESS_PATH" ]; then
    echo "Error: directory CYPRESS_PATH $CYPRESS_PATH does not exist 😐"
    exit 1
  fi

  if [ -z "$(ls -A "$CYPRESS_PATH")" ]; then
    echo "The directory $ROOT_PATH/$CYPRESS_PATH is empty, noting upload to swift..."
  else
    # create a new directory with the current date and time to upload the screenshots and videos
    if [[ -n "${VERSION}" ]]; then
      UPLOAD_DIR="$PROJECT/$NAME/$VERSION/"
    else
      UPLOAD_DIR="$PROJECT/$NAME/$(date +%m%d%y-%H%M%S)/"
    fi
    mkdir -p /tmp/$UPLOAD_DIR
    cd "$CYPRESS_PATH"

    if [ -d "screenshots/" ]; then
      # check also if the directory is not empty
      if [ -n "$(ls -A screenshots/)" ]; then
        # prepare the screenshots for upload
        cp -R screenshots/ /tmp/$UPLOAD_DIR
      fi
    fi

    if [ -d "videos/" ]; then
      # check also if the directory is not empty
      if [ -n "$(ls -A videos/)" ]; then
        # prepare the videos for upload
        cp -R videos/ /tmp/$UPLOAD_DIR
      fi
    fi
    cd /tmp/
    echo "Swift upload from $ROOT_PATH to container $CONTAINER and destination $UPLOAD_DIR"
    swift upload --skip-identical --changed "$CONTAINER" $UPLOAD_DIR &&
      echo "----------------------------------" &&
      echo "upload done 🙂"
  fi
}

upload
