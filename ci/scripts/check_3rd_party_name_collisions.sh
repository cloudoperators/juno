#!/bin/bash
# exit on error
set -e

if [ ! -f "CODEOWNERS" ]; then
  echo "This script must run from root of juno repo"
  exit 1
fi

function help() {
  echo "Usage: check_for_name_collisions.sh --juno-assets-path||-j --third-party-assets-path||-t --asset-type||-at --help||-h
  --juno-assets-path path to juno assets  
  --third-party-assets-path path to third-party assets
  --asset-type = app || lib"
  exit
}

NC='\033[0m' # No Color
RED='\033[1;31m'

while [[ $# -gt 0 ]]; do
  case $1 in
  --juno-assets-path | -ja)
    JUNO_ASSETS_PATH="$2"
    shift # past argument
    shift # past value
    ;;
  --third-party-assets-path | -tp)
    THIRD_PARTY_ASSETS_PATH="$2"
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
  --help)
    help
    ;;
  *)
    echo "$1 unkown option!"
    exit 1
    ;;
  esac
done

if [[ -z "$JUNO_ASSETS_PATH" ]]; then
  echo "Error: JUNO_ASSETS_PATH not given 😐"
  exit 1
fi

if [[ -z "$THIRD_PARTY_ASSETS_PATH" ]]; then
  echo "Error:: THIRD_PARTY_ASSETS_PATH not given 😐"
  exit 1
fi

if [[ -z "$ASSET_TYPE" ]]; then
  echo "Error: ASSET_TYPE not given 😐"
  exit 1
fi

if [ ! -d "$JUNO_ASSETS_PATH/$ASSET_TYPE" ]; then
  echo "Error: juno-assets '$JUNO_ASSETS_PATH/$ASSET_TYPE' path not found 😐"
  exit 1
fi
# juno-assets/apps/APPNAME/package.json
asset_names_arr=($(jq -r '.name' $JUNO_ASSETS_PATH/$ASSET_TYPE/**/package.json))
# make arr unique
juno_assets=($(echo "${asset_names_arr[@]}" | tr ' ' '\n' | sort -u | tr '\n' ' '))

# get names of all 3rd-party assets
if [ -d "$THIRD_PARTY_ASSETS_PATH/$ASSET_TYPE" ]; then
  # Use find command to locate all package.json files recursively, excluding node_modules directory
  asset_names_arr=($(find "$THIRD_PARTY_ASSETS_PATH/$ASSET_TYPE" -type f -name "package.json" ! -path "*/node_modules/*" -exec jq -r '.name' {} +))

  # Remove duplicates and store unique names in third_3rd_party_assets array
  third_3rd_party_assets=($(echo "${asset_names_arr[@]}" | tr ' ' '\n' | sort -u | tr '\n' ' '))
fi

echo ""
echo "### Found juno-asset $ASSET_TYPE names ###"
printf '%s\n' "${juno_assets[@]}"
echo ""
echo "### Found juno-3rd-party $ASSET_TYPE names ###"
printf '%s\n' "${third_3rd_party_assets[@]}"

ERROR_FOUND="false"
for item1 in "${juno_assets[@]}"; do
  for item2 in "${third_3rd_party_assets[@]}"; do
    if [[ "$item1" = "$item2" ]]; then
      ERROR="\n$(date)\nError:    name collision found, 3rd-party-asset '$item2' collides with juno-asset '$item1' 😔\nSolution: please rename '$item2'"
      # 1) write to error log file
      echo -e "$ERROR" >"$THIRD_PARTY_ASSETS_PATH/$ASSET_TYPE/$item2/error_log"
      # 2) print error to stdout
      echo -e "${RED}${ERROR}${NC} 👎"
      # we only use exit here because this should not block the pipeline
      # AP: do not exit here, give it a chance to include further 3rd-party assets.
      # exit
      ERROR_FOUND="true"
    fi
  done
done

if [[ "$ERROR_FOUND" == "false" ]]; then
  echo "No collision found, all asset names for asset-type $ASSET_TYPE are fine 👍"
else
  echo "Name collisions found, please check the log which asstes are involved!"
fi
