/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Filters raw URL search params to only known keys and keys that start with any allowed prefix.
 * Use this before Zod parsing when you need prefix-based catchall validation
 * (Zod v4 no longer provides ctx.path in preprocess).
 *
 * Reusable pattern for route validateSearch: filter first, then parse with a schema that has
 * .catchall(z.union([z.string(), z.array(z.string()), z.undefined()])).
 */
export function filterSearchParamsByPrefix(
  raw: Record<string, unknown>,
  knownKeys: string[],
  allowedPrefixes: string[]
): Record<string, unknown> {
  const result: Record<string, unknown> = {}
  for (const key of knownKeys) {
    if (Object.prototype.hasOwnProperty.call(raw, key)) {
      result[key] = raw[key]
    }
  }
  for (const key of Object.keys(raw)) {
    if (allowedPrefixes.some((p) => key.startsWith(p))) {
      result[key] = raw[key]
    }
  }
  return result
}
