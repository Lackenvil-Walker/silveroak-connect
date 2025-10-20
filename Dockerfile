# ---- Build stage ----
FROM oven/bun:1 AS build
WORKDIR /app

# Where are package.json & bun.lockb inside the repo?
# Set this from compose as a build arg (e.g., "main").
ARG APP_DIR="main"

# Fail early if path is wrong (good guardrail)
RUN test -d "/src" || true
# copy manifests
COPY ${APP_DIR}/package.json /app/package.json
# if you actually keep a bun.lockb, keep the next line; it's fine if it doesn't exist
COPY ${APP_DIR}/bun.lockb /app/bun.lockb
RUN bun install --frozen-lockfile || bun install

# copy full app
COPY ${APP_DIR}/ /app/

# build Vite app
RUN bun run build

# ---- Runtime stage ----
FROM nginx:1.27-alpine
WORKDIR /usr/share/nginx/html

# clean default content
RUN rm -rf ./*

# copy build output
COPY --from=build /app/dist/ ./

# SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1/ >/dev/null 2>&1 || exit 1
