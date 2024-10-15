# SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
# SPDX-License-Identifier: Apache-2.0

FROM node:20-alpine as build

LABEL org.opencontainers.image.source=https://github.com/cloudoperators/juno/tree/main/apps/supernova
LABEL org.opencontainers.image.description="This image contains a standalone runnable version of the Supernova alternative Alertmanager UI. For configuration options see the README here: https://github.com/cloudoperators/juno/tree/main/apps/supernova/docker"
LABEL org.opencontainers.image.licenses=Apache-2.0

# we need jq to read and manipulate package.json and upgrade the system
RUN apk add --no-cache jq \
  && apk upgrade --no-cache --no-progress \
  && apk del --no-cache --no-progress apk-tools alpine-keys

# create a directory where we can copy the source code
RUN mkdir -p /tmp/src /app
# copy the repository code to the container
ADD . /tmp/src
# app specific environment variables
ENV PACKAGE_PATH="apps/supernova"

# install dependencies but from root directory of the project
# build the project but from root directory of the project 
# copy the build output to /app
# copy favicon.ico to /app
RUN \
  cd /tmp/src && \
  entry_file=$(jq -r '.module // .main' $PACKAGE_PATH/package.json) && \
  echo $entry_file > /app/entry_file && \
  dir=$(dirname $entry_file) && \
  package_name=$(jq -r '.name' $PACKAGE_PATH/package.json) && \
  echo "Entry file: $entry_file" && \
  echo "Directory: $dir" && \
  echo "Package name: $package_name" && \
  npm install && \
  npx turbo run build --filter $package_name && \
  cp -r /tmp/src/$PACKAGE_PATH/$dir /app/ && \
  cp $PACKAGE_PATH/public/favicon.ico /app/

# create index.html  
RUN \
  entry_file=$(cat /app/entry_file) && \
  entry_file_escaped=$(echo "$entry_file" | sed 's/\//\\\//g') && \
  cp /tmp/src/$PACKAGE_PATH/docker/index.html /app/index.html && \
  sed -i "s/{{entry_file}}/$entry_file_escaped/g" /app/index.html  

# create appProps.js
RUN cat <<EOF > /app/appProps.json
{
  "endpoint": "",
  "theme": "theme-dark",
  "embedded": false,
  "silenceExcludedLabels": "",
  "silenceTemplates": ""
}
EOF

# clean up
RUN rm /app/entry_file

FROM nginx:alpine

RUN apk add --no-cache jq \
  && apk upgrade --no-cache --no-progress \
  && apk del --no-cache --no-progress apk-tools alpine-keys

COPY --from=build /app /usr/share/nginx/html

ENV THEME=""
ENV ENDPOINT="" 
ENV FILTER_LABELS="" 
ENV SILENCE_EXCLUDED_LABELS=""
ENV SILENCE_TEMPLATES=""
ENV PREDEFINED_FILTERS=""

# Create Entrypoint which creates /app/appProps.js from ENVs
# Environment variables are known at runtime, so we can use them to create a file that will be used by the app
RUN cat <<EOF > /supernova_entrypoint.sh
#!/bin/sh
# SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
# SPDX-License-Identifier: Apache-2.0

# use jq to overwrite the default values in appProps.json
# if the corresponding environment variables are set

# Define the JSON file path
APP_PROPS_FILE="/usr/share/nginx/html/appProps.json"

# Copy the appProps.json file to the /usr/share/nginx/html directory if it exists
if [ -f /appProps.json ]; then
cp /appProps.json "\${APP_PROPS_FILE}"
fi

# Function to update JSON fields using jq
update_json_field() {
  field="\$1"
  value="\$2"
  if [ -n "\$value" ]; then
    # Ensure jq and temporary file handling are POSIX compliant
    jq --arg v "\$value" ".\${field} = \\\$v" "\$APP_PROPS_FILE" > tmp.json && mv tmp.json "\$APP_PROPS_FILE"
  fi
}

# Update fields if corresponding environment variables are set
update_json_field "endpoint" "\$ENDPOINT"
update_json_field "theme" "\$THEME"
update_json_field "embedded" "\$EMBEDDED"
update_json_field "silenceExcludedLabels" "\$SILENCE_EXCLUDED_LABELS"
update_json_field "silenceTemplates" "\$SILENCE_TEMPLATES"
update_json_field "predefinedFilters" "\$PREDEFINED_FILTERS"
update_json_field "initialFilters" "\$INITIAL_FILTERS"
update_json_field "username" "\$USERNAME"

echo "\$APP_PROPS_FILE has been updated."

cat "\$APP_PROPS_FILE"

exec "\$@"
EOF

RUN chmod +x /supernova_entrypoint.sh

ENTRYPOINT [ "/supernova_entrypoint.sh" ]

# run nginx 
CMD ["nginx", "-g", "daemon off;"]

WORKDIR /usr/share/nginx/html