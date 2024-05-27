#!/bin/bash
# exit on error
set -e

if [ ! -f "CODEOWNERS" ]; then
  echo "This script must run from root of juno repo"
  exit 1
fi

NC='\033[0m' # No Color
RED='\033[1;31m'
YELLOW='\033[1;33m'

function help() {
  echo "Usage: compose_assets.sh --asset-type||-at --source-path||-rp --kind||-k --no-exit-on-error
  example: ./ci/scripts/compose_assets.sh --asset-type apps --source-path ../workbench --dist-path ../dist
  --asset-type    -> app || lib
  --source-path   -> default is /tmp/build_result (can be realtive and absolute)
  --kind          -> juno-assets || juno-3rd-party (default is juno-assets)
  --dist-path     -> default is /tmp/dist (must be absolute)
  --error-on-exit -> use this that error produces normal exit (possible values 0|1 default is 1)"
  exit
}

while [[ $# -gt 0 ]]; do
  case $1 in
  --asset-type | -at)
    ASSET_TYPE="$2"
    if [[ "$ASSET_TYPE" != *"s" ]]; then
      ASSET_TYPE="${ASSET_TYPE}s"
    fi
    shift # past argument
    shift # past value
    ;;
  --dist-path | -dp)
    DIST_PATH="$2"
    shift # past argument
    shift # past value
    ;;
  --source-path | -sp)
    SOURCE_PATH="$2"
    shift # past argument
    shift # past value
    ;;
  --kind | -k)
    KIND="$2"
    shift # past argument
    shift # past value
    ;;
  --error-on-exit)
    ERROR_ON_EXIT=$2
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

if [[ -z "$KIND" ]]; then
  KIND="juno-assets"
fi

if [[ -z "$ASSET_TYPE" ]]; then
  echo "Error: no ASSET_TYPE given 😐"
  exit 1
fi

if [[ -z "$SOURCE_PATH" ]]; then
  SOURCE_PATH="/tmp/build_result"
fi

if [[ -z "$ERROR_ON_EXIT" ]]; then
  ERROR_ON_EXIT="1"
fi

if [ ! -d "$SOURCE_PATH" ]; then
  echo "Error: directory SOURCE_PATH $SOURCE_PATH does not exist 😐"
  exit 1
fi

if [[ -z "$DIST_PATH" ]]; then
  DIST_PATH="/tmp/dist"
fi

if [ ! -d "$DIST_PATH" ]; then
  echo "Error: directory DIST_PATH $DIST_PATH does not exist 😐"
  exit 1
fi

echo "=================================="
echo "### combine $KIND $ASSET_TYPE ###"
echo "----------------------------------"
SOURCE_PATH="$SOURCE_PATH/$KIND"
echo "use KIND        = $KIND"
echo "use ASSET_TYPE  = $ASSET_TYPE"
echo "use SOURCE_PATH = $SOURCE_PATH"
echo "use DIST_PATH   = $DIST_PATH"
echo "----------------------------------"

if [ ! -d "$SOURCE_PATH/$ASSET_TYPE" ]; then
  echo "Error: the path $SOURCE_PATH/$ASSET_TYPE was not found 🤨"
  exit 1
fi

cd "$SOURCE_PATH/$ASSET_TYPE"

