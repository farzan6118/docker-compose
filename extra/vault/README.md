# Vault

Runs HashiCorp Vault with the file storage backend. Vault data is stored in the Docker-managed `vault_vault_data` named volume mounted at `/vault/data`.

The Compose file pins `hashicorp/vault:2.2.0`.

## Start

The Compose file joins the external `shared_network`; create it first if it does not exist:

```sh
docker network create shared_network
docker compose up -d
```

Run these commands from `extra/vault`. Vault listens on port `8200` and is available at `http://localhost:8200`.

## Initialize and unseal

On first startup, initialize Vault and securely store the generated unseal keys and initial root token. Vault starts sealed. After each restart, unseal it with the required key shares unless auto-unseal has been configured.

## Persistence

`docker compose down` followed by `docker compose up -d` retains Vault data in the named volume. `docker compose down -v` removes that volume and permanently deletes its contents. Back up the volume and keep the unseal keys separately.

The current listener disables TLS for local development. Do not expose this setup to an untrusted network without configuring TLS and appropriate access controls.
