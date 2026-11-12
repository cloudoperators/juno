/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

export const types = [
  "build",
  "chore",
  "fix",
  "feat",
  "merge",
  "publish",
  "release",
  "refactor",
  "research",
  "style",
  "test",
]
export const scopes = [
  "ai",
  "build",
  "communicator",
  "config",
  "ci",
  "apps",
  "core",
  "greenhouse",
  "deps",
  "docs",
  "doop",
  "heureka",
  "infra",
  "juno",
  "kubernetes",
  "message-provider",
  "main",
  "npm",
  "oauth",
  "supernova",
  "template",
  "ui",
  "url-state-provider",
  "version",
  "greenhouse-core",
  "k8s-client",
  "create-greenhouse-plugin",
  /^ISSUE-\d+$/, // Regex pattern for ISSUE-<number>
]

export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [2, "always", types],
    "scope-enum": [2, "always", scopes],
    // Enforces lowercase, dash-separated scopes. "lower-case" is included alongside
    // "kebab-case" so whitelisted scopes containing digits (e.g. "k8s-client") are accepted:
    // lodash kebab-case inserts a dash at letter/digit boundaries ("k8s" -> "k-8s"), which
    // would otherwise reject an explicitly allowed scope-enum value.
    "scope-case": [2, "always", ["kebab-case", "lower-case"]],
    "subject-case": [
      2,
      "never",
      ["start-case", "pascal-case", "upper-case"], // Disallows certain cases for the subject
    ],
  },
}
