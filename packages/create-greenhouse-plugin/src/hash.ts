/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { createHash } from "node:crypto"
import { readFileSync } from "node:fs"

/** Stable sha256 of a file's raw bytes. */
export function hashFile(path: string): string {
  return createHash("sha256").update(readFileSync(path)).digest("hex")
}

/** Stable sha256 of an in-memory buffer/string. */
export function hashContent(data: Buffer | string): string {
  return createHash("sha256").update(data).digest("hex")
}
