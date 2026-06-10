---
"@cloudoperators/juno-ui-components": major
---

Add NotificationManager (based on the Sonner library and using Toast as a base) and make Toast a purely presentational component. The `autoDismiss` and `autoDismissTimeout` props have been removed from Toast — use NotificationManager with the `toast()` API for notification lifecycle management instead.
