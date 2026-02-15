# Grove Typography System

Return the correct typography tokens for the task described below.

## Font Families

| Token | CSS Property | Value | Usage |
|-------|-------------|-------|-------|
| `font-family/sans-serif` | `--font-family-sans-serif` | Switzer | Body text, UI elements |
| `font-family/serif` | `--font-family-display` | Cakra | Display, headings, marketing |
| `font-family/icons-regular` | `--font-family-icons-regular` | Phosphor | Icons (outline) |
| `font-family/icons-fill` | `--font-family-icons-fill` | Phosphor-Fill | Icons (solid) |

## Font Weights

| Token | CSS Property | Value |
|-------|-------------|-------|
| `extra-light` | `--font-weight-normal-extra-light` | 200 |
| `regular` | `--font-weight-normal-regular` | 400 |
| `semi-bold` | `--font-weight-normal-semi-bold` | 600 |

Italic variants available for all weights.

## Font Size Scale (Digital)

| Token | CSS Property | Size | Usage |
|-------|-------------|------|-------|
| `2xs` | `--font-size-2xs` | 10px | Fine print |
| `xs` | `--font-size-xs` | 12px | Captions, labels |
| `sm` | `--font-size-sm` | 14px | Secondary text |
| `base` | `--font-size-base` | 16px | Body text |
| `md` | `--font-size-md` | 20px | Large body, small headings |
| `lg` | `--font-size-lg` | 24px | Headings |
| `xl` | `--font-size-xl` | 32px | Section headings |
| `2xl` | `--font-size-2xl` | 40px | Page headings |
| `3xl` | `--font-size-3xl` | 80px | Hero text |
| `4xl` | `--font-size-4xl` | 240px | Display |

## Line Height

Two modes — use single-line for labels/buttons, multi-line for paragraphs.

| Size | Single-line | Multi-line |
|------|-------------|------------|
| `2xs` | 12px | 16px |
| `xs` | 16px | 20px |
| `sm` | 16px | 20px |
| `base` | 20px | 24px |
| `md` | 24px | 28px |
| `lg` | 28px | 32px |
| `xl` | 36px | 40px |
| `2xl` | 44px | 48px |
| `3xl` | 88px | 96px |
| `4xl` | 264px | 304px |

CSS: `--line-height-single-line-{size}` / `--line-height-multi-line-{size}`

## Letter Spacing

| Token | CSS Property | Value | Usage |
|-------|-------------|-------|-------|
| `tight` | `--letter-spacing-tight` | -2px | Display text, Cakra headings |
| `normal` | `--letter-spacing-normal` | 0px | Default |
| `loose` | `--letter-spacing-loose` | 2px | All caps labels |
| `extra-loose` | `--letter-spacing-extra-loose` | 4px | Spaced headings |

## Typography Classes

The `typography.css` stylesheet provides utility classes:

**Hierarchy:** hero, display, title, heading, subheading, base, subtle, quote, label, caption, footnote

**Variants:** singleLine, multiLine, emphasis (semibold)

**Usage:** `<h1 class="hero singleline">` / `<p class="base multiline">`

## Rules

- Cakra (display) is for headings and marketing — never for body text
- Switzer (sans-serif) is the default for all UI text
- Always pair font-size with the matching line-height mode
- Use `tight` letter spacing with Cakra, `normal` with Switzer

## Task

$ARGUMENTS
