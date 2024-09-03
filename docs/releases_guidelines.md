# Release Guidelines

This document outlines the process for managing releases using Changesets, Turborepo, and automated workflows for publishing packages to npm under Juno repo.

## 1. Defining Package Changes with Changesets

When you make changes to a package that require a version update (e.g., new features, bug fixes, or breaking changes), you must create a changeset to define the type of version bump (major, minor, patch) for the package.

### Short Summary

Every pull request that involves a change to a package should include a changeset. A changeset specifies whether the changes are major, minor, or patch updates and includes a brief description for the changelog. This ensures that all changes are tracked and appropriately versioned.

### Creating a Changeset

#### Steps to Create a Changeset

1. **Run the Turbo Changeset Command Locally from the root of juno repository**  
   To start the process, run the following command in your terminal:

   ```bash
    npm run changeset
   ```

2. **Select the Package**  
   You will be prompted to select the package(s) you modified. Use the arrow keys to navigate and select the relevant package(s) that have changes requiring a version bump.

3. **Choose the Version Bump Type**  
   After selecting the package, you will be asked to choose the type of version bump:

   - **Major**: For breaking changes that are incompatible with the previous version. We strongly suggest not to pick this one for most of the cases.
   - **Minor**: For adding new features that are backward-compatible.
   - **Patch**: For bug fixes or minor changes that are backward-compatible.

4. **Provide a Summary**  
   You will then be prompted to provide a brief description of the changes made. This summary will be included in the changelog.

5. **Commit the Changeset**  
   Once the changeset is created, a Markdown file will be generated in the `.changeset` directory. Commit this file along with your changes:
   We use conventional commit pattern, so pay atttention to a commit message:
   ```bash
        git add .
        git commit -m "release("name_of_package"): add changeset for [package-name]"
   ```

### Submit a Pull Request

Push your branch and create a pull request as usual. Ensure that the PR includes the changeset file.
If you forget to create a changeset file, the changeset bot will notify you in the PR. If you have committer rights, you can create the changeset directly on GitHub and commit it to the PR.

### Review Process

- **During PR Review**: The changeset will be reviewed to ensure it accurately reflects the changes being introduced. The reviewer may ask for modifications if necessary. Chageset bot will also notice that your PR has changeset.
- **Merging the PR**: Once the PR is approved and merged, the changeset bot will automatically trigger the next steps in the release process.

## Automated Publishing Process

After your pull request containing the changeset is merged, an automated workflow will generate a new pull request known as the “Publish PR.” This PR will handle updating the package versions and changelogs.

### Summary

Once a changeset PR is merged, an automated
**publish(npm): automate Package Versioning and Publishing with Changesets** is created. This PR updates version numbers and changelogs. After reviewing and merging this Publish PR, the pipeline will automatically publish the packages to npm and clean up the changeset files.

### Post-Merge "Publishing PR"

After your pull request containing the changeset is merged, an automated workflow will generate a new pull request known as the “Publish PR.” This PR will include:

- **Version Bumps**: The package versions will be updated based on the changeset specifications (major, minor, patch).
- **Updated Changelogs**: The changelog files will be updated to include the changes described in the changeset.

### Steps to Handle the Publish PR

1. **Review the Publish PR**  
   Review the automated PR to ensure that the version bumps and changelog updates are correct. This PR is generated based on the changeset files committed in the previous steps.

2. **Merge the Publish PR**  
   Once you are satisfied with the changes, merge the Publish PR. This will trigger the deployment pipeline and update the version in `package.json`.

### Deployment to npm

After the Publish PR is merged, the CI/CD pipeline will automatically:

- **Trigger the Build and Publish**  
  The pipeline will build the updated packages and publish them to npm.
- **Update the Repository**  
  The changeset files used to generate this release will be removed, and the updated changelog will be committed to the repository.

### Final Steps

After the pipeline completes:

- **Verify the Release**  
  Check the npm registry to ensure that the new versions have been successfully published.
- **Changelog Confirmation**  
  Review the repository to confirm that the changelog has been updated with the latest changes.

### Conclusion

This process ensures that versioning and changelog management are handled consistently across the project. By following these guidelines, we can maintain a clear and organized release process, making it easy for developers to understand the history of changes and for users to keep their dependencies up to date.

If you have any questions or run into issues during the process, please reach out to the maintainers for assistance.
