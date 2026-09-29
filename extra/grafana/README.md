# Grafana and Loki

This Compose project runs Grafana, Loki, and Promtail. Images and ports are defined in `docker-compose.yml`; Grafana persists state in `grafana-data` and Loki in `loki-data`. Promtail reads host Docker container logs and uses the configuration in `promtail-config/promtail.yaml`.

## Run

```sh
docker compose config
docker compose up -d
docker compose ps
docker compose logs -f
```

Grafana is published on host port `3000`. The configured `user` / `pass` login is a development default; change it before exposing Grafana beyond a trusted local machine. Promtail requires access to the Docker socket and host container logs, which grants broad host visibility and control; keep this stack limited to a trusted development host.
