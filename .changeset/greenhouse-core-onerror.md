---
"@cloudoperators/greenhouse-core": patch
---

`MountOptions` gains an optional `onError` callback forwarded to `createRoot`'s `onUncaughtError`, so the host can receive uncaught errors from a plugin's React root.
