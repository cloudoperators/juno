# npm publish handoff

This file contains the exact steps to finish onboarding the repository for automated npm publishing.

## Required from org admin / publisher

1. Create an Automation token on npmjs.com
   - Sign in as the publishing account or org admin
   - Account → Access Tokens → Create New Token → Type: Automation
   - Name the token `github-actions-publish` and copy the token value (shown once)

2. Add token to GitHub Secrets
   - Repository → Settings → Secrets and variables → Actions → New repository secret
   - Name: `NPM_TOKEN`
   - Value: the token copied above

3. Add Trusted Publisher (org admin)
   - In the npm org settings, add the publishing account or automation identity to Trusted Publishers for the org or package scope (see https://docs.npmjs.com/trusted-publishers)

## What I added in this repo

- `.github/workflows/publish-npm.yaml` — publishes on push to `main` using `NPM_TOKEN` secret.
- `docs/npm-publish-handoff.md` — this file.

## Test & verify

1. Ensure `package.json` `name`, `version`, and `publishConfig` are correct (for scoped public packages: `publishConfig.access = "public"`).
2. Push a test bump to `main` or create a tag to trigger the workflow.
3. Confirm package appears under your npm org and that publish events are logged under the publishing identity.

## Notes for the colleague

- If you prefer to publish on tags instead of pushes to `main`, edit the workflow `on:` section to trigger on tags.
- If the org requires additional trusted publishing steps, the org admin will need to configure that in the npm org settings.

If you want, I can open a PR with these changes (branch created and pushed). Otherwise you can review and push changes yourself.
