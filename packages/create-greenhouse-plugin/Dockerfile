FROM node:22-alpine AS build

ARG PLUGIN_VERSION=latest

RUN npm install -g corepack && corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /build

RUN npx --yes @cloudoperators/create-greenhouse-plugin@${PLUGIN_VERSION} ./plugin --name example-plugin

WORKDIR /build/plugin

RUN pnpm install && pnpm build:remote

RUN npm show @cloudoperators/create-greenhouse-plugin@${PLUGIN_VERSION} version > /resolved-plugin-version


FROM nginx:alpine

RUN apk add --no-cache ca-certificates \
  && apk upgrade --no-cache --no-progress \
  && apk del --no-cache --no-progress apk-tools alpine-keys

COPY --from=build /resolved-plugin-version /resolved-plugin-version
RUN cp /resolved-plugin-version /usr/share/nginx/html/version

COPY --from=build /build/plugin/build/index.js /usr/share/nginx/html/index.js

COPY <<'EOF' /etc/nginx/conf.d/default.conf
server {
    listen 80;
    server_name _;

    root /usr/share/nginx/html;

    location /index.js {
        add_header Access-Control-Allow-Origin *;
        add_header Cache-Control "no-cache, must-revalidate";
        default_type application/javascript;
    }

    location /healthz {
        return 200 "ok";
        add_header Content-Type text/plain;
    }

    location /version {
        default_type text/plain;
    }
}
EOF

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
