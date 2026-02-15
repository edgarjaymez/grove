# Grove Spacing & Grid System

Return the correct spacing and grid tokens for the task described below.

## Soft Grid

Spacing values for margins, padding, and gaps. Use these tokens — never hardcode pixel values.

| Token | CSS Property | Value |
|-------|-------------|-------|
| `0` | `--soft-grid-0` | 0px |
| `1` | `--soft-grid-1` | 1px |
| `2` | `--soft-grid-2` | 2px |
| `4` | `--soft-grid-4` | 4px |
| `6` | `--soft-grid-6` | 6px |
| `8` | `--soft-grid-8` | 8px |
| `10` | `--soft-grid-10` | 10px |
| `12` | `--soft-grid-12` | 12px |
| `14` | `--soft-grid-14` | 14px |
| `16` | `--soft-grid-16` | 16px |
| `18` | `--soft-grid-18` | 18px |
| `20` | `--soft-grid-20` | 20px |
| `24` | `--soft-grid-24` | 24px |
| `28` | `--soft-grid-28` | 28px |
| `32` | `--soft-grid-32` | 32px |
| `36` | `--soft-grid-36` | 36px |
| `40` | `--soft-grid-40` | 40px |
| `44` | `--soft-grid-44` | 44px |
| `48` | `--soft-grid-48` | 48px |
| `52`-`96` | `--soft-grid-{n}` | 52px-96px |

## Breakpoints

| Name | Min width |
|------|-----------|
| Mobile (base) | < 768px |
| Tablet | >= 768px |
| Laptop | >= 1280px |
| Desktop | >= 1560px |

## Layout Grid

Two grid types: **system** (applications) and **landing** (marketing pages).

### System Grid

| Property | Mobile | Tablet | Laptop | Desktop |
|----------|--------|--------|--------|---------|
| Columns | 4 | 8 | 12 | 12 |
| Margin | 16px | 24px | 32px | 32px |
| Gutter | 16px | 16px | 20px | 24px |

### Landing Grid

| Property | Mobile | Tablet | Laptop | Desktop |
|----------|--------|--------|--------|---------|
| Columns | 4 | 8 | 12 | 12 |
| Margin | 16px | 32px | 64px | 96px |
| Gutter | 16px | 24px | 32px | 48px |

CSS properties: `--grid-{type}-columns`, `--grid-{type}-margin`, `--grid-{type}-gutter`

## Rules

- Always use soft grid tokens for spacing — never arbitrary pixel values
- Use the system grid for application UI, landing grid for marketing pages
- Grid tokens are responsive — they change automatically at breakpoints via CSS media queries in `tokens.css`

## Task

$ARGUMENTS
