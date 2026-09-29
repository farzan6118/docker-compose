# PostgreSQL

Runs PostgreSQL `16.3-alpine3.18` with the `user` account and a bind-mounted `./postgres_data` data directory.

## Run

```sh
docker compose config
docker compose up -d
docker compose ps
docker compose logs -f postgres
```

The service publishes host port `5432` and joins both `shared_network` and `postgres_shared_network` so the collection's separate consumer stacks can connect to it. Those networks are created by this stack. Other containers use `postgresql:5432` on either network. The current `user` / `pass` values are examples for local development only; set stronger credentials before sharing the host. PostgreSQL initialization settings only apply when the data directory is empty.
