# Grove — Agent Guidelines

This file provides instructions for AI agents working on the Grove codebase.

## Overview

Grove is a Svelte 5 component library and design system published as an npm package. It includes components, design tokens (DTCG format via Terrazzo), fonts, and global styles.

## Before You Start

- Read `CLAUDE.md` for full project context, conventions, and structure.
- Use `pnpm` for all package management — never `npm` or `yarn`.
- Run `pnpm check` before considering any Svelte/TypeScript work complete.
- Run `pnpm lint` to validate formatting and linting rules.

## Adding a New Component

1. Create `src/lib/components/ComponentName/ComponentName.svelte`
2. Create `src/lib/components/ComponentName/index.ts` with a barrel export:
   ```ts
   export { default as ComponentName } from './ComponentName.svelte';
   ```
3. Add the export to `src/lib/index.ts`:
   ```ts
   export { ComponentName } from './components/ComponentName/index.js';
   ```
4. Define a props interface prefixed with `I` (e.g., `IComponentName`) using Svelte 5 `$props()`.
5. Use design tokens via CSS custom properties — never hardcode colors, spacing, or fonts.
6. Run the `svelte-autofixer` MCP tool on all new Svelte code until it returns no issues.

## Design System Skills

Design system guidance lives in `.claude/commands/` as atomic skill files. Consult these when making visual or composition decisions.

### Reference skills (by topic)

| File | Topic |
|------|-------|
| `.claude/commands/color.md` | Primitive palette, semantic token rules |
| `.claude/commands/elevation.md` | Tracks, depths, composition rules |
| `.claude/commands/text-on.md` | Text color pairing by surface |
| `.claude/commands/typography.md` | Font families, sizes, weights, line heights |
| `.claude/commands/spacing.md` | Soft grid, layout grid, breakpoints |
| `.claude/commands/borders.md` | Border width, radius, border-around, divider-on |
| `.claude/commands/shadows.md` | Shadow structure, Terrace-only rule |

### Composite skills (by task)

| File | Use when |
|------|----------|
| `.claude/commands/build-surface.md` | Building cards, banners, sections, containers |
| `.claude/commands/build-interactive.md` | Building buttons, links, inputs, toggles |

Read the relevant files for your task — not all of them. Return structured output: composition tree, token list, and composition checklist.

## Writing Tests

- **Component tests:** `src/lib/components/ComponentName/ComponentName.svelte.spec.ts` — run in browser via Playwright (`@vitest/browser-playwright`).
- **Unit tests:** `src/**/*.spec.ts` (non-`.svelte.`) — run in Node.
- **E2E tests:** `e2e/` directory — Playwright against the built preview app.
- All tests require assertions (`expect.requireAssertions: true`).

## Working with Design Tokens

- Token source files are DTCG JSON in `src/lib/tokens/{category}/`.
- `src/lib/tokens/tokens.css` is generated — **never edit it manually**.
- After modifying token JSON files, run `pnpm build-tokens` to regenerate.
- The resolver at `src/lib/tokens/main.resolver.json` defines sets and modifiers (theme, breakpoint, media).

## Code Style

- Tabs, single quotes, no trailing commas, 100-char print width.
- PascalCase for component directories and filenames.
- Scoped `<style>` blocks in components.
- TypeScript for all logic — strict mode is enabled.

## Svelte MCP Server

Use the `@sveltejs/mcp` tools when working on Svelte code:

1. **list-sections** — Discover documentation topics (call first).
2. **get-documentation** — Fetch relevant docs based on the task.
3. **svelte-autofixer** — Validate Svelte code (call repeatedly until clean).
4. **playground-link** — Generate playground links (only when asked, never for project files).
