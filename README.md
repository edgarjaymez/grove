# Grove

Grove is a Lit 3 web component design system. It ships `gv-*` custom elements, design tokens, fonts, and global styles as an npm package.

## Installation

```sh
npm install @edgarjaymez/grove lit
```

> `lit` is a peer dependency and must be installed alongside Grove.

## Usage

### Import components

```js
import '@edgarjaymez/grove';
```

Or import individual components:

```js
import { Button, Checkbox, TextInput } from '@edgarjaymez/grove';
```

### Design tokens & fonts

```js
import '@edgarjaymez/grove/tokens.css';
import '@edgarjaymez/grove/fonts.css';
```

Then use tokens as CSS custom properties:

```css
.my-element {
	color: var(--color-accent);
	padding: var(--spacing-md);
}
```

### In Astro

Import CSS in the frontmatter, components in a `<script>` tag (Lit elements use browser APIs and must run client-side):

```astro
---
import '@edgarjaymez/grove/tokens.css';
import '@edgarjaymez/grove/fonts.css';
---

<script>
  import '@edgarjaymez/grove';
</script>

<gv-button text="Hello"></gv-button>
```

For SSR support add the [`@astrojs/lit`](https://docs.astro.build/en/guides/integrations-guide/lit/) integration.

## Components

| Tag                          | Class                 |
| ---------------------------- | --------------------- |
| `<gv-button>`                | `Button`              |
| `<gv-checkbox>`              | `Checkbox`            |
| `<gv-icon>`                  | `Icon`                |
| `<gv-icon-button>`           | `IconButton`          |
| `<gv-isotype>`               | `Isotype`             |
| `<gv-text-input>`            | `TextInput`           |
| `<gv-texture>`               | `Texture`             |
| `<gv-todo-category-toggler>` | `ToDoCategoryToggler` |

## Development

```sh
pnpm install
```

| Task                 | Command             |
| -------------------- | ------------------- |
| Build library        | `pnpm build`        |
| Build + publish lint | `pnpm prepack`      |
| Type check           | `pnpm check`        |
| Lint                 | `pnpm lint`         |
| Format               | `pnpm format`       |
| Unit tests           | `pnpm test:unit`    |
| Storybook            | `pnpm storybook`    |
| Build tokens         | `pnpm build-tokens` |

## Publishing

```sh
# First time — log in to npm
npm login

# Build, verify, and publish
pnpm prepack
pnpm publish --access public
```

The `--access public` flag is required for scoped packages.

For subsequent releases, bump the version first:

```sh
npm version patch   # bug fix
npm version minor   # new feature
npm version major   # breaking change

pnpm publish --access public
git push && git push --tags
```

## License

MIT
