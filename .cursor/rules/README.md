# Cursor Rules

These rules apply to this repository: a collection of standalone Docker Compose stacks and their documentation.

- `architecture.mdc`: stack boundaries, networks, and dependency ownership
- `security-scope.mdc`: credentials, port exposure, and local-development safety
- `service-repository.mdc`: Compose service, volume, network, and configuration conventions
- `grpc.mdc`: healthchecks, startup dependencies, and runtime connectivity
- `database-concurrency.mdc`: persistence and destructive data operations
- `coding-conventions.mdc`: YAML and documentation style
- `testing.mdc`: Compose validation and review expectations

Use the stack README and Compose file as the source of truth. Keep advice limited to this repository; do not assume it is a Java microservice application.
