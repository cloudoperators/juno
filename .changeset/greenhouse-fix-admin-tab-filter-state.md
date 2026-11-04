---
"@cloudoperators/juno-app-greenhouse": patch
---

Fix admin tab filters being lost or mixed up after navigating away from the admin section and back. Default filters are now re-applied correctly on first visit to each tab, user-modified filters (including explicitly cleared state) are preserved on return, and filters no longer bleed between tabs when returning from a non-admin section like Compliance.
