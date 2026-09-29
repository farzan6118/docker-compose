# Elasticsearch

Runs Elasticsearch `7.16.1`, Logstash `7.16.1`, and Kibana `7.16.1` as a local ELK stack.

```sh
docker compose config
docker compose up -d
docker compose ps
docker compose logs -f
```

The stack publishes Elasticsearch ports `9200` and `9300`, Logstash ports `5000`, `5044`, and `9600`, and Kibana port `5601`. Elasticsearch data persists in the named `elastic-data` volume. This legacy example does not configure authentication or TLS; keep it on a trusted local network.
