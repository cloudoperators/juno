# Contributing

## Code of Conduct

All members of the project community must abide by the [SAP Open Source Code of Conduct](https://github.com/SAP/.github/blob/main/CODE_OF_CONDUCT.md).
Only by respecting each other we can develop a productive, collaborative community.
Instances of abusive, harassing, or otherwise unacceptable behavior may be reported by contacting [a project maintainer](.reuse/dep5).

## Engaging in Our Project

We use GitHub to manage reviews of pull requests.

- If you are a new contributor, see: [Steps to Contribute](#steps-to-contribute)

- Before implementing your change, create an issue that describes the problem you would like to solve or the code that should be enhanced. Please note that you are willing to work on that issue.

- The team will review the issue and decide whether it should be implemented as a pull request. In that case, they will assign the issue to you. If the team decides against picking up the issue, the team will post a comment with an explanation.

## Steps to Contribute

Should you wish to work on an issue, please claim it first by commenting on the GitHub issue that you want to work on. This is to prevent duplicated efforts from other contributors on the same issue.

If you have questions about one of the issues, please comment on them, and one of the maintainers will clarify.

## Contributing Code or Documentation

You are welcome to contribute code in order to fix a bug or to implement a new feature that is logged as an issue.

The following rule governs code contributions:

- Contributions must be licensed under the [Apache 2.0 License](./LICENSE)
- Due to legal reasons, contributors will be asked to accept a Developer Certificate of Origin (DCO) when they create the first pull request to this project. This happens in an automated fashion during the submission process. SAP uses [the standard DCO text of the Linux Foundation](https://developercertificate.org/).

## Development

If you have been assigned to fix an issue or develop a new feature, please follow these steps to get started:

- Fork this repository.
- Install dependencies

  ```bash
  pnpm install
  ```

  - We use [pnpm](https://pnpm.io/) for package management. Please check the used version in the main `package.json` file under the `packageManager` field.
  - We use [nvm](https://github.com/nvm-sh/nvm) to manage node versions - please make sure to use the version mentioned in `.nvmrc`

    ```bash
    nvm use
    ```

## License Header

Please include the following license header at the top of every source file:

```plaintext
/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */
```

# Commitlint and Husky Configuration

This project uses **Husky** to enforce code quality checks and **commitlint** to ensure commit messages follow a consistent convention. Below are the details on how these are configured and how they work together.

## Setup Husky:

```bash
pnpm prepare
```

For more details on the specific hooks and commitlint rules used in this project, see our [Husky and Commitlint Guide](docs/husky_commitlint_guide.md).

## Checks

Before submitting your pull request, please ensure your code passes the following checks. These checks are also run in the CI workflow for every PR:

- **Linting**: Make sure your code adheres to the project’s coding standards by running `pnpm lint`.
- **Prettier**: Ensure your code is properly formatted by running `pnpm check-format`.
- **Title lint**: Ensure your title is following conventional commit format, for more details please check the [workflow](.github/workflows/ci-title-lint-check.yaml)
- **License Header**: Verify that every source file includes the correct license header as specified above.
- **Allowed Licenses**: Ensure that any dependencies added are compliant with the list of allowed licenses (see in `package.json`). Check with `pnpm check-licenses`.
- **REUSE Compliance**: Ensure that your contributions are compliant with the [REUSE guidelines](./reuse/dep5).
- **Tests**: Make sure all tests pass. Run `pnpm test` at the root level to ensure your code didn't break other packages.

## Issues and Planning

- We use GitHub issues to track bugs and enhancement requests.

- Please provide as much context as possible when you open an issue. The information you provide must be comprehensive enough to reproduce that issue for the assignee.

## Release Guidelines

For detail release management on npm registry please check our detailed [Release Guidelines](./docs/releases_guidelines.md)
