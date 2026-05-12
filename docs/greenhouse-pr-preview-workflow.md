# Greenhouse PR Preview Workflow

This document describes the GitHub Actions workflow for building and deploying PR preview environments for the Greenhouse application.

## Overview

The PR preview workflow automatically builds Docker images for pull requests and manages their deployment via ArgoCD label-based triggers. It provides ephemeral preview environments that are automatically created, updated, and cleaned up based on PR lifecycle events.

## Workflow File

`.github/workflows/build-push-greenhouse-pr-preview.yaml`

## How It Works

### Labels

The workflow uses two labels to manage the preview lifecycle:

- **`greenhouse-pr-build`**: Manual label added by developers to enable preview builds
- **`greenhouse-pr-preview`**: Automatically managed label that signals ArgoCD to deploy/undeploy

### Workflow Flow

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         PR PREVIEW WORKFLOW                              │
└─────────────────────────────────────────────────────────────────────────┘

INITIAL SETUP
─────────────
Developer                Workflow                  ArgoCD
    │                        │                        │
    ├──► Add "greenhouse-    │                        │
    │    pr-build" label     │                        │
    │                        │                        │
    │                    ┌───▼────────────────────┐   │
    │                    │ Build Docker image     │   │
    │                    │ pr-{number}-{sha}      │   │
    │                    └───┬────────────────────┘   │
    │                        │                        │
    │                    ┌───▼────────────────────┐   │
    │                    │ Push to registry       │   │
    │                    └───┬────────────────────┘   │
    │                        │                        │
    │                    ┌───▼────────────────────┐   │
    │                    │ Add "greenhouse-       │   │
    │                    │ pr-preview" label      │   │
    │                    └───┬────────────────────┘   │
    │                        │                        │
    │                        ├──────────────────────► │
    │                        │   Label detected      ▼
    │                        │                  ┌──────────┐
    │                        │                  │ Deploy   │
    │                        │                  │ Preview  │
    │                        │                  └──────────┘


NEW COMMIT (synchronize)
────────────────────────
Developer                Workflow                  ArgoCD
    │                        │                        │
    ├──► Push commit         │                        │
    │                        │                        │
    │                    ┌───▼────────────────────┐   │
    │                    │ Check "greenhouse-     │   │
    │                    │ pr-build" exists?      │   │
    │                    └───┬────────────────────┘   │
    │                        │                        │
    │                ┌───────┴────────┐               │
    │                │                │               │
    │            ✓ YES            ✗ NO               │
    │                │                │               │
    │    ┌───────────▼───────┐   ┌────▼────────┐    │
    │    │ Remove            │   │ Skip build  │    │
    │    │ "greenhouse-      │   │ Exit        │    │
    │    │ pr-preview" label │   └─────────────┘    │
    │    └───────────┬───────┘        │             │
    │                │                 │             │
    │                ├─────────────────┼────────────► │
    │                │   Label removed │         No changes
    │                │                 │         (preview
    │                ▼                 │          stays)
    │          ┌──────────┐            │             │
    │          │ Delete   │            │             │
    │          │ Preview  │            │             │
    │          └────┬─────┘            │             │
    │               │                  │             │
    │    ┌──────────▼────────┐         │             │
    │    │ Build new image   │         │             │
    │    │ pr-{number}-      │         │             │
    │    │ {new-sha}         │         │             │
    │    └──────────┬────────┘         │             │
    │               │                  │             │
    │    ┌──────────▼────────┐         │             │
    │    │ Push to registry  │         │             │
    │    └──────────┬────────┘         │             │
    │               │                  │             │
    │    ┌──────────▼────────┐         │             │
    │    │ Add "greenhouse-  │         │             │
    │    │ pr-preview" back  │         │             │
    │    └──────────┬────────┘         │             │
    │               │                  │             │
    │               ├──────────────────┼────────────► │
    │               │   Label detected │             ▼
    │               │                  │       ┌──────────┐
    │               │   (2-3 mins)     │       │ Redeploy │
    │               │                  │       │ Preview  │
    │               │                  │       └──────────┘


