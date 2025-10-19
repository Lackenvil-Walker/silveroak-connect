# SilverOak Connect — Dockerized (Vite React + Nginx)

## Build & Run locally
```bash
docker compose up -d --build
# then open http://localhost:8080
```

## Deploy via Portainer (Git-based)
- Put this folder **alongside** the `silveroak-connect-main/` source in your GitHub repo, like:
```
repo/
├─ docker-compose.yml
├─ Dockerfile
├─ nginx.conf
└─ silveroak-connect-main/   # unmodified app source (with package.json, etc.)
```
- In Portainer: Stacks → **Add stack** → **Repository**
  - Repository URL: your GitHub repo URL
  - Compose path: `docker-compose.yml`
  - (If private) set repo credentials
  - Deploy the stack
- Port: `8080` on host → `80` in container

## Build-time environment
Vite only exposes variables prefixed with `VITE_`. If you rely on them, add build args in `docker-compose.yml` under `build.args` or keep a `.env.production` in the source. **Do not** commit secrets.

