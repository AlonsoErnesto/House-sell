# AI Code Quality Guidelines

These rules ensure generated and refactored code is maintainable, consistent, and follows modern standards.

## Language Requirements

- All code must be TypeScript.
- Meaningful types over `any`.
- Strict null checks and type-safe practices.

## Refactor Prompts

When refactoring ask:

- "Refactor this without changing behavior."
- "Reduce cyclomatic complexity."
- "Rename identifiers for clarity."

## Naming and Structure

- Use domain-specific names.
- One concept per function or component.
- Prefer pure functions where possible.

## Tests and Validation

Generated code should include:

- Unit tests for core logic.
- Simple end-to-end examples for pages/components.
- Error and edge case incorporation.

## Developer Review

After code generation, ask the AI to:

1. Identify potential issues.
2. Suggest improvements prioritized by maintability and performance.
