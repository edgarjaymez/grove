# Grove

Grove is a Svelte 5 component library and design system. It publishes components, design tokens, fonts, and styles as an npm package (`grove`).

## Tech Stack

- **Framework:** Svelte 5 (runes) + SvelteKit
- **Language:** TypeScript (strict mode, NodeNext resolution)
- **Package Manager:** pnpm
- **Bundling:** Vite + `@sveltejs/package`
- **Tokens:** Terrazzo CLI (`@terrazzo/cli`) with DTCG format
- **Testing:** Vitest (unit/component) + Playwright (e2e)
- **Storybook:** v10 with Svelte CSF, a11y addon
- **Linting:** ESLint (flat config) + Prettier

## Commands

| Task | Command |
|------|---------|
| Dev server | `pnpm dev` |
| Build library | `pnpm build` |
| Type check | `pnpm check` |
| Lint | `pnpm lint` |
| Format | `pnpm format` |
| Unit tests | `pnpm test:unit` |
| E2E tests | `pnpm test:e2e` |
| All tests | `pnpm test` |
| Storybook | `pnpm storybook` |
| Build tokens | `pnpm build-tokens` |

## Project Structure

```
src/
├── lib/                    # Published library code
│   ├── components/         # Svelte components
│   │   └── ComponentName/
│   │       ├── ComponentName.svelte
│   │       └── index.ts    # Barrel export
│   ├── fonts/              # Font files + fonts.css
│   ├── styles/             # Global CSS (reset, globals, typography)
│   ├── tokens/             # Design tokens (JSON source + generated tokens.css)
│   └── index.ts            # Main library entry point
├── routes/                 # Demo/showcase SvelteKit app
└── stories/                # Storybook stories
```

## Code Style

- **Formatting:** Tabs, single quotes, no trailing commas, 100-char print width
- **Components:** PascalCase directories and filenames
- **Props interfaces:** Prefixed with `I` (e.g., `IIcon`, `IIsotype`)
- **CSS:** Scoped styles in components, reference design tokens via CSS custom properties — never hardcode colors, spacing, or font values
- **Color space:** OKLCH throughout the token system
- **Exports:** Barrel pattern — each component has an `index.ts`, all re-exported from `src/lib/index.ts`

## Component Conventions

Every component follows this structure:

```svelte
<script lang="ts">
  interface IComponentName {
    class?: ClassValue;
    // props...
  }

  let { class: className, ...rest }: IComponentName = $props();
</script>

<!-- markup -->

<style>
  /* scoped styles using design tokens */
</style>
```

- Use Svelte 5 runes: `$props()`, `$state()`, `$derived()`, `$effect()`
- Use TypeScript for all component logic
- Reference design tokens as CSS custom properties (e.g., `var(--semantic-color-surface-brand-summit)`)
- Always support an optional `class` prop for consumer-side styling

## Design System — Subagent Orchestration

When building or modifying a component, or making any visual/composition decision, **spawn a subagent** (Task tool, `general-purpose` type) to consult the design system. Do NOT load the full design system into the main conversation.

### When to spawn

- Creating a new component
- Modifying styles, colors, surfaces, or layout of an existing component
- Making decisions about elevation, typography, or spacing
- Reviewing visual correctness of existing code

### Subagent prompt template

```
You are the Grove design system consultant. Your job is to return structured design guidance.

Read the relevant skill files from .claude/commands/ for this task:
- Reference skills: color.md, elevation.md, text-on.md, typography.md, spacing.md, borders.md, shadows.md
- Composite skills: build-surface.md (for containers), build-interactive.md (for buttons/inputs)

Only read the files relevant to the task — not all of them.

Return structured output:
1. COMPOSITION TREE — the surface nesting with exact CSS custom property names
2. TOKENS — every token the component needs (surface, text, border, shadow, spacing, typography)
3. CHECKLIST — verified do/don't items from the composition rules

Use Svelte MCP tools (list-sections, get-documentation, svelte-autofixer) if you need Svelte framework guidance.

Task: {describe the current visual task}
```

### Manual slash commands

These are also available as standalone commands for quick reference:

| Command | Purpose |
|---------|---------|
| `/color` | Primitive palette, usage rules |
| `/elevation` | Tracks, depths, composition rules |
| `/text-on` | Text color pairing by surface |
| `/typography` | Font families, sizes, weights, line heights |
| `/spacing` | Soft grid, layout grid, breakpoints |
| `/borders` | Border width, radius, border-around, divider-on |
| `/shadows` | Shadow structure, Terrace-only rule |
| `/build-surface` | Composite: build a card, banner, section |
| `/build-interactive` | Composite: build a button, link, input |

## Design Token System

Tokens are organized in `src/lib/tokens/` as DTCG JSON files:

- **border/** — border-radius, border-width
- **effects/** — drop shadows (light/dark)
- **palette/** — primitive colors + semantic colors (light/dark)
- **spacing/** — soft grid, responsive grid, breakpoints
- **text/** — font families, weights, sizes, line heights, letter spacing, typography

The generated `tokens.css` is the single source of truth — never edit it manually. Edit the JSON source files and run `pnpm build-tokens`.

## Svelte MCP Server

A Svelte MCP server (`@sveltejs/mcp`) is configured for AI-assisted development. Available tools:

1. **list-sections** — Discover available Svelte/SvelteKit documentation sections. Use this first when working on Svelte topics.
2. **get-documentation** — Fetch full documentation for specific sections. After `list-sections`, fetch all sections relevant to the task.
3. **svelte-autofixer** — Analyze Svelte code for issues. Run this on all Svelte code before finalizing. Keep calling until no issues remain.
4. **playground-link** — Generate a Svelte Playground link. Only offer after code is complete, and never if code was written to project files.
