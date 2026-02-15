# Grove Text-on System

Return the correct text color tokens for the surfaces in the task described below.

## Text Roles

| Role | Purpose |
|------|---------|
| **emphasis** | Highest hierarchy. Headings, key content. |
| **base** | Default body text. |
| **subtle** | De-emphasized. Captions, hints, timestamps. |
| **unvisited-link** | Link, not yet clicked. |
| **visited-link** | Link, already clicked. |

## Role Availability by Depth

| Role | Ground | Terrace | Path | Summit | Aurora |
|------|--------|---------|------|--------|--------|
| emphasis | Yes | Yes | Yes | No | No |
| base | Yes | Yes | Yes | Yes | Yes |
| subtle | Yes | Yes | Yes | Yes | Yes |
| unvisited-link | Yes | Yes | Yes | No | No |
| visited-link | Yes | Yes | Yes | No | No |

Summit and Aurora are terminal — only base and subtle for labels.

## CSS Custom Properties

- Ground: `--semantic-color-text-on-ground-{role}`
- Others: `--semantic-color-text-on-{track}-{depth}-{role}`

**Examples:**
- `--semantic-color-text-on-ground-base` (body text on ground)
- `--semantic-color-text-on-brand-terrace-emphasis` (heading on brand terrace)
- `--semantic-color-text-on-gray-summit-base` (label on gray summit)
- `--semantic-color-text-on-accent-summit-subtle` (secondary label on accent button)

## Rules

- Always pair text-on tokens with the correct surface. Text on `brand/terrace` must use `text-on/brand/terrace/*`.
- Never use `emphasis` or link roles on Summit or Aurora surfaces.
- Every visible text element must have an explicit text-on token — never use raw color primitives.

## Output Format

For each surface in the composition, list the text tokens:

```
Surface: --semantic-color-surface-gray-terrace
  Heading: --semantic-color-text-on-gray-terrace-emphasis
  Body:    --semantic-color-text-on-gray-terrace-base
  Caption: --semantic-color-text-on-gray-terrace-subtle
```

## Task

$ARGUMENTS