PR CLOSE/MERGE
──────────────
Developer                Workflow                  ArgoCD
    │                        │                        │
    ├──► Close/Merge PR      │                        │
    │                        │                        │
    │                    ┌───▼────────────────────┐   │
    │                    │ Call shared cleanup    │   │
    │                    │ workflow (GHCR API)    │   │
    │                    └───┬────────────────────┘   │
    │                        │                        │
    │                    ┌───▼────────────────────┐   │
    │                    │ Delete all images      │   │
    │                    │ pr-{number}-*          │   │
    │                    └───┬────────────────────┘   │
    │                        │                        │
    │                    ┌───▼────────────────────┐   │
    │                    │ Remove "greenhouse-    │   │
    │                    │ pr-preview" label      │   │
    │                    │ (always runs)          │   │
    │                    └───┬────────────────────┘   │
    │                        │                        │
    │                    ┌───▼────────────────────┐   │
    │                    │ Notify on failure      │   │
    │                    │ (Slack alert)          │   │
    │                    └───┬────────────────────┘   │
    │                        │                        │
    │                        ├──────────────────────► │
    │                        │   Label removed       ▼
    │                        │                  ┌──────────┐
    │                        │                  │ Delete   │
    │                        │                  │ Preview  │
    │                        │                  └──────────┘
```

## Usage

### Enabling PR Preview

1. Create a pull request
2. Add the `greenhouse-pr-build` label to the PR
3. The workflow will automatically:
   - Build a Docker image tagged as `pr-{number}-{sha}`
   - Push the image to `ghcr.io/cloudoperators/juno-app-greenhouse-pr-preview`
   - Add the `greenhouse-pr-preview` label
   - ArgoCD will detect the label and deploy the preview

**Note**: The workflow triggers on any PR regardless of which files are changed. The `greenhouse-pr-build` label is the only control for enabling preview builds. This allows you to create previews for changes to Greenhouse itself or its dependent plugins (heureka, doop, supernova) or shared packages.

### Updating PR Preview

1. Push new commits to the PR
2. The workflow will automatically:
   - Remove the `greenhouse-pr-preview` label (ArgoCD deletes the preview)
   - Build a new Docker image with the new commit SHA
   - Push the new image to the registry
   - Re-add the `greenhouse-pr-preview` label (ArgoCD redeploys after 2-3 minutes)

### Disabling PR Preview

To stop building previews without closing the PR:

1. Remove the `greenhouse-pr-build` label
2. Future commits will skip the build
3. The existing preview deployment will remain active (the `greenhouse-pr-preview` label stays)

### Cleaning Up

When the PR is closed or merged:

1. The workflow automatically:
   - Calls the shared GHCR cleanup workflow to delete all Docker images matching `pr-{number}-*`
   - Removes the `greenhouse-pr-preview` label (even if image deletion fails)
   - Sends a Slack notification if image deletion fails
   - ArgoCD detects the label removal and deletes the preview deployment

## Docker Images

- **Registry**: `ghcr.io`
- **Image Name**: `juno-app-greenhouse-pr-preview`
- **Tag Format**: `pr-{PR_NUMBER}-{SHORT_SHA}`
- **Example**: `ghcr.io/cloudoperators/juno-app-greenhouse-pr-preview:pr-123-a1b2c3d`

## Trigger Events

The workflow triggers on the following pull request events:

- `labeled` - When any label is added
- `synchronize` - When new commits are pushed
- `opened` - When a PR is created
- `reopened` - When a closed PR is reopened
- `closed` - When a PR is closed or merged

## Jobs

### build-and-push

Builds and pushes the Docker image when the `greenhouse-pr-build` label is present.

**Conditions:**

- PR is not closed
- PR is from the same repository (not a fork)
- Event is not adding the `greenhouse-pr-preview` label (avoids self-triggering)

**Steps:**

1. Check for `greenhouse-pr-build` label
2. Remove `greenhouse-pr-preview` label (if new commit and label exists)
3. Checkout code at PR HEAD SHA
4. Generate version tag `pr-{number}-{sha}`
5. Login to GitHub Container Registry
6. Generate Docker metadata
7. Build and push Docker image
8. Add `greenhouse-pr-preview` label on success

### cleanup

Deletes Docker images using the shared GHCR cleanup workflow when the PR is closed.

**Conditions:**

- PR action is `closed`
- PR is from the same repository (not a fork)

**Workflow:**

Uses `cloudoperators/common/.github/workflows/shared-ghcr-cleanup.yaml` with:

- `package`: juno-app-greenhouse-pr-preview
- `delete-tags`: pr-{number}-\* (wildcard pattern)
- `delete-partial-images`: true

### remove-label

Removes the preview label after cleanup completes.

**Conditions:**

- Runs `always()` (even if cleanup fails)
- PR action is `closed`
- PR is from the same repository (not a fork)

**Steps:**

1. Remove `greenhouse-pr-preview` label
2. Handles 404 errors gracefully (label already removed)

### notify-on-failure

Sends Slack notifications when image cleanup fails.

**Conditions:**

- Runs only if `cleanup` job fails
- PR action is `closed`

**Notification:**

Sends alert to Slack with:

- PR number
- Link to workflow logs
- Request for manual cleanup if needed

## Safety Features

### Fork Protection

The workflow skips execution for pull requests from forked repositories. This prevents:

- Permission errors (forks don't have `packages:write` or `issues:write`)
- Wasted CI minutes
- Potential security issues

### Concurrency Control

Only one workflow run executes per PR at a time:

```yaml
concurrency:
  group: greenhouse-pr-preview-${{ github.event.pull_request.number }}
  cancel-in-progress: true
