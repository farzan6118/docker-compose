# Apache Kafka

This project uses Apache Kafka in **KRaft mode** (ZooKeeper-free) for local development.

Kafka Broker and Kafka UI are separated into independent Docker Compose files but share a common Docker network.

## Docker Images

| Component | Image | Version |
|----------|-------|---------|
| Kafka Broker | `soldevelo/kafka` | `3.9.0` |
| Kafka UI | `provectuslabs/kafka-ui` | `v0.7.2` |

## Folder Structure

```
kafka/
├── docker-compose.kafka.yml
├── docker-compose.kafka-ui.yml
└── README.md
```

## Docker Network

Kafka and Kafka UI communicate through the shared Docker network:

```
infrastructure
```

Create the network once before starting the services:

```bash
docker network create infrastructure
```

## Services

### Kafka Broker

Runs a single-node Kafka broker using KRaft mode.

Connection addresses:

- Internal Docker address: `kafka:9092`
- External host address: `localhost:29092`

### Kafka UI

A web interface for managing Kafka.

Available at:

```
http://localhost:19093
```

Features:

- Browse topics
- Create/Delete topics
- View messages
- Manage consumer groups
- Inspect partitions and offsets

## Start Services

Start Kafka:

```bash
docker compose -f docker-compose.kafka.yml up -d
```

Start Kafka UI:

```bash
docker compose -f docker-compose.kafka-ui.yml up -d
```

## Stop Services

Stop Kafka:

```bash
docker compose -f docker-compose.kafka.yml down
```

Stop Kafka UI:

```bash
docker compose -f docker-compose.kafka-ui.yml down
```

## Spring Boot Configuration

For applications running on the host machine:

```properties
spring.kafka.bootstrap-servers=localhost:29092
```

For applications running inside Docker on the same network:

```properties
spring.kafka.bootstrap-servers=kafka:9092
```

## Connection Information

| Property | Value |
|----------|-------|
| External Bootstrap Server | `localhost:29092` |
| Internal Bootstrap Server | `kafka:9092` |
| Kafka UI | `http://localhost:19093` |

## Data Persistence

Kafka data is persisted using the Docker volume:

```
kafka_data
```

To remove Kafka data completely:

```bash
docker compose -f docker-compose.kafka.yml down -v
```