<!--
SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
SPDX-License-Identifier: Apache-2.0
-->

# shared

Cross-component building blocks that more than one component relies on — shared types,
class maps, and small helpers that keep behaviour and vocabulary consistent across the
library.

**Organised by concern, not by kind.** Each concern gets its own directory holding
everything about it (its types, its class map, its helpers, and a `README.md`), rather
than splitting a concern across top-level `types/` / `styles/` / `utils/` folders. A
directory exports its public surface through an `index.ts` barrel, so consumers import
from the directory:

```tsx
import { textContainStyles, type TextContainType } from "../../shared/textContain"
```

| Concern        | What it provides                                                        |
| -------------- | ----------------------------------------------------------------------- |
| `textContain/` | Text overflow / wrapping / truncation vocabulary and classes. See its `README.md`. |
