# Grove Shadow System

Return the correct shadow tokens for the task described below.

## Core Rules

- Only apply shadows to **Terrace and Summit** surfaces — never to Ground, Path, or Aurora
- Shadows are optional — don't add if surface contrast already communicates depth
- Don't combine shadows with heavy borders on the same element — choose one signal
- Match the shadow track to the surface track (brand surface → brand shadow)

## Shadow Depths

Two depths, applied as CSS classes: `drop-shadow-{track}-{depth}`

Available tracks: `brand`, `accent`, `gray`, `danger`, `success`, `information`

| Depth | CSS class | Visual weight | Use for |
|-------|-----------|---------------|---------|
| **Summit** | `drop-shadow-{track}-summit` | Tight, balanced | Cards, panels, buttons, form inputs |
| **Terrace** | `drop-shadow-{track}-terrace` | Wide, airy | Modals, sheets, floating containers, popovers |

## Layer Structure

Each shadow uses two layers. Brand track shown — all tracks follow the same structure with their own hue.

| Depth | Layer | Offset X/Y | Blur | Spread | Opacity |
|-------|-------|------------|------|--------|---------|
| Summit | 1 | 4px / 4px | 16px | 2px | 4% |
| Summit | 2 | 1px / 1px | 4px | 1px | 12% |
| Terrace | 1 | 16px / 16px | 32px | 4px | 4% |
| Terrace | 2 | 4px / 4px | 16px | 2px | 8% |

## CSS Usage

Apply as HTML class:

```html
<!-- Card on a surface -->
<div class="drop-shadow-gray-summit">...</div>

<!-- Modal -->
<div class="drop-shadow-gray-terrace">...</div>

<!-- Brand button -->
<button class="drop-shadow-brand-summit">...</button>
```

## Task

$ARGUMENTS
