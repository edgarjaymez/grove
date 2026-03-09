# Write a Storybook Story

Use this guide whenever writing a `.stories.svelte` file for a Grove component. Follow all conventions strictly.

---

## File conventions

- **Location:** Co-located with the component — `src/lib/components/ComponentName/ComponentName.stories.svelte`
- **Filename:** `ComponentName.stories.svelte` (PascalCase, matches component name)
- **Format:** Svelte CSF using `@storybook/addon-svelte-csf`

---

## Required stories (minimum set)

Every story file must include:

| Story name | Purpose |
|---|---|
| `Default` | All required props, all optional props at their default values. This is the canonical baseline. |
| `Playground` | Only add when `Default` hard-codes specific args in the story itself (e.g. `args={{ variant: 'filled' }}`). `Playground` then provides a clean slate without those overrides. **Omit if all defaults already live in `defineMeta.args`** — in that case Default and Playground are identical and Playground adds no value. |
| One story per significant **variant/state** | e.g. `Tonal`, `Outlined`, `Ghost`, `Disabled`, `With Icon`, `Loading` |

---

## Template

```svelte
<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { fn } from 'storybook/test';
	import ComponentName from './ComponentName.svelte';

	const { Story } = defineMeta({
		title: 'Components/ComponentName',        // mirror folder structure: Components/, Primitives/, etc.
		component: ComponentName,
		tags: ['autodocs'],
		argTypes: {
			// Enumerate union props as select controls
			variant: {
				control: { type: 'select' },
				options: ['filled', 'tonal', 'outlined', 'ghost']
			},
			// Use 'color' matcher for color props (matched by preview.ts regex)
			// Use 'boolean' control for flags
			disabled: { control: 'boolean' }
		},
		args: {
			// Set shared defaults used across all stories
			text: 'Label',
			onclick: fn()        // wrap all event handler props with fn()
		}
	});
</script>

<!-- Default: all required props, defaults for optional -->
<Story name="Default" args={{ variant: 'filled', color: 'accent', size: 'lg' }} />

<!-- One story per meaningful visual/behavioral state -->
<Story name="Tonal" args={{ variant: 'tonal' }} />
<Story name="Outlined" args={{ variant: 'outlined' }} />
<Story name="Disabled" args={{ disabled: true }} />
```

---

## argTypes rules

- **Union string props** (`variant`, `color`, `size`) → `control: { type: 'select' }, options: [...]`
- **Boolean props** → `control: 'boolean'`
- **Event handlers** (`onclick`, `onchange`) → wrap default value in `fn()`, not in `argTypes`
- **Color props** → no `argTypes` override needed; `preview.ts` already matches `/(background|color)$/i`
- **`class` prop** → always hide it: `class: { table: { disable: true } }` — it's for consumer-side styling, not Storybook controls. Without this, Storybook auto-infers it and it jumps position when other props get values in specific stories.
- **Do not** add `argTypes` for props that work fine with Storybook's auto-inference (strings, numbers)

---

## `title` naming — mirror folder structure

| Folder | Title prefix |
|---|---|
| `src/lib/components/` | `Components/` |
| `src/lib/primitives/` | `Primitives/` |
| `src/lib/layout/` | `Layout/` |

Example: `src/lib/components/Button/` → `title: 'Components/Button'`

---

## Story naming conventions

- Use **human-readable sentence case**: `"With Icon"`, `"Disabled"`, `"Gray color"`
- Name after the **prop value being demonstrated**, not the prop name: `"Tonal"` not `"variant-tonal"`
- `Default` is always the first story
- Group size stories together: `"Large"`, `"Medium"`, `"Small"`

---

## Environment

Global CSS, tokens, and fonts are already imported in `.storybook/preview.ts`. Do not import them again in story files. Components will render with full token support automatically.

---

## Checklist before finalising

- [ ] File is co-located with the component (`ComponentName/ComponentName.stories.svelte`)
- [ ] `title` mirrors the folder path
- [ ] `tags: ['autodocs']` is set
- [ ] All union props have `select` controls with full `options` arrays
- [ ] All event handler props use `fn()` in shared `args`
- [ ] A `Default` story exists with all required props provided
- [ ] One story per meaningful variant/state
- [ ] No CSS or token imports — handled by `preview.ts`
