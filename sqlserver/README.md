# SQL Server

Runs Microsoft SQL Server 2022 Developer Edition from `mcr.microsoft.com/mssql/server:2022-latest`.

## Setup

Copy `.env.example` to `.env` and set a strong local `SA_PASSWORD` that meets SQL Server's password policy. The Compose file joins the external `shared_network`; start the stack that creates this network first (for this collection, PostgreSQL, Redis, or another provider may create it).

## Run

```sh
docker compose config
docker compose up -d
docker compose logs -f sqlserver
```

Connect from the host at `localhost,1433`; other containers on `shared_network` can use `sqlserver,1433`. Data persists in the `sqlserver_data` named volume. This development example publishes the SQL Server port on all host interfaces; restrict it to localhost or a trusted network before use on a shared machine.
