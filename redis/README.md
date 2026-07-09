# Redis Docker Compose

A lightweight Docker Compose setup for running **Redis** with an optional **RedisInsight** web interface for development and testing.

## Components

| Component    | Version            |
| ------------ | ------------------ |
| Redis        | `8.8.0-alpine3.23` |
| RedisInsight | `3.6.0`            |

## Features

* Redis 8
* Persistent data volume
* Health check
* Dedicated bridge network
* Automatic restart (`unless-stopped`)
* Optional RedisInsight GUI
* ACL authentication support

## Project Structure

```text
.
├── docker-compose.yml
├── docker-compose.gui.yml
├── redis.conf
└── README.md
```

## Start Redis

```bash
docker compose up -d
```

## Start RedisInsight

```bash
docker compose -f docker-compose.gui.yml up -d
```

## Stop RedisInsight

```bash
docker compose -f docker-compose.gui.yml stop
```

## Remove RedisInsight

```bash
docker compose -f docker-compose.gui.yml down
```

## RedisInsight Connection

Use the following connection settings:

| Property | Value             |
| -------- | ----------------- |
| Host     | `redis`           |
| Port     | `6379`            |
| Username | `user`            |
| Password | `<your-password>` |
| TLS      | Disabled          |

> **Note**
>
> When connecting from another Docker container, always use the service name (`redis`) instead of `localhost` or a container IP address.

## Volumes

| Volume              | Purpose               |
| ------------------- | --------------------- |
| `redis_data`        | Redis persistent data |
| `redisinsight_data` | RedisInsight data     |

## Network

Both services communicate through the shared Docker bridge network:

```text
redis_shared_network
```

## Notes

* Redis data persists across container restarts.
* RedisInsight is optional and can be started or stopped independently.
* Container IP addresses may change after recreation; always use the Docker service name (`redis`) when connecting.
