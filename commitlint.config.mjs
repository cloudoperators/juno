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
  "build",
  "communicator",
  "config",
  "ci",
  "core",
  "carbon",
  "greenhouse",
  "deps",
  "docs",
  "doop",
  "example",
  "heureka",
  "infra",
  "juno",
  "k8s",
  "message-provider",
  "main",
  "npm",
  "oauth",
  "supernova",
  "template",
  "ui",
  "url-state-provider",
  "version",
  /^ISSUE-\d+$/, // Regex pattern for ISSUE-<number>
]

export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [2, "always", types],
    "scope-enum": [2, "always", scopes],
    "scope-case": [2, "always", "kebab-case"], // Enforces kebab-case
    "subject-case": [
      2,
      "never",
      ["start-case", "pascal-case", "upper-case"], // Disallows certain cases for the subject
    ],
  },
}
