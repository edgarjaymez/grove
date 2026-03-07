# Build an Interactive Element

Use this checklist to build buttons, links, inputs, toggles, or any interactive component. Read the referenced skill files for full token details.

## Required Context

Read these skills before proceeding:
- `.claude/commands/elevation.md` — Summit/Aurora behavior, composition rules
- `.claude/commands/text-on.md` — text roles available on Summit/Aurora
- `.claude/commands/borders.md` — border-around tokens, radius for pills/capsules
- `.claude/commands/typography.md` — font size, weight, line height for labels
- `.claude/commands/spacing.md` — internal padding

## Checklist

Walk through each step and return structured output for every decision.

### 1. Identify the parent surface
- What surface does this element sit on?
- This determines the valid track and depth.

### 2. Choose element type and track

**High-priority action (primary button, CTA):**
- Track: brand or accent
- Depth: Summit
- Hover: Aurora

**Secondary action (secondary button):**
- Track: gray
- Depth: Summit
- Hover: Aurora

**Destructive action (delete, remove):**
- Track: danger
- Depth: Summit
- Hover: Aurora

**Inline link:**
- No surface change — use `text-on/{parent-track}/{parent-depth}/unvisited-link`
- Only on Ground, Terrace, or Path (never on Summit/Aurora)

**Input field:**
- Surface: same track as parent, or gray
- Border: `--semantic-color-border-around-{track}-{depth}`
- Background: typically Ground or Terrace

### 3. Verify composition rules
- [ ] Summit element is deeper than parent surface
- [ ] If parent is Terrace, Summit is valid (skipping Path is OK)
- [ ] If parent is brand/accent, interactive is same track or gray
- [ ] Aurora is hover state only — not a resting state

### 4. Assign text-on tokens (Summit/Aurora)
- Summit and Aurora only support:
  - [ ] `base` — primary label text
  - [ ] `subtle` — secondary/supporting text
- No `emphasis`, no links on Summit/Aurora

### 5. Typography for labels

Use the composite `font` shorthand token — never set `font-size`, `line-height`, or `font-family` individually:

```css
font: var(--typography-single-line-{scale}-{variant});
letter-spacing: var(--letter-spacing-base); /* always set separately */
```

- [ ] Choose the appropriate `--typography-single-line-{scale}-{variant}` token from the typography system
- [ ] Always set `letter-spacing` separately as it is not part of the CSS `font` shorthand

### 6. Border and shape
- [ ] Border color: `--semantic-color-border-around-{track}-{depth}` (if bordered style)
- [ ] Radius by shape:
  - Rectangular button: `--border-radius-base` (8px) or `--border-radius-md` (12px)
  - Pill button: `--border-radius-6xl` (40px) or `--border-radius-8xl` (48px)
  - Input field: `--border-radius-base` (8px)
- [ ] Border width: `--border-width-base` (1px) for bordered, `--border-width-none` for filled

### 7. Spacing
- [ ] Horizontal padding: `--soft-grid-16` to `--soft-grid-24` (typical for buttons)
- [ ] Vertical padding: `--soft-grid-8` to `--soft-grid-12` (typical for buttons)
- [ ] Gap between icon and label: `--soft-grid-8`

### 8. Shadow (optional)
- [ ] Summit elements that need visual lift: `drop-shadow-{track}-summit`
- [ ] Don't combine with heavy borders on the same element
- [ ] Aurora (hover) inherits the shadow from Summit — don't redefine it

### 9. States
- [ ] Default: own surface/style
- [ ] Hover: Aurora surface (`--semantic-color-surface-{track}-aurora`) + aurora text + drop shadow; transition: `300ms`
- [ ] Active: same as hover but no drop shadow
- [ ] Focus: handled by the global surface-scoped CSS system — do NOT declare focus styles in the component
- [ ] Disabled: `opacity: 0.5` + `cursor: not-allowed` — do NOT use `pointer-events: none` (cursor must remain visible)

**Outlined style extra rules:**
- Compensate vertical padding for border width to preserve height: `calc(spacing - var(--border-width-base))`
- On hover/active: set `border-color: transparent` (keep border in DOM to preserve box model)

## Output Format

```
ELEMENT: {type} ({track}/{depth})
PARENT: {parent surface}

TOKENS:
  Default surface:  --semantic-color-surface-{track}-summit
  Hover surface:    --semantic-color-surface-{track}-aurora
  Label text:       --semantic-color-text-on-{track}-summit-base
  Label (hover):    --semantic-color-text-on-{track}-aurora-base
  Border:           --semantic-color-border-around-{track}-summit (if bordered)
  Radius:           --border-radius-{size}
  Font:             --typography-single-line-{scale}-{variant} (composite shorthand)
  Letter spacing:   --letter-spacing-base
  Padding:          --soft-grid-{h} / --soft-grid-{v}
  Shadow:           drop-shadow-{track}-summit (optional)

STATES:
  Default:  own surface + base text
  Hover:    aurora surface + aurora text + drop shadow (300ms transition)
  Active:   aurora surface + aurora text + no shadow
  Focus:    global system — no styles declared in component
  Disabled: opacity 0.5 + cursor not-allowed

CHECKLIST:
  [x] Summit deeper than parent
  [x] Aurora for hover only
  [x] No emphasis/links on Summit
  ...
```

## Task

$ARGUMENTS
