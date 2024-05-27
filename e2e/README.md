# Usage

## run dashboard e2e tests against localhost

```bash
./run.sh assets-server
```

## run dashboard e2e tests against remote host

### asset-server

```bash
./run.sh --host https://assets.juno.qa-de-1.cloud.sap assets-server
```

### dashboard

```bash
./run.sh --host https://juno.global.cloud.sap --app hosting dashboard
```

### exampleapp

```bash
./run.sh --host https://juno.global.cloud.sap --app hosting exampleapp
```

### hosting

tests for dashboard and exampleapp at once

```bash
./run.sh --host https://juno.global.cloud.sap --app hosting
```

### storybook

```bash
./run.sh --host https://ui.juno.qa-de-1.cloud.sap --app ui-storybook
```

## run all e2e tests against localhost

```bash
./run.sh
```
