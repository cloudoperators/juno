# npm Publish Handoff — Trusted Publishing (OIDC)

## Background

npm is sunsetting classic tokens (revoked mid-November 2025, per [GitHub announcement](https://github.blog/changelog/2025-09-29-strengthening-npm-security-important-changes-to-authentication-and-token-management/)).
The recommended replacement is **Trusted Publishing via OIDC**: GitHub Actions gets a short-lived, job-specific credential from npm at runtime — no secrets to store, rotate, or leak.

---

## How it works

1. The GitHub Actions job requests an OIDC token from GitHub (`id-token: write` permission).
2. npm validates that token against the trusted publisher configuration you set up on npmjs.com.
3. npm issues a short-lived publish token scoped to that specific job.
4. The package is published. The token expires immediately after.

No `NPM_TOKEN` secret is needed anywhere.

---

## What was added in this repo

- `.github/workflows/publish-npm.yaml` — triggers on push to `main`, uses OIDC with `--provenance` flag (attaches a signed provenance attestation to each published package).

---

## What you need to do

### Configure Trusted Publisher on npmjs.com

Do this for **each package** you want to publish via GitHub Actions:

1. Go to [https://www.npmjs.com](https://www.npmjs.com) → sign in → navigate to the package page.
2. Click **Settings** (package settings, not account settings).
3. Under **Trusted Publishers**, click **Add a Trusted Publisher**.
4. Fill in:

   | Field                  | Value              |
   | ---------------------- | ------------------ |
   | Provider               | GitHub Actions     |
   | Repository owner       | `cloudoperators`   |
   | Repository name        | `juno`             |
   | Workflow filename      | `publish-npm.yaml` |
   | Environment (optional) | leave blank        |

5. Save.

Repeat for every package in the monorepo that needs to be published.

Once this is done, **remove the `NPM_TOKEN` secret** from the repository (Settings → Secrets and variables → Actions) — it is no longer needed and should not be kept around.

---

## Test & verify

1. Merge a change to `main` and watch the `Publish Package` workflow in the Actions tab.
2. The job should succeed without any `NPM_TOKEN` secret configured.
3. On the package page on npmjs.com, confirm the new version appears and shows a **provenance** badge.

---

## Notes

- The workflow currently publishes on every push to `main`. If you prefer tag-based releases, change the `on:` trigger to `tags: ['v*.*.*']`.
- In a monorepo you may want to filter which packages are published. Consider using `changeset publish` or a script that only publishes packages whose version changed.
- If the org supports org-level Trusted Publishers, you can configure it once under the org settings instead of per package.
