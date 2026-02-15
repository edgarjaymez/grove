# Build a Surface / Container

Use this checklist to build cards, banners, sections, or any container component. Read the referenced skill files for full token details.

## Required Context

Read these skills before proceeding:
- `.claude/commands/elevation.md` — track/depth rules, composition rules
- `.claude/commands/text-on.md` — text color pairing for each surface
- `.claude/commands/borders.md` — border-around and divider-on tokens
- `.claude/commands/shadows.md` — shadow tokens (Terrace only)
- `.claude/commands/spacing.md` — padding, gaps, margins

## Checklist

Walk through each step and return structured output for every decision.

### 1. Identify the parent surface
- What surface does this container sit on? (Ground, or another track/depth?)
- This determines valid starting depths for the new surface.

### 2. Choose track and depth
- Which track? (brand, accent, gray, danger, success, information)
- Which depth? Must be deeper than parent. Prefer one step deeper.
- Verify against composition rules:
  - [ ] Depth progresses forward (no backward, no same-depth)
  - [ ] If new track inside existing track, depth changed
  - [ ] Brand/Accent don't contain Danger/Success/Information
  - [ ] If modal/popover, reset to Ground

### 3. Assign text-on tokens
- For each text element on this surface, assign the correct token:
  - [ ] Headings -> `emphasis` (Ground/Terrace/Path only)
  - [ ] Body text -> `base`
  - [ ] Captions/hints -> `subtle`
  - [ ] Links -> `unvisited-link` / `visited-link` (Ground/Terrace/Path only)
  - [ ] No emphasis or links on Summit/Aurora

### 4. Assign border tokens
- [ ] Component edge: `--semantic-color-border-around-{track}-{depth}`
- [ ] Internal separators: `--semantic-color-divider-on-{track}-{depth}`
- [ ] Choose border-width (default: `base` / 1px)
- [ ] Choose border-radius (cards: `md` / 12px, large cards: `lg` / 16px)

### 5. Apply shadow (Terrace only)
- [ ] If Terrace surface and needs visual lift: `--shadow-{track}-terrace`
- [ ] If not Terrace: no shadow

### 6. Apply spacing
- [ ] Internal padding from soft grid tokens
- [ ] Gap between children from soft grid tokens
- [ ] Margin/gap relative to siblings

### 7. Nested children
- For any child containers or interactive elements inside this surface, repeat from step 1 using this surface as the new parent.

## Output Format

```
COMPOSITION TREE:
  {parent} -> {surface} -> {children...}

TOKENS:
  Surface:  --semantic-color-surface-{track}-{depth}
  Text:     --semantic-color-text-on-{track}-{depth}-{role} (for each role used)
  Border:   --semantic-color-border-around-{track}-{depth}
  Divider:  --semantic-color-divider-on-{track}-{depth} (if needed)
  Shadow:   --shadow-{track}-terrace (if Terrace)
  Radius:   --border-radius-{size}
  Padding:  --soft-grid-{n}
  Gap:      --soft-grid-{n}

CHECKLIST:
  [x] Depth progresses forward
  [x] Text roles match depth availability
  [x] Shadow only on Terrace
  ...
```

## Task

$ARGUMENTS
