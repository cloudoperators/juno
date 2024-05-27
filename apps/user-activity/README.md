# User-activity App

This app tracks the user activity (using event listeners as per example `mousemove`) to notify per broadcast events when the user has been inactive for a default period of 1800 seconds or again active. All other apps listening to the broadcast events can react accordingly and set the application to standby or reactivate and so save resources or reduce the amount of request during the inactive period.

Please visit the section **scrip tag** to see all available **props** and their **default values**.

## Usage

### load via script tag

```js
<script
  defer
  src="https://assets.juno.global.cloud.sap/apps/widget-loader@latest/build/app.js"
  data-name="user-activity"
></script>
```

### load via Importmap

```js
<script
  defer
  src="https://assets.juno.global.cloud.sap/apps/widget-loader@latest/build/app.js"
  data-importmap-only="true"
></script>

<script type="module">
  import "@juno/user-activity@latest"
</script>
```

## Events

Please visit the section **communication** to see all available **events** and instructions to listen to them.
