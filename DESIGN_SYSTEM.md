# Grove Design System

**Version 1.0 — Light Mode**

---

## Table of Contents

1. [Brand Identity](#brand-identity)
2. [Design Principles](#design-principles)
3. [Color System](#color-system)
4. [Elevation](#elevation)
5. [Text-on](#text-on)
6. [Borders & Dividers](#borders--dividers)
7. [Typography](#typography)
8. [Spacing & Grid](#spacing--grid)
9. [Border Width & Radius](#border-width--radius)
10. [Shadows](#shadows)
11. [Token Reference](#token-reference)

---

## Brand Identity

### Name

**Grove** — A design system rooted in craft.

The name evokes the space between wild forest and manicured garden: structured freedom, designed organicity, cultivated wildness. Grove is where living systems take root.

### Voice

**Calm confidence.** Clear, unhurried prose. The quiet authority of someone who has done the work.

- Warm but not casual
- Approachable but not folksy
- Helpful but not hovering
- Patient growth over rapid scaling
- Depth over breadth

Write like helping a colleague, not instructing a stranger. Use "you" freely. Short sentences. Lead with what matters. Include the why.

### Typography

**Display:** Cakra — Experimental display typeface with unique personality, contemporary vibe, bold cuts, geometric tension.

**Body:** Switzer — Clean grotesque with understated character, professional without sterile, warm without soft.

**Icons:** Phosphor — Available in Regular and Fill variants.

### Primary Colors

| Role | Name | Hex | Description |
|------|------|-----|-------------|
| Brand | Grove Grass | `#416943` | Earthy, mossy green. Maturity, groundedness, organic sophistication. |
| Accent | Grove Prune | `#7F3999` | Rich purple. Used sparingly for high-priority actions and links. |
| Ground | Parchment | `#FAF8F2` | Warm off-white. The surface everything sits on. |
| Dark Base | Obsidian | `#0B0B0B` | Near-black. Primary text on light surfaces. |

### What Grove Is Not

- **Not precious or twee.** No leaf illustrations, acorns, eco clichés. Borrows from nature conceptually, not literally.
- **Not cold or corporate.** Despite being a system, it has warmth.
- **Not maximalist.** Restraint is a core value. White space is clarity, not emptiness.
- **Not trendy.** Aims for longevity over novelty.
- **Not apologetic.** Makes decisions and stands by them.
- **Not exclusive.** Exists to help people build.

---

## Design Principles

### Living and Intentional

Grove feels organic but not decorative, structured but not rigid. Every element breathes, but nothing is arbitrary. The system grows with purpose—each addition earns its place.

### Quiet Confidence

Grove doesn't shout. It communicates through restraint, precision, and considered choices. Visual hierarchy emerges from thoughtful contrast, not competing for attention. When something stands out, it matters.

### Rooted Flexibility

Like a tree that bends without breaking, Grove provides strong foundations that adapt to context. The system has opinions but not dogma. It guides without constraining, offering clear paths while allowing for intentional deviation.

### Honest Craft

Every token, every value, every relationship exists because it was tested and refined. Grove favors substance over style, durability over trends. The work shows care without showing off.

---

## Color System

### Primitive Colors

Primitive colors are the raw palette. All semantic colors derive from these primitives. Primitives should only be used directly for SVG illustrations—use semantic tokens for all other applications.

#### Base

| Token | Hex | Name |
|-------|-----|------|
| `base/light` | `#FAF8F2` | Parchment |
| `base/dark` | `#0B0B0B` | Obsidian |

#### Brand (Green)

| Token | Hex | Name |
|-------|-----|------|
| `brand/50` | `#DAEFDA` | Honeydew |
| `brand/100` | `#C2E2C2` | Celadon |
| `brand/200` | `#9AC59A` | Sage |
| `brand/300` | `#7BA57C` | Fern |
| `brand/400` | `#5E865F` | Laurel |
| `brand/500` | `#416943` | Grove Grass |
| `brand/600` | `#345B35` | Forest |
| `brand/700` | `#264D28` | Pine |
| `brand/800` | `#193F1B` | Juniper |
| `brand/900` | `#0A320F` | Spruce |
| `brand/950` | `#002503` | Evergreen |

#### Accent (Purple)

| Token | Hex | Name |
|-------|-----|------|
| `accent/50` | `#FED8FF` | Thistle |
| `accent/100` | `#F7BFFF` | Lilac |
| `accent/200` | `#DF95FC` | Wisteria |
| `accent/300` | `#BE76DA` | Orchid |
| `accent/400` | `#9E57B9` | Heather |
| `accent/500` | `#7F3999` | Grove Prune |
| `accent/600` | `#702989` | Plum |
| `accent/700` | `#62187A` | Damson |
| `accent/800` | `#53026A` | Aubergine |
| `accent/900` | `#45005B` | Nightshade |
| `accent/950` | `#330046` | Blackberry |

#### Gray (Rock)

| Token | Hex | Name |
|-------|-----|------|
| `gray/50` | `#EAE7E4` | Chalk |
| `gray/100` | `#DBD7D2` | Limestone |
| `gray/200` | `#BCB6B1` | Pebble |
| `gray/300` | `#9C9792` | Flint |
| `gray/400` | `#7E7974` | Slate |
| `gray/500` | `#615D58` | Granite |
| `gray/600` | `#534F4A` | Shale |
| `gray/700` | `#46423D` | Basalt |
| `gray/800` | `#393530` | Coal |
| `gray/900` | `#2C2824` | Onyx |
| `gray/950` | `#201C18` | Site |

#### Danger (Red)

| Token | Hex | Name |
|-------|-----|------|
| `danger/50` | `#FFDAD7` | Blush |
| `danger/100` | `#FFC1BE` | Rose |
| `danger/200` | `#FF8D8B` | Coral |
| `danger/300` | `#E66E6D` | Poppy |
| `danger/400` | `#C34F51` | Vermilion |
| `danger/500` | `#9E2B32` | Rust |
| `danger/600` | `#901D27` | Crimson |
| `danger/700` | `#80041A` | Carmine |
| `danger/800` | `#6F000C` | Burgundy |
| `danger/900` | `#590006` | Maroon |
| `danger/950` | `#440002` | Oxblood |

#### Success (Aqua Green)

| Token | Hex | Name |
|-------|-----|------|
| `success/50` | `#C2F5E0` | Seafoam |
| `success/100` | `#A3E9CD` | Spearmint |
| `success/200` | `#72CCAB` | Opal |
| `success/300` | `#51AC8C` | Cove |
| `success/400` | `#2E8D6F` | Serpentine |
| `success/500` | `#006F53` | Myrtle |
| `success/600` | `#006145` | Mangrove |
| `success/700` | `#005238` | Kelp |
| `success/800` | `#00432C` | Reef |
| `success/900` | `#003421` | Grotto |
| `success/950` | `#002616` | Seabed |

#### Information (Blue)

| Token | Hex | Name |
|-------|-----|------|
| `information/50` | `#C3EFFF` | Mist |
| `information/100` | `#A6E0FF` | Sky |
| `information/200` | `#77C1F0` | Azure |
| `information/300` | `#58A1CF` | Cerulean |
| `information/400` | `#3882AE` | Cobalt |
| `information/500` | `#12648F` | Lapis |
| `information/600` | `#005680` | Sapphire |
| `information/700` | `#004871` | Navy |
| `information/800` | `#003A62` | Indigo |
| `information/900` | `#002D4F` | Midnight |
| `information/950` | `#00203C` | Ink |

---

## Elevation

### Overview

Elevation in Grove uses **tracks**—color lanes that define which surfaces are available at each depth level. You pick a track, then follow its depth progression.

### Tracks

There are six tracks:

- **Brand** — Grove Grass. Primary brand expression.
- **Accent** — Grove Prune. High-priority actions, links.
- **Gray** — Neutral surfaces. The default for most UI.
- **Danger** — Error states, destructive actions.
- **Success** — Confirmation, positive feedback.
- **Information** — Notices, helpful context.

### Depths

| Depth | Token Value | Role |
|-------|-------------|------|
| **Ground** | `base/light` | The base surface. Where everything begins. |
| **Terrace** | `100` | Light surface. Containers, cards, sections. |
| **Path** | `200` | Mid surface. Elements inside containers. *Brand and Gray only.* |
| **Summit** | `500` | Dark surface. High-priority interactive elements. |
| **Aurora** | `700` | Hover state for Summit. Not a container. |

### Track Definitions (Light Mode)

#### Brand Track

| Depth | Token | Hex | Name |
|-------|-------|-----|------|
| Terrace | `surface/brand/terrace` | `#C2E2C2` | Celadon |
| Path | `surface/brand/path` | `#9AC59A` | Sage |
| Summit | `surface/brand/summit` | `#416943` | Grove Grass |
| Aurora | `surface/brand/aurora` | `#264D28` | Pine |

#### Accent Track

| Depth | Token | Hex | Name |
|-------|-------|-----|------|
| Terrace | `surface/accent/terrace` | `#F7BFFF` | Lilac |
| Summit | `surface/accent/summit` | `#7F3999` | Grove Prune |
| Aurora | `surface/accent/aurora` | `#62187A` | Damson |

*Accent has no Path depth.*

#### Gray Track

| Depth | Token | Hex | Name |
|-------|-------|-----|------|
| Terrace | `surface/gray/terrace` | `#DBD7D2` | Limestone |
| Path | `surface/gray/path` | `#BCB6B1` | Pebble |
| Summit | `surface/gray/summit` | `#615D58` | Granite |
| Aurora | `surface/gray/aurora` | `#46423D` | Basalt |

#### Danger Track

| Depth | Token | Hex | Name |
|-------|-------|-----|------|
| Terrace | `surface/danger/terrace` | `#FFC1BE` | Rose |
| Summit | `surface/danger/summit` | `#9E2B32` | Rust |
| Aurora | `surface/danger/aurora` | `#80041A` | Carmine |

*Danger has no Path depth.*

#### Success Track

| Depth | Token | Hex | Name |
|-------|-------|-----|------|
| Terrace | `surface/success/terrace` | `#A3E9CD` | Spearmint |
| Summit | `surface/success/summit` | `#006F53` | Myrtle |
| Aurora | `surface/success/aurora` | `#005238` | Kelp |

*Success has no Path depth.*

#### Information Track

| Depth | Token | Hex | Name |
|-------|-------|-----|------|
| Terrace | `surface/information/terrace` | `#A6E0FF` | Sky |
| Summit | `surface/information/summit` | `#12648F` | Lapis |
| Aurora | `surface/information/aurora` | `#004871` | Navy |

*Information has no Path depth.*

### Depth Availability

| Depth | Brand | Accent | Gray | Danger | Success | Information |
|-------|-------|--------|------|--------|---------|-------------|
| Ground | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Terrace | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Path | ✓ | ✗ | ✓ | ✗ | ✗ | ✗ |
| Summit | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Aurora | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |

### Composition Rules

#### 1. Ground is the base.

Every layout starts on Ground (`surface/ground`). All tracks can be placed on Ground.

#### 2. Within a track, depths progress forward.

Move from lighter to darker: Terrace → Path → Summit. You can skip depths but never go backward within the same track.

**Correct:**
```
brand/terrace → brand/path → brand/summit
brand/terrace → brand/summit (skipping path)
```

**Wrong:**
```
brand/path → brand/terrace (going backward)
brand/terrace → brand/terrace (restarting)
```

#### 3. Starting a new track requires a depth change.

When nesting a new track inside a parent, the new track cannot start at the same depth. This ensures visible contrast between surfaces.

Preferably, go one depth deeper. Going further is allowed but not recommended.

**From Terrace:** Start new track at Path (preferred) or Summit.

**From Path:** Start new track at Summit (preferred) or return to Ground.

**From Summit:** Return to Ground.

**Examples:**
```
gray/terrace
  └── brand/path ✓ (one depth over, preferred)

gray/terrace
  └── brand/summit ✓ (allowed, not preferred)

gray/terrace
  └── brand/terrace ✗ (same depth, no contrast)

brand/summit
  └── gray/ground ✓ (return to ground)
```

#### 4. Gray is universal.

Gray can appear inside any track at any depth. It's the neutral foundation.

#### 5. Accent can appear inside Gray.

Accent elements (like buttons) can be placed within gray surfaces for emphasis.

#### 6. Brand and semantic tracks don't mix.

Brand and Accent tracks should not contain Danger, Success, or Information tracks inside them. Semantic colors communicate specific states and shouldn't be nested within brand expression.

#### 7. Aurora is a state, not a container.

Aurora is the hover state for Summit elements. It never contains other elements. Only Summit changes surface color on hover.

#### 8. Floating elements return to Ground.

Modals, popovers, and tooltips reset context. They start fresh from Ground.

### UI Color Distribution

A guideline for visual balance:

- **60%** — Ground
- **25%** — Terrace
- **10%** — Path / Summit
- **5%** — Aurora (interactive states only)

---

## Text-on

Every surface has paired text colors that ensure readable contrast.

### Text Roles

| Role | Purpose |
|------|---------|
| **Emphasis** | Highest hierarchy. Headings, key content. |
| **Base** | Default body text. |
| **Subtle** | De-emphasized. Captions, hints, timestamps. |
| **Unvisited-link** | Link, not yet clicked. |
| **Visited-link** | Link, already clicked. |

### Role Availability by Depth

| Role | Ground | Terrace | Path | Summit | Aurora |
|------|--------|---------|------|--------|--------|
| Emphasis | ✓ | ✓ | ✗ | ✗ | ✗ |
| Base | ✓ | ✓ | ✓ | ✓ | ✓ |
| Subtle | ✓ | ✓ | ✓ | ✓ | ✓ |
| Unvisited-link | ✓ | ✓ | ✓ | ✗ | ✗ |
| Visited-link | ✓ | ✓ | ✓ | ✗ | ✗ |

Summit and Aurora are terminal elements. They need base and subtle for labels, but not emphasis or links.

### Token Structure

```
text-on/ground/{role}
text-on/{track}/{depth}/{role}
```

**Examples:**
- `text-on/ground/base` — Body text on ground
- `text-on/brand/terrace/emphasis` — Heading on brand terrace
- `text-on/gray/summit/base` — Label on gray summit

---

## Borders & Dividers

### Border-around

Used for component edges: input fields, cards, containers.

```
border-around/ground
border-around/{track}/{depth}
```

### Divider-on

Used for separating content within a surface: list items, table rows.

```
divider-on/ground
divider-on/{track}/{depth}
```

Both provide a single value per surface—no role hierarchy.

---

## Typography

### Font Families

| Token | Value | Usage |
|-------|-------|-------|
| `font-family/sans-serif` | Switzer | Body text, UI elements |
| `font-family/serif` | Cakra | Display, headings, marketing |
| `font-family/icons-regular` | Phosphor | Icons (outline) |
| `font-family/icons-fill` | Phosphor-Fill | Icons (solid) |

### Font Weights

| Style | Token | Value |
|-------|-------|-------|
| Normal | `font-weight/normal/extra-light` | Extralight |
| Normal | `font-weight/normal/regular` | Regular |
| Normal | `font-weight/normal/semi-bold` | Semibold |
| Italic | `font-weight/italic/extra-light` | Extralight Italic |
| Italic | `font-weight/italic/regular` | Italic |
| Italic | `font-weight/italic/semi-bold` | Semibold Italic |

### Font Size Scale (Digital)

| Token | Size | Usage |
|-------|------|-------|
| `font-size/2xs` | 10px | Fine print |
| `font-size/xs` | 12px | Captions, labels |
| `font-size/sm` | 14px | Secondary text |
| `font-size/base` | 16px | Body text |
| `font-size/md` | 20px | Large body, small headings |
| `font-size/lg` | 24px | Headings |
| `font-size/xl` | 32px | Section headings |
| `font-size/2xl` | 40px | Page headings |
| `font-size/3xl` | 80px | Hero text |
| `font-size/4xl` | 240px | Display |

### Font Size Scale (Print)

| Token | Size |
|-------|------|
| `font-size/2xs` | 6pt |
| `font-size/xs` | 6pt |
| `font-size/sm` | 8pt |
| `font-size/base` | 8pt |
| `font-size/md` | 12pt |
| `font-size/lg` | 16pt |
| `font-size/xl` | 24pt |
| `font-size/2xl` | 32pt |
| `font-size/3xl` | 64pt |
| `font-size/4xl` | 192pt |

### Line Height

Two modes: **single-line** (labels, buttons) and **multi-line** (paragraphs).

#### Single-line (Digital)

| Token | Value |
|-------|-------|
| `line-height/single-line/2xs` | 12px |
| `line-height/single-line/xs` | 16px |
| `line-height/single-line/sm` | 16px |
| `line-height/single-line/base` | 20px |
| `line-height/single-line/md` | 24px |
| `line-height/single-line/lg` | 28px |
| `line-height/single-line/xl` | 36px |
| `line-height/single-line/2xl` | 44px |
| `line-height/single-line/3xl` | 88px |
| `line-height/single-line/4xl` | 264px |

#### Multi-line (Digital)

| Token | Value |
|-------|-------|
| `line-height/multi-line/2xs` | 16px |
| `line-height/multi-line/xs` | 20px |
| `line-height/multi-line/sm` | 20px |
| `line-height/multi-line/base` | 24px |
| `line-height/multi-line/md` | 28px |
| `line-height/multi-line/lg` | 32px |
| `line-height/multi-line/xl` | 40px |
| `line-height/multi-line/2xl` | 48px |
| `line-height/multi-line/3xl` | 96px |
| `line-height/multi-line/4xl` | 304px |

### Letter Spacing

| Token | Value | Usage |
|-------|-------|-------|
| `letter-spacing/tight` | -2px | Display text, Cakra headings |
| `letter-spacing/normal` | 0px | Default |
| `letter-spacing/loose` | 2px | All caps labels |
| `letter-spacing/extra-loose` | 4px | Spaced headings |

---

## Spacing & Grid

### Soft Grid

Spacing values for margins, padding, and gaps.

| Token | Value |
|-------|-------|
| `0` | 0px |
| `1` | 1px |
| `2` | 2px |
| `4` | 4px |
| `6` | 6px |
| `8` | 8px |
| `10` | 10px |
| `12` | 12px |
| `14` | 14px |
| `16` | 16px |
| `18` | 18px |
| `20` | 20px |
| `24` | 24px |
| `28` | 28px |
| `32` | 32px |
| `36` | 36px |
| `40` | 40px |
| `44` | 44px |
| `48` | 48px |
| `52` | 52px |
| `56` | 56px |
| `60` | 60px |
| `64` | 64px |
| `72` | 72px |
| `80` | 80px |
| `88` | 88px |
| `96` | 96px |

### Layout Grid

Two grid types: **system** (applications) and **landing** (marketing pages).

#### Base / Mobile (< 768px)

| Property | System | Landing |
|----------|--------|---------|
| Columns | 4 | 4 |
| Margin | 16px | 16px |
| Gutter | 16px | 16px |

#### Tablet (≥ 768px)

| Property | System | Landing |
|----------|--------|---------|
| Columns | 8 | 8 |
| Margin | 24px | 32px |
| Gutter | 16px | 24px |

#### Laptop (≥ 1280px)

| Property | System | Landing |
|----------|--------|---------|
| Columns | 12 | 12 |
| Margin | 32px | 64px |
| Gutter | 20px | 32px |

#### Desktop (≥ 1560px)

| Property | System | Landing |
|----------|--------|---------|
| Columns | 12 | 12 |
| Margin | 32px | 96px |
| Gutter | 24px | 48px |

---

## Border Width & Radius

### Border Width

| Token | Value | Usage |
|-------|-------|-------|
| `border-width/none` | 0px | No border |
| `border-width/hairline` | 0.5px | Subtle dividers |
| `border-width/base` | 1px | Default borders |
| `border-width/heavy` | 2px | Emphasized borders |
| `border-width/thick` | 4px | Strong visual weight |

### Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `border-radius/none` | 0px | Sharp corners |
| `border-radius/sm` | 4px | Small elements, tags |
| `border-radius/base` | 8px | Default |
| `border-radius/md` | 12px | Cards |
| `border-radius/lg` | 16px | Large cards |
| `border-radius/xl` | 20px | Modals |
| `border-radius/2xl` | 24px | Large containers |
| `border-radius/3xl` | 28px | Hero elements |
| `border-radius/4xl` | 32px | Full rounded |
| `border-radius/6xl` | 40px | Pills |
| `border-radius/8xl` | 48px | Large pills |
| `border-radius/10xl` | 56px | Capsules |
| `border-radius/12xl` | 64px | Full capsules |

---

## Shadows

Shadows are available for **Terrace** surfaces only. Each shadow uses two layers for softer, more natural appearance.

### Structure

```
shadow/{track}/terrace/layer-{n}/{property}
```

Properties: `color`, `offset-x`, `offset-y`, `blur`, `spread`

### Brand Terrace Shadow

| Layer | Color | Offset X | Offset Y | Blur | Spread |
|-------|-------|----------|----------|------|--------|
| Layer 1 | `#416943` @ 4% | 16px | 16px | 32px | 4px |
| Layer 2 | `#264D28` @ 8% | 4px | 4px | 16px | 2px |

Shadows use the track's own color family for cohesive integration. Each track has its own shadow definition following the same two-layer structure.

---

## Token Reference

### Collection Overview

| Collection | Modes | Description |
|------------|-------|-------------|
| `color` | Value | Primitive color palette |
| `semantic-color` | Light, Dark* | Surface, text-on, border-around, divider-on |
| `typography` | Digital, Print | Font size, line height, letter spacing |
| `font-family` | — | Typeface definitions |
| `font-weight` | Value | Weight names |
| `soft-grid` | — | Spacing scale |
| `grid` | Base, Tablet, Laptop, Desktop | Layout grid |
| `border-radius` | — | Corner radius scale |
| `border-width` | — | Stroke width scale |
| `shadow` | — | Shadow definitions |

*Dark mode values are placeholders. Structure is ready for integration.

### Naming Convention

```
{collection}/{category}/{variant}/{property}
```

**Examples:**
- `color/brand/500/value` → Primitive green
- `surface/brand/terrace` → Semantic surface
- `text-on/brand/terrace/base` → Text on surface
- `typography/font-size/base` → 16px
- `shadow/brand/terrace/layer-1/blur` → Shadow property

### File Structure

```
{collection}_{mode}.tokens.json
```

**Examples:**
- `color_tokens.json`
- `semantic-color_light_tokens.json`
- `semantic-color_dark_tokens.json`
- `typography_digital_tokens.json`
- `grid_tablet_tokens.json`

---

## Composition Examples

### Example 1: Card on Ground

```
Ground (surface/ground)
  └── gray/terrace (card)
        ├── text-on/gray/terrace/emphasis (heading)
        ├── text-on/gray/terrace/base (body)
        ├── text-on/gray/terrace/subtle (timestamp)
        └── accent/summit (button)
              └── text-on/accent/summit/base (label)
```

### Example 2: Brand Section

```
Ground (surface/ground)
  └── brand/terrace (hero section)
        ├── text-on/brand/terrace/emphasis (headline)
        ├── text-on/brand/terrace/base (description)
        └── brand/summit (primary action)
              └── text-on/brand/summit/base (label)
```

### Example 3: Nested Depth Progression

```
Ground (surface/ground)
  └── brand/terrace (card)
        └── brand/path (highlighted section)
              ├── text-on/brand/path/base (content)
              ├── text-on/brand/path/unvisited-link (link)
              └── brand/summit (action)
                    └── text-on/brand/summit/base (label)
```

### Example 4: Starting New Track (Correct Depth Change)

```
Ground (surface/ground)
  └── gray/terrace (card)
        └── brand/path (nested brand element, one depth over)
              └── brand/summit (action)
```

### Example 5: Danger Banner

```
Ground (surface/ground)
  └── danger/terrace (error banner)
        ├── text-on/danger/terrace/base (message)
        └── danger/summit (dismiss)
              └── text-on/danger/summit/base (label)
```

### Example 6: Modal (Context Reset)

```
[Page: brand/terrace → brand/path]
  └── [Modal opens — returns to Ground]
        └── Ground (surface/ground)
              └── gray/terrace (modal body)
                    ├── text-on/gray/terrace/emphasis (title)
                    ├── text-on/gray/terrace/base (content)
                    └── accent/summit (confirm)
```

### Example 7: Gray with Accent Button

```
Ground (surface/ground)
  └── gray/terrace (card)
        ├── text-on/gray/terrace/base (content)
        └── accent/summit (CTA button)
              └── text-on/accent/summit/base (label)
```

---

## Appendix: Dark Mode

*Dark mode token values are currently placeholders.*

The structure is identical to light mode. When dark mode values are finalized:

1. Update `semantic-color_dark_tokens.json` with correct mappings
2. Surface depths may map to different primitive values
3. Text-on values will adjust for light text on dark surfaces
4. Composition rules remain unchanged

---

*Grove Design System — Where living systems take root.*
