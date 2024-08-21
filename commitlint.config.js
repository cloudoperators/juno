module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [2, "always", ["build", "chore", "fix", "feat", "publish", "release"]],
    "scope-enum": [
      2,
      "always",
      [
        "build",
        "communicator",
        "config",
        "ci",
        "core",
        "deps",
        "example",
        "infra",
        "juno",
        "k8s",
        "message-provider",
        "npm",
        "oauth",
        "template",
        "ui",
        "utils",
        "url-state-provider",
        "url-state-router",
        "version",
      ],
    ],
    "scope-case": [2, "always", "kebab-case"], // Ensure scopes are in kebab-case
    "scope-regex": [
      2,
      "always",
      "^(build|communicator|config|ci|core|deps|example|infra|juno|k8s|message-provider|npm|oauth|template|ui|utils|url-state-provider|url-state-router|version|ISSUE-\\d+)$",
    ],
    "subject-case": [
      2,
      "never",
      ["start-case", "pascal-case", "upper-case"], // Disallow certain cases for subject
    ],
  },
}
