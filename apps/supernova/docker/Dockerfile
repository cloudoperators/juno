# SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
# SPDX-License-Identifier: Apache-2.0

FROM node:20-alpine as build

LABEL org.opencontainers.image.source=https://github.com/cloudoperators/juno/tree/main/apps/supernova
LABEL org.opencontainers.image.description="This image contains a standalone runnable version of the Supernova alternative Alertmanager UI. For configuration options see the README here: https://github.com/cloudoperators/juno/tree/main/apps/supernova/docker"
LABEL org.opencontainers.image.licenses=Apache-2.0

WORKDIR /app  

ADD . .

RUN npm install && npx turbo build:static --filter @cloudoperators/juno-app-supernova

FROM nginx:alpine
# we need to install jq, cause it is used in the entrypoint.sh
RUN apk add --no-cache jq && apk upgrade --no-cache --no-progress 

WORKDIR /usr/share/nginx/html

ENV THEME=""
ENV ENDPOINT="" 
ENV FILTER_LABELS="" 
ENV SILENCE_EXCLUDED_LABELS=""
ENV SILENCE_TEMPLATES=""
ENV PREDEFINED_FILTERS=""

# default appProps.json
RUN cat <<EOF > /appProps.json
{
  "endpoint": "",
  "theme": "theme-dark",
  "embedded": false,
  "silenceExcludedLabels": "",
  "silenceTemplates": ""
}
EOF

COPY --from=build /app/apps/supernova/build /usr/share/nginx/html/

COPY apps/greenhouse/docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY apps/greenhouse/docker/entrypoint.sh /usr/local/bin/entrypoint.sh 

RUN chmod +x /usr/local/bin/entrypoint.sh

ENTRYPOINT [ "/usr/local/bin/entrypoint.sh" ]

# Define the default command to run (could be overridden)
CMD ["nginx", "-g", "daemon off;"]
