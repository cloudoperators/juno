---
"@cloudoperators/juno-app-supernova": patch
---

Fixed the useCommunication hook to properly enable and handle filters derived from the URL. This ensures that the communication layer respects the filter parameters passed via the URL, improving synchronization between the app state and the URL.
