#!/bin/sh
# SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
# SPDX-License-Identifier: Apache-2.0

set -e
# Define the JSON file path
APP_PROPS_FILE="/usr/share/nginx/html/appProps.json"

# Copy the appProps.json file to the /usr/share/nginx/html directory if it exists
if [ -f /appProps.json ]; then
  cp /appProps.json "${APP_PROPS_FILE}"
fi

# Function to update JSON fields using jq
update_json_field() {
  field="$1"
  value="$2"
  if [ -n "$value" ]; then
    # Ensure jq and temporary file handling are POSIX compliant
    jq --arg v "$value" ".${field} = \$v" "$APP_PROPS_FILE" >tmp.json && mv tmp.json "$APP_PROPS_FILE"
  fi
}

# Update fields if corresponding environment variables are set
update_json_field "endpoint" "$ENDPOINT"
update_json_field "theme" "$THEME"
update_json_field "filterLabels" "$FILTER_LABELS"
update_json_field "silenceExcludedLabels" "$SILENCE_EXCLUDED_LABELS"
update_json_field "silenceTemplates" "$SILENCE_TEMPLATES"
update_json_field "predefinedFilters" "$PREDEFINED_FILTERS"

echo "$APP_PROPS_FILE has been updated."

cat "$APP_PROPS_FILE"

/docker-entrypoint.sh

exec "$@"
