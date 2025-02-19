# PR Manifesto

This document outlines the process for effective pull request management in the Juno repository.

## 1. Respect Scope

- Ensure all changes strictly adhere to the ticket’s acceptance criteria.
- Any deviations must be agreed upon with the Product Owner and documented as updates in the original ticket.

## 2. Summarise Changes

- Provide a comprehensive summary of changes and key technical decisions, highlighting performance impacts, dependencies, and links to relevant documentation.
- Include clear instructions for manual testing of complex or non-obvious edge cases.
- Use visuals to enhance clarity where appropriate.
- Keep PRs concise to facilitate efficient reviews and prompt merging.

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
- "Request changes" only for critical issues affecting functionality or code quality, and label other feedback as a "Question" or "Non-Blocking Improvement".

## 6. Take Ownership

- Own your code, be prepared to explain your decisions, and be open to suggestions, recognizing the value of diverse perspectives in achieving best outcomes.

## 7. Address Comments

- Understand each PR comment and take one of three actions:
  - **Implement** changes
  - **Ask** for clarification
  - **Explain** your reasoning for a different approach
  - **Defer** the change with reasoning (if not "requested") by:
    - Creating another PR within the same ticket's scope.
    - Creating a new ticket and linking it for traceability.
- Ensure the person who raised the comment, or if unavailable, another reviewer, resolves it.

## 8. Collaborate and Discuss Openly

- Engage directly with reviewers to foster understanding and collaborative decision-making on technical conflicts.
- Reach a compromise on essential changes while keeping the scope and timeline in mind.
- For complex PRs or unresolved issues, agree to involve additional team members in "tech therapy" sessions to gain diverse insights and make informed technical decisions as a team.

## 9. Maintain Momentum

- Respond to comments and improvements promptly, maintaining an open dialogue on progress and acknowledging that complex PRs might require more time.

## 10. Keep Learning

- Recognise successful PRs and share lessons learnt in regular retrospectives, strengthening a culture of ongoing collaboration and improvement.
