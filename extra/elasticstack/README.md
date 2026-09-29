# Elasticsearch, Logstash, and Kibana

Runs Elasticsearch, Logstash, and Kibana using the `7.16.1` images in `docker-compose.yml`. This is a legacy stack; review compatibility and upgrade requirements before adopting it for new deployments.

```sh
docker compose config
docker compose up -d
docker compose ps
docker compose logs -f
```

Elasticsearch is published on `9200` and `9300`, Logstash on `5000`, `5044`, and `9600`, and Kibana on `5601`. Data persistence and the Logstash pipeline are configured by the Compose file and adjacent files. Security is disabled in the Elasticsearch example; use only in a trusted local environment.
