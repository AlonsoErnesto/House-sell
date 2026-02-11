# Astro + Landing Page AI Rules

This file guides AI behavior specifically for Astro + TypeScript landing pages.

## Rendering and Hydration

- Astro defaults to static HTML; use `client:*` only when users interact.
- Prefer partial hydration with `client:visible` or `client:idle`.

## Layout and Components

- Pages should be semantic HTML with a logical heading structure.
- Use Astro slots for composition.
- Keep styles scoped and minimal.

## Performance

- Avoid large dependencies.
- Bundle minimal JS.
- Prioritize responsive images and lazy loading.

## SEO and Accessibility

- Use semantic tags and proper metadata.
- Include meaningful `alt` text for images.
- Ensure interactive elements meet accessibility guidelines.

## Prompt Protocols

When asking AI to build a page:

1. Define purpose of page section.
2. Provide expected content and layout rules.
3. Include one or more examples if possible.
4. Ask AI to generate tests or validation code if applicable.