function integrity_check() {

  version=$1
  name=$2
  main=$3
  module=$4

  echo "----------------------------------"
  echo "Run integrity check"
  echo "----------------------------------"

  error_and_exit="false"
  error_log_location="error_log"
  if [ -f "../error_log" ]; then
    error_log_location="../error_log"
  fi

  if [ -f "$error_log_location" ]; then
    ERROR_LOG=$(cat $error_log_location)
    # we exit maybe later
  fi

  {
    echo -e "\n$(date)"

    if [[ -n "$ERROR_LOG" ]]; then
      echo "Error: cannot combine because error_log was found"
      echo -e "$ERROR_LOG"
      error_and_exit="true"
    else

      if [[ "${version}" != "null" ]]; then
        echo "version ✔️"
      else
        echo "Error: version not found in package.json!"
        error_and_exit="true"
      fi

      if [[ "${name}" != "null" ]]; then
        echo "name ✔️"
      else
        echo "Error: name not found in package.json!"
        error_and_exit="true"
      fi

      if [[ "${main}" != "null" ]] || [[ "${module}" != "null" ]]; then
        if [[ "${main}" != "null" ]]; then
          echo "main ✔️"
          if [ -f "${main}" ]; then
            echo "main -> ${main} exist ✔️"
          else
            echo "Error: main -> ${main} does not exist"
            error_and_exit="true"
          fi
        else
          echo "module ✔️"
          if [ -f "${module}" ]; then
            echo "module -> ${module} exist ✔️"
          else
            echo "Error: module -> ${module} does not exist"
            error_and_exit="true"
          fi
        fi
      else
        echo "Error: main or module not found in package.json!"
        error_and_exit="true"
      fi

      if [ -f "README.md" ]; then
        echo "README.md exist ✔️"
      else
        echo "Error: README.md does not exist"
        error_and_exit="true"
      fi

    fi

  } >"build_log"

  if [[ "$error_and_exit" == "true" ]]; then
    mv build_log $error_log_location
    echo -e "${RED}"
    cat "$error_log_location"
    echo -e "${NC}"
    exit "$ERROR_ON_EXIT"
  else
    cat "build_log"
  fi

  echo "----------------------------------"
  # TODO: feedback to upload error or success to swift
}

current_path=$(pwd)
# https://stackoverflow.com/questions/2107945/how-to-loop-over-directories-in-linux
while IFS= read -d $'\0' -r dirname; do
  cd "$current_path/$dirname"
  # cd "$dirname"
  while IFS= read -d $'\0' -r asset_dirname; do
    # check file structure
    if [ -f "package.json" ]; then
      # this is the case for apps/APPNAME/package.json
      # we are in the correct dir and do not need to go deeper
      asset_dirname=$dirname
    else
      # in this case we go one level deeper
      cd "$asset_dirname"
      if [ ! -f "package.json" ]; then
        # apps/APPNAME/SOMEVERSION/package.json
        # TODO: write this to the error log
        echo -e "${RED}Error: unsupported file structure, no package.json was found in $(pwd) 😐${NC}"
        exit "$ERROR_ON_EXIT"
        # TODO: feedback to upload error or success to swift
      fi
    fi

    # add kind to package.json, we need that for later
    cat <<<"$(jq ".kind = \"${KIND}\"" package.json)" >package_new.json
    if [ -f "package_new.json" ]; then
      cp package_new.json package.json && rm package_new.json
    fi

    asset_name=$(cat package.json | jq -r '.name')
    asset_version=$(cat package.json | jq -r '.version')
    asset_main=$(cat package.json | jq -r '.main')
    asset_module=$(cat package.json | jq -r '.module')
    asset_peer_deps=$(cat package.json | jq -r '.peerDependencies')

    echo ""
    echo "Compose $KIND distribution for $ASSET_TYPE -> ${asset_name}@${asset_version}"
    echo "----------------------------------"
    echo "asset: $asset_name"
    echo "dirname: $asset_dirname"
    echo "version: $asset_version"
    echo "main: $asset_main"
    echo "module: $asset_module"
    echo "peer deps: $asset_peer_deps"

    integrity_check "$asset_version" "$asset_name" "$asset_main" "$asset_module"

    cd ..
    destination_path="$DIST_PATH/$ASSET_TYPE"
    mkdir -p "$destination_path"

    asset_dist_path="$destination_path/${asset_name}@${asset_version}"
    if [ -d "$asset_dist_path" ]; then
      error_msg="Warning: the directory $asset_dist_path already exist that means there are dublicated versions in $KIND -> $ASSET_TYPE -> ${asset_name} 😐"
      echo -e "${YELLOW}${error_msg}${NC}"
      echo -e "$error_msg" >>"$current_path/../build_log"
      exit "$ERROR_ON_EXIT"
    fi

    cp -r "$asset_dirname" "$asset_dist_path"
    echo "----------------------------------"
    echo "Combine for $asset_name done 🙂"
    echo "=================================="

  done < <(find ./ -mindepth 1 -maxdepth 1 -type d -print0)
done < <(find ./ -mindepth 1 -maxdepth 1 -type d -print0)
