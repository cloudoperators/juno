# SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
# SPDX-License-Identifier: Apache-2.0

FROM node:22-alpine as build

LABEL org.opencontainers.image.source=https://github.com/cloudoperators/juno/tree/main/apps/template
LABEL org.opencontainers.image.description="This image contains a standalone runnable version of the Juno Template app."
LABEL org.opencontainers.image.licenses=Apache-2.0

WORKDIR /app

ADD . .
RUN npm i -g pnpm

RUN pnpm install && pnpx turbo build --filter @cloudoperators/juno-app-template

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

# Copy built app
COPY --from=build /app/apps/template/build /usr/share/nginx/html/

# Use default nginx config (serves files from /usr/share/nginx/html/)
# No custom config needed - default works fine

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
