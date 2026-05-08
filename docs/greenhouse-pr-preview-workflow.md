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
    ├──► Add "pr-build"      │                        │
    │    label               │                        │
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
    │                    │ Add "pr-preview"       │   │
    │                    │ label                  │   │
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
    │                    │ Check "pr-build"       │   │
    │                    │ label exists?          │   │
    │                    └───┬────────────────────┘   │
    │                        │                        │
    │                ┌───────┴────────┐               │
    │                │                │               │
    │            ✓ YES            ✗ NO               │
    │                │                │               │
    │    ┌───────────▼───────┐   ┌────▼────────┐    │
    │    │ Remove            │   │ Skip build  │    │
    │    │ "pr-preview"      │   │ Exit        │    │
    │    │ label             │   └─────────────┘    │
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
    │    │ Add "pr-preview" │         │             │
    │    │ label back       │         │             │
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
    │                    │ Install crane          │   │
    │                    │ (with SHA256 check)    │   │
    │                    └───┬────────────────────┘   │
    │                        │                        │
    │                    ┌───▼────────────────────┐   │
    │                    │ Delete all images      │   │
    │                    │ pr-{number}-*          │   │
    │                    └───┬────────────────────┘   │
    │                        │                        │
    │                    ┌───▼────────────────────┐   │
    │                    │ Remove "pr-preview"    │   │
    │                    │ label (always runs)    │   │
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

1. Create a pull request with changes to `apps/greenhouse/**`
2. Add the `greenhouse-pr-build` label to the PR
3. The workflow will automatically:
   - Build a Docker image tagged as `pr-{number}-{sha}`
   - Push the image to `ghcr.io/cloudoperators/juno-app-greenhouse-pr-preview`
   - Add the `greenhouse-pr-preview` label
   - ArgoCD will detect the label and deploy the preview

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
   - Deletes all Docker images matching `pr-{number}-*`
   - Removes the `greenhouse-pr-preview` label (even if image deletion fails)
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

Deletes Docker images and removes labels when the PR is closed.

**Conditions:**

- PR action is `closed`
- PR is from the same repository (not a fork)

**Steps:**

1. Login to GitHub Container Registry
2. Install crane (with SHA256 checksum verification)
3. List all tags and delete matching `pr-{number}-*` images
4. Remove `greenhouse-pr-preview` label (runs even if deletion fails)

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

### Supply Chain Security

The crane binary is installed with SHA256 checksum verification:

```bash
EXPECTED_SHA256="9f823ae5ee25803161110f957b5fd4538f714d40cdf25dacb4914fefafd246bf"
curl -fsSL "https://github.com/google/go-containerregistry/releases/download/v0.21.5/go-containerregistry_Linux_x86_64.tar.gz" -o crane.tar.gz
echo "${EXPECTED_SHA256}  crane.tar.gz" | sha256sum -c -
```

### Resilient Cleanup

The label removal step runs with `if: always()` to ensure the preview is torn down even if image deletion fails. This prevents orphaned ArgoCD deployments.

## Permissions

Both jobs require the following permissions:

- `contents: read` - Read repository code
- `packages: write` - Push/delete container images
- `issues: write` - Add/remove labels on PRs

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

The workflow only triggers when files under `apps/greenhouse/**` are modified.

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
2. Verify the crane installation succeeded
3. Check that the `greenhouse-pr-preview` label was removed
4. The workflow will still remove the label even if image deletion fails

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
- [Crane CLI](https://github.com/google/go-containerregistry/blob/main/cmd/crane/doc/crane.md)
