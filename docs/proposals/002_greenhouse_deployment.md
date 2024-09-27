# Proposal: Enhanced Deployment Strategy for Greenhouse

**Date:** 2024-09-25  
**Author(s):** Andreas Pfau  
**Status:** Draft

---

## 1. Problem Statement

The previous deployment process for our standalone applications relied on a CDN "assets-server" to decouple changes. Each update was uploaded to the assets-server after all tests were passed and the package was built, allowing the target site to load apps via script tags. This facilitated independent development and continuous deployment of each app, including Greenhouse.

However, managing these individual assets became cumbersome. We have transitioned to a new approach where all applications are packaged into a single Docker image. This image is version-tagged and uploaded to the GitHub Registry, from which deployment to production is initiated. A pull request (PR) for UI version changes is created in the backend repository, and deployment occurs after approval.

Currently, changesets must be manually created, triggering an automatic PR. Once approved, a workflow builds the image and uploads it. This proposal aims to explore how we can improve and automate this process. My initial idea is to gather feedback from users and backend team members, break tasks down, and associate them with a release. Once all tasks are completed, the image will be built. While changesets are currently in use, we may consider leveraging `semantic-release` for this purpose.

---

## 2. Objectives & Goals

- **Automate Changeset Creation:** Reduce manual steps in the current process.
- **Streamline Deployment Workflow:** Create a seamless process for image creation and deployment.
- **Integrate Feedback Mechanisms:** Incorporate user and stakeholder feedback into the release process.
- **Explore `semantic-release`:** Investigate the use of `semantic-release` for automated versioning and changelog management.

---

## 3. Constraints & Assumptions

**Constraints:**

- Integration with the existing CI/CD pipeline for Greenhouse is mandatory.
- Deployment must ensure system stability and minimize downtime.
- Workflow changes should align with current development practices.

**Assumptions:**

- Developers will adhere to commit message conventions essential for automation.
- The current infrastructure can support Docker image hosting.
- The transition will be phased to minimize disruption.

---

## 4. Proposed Solutions

### 4.1 Solution 1: Automate Changeset Creation

**Description:**

Implement an automated process for generating changesets to reduce manual input and streamline workflow.

**Pros:**

- Decreases manual errors in changeset creation.
- Accelerates deployment timelines.

**Cons:**

- Requires initial setup and adjustment of existing processes.

**Evaluation:**

> This solution effectively addresses the need for automation in the changeset process, enhancing deployment efficiency.

---

### 4.2 Solution 2: Integrate `semantic-release`

**Description:**

Explore the integration of `semantic-release` for automated versioning and changelog generation based on user feedback and completed tasks.

**Pros:**

- Automates versioning, reducing manual effort.
- Enhances release clarity through structured changelogs.

**Cons:**

- Requires commitment to follow new commit message conventions.
- Initial learning curve for team members.

**Evaluation:**

> Integrating `semantic-release` could greatly enhance our deployment process, but its success relies on team adaptation.

---

### 4.3 Solution 3: Enhanced CI/CD Pipeline Integration

**Description:**

Integrate automation and `semantic-release` into the CI/CD pipeline for streamlined image building and deployment.

**Pros:**

- Ensures only tested code is deployed.
- Simplifies the overall workflow for production updates.

**Cons:**

- May require additional resources for enhanced CI/CD maintenance.
- Complexity in merging new processes with established workflows.

**Evaluation:**

> This comprehensive approach could streamline our deployment pipeline, ensuring that all steps are automated and thoroughly tested.

---

## 5. Discussion & Feedback

- **Team Feedback:** Some team members have raised concerns about the learning curve associated with Docker and `semantic-release`.
- **Stakeholder Comments:** We need to ensure the reliability of automated rollback mechanisms for handling deployment failures effectively.

---

## 6. Recommendation

> The recommended approach is to automate changeset creation, integrate user feedback mechanisms, and explore the use of `semantic-release` to enhance the deployment process for Greenhouse and associated apps. This combination has the potential to significantly improve efficiency, reliability, and responsiveness to user needs.

---

## 7. Next Steps

- **Feedback Collection:** Gather insights from users and backend team members to identify specific requirements for task breakdown.
- **Training Sessions:** Organize training on Docker and `semantic-release` to ensure the team is well-prepared.
- **Pilot Project:** Set up a pilot project to test the new deployment workflow with automated changeset creation and `semantic-release`.
- **Performance Monitoring:** Monitor the pilot's performance and gather feedback for further refinements.

---

## 8. References

- [Docker Documentation](https://docs.docker.com/)
- [Semantic Release Documentation](https://semantic-release.gitbook.io/semantic-release/)
- [Continuous Integration and Continuous Deployment Overview](https://www.atlassian.com/continuous-delivery/ci-vs-ci)
