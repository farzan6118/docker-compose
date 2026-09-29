# Consul

Runs HashiCorp Consul `1.20.4` and publishes the HTTP UI/API on port `8500` and DNS on port `8600`.

```sh
docker compose config
docker compose up -d
docker compose ps
docker compose logs -f consul
```

This example does not configure a production cluster, persistent data, ACLs, or TLS. Keep it on a trusted development machine and add an explicit server configuration before using it for durable or shared environments.
