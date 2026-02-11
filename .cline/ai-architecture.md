# AI-Assisted Architecture Guidelines

These rules are designed for AI-assisted IDEs (e.g., Antigravity with Gemini 3) generating or refactoring code in this Astro + TypeScript project.

## Project Goal

Create a high-performance, SEO-optimized landing page built with Astro and TypeScript.

## How AI Should Think

When generating or refactoring code, follow this workflow:

1. Confirm understanding of the requirements.
2. Propose a high-level design first.
3. Break down implementation into clear steps.
4. Produce code incrementally with checks at each stage.

When asked to auto-generate code, always:

- Provide module boundaries and data flow.
- Respect Astro’s static rendering by default.
- Hydrate only when strictly needed.
- Aim for minimal client-side JavaScript.

## Response Format (for AI)

Require the AI to answer in this structure:

- Summary of task before generating code.
- Proposed component structure.
- List of constraints and assumptions.
- Code snippet that meets requirements.
- Explanation of choices and alternatives.
