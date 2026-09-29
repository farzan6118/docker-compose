# Docker Compose Collection

A collection of local development stacks for databases, queues, identity providers, observability tools, and developer utilities. Each directory is an independent Compose project; there is no root-level stack.

## Requirements

- Docker Engine or Docker Desktop with the Compose v2 plugin (`docker compose`)
- For stacks connected to a shared database or application network, start the provider stack first and confirm its external network exists

## Run a stack

Run these commands from the repository root, replacing the path with the chosen stack:

```sh
docker compose -f postgres/docker-compose.yml config
docker compose -f postgres/docker-compose.yml up -d
docker compose -f postgres/docker-compose.yml ps
docker compose -f postgres/docker-compose.yml logs -f
```

Stop it with `docker compose -f postgres/docker-compose.yml down`. Persistent named volumes remain unless `-v` is added. Review the stack README and `.env` requirements before starting it. Commands can also be run from inside the stack directory as `docker compose up -d`.

## Layout

- Root directories: Kafka, Keycloak, MinIO, MongoDB, PostgreSQL, Redis, and SQL Server
- `extra/`: additional tools, including MySQL, WordPress, Elasticsearch, Grafana/Loki, Neo4j, and messaging services
- Each stack's `README.md` describes its services, prerequisites, ports, and run command

## Shared networks and dependencies

Some stacks intentionally join an external network so they can reach another stack by its Compose service name. Compose will not create an external network for you. Start the documented provider stack first and check the actual network name with `docker network ls`. A consumer stack fails to start if its required external network is absent.

Stacks in `extra/wordpress`, `extra/keycloak`, `extra/camunda`, `extra/sentry`, `extra/mattermost`, `extra/mailpit`, `extra/nginx`, and `extra/n8n` expect shared networks or services; see their READMEs. `extra/zeebe` also declares an external network. Do not assume starting a consumer automatically starts its database or cache.

## Configuration and safety

These examples are intended for local development and evaluation. Several stacks expose service ports on the host and use sample credentials or development modes. Do not expose them to an untrusted network or reuse sample credentials. Replace credentials with local secrets, keep real `.env` files out of version control, and bind ports to `127.0.0.1` when remote access is not required.

Use each Compose file's directory as the project directory when relying on its adjacent `.env` file. Before starting a stack, inspect its bind mounts and environment variables. Back up data before removing volumes; `docker compose down -v` permanently removes the stack's named volumes.

## Contributing

Keep stacks independently runnable where practical. Pin image versions instead of `latest` for reproducible setups; make intentional development-only behavior clear; use healthchecks that work inside the selected image; keep credentials configurable; declare named volumes and networks explicitly; and document external dependencies, ports, persistence, and startup commands in the stack README. Validate changed files with `docker compose -f <path> config`.
