# Grove Shadow System

Return the correct shadow tokens for the task described below.

## Core Rule

Shadows are available for **Terrace surfaces only**. No other depth gets shadows.

## Structure

Each shadow uses **two layers** for a softer, more natural appearance.

**Token pattern:** `--shadow-{track}-terrace`

The shadow uses the track's own color family for cohesive integration.

### Layer Structure

| Property | Layer 1 (ambient) | Layer 2 (direct) |
|----------|-------------------|------------------|
| Color | Track color @ 4% | Track color (darker) @ 8% |
| Offset X | 16px | 4px |
| Offset Y | 16px | 4px |
| Blur | 32px | 16px |
| Spread | 4px | 2px |

### Example: Brand Terrace Shadow

| Layer | Color | Offset | Blur | Spread |
|-------|-------|--------|------|--------|
| Layer 1 | `#416943` @ 4% | 16px 16px | 32px | 4px |
| Layer 2 | `#264D28` @ 8% | 4px 4px | 16px | 2px |

Every track (brand, accent, gray, danger, success, information) follows this same two-layer structure with its own color family.

## CSS Usage

```css
box-shadow: var(--shadow-{track}-terrace);
```

Examples:
- `box-shadow: var(--shadow-brand-terrace);`
- `box-shadow: var(--shadow-gray-terrace);`

## Rules

- Only apply shadows to Terrace surfaces — never to Ground, Path, Summit, or Aurora
- Shadows are optional on Terrace — not every card needs one
- Use shadows to lift a Terrace surface when it needs visual prominence
- Each track's shadow uses its own color for cohesion — don't mix shadow tracks with surface tracks

## Task

$ARGUMENTS
