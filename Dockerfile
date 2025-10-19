# Multi-stage build for Vite React app (uses Bun for install/build)
FROM oven/bun:1 AS build
WORKDIR /app

# Copy package files and lockfile first for better caching
COPY silveroak-connect-main/package.json ./package.json
COPY silveroak-connect-main/bun.lockb ./bun.lockb

# Install dependencies
RUN bun install --frozen-lockfile

# Copy the rest of the app
COPY silveroak-connect-main/ .

# Build (Vite)
# If you rely on VITE_* env vars, pass them as --build-arg or via .env files baked into the image.
RUN bun run build

# ---- Runtime ----
FROM nginx:1.27-alpine
WORKDIR /usr/share/nginx/html

# Clean default nginx content
RUN rm -rf ./*

# Copy build output
COPY --from=build /app/dist/ .

# Nginx config for SPA routing (fallback to index.html)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --retries=3 CMD wget -qO- http://127.0.0.1/ >/dev/null 2>&1 || exit 1
