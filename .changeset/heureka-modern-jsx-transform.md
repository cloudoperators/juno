---
"@cloudoperators/juno-app-heureka": patch
---

Migrate to modern JSX transform (react-jsx). Switch tsconfig from `"jsx": "react"` to `"jsx": "react-jsx"` so the compiler auto-injects the JSX runtime, removing the need for `import React from 'react'` in every JSX file.
