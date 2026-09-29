# Nginx

Runs the Nginx Alpine image as `nginx-gateway`, publishes host port `8888` to container port `80`, and mounts `nginx.conf` read-only.

## Prerequisites

The stack joins the external `postgres_shared_network`. Start PostgreSQL first so that network exists.

## Run

```sh
docker compose config
docker compose up -d
docker compose logs -f nginx
```

The configuration file must exist at `extra/nginx/nginx.conf` and must contain valid Nginx configuration. The service is reachable on `http://localhost:8888` from the host.
