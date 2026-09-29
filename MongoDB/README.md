# MongoDB

Runs MongoDB `8.0.10` with a root account and persistent data in the `mongo_data` named volume. The healthcheck authenticates and pings MongoDB using `mongosh` from inside the Linux container.

## Run

The stack joins the external `shared_network`, which must already exist. Start a stack that creates it first, then run:

```sh
docker compose config
docker compose up -d
docker compose ps
docker compose logs -f mongo
```

The host port is `27017`; containers on `shared_network` connect to `mongo:27017`. The checked-in `user` / `pass` values are disposable local examples; replace them before exposing the service. Data survives `docker compose down`; `docker compose down -v` deletes it.
