# PR Manifesto

This document outlines the process for effective pull request management in the Juno repository.

## 1. Respect Scope

- Ensure all changes strictly adhere to the ticket’s acceptance criteria.
- Any deviations must be agreed upon with the Product Owner and documented as updates in the original ticket.

## 2. Summarise Changes

- Provide a comprehensive summary of changes and key technical decisions:
  - Highlight performance impacts, dependencies, and links to relevant documentation.
  - Use visuals to enhance clarity.
  - Include clear instructions for manual testing of complex or non-obvious edge cases.
- Keep PRs concise, well-organized, and easy to understand to enable swift reviews and merging. Remember that splitting functionality into smaller PRs can improve clarity and manageability.
- Use Draft PRs for early feedback and collaboration on work-in-progress code. Refrain from using them as a substitute for local testing to conserve CI/CD resources.

## 3. Prioritise Code Quality

- Develop code that is readable, efficient, and maintainable.
- Adhere to coding best practices such as clear naming conventions, modular design, and thorough documentation for complex logic.
- Follow established repository conventions and standards to ensure consistency.

## 4. Test Thoroughly

- Implement robust tests to verify functionality and support continuous maintenance.
- All contributors are responsible for the prevention of regressions by thoroughly testing new functionality, including manual runtime verification.
- When transferring an identified issue to a new ticket, investigate the root cause, confirm it’s outside the PR’s scope, and link the tickets for traceability.

## 5. Give Actionable and Prioritised Feedback

- Offer specific and constructive feedback using the "Praise, Question, Suggest" structure:
  - **Praise** positive aspects.
  - **Question** to gain understanding.
  - **Suggest** improvements with clear technical reasoning and examples.
- Only use 'Request changes' for critical issues impacting functionality, design or code quality, marking them as a "**(Required Change)**".
- Label all other feedback as a "**(Question)**" or "**(Non-Blocking Improvement)**".

## 6. Take Ownership

- Own your code, be prepared to explain your decisions, and be open to suggestions, recognizing the value of diverse perspectives in achieving best outcomes.

## 7. Address Comments

- Understand each PR comment and take one of four actions:
  - **Implement** changes.
  - **Ask** for clarification.
  - **Explain** your reasoning for a different approach.
  - **Defer** the change with reasoning (if not "requested") by:
    - Creating another PR within the same ticket's scope.
    - Creating a new ticket and linking it for traceability.
- Ensure the person who raised the comment, or if unavailable, another reviewer, resolves it.

## 8. Collaborate and Discuss Openly

- Engage directly with reviewers through PR comments or short alignment meetings to foster understanding and collaborative decision-making on technical conflicts.
- Reach a compromise on essential changes while keeping the scope and timeline in mind.
- For complex PRs or unresolved issues, agree to involve additional team members in "Tech Therapy" sessions to gain diverse insights and make informed technical decisions as a team.

## 9. Maintain Momentum

- Respond to comments and improvements promptly, maintaining an open dialogue on progress and acknowledging that complex PRs might require more time.
- Before an extended absence, assign ownership to another team member and leave a detailed comment outlining the current progress and any outstanding issues.

## 10. Keep Learning

- Recognise successful PRs and share lessons learnt in regular retrospectives, strengthening a culture of ongoing collaboration and improvement.
