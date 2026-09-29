# Elasticsearch and Kibana

Runs Elasticsearch and Kibana using image references configured by the adjacent `.env` file.

```sh
docker compose config
docker compose up -d
docker compose ps
```

The stack publishes Elasticsearch ports `9200` and `9300` and Kibana port `5601`. Elasticsearch data and configuration are bind-mounted from this directory. Review the image variables and restart policy in `.env` before starting. Security is disabled in this example; keep it on a trusted local machine.
