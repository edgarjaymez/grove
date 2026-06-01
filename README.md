# Grove

[![npm version](https://img.shields.io/npm/v/@edgarjaymez/grove)](https://www.npmjs.com/package/@edgarjaymez/grove)
![license](https://img.shields.io/npm/l/@edgarjaymez/grove)

Grove is an agentic design system. It ships `gv-*` custom elements with Lit, design tokens, fonts, and global styles as an npm package.

[Documentation & component explorer →](https://grove.edgarjaymez.com)

## Installation

```sh
npm install @edgarjaymez/grove lit
```

> `lit` is a peer dependency and must be installed alongside Grove. Grove ships standard ES modules and keeps `lit` external, so your bundler resolves a single shared Lit instance.

## Usage

### Components

Importing the package registers every `gv-*` custom element — each element self-registers via Lit's `@customElement`:

```js
import '@edgarjaymez/grove';
```

```html
<gv-button text="Hello"></gv-button>
```

Or import a component class for a typed reference (useful for refs, instance typing, or subclassing) — importing it also registers its `gv-*` element:

```js
import { Button } from '@edgarjaymez/grove';
```

### Styles & fonts

Import the foundation stylesheet once at your app's root, plus the fonts:

```js
import '@edgarjaymez/grove/grove.css'; // tokens + globals + typography + effects
import '@edgarjaymez/grove/fonts.css'; // @font-face declarations
```

If you only need the design tokens (the CSS custom properties) without globals, typography, or effects:

```js
import '@edgarjaymez/grove/tokens.css';
```

> `grove.css` already includes `tokens.css` — import one or the other, not both.

Then reference tokens as CSS custom properties:

```css
.my-element {
	background-color: var(--semantic-color-surface-ground);
	color: var(--semantic-color-text-on-ground-base);
	padding: var(--soft-grid-16);
}
```

### Package contents

| Import path                     | Contents                                                                |
| ------------------------------- | ----------------------------------------------------------------------- |
| `@edgarjaymez/grove`            | All components + element classes, `*Metadata` objects, `componentReset` |
| `@edgarjaymez/grove/grove.css`  | Foundation: design tokens + globals + typography + effects              |
| `@edgarjaymez/grove/tokens.css` | Design tokens only (CSS custom properties)                              |
| `@edgarjaymez/grove/fonts.css`  | `@font-face` declarations                                               |
| `@edgarjaymez/grove/fonts/*`    | Raw font files (`woff` / `woff2`)                                       |

Fonts shipped: **Cakra** (display), **Inclusive Sans** (sans-serif, regular + italic), and **Phosphor** / **Phosphor-Fill** (icons).

## Components

| Tag                          | Class                 |
| ---------------------------- | --------------------- |
| `<gv-button>`                | `Button`              |
| `<gv-checkbox>`              | `Checkbox`            |
| `<gv-color-swatch>`          | `ColorSwatch`         |
| `<gv-icon>`                  | `Icon`                |
| `<gv-icon-button>`           | `IconButton`          |
| `<gv-isotype>`               | `Isotype`             |
| `<gv-text-input>`            | `TextInput`           |
| `<gv-texture>`               | `Texture`             |
| `<gv-todo-category-toggler>` | `ToDoCategoryToggler` |

## TypeScript

Grove ships type declarations (`.d.ts`) — no extra `@types` package needed. Each element augments `HTMLElementTagNameMap`, so DOM queries are typed automatically:

```ts
const button = document.querySelector('gv-button'); // Button | null
```

Importing a component class also gives you its type for props and instances.

## Framework usage

`gv-*` are standard custom elements, so they work in React (19+), Vue, Svelte, or plain HTML — anywhere the DOM is available.

### Astro

Import the CSS in the frontmatter and components in a `<script>` tag (Lit elements use browser APIs and must run client-side):

```astro
---
import '@edgarjaymez/grove/grove.css';
import '@edgarjaymez/grove/fonts.css';
---

<script>
	import '@edgarjaymez/grove';
</script>

<gv-button text="Hello"></gv-button>
```

For SSR support add the [`@astrojs/lit`](https://docs.astro.build/en/guides/integrations-guide/lit/) integration.

## AI metadata

Grove is built as an agentic design system: alongside each component it exports a `*Metadata` object that describes how and when to use that component — for AI agents and spec-driven UI generation.

```js
import { ButtonMetadata } from '@edgarjaymez/grove';
```

Each metadata object includes the component's name, category, and description, plus a `usage` block (use cases, required props, and common composition patterns). Feed these to an LLM or codegen tool so generated UIs use Grove components correctly.

## Development

```sh
pnpm install
```

| Task          | Command             |
| ------------- | ------------------- |
| Build library | `pnpm build`        |
| Type check    | `pnpm check`        |
| Lint          | `pnpm lint`         |
| Format        | `pnpm format`       |
| Unit tests    | `pnpm test:unit`    |
| Storybook     | `pnpm storybook`    |
| Build tokens  | `pnpm build-tokens` |

## License

MIT
