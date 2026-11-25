---
"@cloudoperators/juno-app-greenhouse": minor
---

Load plugin UIs as remote microfrontends from the URL in their Kubernetes resource, and render Status-based loading, not-found, and error states (each plugin now runs inside an error boundary so a failure no longer affects the shell). Runtime errors inside a mounted plugin's separate React root are caught and surfaced via the same error/retry UI; async mount rejections are handled; and cache-busting on retry bypasses the browser's native ES-module cache for remote bundles.
