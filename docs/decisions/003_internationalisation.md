# Selection of Lingui for Internationalization

## Context

### Problem Statement

Juno and Aurora require internationalization support to serve users in multiple languages. We need a robust, maintainable solution that integrates well with our React/TypeScript/Vite stack while providing good developer experience and performance.

### Constraints

- Open Source Licence
- Should integrate seamlessly with Vite build system
- Need TypeScript compatibility
- Supports Server-Side Rendering
- Bundle size should be optimized
- Developer experience should be prioritized with good code readability

### Assumptions

- The application will support multiple languages from the start
- Translators may not be technical users
- The codebase should remain readable with i18n integration
- Automated extraction and compilation workflows are preferred

### Alternatives Considered

| Library           | Pros                                           | Cons                                              |
| ----------------- | ---------------------------------------------- | ------------------------------------------------- |
| **Paraglide JS**  | Fastest performance, compiled with Vite        | Maintenance in hands of a person, not a community |
| **React-i18next** | Well-established, runtime solution             | Manual key management, no compilation             |
| **Lingui**        | automatic extraction, compilation, text as key | Learning curve for team                           |
| **React-intl**    | Feature-rich, automatic extraction             | Verbose syntax, BSD-3 license                     |

## Decision

**We have decided to use Lingui as our internationalization library.**

### Rationale

- **Maintained**: Active development and community support
- **Vite Integration**: Native support for our build system
- **Natural Keys**: Use English sentences as keys instead of abstract identifiers
- **Developer Experience**: Content remains readable in source code
- **Flexible**: Support for both simple and complex translation scenarios
- **Tooling**: Integrated extraction and compilation via CLI

### Key Implementation Details

- Use `.po` (Portable Object) files for translations
- Implement natural language keys (English sentences as keys)
- Integrate extraction and compilation into Vite build process

## Consequences

### Benefits

**Developer Experience:**

- Natural language keys eliminate the need to invent abstract key names
- Source code remains highly readable with actual content visible
- Automatic extraction via CLI reduces manual maintenance

**Technical Advantages:**

- Compiled approach results in smaller bundle sizes through ID optimization
- Seamless Vite integration with compilation support
- `.po` file format is translator-friendly if we outsource the translation process
- Automatic unused string removal via compilation possible
- ESLint integration available for code quality

### Drawbacks

- Compilation step adds complexity to build process
- Splitting .po files per component is experimental

### Implementation Requirements

**Development Workflow**

**Proposed File Structure:**

```
├── locales/
│   ├── en/
│   │   ├── messages.js
│   │   └── messages.po
│   └── de/
│       ├── messages.js
│       └── messages.po
```

**Future Considerations:**

- Integration of `eslint-plugin-react/jsx-no-literals` to prevent hardcoded strings
- Setup of pre-commit hooks (Husky) for translation validation
- Implementation of automated extraction and compilation in CI/CD pipeline
- Potential integration with translation services (DeepL API, Crowdin)
- Component-specific translation file organization

## References

- [Lingui Documentation](https://lingui.dev/)
