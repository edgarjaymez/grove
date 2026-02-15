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
- [ ] Font family: `--font-family-sans-serif` (Switzer)
- [ ] Font size: typically `sm` (14px) or `base` (16px) for buttons
- [ ] Font weight: `--font-weight-normal-semi-bold` for primary, `--font-weight-normal-regular` for secondary
- [ ] Line height: single-line mode (`--line-height-single-line-{size}`)
- [ ] Letter spacing: `normal` (Switzer default)

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

### 8. States
- [ ] Default: Summit surface
- [ ] Hover: Aurora surface (`--semantic-color-surface-{track}-aurora`)
- [ ] Focus: define focus ring (typically `--border-width-heavy` with track color)
- [ ] Disabled: gray/terrace surface with `text-on/gray/terrace/subtle`

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
  Font:             --font-family-sans-serif
  Font size:        --font-size-{size}
  Font weight:      --font-weight-normal-{weight}
  Line height:      --line-height-single-line-{size}
  Padding:          --soft-grid-{h} / --soft-grid-{v}

STATES:
  Default:  summit surface + base text
  Hover:    aurora surface + base text
  Focus:    {focus ring definition}
  Disabled: gray/terrace + subtle text

CHECKLIST:
  [x] Summit deeper than parent
  [x] Aurora for hover only
  [x] No emphasis/links on Summit
  ...
```

## Task

$ARGUMENTS
