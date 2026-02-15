# Grove Borders & Dividers

Return the correct border and divider tokens for the task described below.

## Border Width

| Token | CSS Property | Value | Usage |
|-------|-------------|-------|-------|
| `none` | `--border-width-none` | 0px | No border |
| `hairline` | `--border-width-hairline` | 0.5px | Subtle dividers |
| `base` | `--border-width-base` | 1px | Default borders |
| `heavy` | `--border-width-heavy` | 2px | Emphasized borders |
| `thick` | `--border-width-thick` | 4px | Strong visual weight |

## Border Radius

| Token | CSS Property | Value | Usage |
|-------|-------------|-------|-------|
| `none` | `--border-radius-none` | 0px | Sharp corners |
| `sm` | `--border-radius-sm` | 4px | Small elements, tags |
| `base` | `--border-radius-base` | 8px | Default |
| `md` | `--border-radius-md` | 12px | Cards |
| `lg` | `--border-radius-lg` | 16px | Large cards |
| `xl` | `--border-radius-xl` | 20px | Modals |
| `2xl` | `--border-radius-2xl` | 24px | Large containers |
| `3xl` | `--border-radius-3xl` | 28px | Hero elements |
| `4xl` | `--border-radius-4xl` | 32px | Full rounded |
| `6xl` | `--border-radius-6xl` | 40px | Pills |
| `8xl` | `--border-radius-8xl` | 48px | Large pills |
| `10xl` | `--border-radius-10xl` | 56px | Capsules |
| `12xl` | `--border-radius-12xl` | 64px | Full capsules |

## Border-around (Component Edges)

Used for component boundaries: input fields, cards, containers.

**CSS pattern:** `--semantic-color-border-around-{track}-{depth}`

- Ground: `--semantic-color-border-around-ground`
- Others: `--semantic-color-border-around-{track}-{depth}` (e.g., `--semantic-color-border-around-gray-terrace`)

One value per surface — no role hierarchy.

## Divider-on (Content Separators)

Used for separating content within a surface: list items, table rows.

**CSS pattern:** `--semantic-color-divider-on-{track}-{depth}`

- Ground: `--semantic-color-divider-on-ground`
- Others: `--semantic-color-divider-on-{track}-{depth}` (e.g., `--semantic-color-divider-on-gray-terrace`)

One value per surface — no role hierarchy.

## Rules

- Always pair border-around and divider-on tokens with the correct surface
- Border-around is for component edges (inputs, cards) — divider-on is for internal separators (list items, table rows)
- Use `base` (1px) width for most borders, `hairline` (0.5px) for subtle dividers
- Use `md` (12px) radius for cards, `xl` (20px) for modals, `6xl`+ for pills/capsules

## Task

$ARGUMENTS
