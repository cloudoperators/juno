#!/bin/bash
# https://www.xmodulo.com/catch-handle-errors-bash.html

function help() {
  echo "Usage: run_with_error_handling.sh --command||-c --error-command||-ec --help||-h"
  exit
}

while [[ $# -gt 0 ]]; do
  case $1 in
  --command | -c)
    COMMAND="$2"
    shift # past argument
    shift # past value
    ;;
  --error-command | -ec)
    ERROR_COMMAND="$2"
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

if [[ -z "$COMMAND" ]]; then
  echo "Error: no COMMAND given 🤨"
  exit 1
fi

if [[ -z "$ERROR_COMMAND" ]]; then
  ERROR_COMMAND="echo 'Bad things happens, but I do not know what to do...'"
fi

function try() {
  [[ $- = *e* ]]
  SAVED_OPT_E=$?
  set +e
}

function throw() {
  exit $1
}

function catch() {
  export exception_code=$?
  (($SAVED_OPT_E)) && set +e
  return $exception_code
}

# Define custom exception types
export ERR_BAD=100
export ERR_WORSE=101
export ERR_CRITICAL=102

try
(
  eval $COMMAND || throw $ERR_BAD
)
catch || {
  case $exception_code in
  "$ERR_BAD")
    eval $ERROR_COMMAND
    ;;
  *)
    echo "Unknown error: $exception_code"
    exit 1
    ;;
  esac
}

#    ./ci/scripts/asset_storage.sh --container juno-3rd-party --asset-type apps --action upload --root-path ../temp/juno-3rd-party
