# SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
# SPDX-License-Identifier: Apache-2.0

FROM node:22-alpine AS build

LABEL repository="https://github.com/cloudoperators/juno/tree/main/apps/greenhouse/docker/Dockerfile" 

RUN apk add --no-cache git jq \
  && apk upgrade --no-cache --no-progress \
  && apk del --no-cache --no-progress apk-tools alpine-keys


WORKDIR /juno 

# copy all greenhouse apps to /tmp/greenhouse
ADD . .
RUN npm i -g pnpm

RUN pnpm install && pnpx turbo build:static --filter @cloudoperators/juno-app-greenhouse

FROM nginx:alpine

RUN apk add --no-cache jq \
  && apk upgrade --no-cache --no-progress \
  && apk del --no-cache --no-progress apk-tools alpine-keys

WORKDIR /usr/share/nginx/html

ENV CURRENT_HOST=""
ENV OIDC_ISSUER_URL=""
ENV OIDC_CLIENT_ID=""
ENV K8S_API_ENDPOINT=""

# default appProps.json
RUN cat <<EOF > /appProps.json
{
  "currentHost": "origin",
  "apiEndpoint": "https://api.endpoint.com",
  "authIssuerUrl": "https://auth.endpoint.com",
  "authClientId": "clientID"
}
EOF

COPY --from=build /juno/apps/greenhouse/build /usr/share/nginx/html/

COPY apps/greenhouse/docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY apps/greenhouse/docker/entrypoint.sh /usr/local/bin/entrypoint.sh 

RUN chmod +x /usr/local/bin/entrypoint.sh

ENTRYPOINT [ "/usr/local/bin/entrypoint.sh" ]

# Define the default command to run (could be overridden)
CMD ["nginx", "-g", "daemon off;"]