```

This prevents:

- Race conditions on label removal/addition
- Multiple simultaneous builds for the same PR
- Incorrect deployment states

### Self-Trigger Prevention

The workflow skips execution when the `greenhouse-pr-preview` label is added to prevent triggering itself in a loop.

### Resilient Cleanup

The label removal step runs with `if: always()` to ensure the preview is torn down even if image deletion fails. This prevents orphaned ArgoCD deployments.

### Slack Notifications

If image cleanup fails, a Slack notification is sent with:

- PR number
- Link to workflow logs
- Alert emoji for visibility

This ensures the team is aware of orphaned images that may need manual cleanup.

## Permissions

### build-and-push job

- `contents: read` - Read repository code
- `packages: write` - Push container images
- `issues: write` - Add/remove labels on PRs
- `pull-requests: write` - Manage PR labels

### cleanup job

- `packages: write` - Delete container images

Note: The `cleanup` job uses a shared reusable workflow, but that workflow cannot elevate `GITHUB_TOKEN` permissions beyond what the caller grants. The caller workflow must still declare the permissions required for cleanup to succeed, such as `packages: write` for deleting container images.

### remove-label job

- `issues: write` - Remove labels from PRs
- `pull-requests: write` - Required for PR label operations (even though Issues API is used)

## Configuration

### Environment Variables

```yaml
REGISTRY: ghcr.io
IMAGE_NAME: "juno-app-greenhouse-pr-preview"
PACKAGE_PATH: "apps/greenhouse"
PR_BUILD_LABEL: "greenhouse-pr-build"
PR_PREVIEW_LABEL: "greenhouse-pr-preview"
```

### Path Filters

**Note**: The workflow triggers on any PR file changes. The `greenhouse-pr-build` label is the only control for enabling preview builds. This allows you to create previews for changes to Greenhouse itself or its dependent plugins (heureka, doop, supernova) or shared packages.

## Troubleshooting

### Preview Not Deploying

1. Check that the `greenhouse-pr-preview` label is present on the PR
2. Verify the Docker image was pushed successfully to the registry
3. Check ArgoCD for deployment status

### Build Failing

1. Check workflow logs in the Actions tab
2. Verify the `greenhouse-pr-build` label is present
3. Ensure the PR is not from a forked repository

### Images Not Cleaning Up

1. Check the cleanup job logs
2. Verify the shared workflow was called successfully
3. Check for Slack notification about the failure
4. Check that the `greenhouse-pr-preview` label was removed (this happens regardless of image cleanup success)
5. If notified, manually clean up images via GitHub Packages UI or API

### Stale Preview

If the `greenhouse-pr-build` label is removed but the preview stays:

- The preview will remain deployed (by design)
- No new builds will occur on future commits
- Close the PR to trigger cleanup

## Best Practices

1. **Add the label early**: Add `greenhouse-pr-build` when you open the PR if you want immediate preview
2. **Remove when not needed**: Remove `greenhouse-pr-build` to save CI resources if you don't need updates
3. **Wait for redeployment**: After pushing new commits, allow 2-3 minutes for ArgoCD to redeploy
4. **Check workflow status**: Monitor the Actions tab for build/deployment status

## Related Documentation

- [ArgoCD Label-Based Deployment](https://argo-cd.readthedocs.io/)
- [GitHub Container Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry)
- [Shared GHCR Cleanup Workflow](https://github.com/cloudoperators/common/blob/main/.github/workflows/shared-ghcr-cleanup.yaml)
- [dataaxiom/ghcr-cleanup-action](https://github.com/dataaxiom/ghcr-cleanup-action)
