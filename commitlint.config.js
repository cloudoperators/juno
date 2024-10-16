module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      ["build", "chore", "fix", "feat", "merge", "publish", "release", "refactor", "research", "style", "test"],
    ], // Enforces the type to be one of the specified values
    "scope-enum": [
      2,
      "always",
      [
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
        "utils",
        "url-state-provider",
        "version",
        /^ISSUE-\d+$/, // Regex pattern for ISSUE-<number>
      ],
    ],
    "scope-case": [2, "always", "kebab-case"], // Enforces kebab-case
    "subject-case": [
      2,
      "never",
      ["start-case", "pascal-case", "upper-case"], // Disallows certain cases for the subject
    ],
  },
}
