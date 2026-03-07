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

| Role      | Name        | Hex       | Description                                                          |
| --------- | ----------- | --------- | -------------------------------------------------------------------- |
| Brand     | Grove Grass | `#416943` | Earthy, mossy green. Maturity, groundedness, organic sophistication. |
| Accent    | Grove Prune | `#7F3999` | Rich purple. Used sparingly for high-priority actions and links.     |
| Ground    | Parchment   | `#FAF8F2` | Warm off-white. The surface everything sits on.                      |
| Dark Base | Obsidian    | `#0B0B0B` | Near-black. Primary text on light surfaces.                          |

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

### Design Intent

Grove's color system is built in **OKLCH** — a perceptually uniform color space where equal numeric steps produce equal perceived lightness differences. This means the `brand/300` swatch looks exactly as "halfway between light and mid" as `brand/600` does, regardless of the hue. It also allows mixing and transforming colors without producing muddy intermediates.

There are six color families, each with a distinct role in the design language:

| Family                 | Role                                                 | Dominance            |
| ---------------------- | ---------------------------------------------------- | -------------------- |
| **Gray**               | UI chrome, neutral containers, body text backgrounds | ~60% of all surfaces |
| **Brand** (Green)      | Identity moments, marketing, primary CTAs            | ~25%                 |
| **Accent** (Purple)    | Secondary interactive, creative elements             | ~10%                 |
| **Danger** (Red)       | Error states, destructive actions                    | ~5%                  |
| **Success** (Aqua)     | Confirmation, completed states                       | ~5%                  |
| **Information** (Blue) | Informational banners, helper text                   | ~5%                  |

Gray is the workhorse. Brand is used intentionally and sparingly to preserve its emotional weight. Accent is a complement to brand — use it for secondary interactive elements where brand would create too much visual competition. Danger, Success, and Information are reserved exclusively for their semantic meaning; never use them decoratively.

### When to Use Primitives vs Semantic Tokens

**Primitives** are the raw numbered values (`--color-brand-500`, `--color-gray-200`). They carry no meaning beyond their hue and lightness.

**Semantic tokens** are named by role (`--semantic-color-surface-brand-terrace`, `--semantic-color-text-on-gray-ground-base`). They encode the design decision.

| Use case                           | Token type   | Example                                       |
| ---------------------------------- | ------------ | --------------------------------------------- |
| SVG illustrations, isotypes, icons | Primitive    | `--color-brand-500`                           |
| Component backgrounds              | **Semantic** | `--semantic-color-surface-brand-terrace`      |
| Text on surfaces                   | **Semantic** | `--semantic-color-text-on-brand-terrace-base` |
| Borders and dividers               | **Semantic** | `--semantic-color-border-on-ground`           |
| Shadows                            | **Semantic** | `--drop-shadow-brand-summit`                  |

> **Rule:** If you find yourself picking a primitive for a UI element, stop and find the semantic token. Primitives are not responsive to dark mode; semantic tokens are.

### Cross-references

- **→ Elevation** — defines which semantic surface colors exist and at what depth
- **→ Text-on** — defines which text colors pair with each surface token

---

### Primitive Colors

Primitive colors are the raw palette. All semantic colors derive from these primitives. Primitives should only be used directly for SVG illustrations—use semantic tokens for all other applications.

#### Base

| Token        | Hex       | Name      |
| ------------ | --------- | --------- |
| `base/light` | `#FAF8F2` | Parchment |
| `base/dark`  | `#0B0B0B` | Obsidian  |

#### Brand (Green)

| Token       | Hex       | Name        |
| ----------- | --------- | ----------- |
| `brand/50`  | `#DAEFDA` | Honeydew    |
| `brand/100` | `#C2E2C2` | Celadon     |
| `brand/200` | `#9AC59A` | Sage        |
| `brand/300` | `#7BA57C` | Fern        |
| `brand/400` | `#5E865F` | Laurel      |
| `brand/500` | `#416943` | Grove Grass |
| `brand/600` | `#345B35` | Forest      |
| `brand/700` | `#264D28` | Pine        |
| `brand/800` | `#193F1B` | Juniper     |
| `brand/900` | `#0A320F` | Spruce      |
| `brand/950` | `#002503` | Evergreen   |

#### Accent (Purple)

| Token        | Hex       | Name        |
| ------------ | --------- | ----------- |
| `accent/50`  | `#FED8FF` | Thistle     |
| `accent/100` | `#F7BFFF` | Lilac       |
| `accent/200` | `#DF95FC` | Wisteria    |
| `accent/300` | `#BE76DA` | Orchid      |
| `accent/400` | `#9E57B9` | Heather     |
| `accent/500` | `#7F3999` | Grove Prune |
| `accent/600` | `#702989` | Plum        |
| `accent/700` | `#62187A` | Damson      |
| `accent/800` | `#53026A` | Aubergine   |
| `accent/900` | `#45005B` | Nightshade  |
| `accent/950` | `#330046` | Blackberry  |

#### Gray (Rock)

| Token      | Hex       | Name      |
| ---------- | --------- | --------- |
| `gray/50`  | `#EAE7E4` | Chalk     |
| `gray/100` | `#DBD7D2` | Limestone |
| `gray/200` | `#BCB6B1` | Pebble    |
| `gray/300` | `#9C9792` | Flint     |
| `gray/400` | `#7E7974` | Slate     |
| `gray/500` | `#615D58` | Granite   |
| `gray/600` | `#534F4A` | Shale     |
| `gray/700` | `#46423D` | Basalt    |
| `gray/800` | `#393530` | Coal      |
| `gray/900` | `#2C2824` | Onyx      |
| `gray/950` | `#201C18` | Site      |

#### Danger (Red)

| Token        | Hex       | Name      |
| ------------ | --------- | --------- |
| `danger/50`  | `#FFDAD7` | Blush     |
| `danger/100` | `#FFC1BE` | Rose      |
| `danger/200` | `#FF8D8B` | Coral     |
| `danger/300` | `#E66E6D` | Poppy     |
| `danger/400` | `#C34F51` | Vermilion |
| `danger/500` | `#9E2B32` | Rust      |
| `danger/600` | `#901D27` | Crimson   |
| `danger/700` | `#80041A` | Carmine   |
| `danger/800` | `#6F000C` | Burgundy  |
| `danger/900` | `#590006` | Maroon    |
| `danger/950` | `#440002` | Oxblood   |

#### Success (Aqua Green)

| Token         | Hex       | Name       |
| ------------- | --------- | ---------- |
| `success/50`  | `#C2F5E0` | Seafoam    |
| `success/100` | `#A3E9CD` | Spearmint  |
| `success/200` | `#72CCAB` | Opal       |
| `success/300` | `#51AC8C` | Cove       |
| `success/400` | `#2E8D6F` | Serpentine |
| `success/500` | `#006F53` | Myrtle     |
| `success/600` | `#006145` | Mangrove   |
| `success/700` | `#005238` | Kelp       |
| `success/800` | `#00432C` | Reef       |
| `success/900` | `#003421` | Grotto     |
| `success/950` | `#002616` | Seabed     |

#### Information (Blue)

| Token             | Hex       | Name     |
| ----------------- | --------- | -------- |
| `information/50`  | `#C3EFFF` | Mist     |
| `information/100` | `#A6E0FF` | Sky      |
| `information/200` | `#77C1F0` | Azure    |
| `information/300` | `#58A1CF` | Cerulean |
| `information/400` | `#3882AE` | Cobalt   |
| `information/500` | `#12648F` | Lapis    |
| `information/600` | `#005680` | Sapphire |
| `information/700` | `#004871` | Navy     |
| `information/800` | `#003A62` | Indigo   |
| `information/900` | `#002D4F` | Midnight |
| `information/950` | `#00203C` | Ink      |

---

## Elevation

### Design Intent

Free color picking leads to arbitrary compositions — a green card inside an orange section inside a purple page, with no systemic logic. Grove solves this with a **track + depth** model: you choose a color family (track) and a depth level, and the system provides exactly one valid surface color for that combination. This eliminates guesswork and ensures every surface composition is deliberate.

The depth axis (Ground → Terrace → Path → Summit) maps to perceived visual weight: lighter is flatter, darker is more prominent. The progression is always forward — a nested element must be darker than its parent within the same track, or start a new track from a lower depth.

### Aurora

**Aurora is not a container depth.** It is an interactive state — the hover/active variant of Summit. Never place other elements inside an Aurora surface. Only Summit-level interactive elements (buttons, chips, links) use Aurora. Apply it via `:hover` or `:active` CSS states only.

```css
.button-primary {
	background-color: var(--semantic-color-surface-brand-summit);
}
.button-primary:hover {
	background-color: var(--semantic-color-surface-brand-aurora);
}
```

### UI Color Distribution — Page Anatomy

The 60/25/10/5 guideline describes the visual proportion of color in a typical page:

```
┌─────────────────────────────────────────────────────────┐
│  GROUND (60%)  — page background, most of the viewport  │
│  ┌───────────────────────────────────────────────────┐  │
│  │  TERRACE (25%) — cards, sections, sidebars        │  │
│  │  ┌──────────────────────────────────────────┐     │  │
│  │  │  PATH / SUMMIT (10%) — nested elements,  │     │  │
│  │  │  buttons, highlighted rows               │     │  │
│  │  └──────────────────────────────────────────┘     │  │
│  └───────────────────────────────────────────────────┘  │
│  AURORA (5%) — hover/active states only                 │
└─────────────────────────────────────────────────────────┘
```

A page that uses Summit for 60% of its surface area will feel visually heavy and fatiguing. Reserve saturated, dark surfaces for elements that need immediate attention.

### Cross-references

- **→ Text-on** — once you've chosen a surface, find its paired text tokens
- **→ Shadows** — when to add shadows to Terrace and Summit surfaces
- **→ Borders & Dividers** — border and divider tokens per surface

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

| Depth       | Token Value  | Role                                                            |
| ----------- | ------------ | --------------------------------------------------------------- |
| **Ground**  | `base/light` | The base surface. Where everything begins.                      |
| **Terrace** | `100`        | Light surface. Containers, cards, sections.                     |
| **Path**    | `200`        | Mid surface. Elements inside containers. _Brand and Gray only._ |
| **Summit**  | `500`        | Dark surface. High-priority interactive elements.               |
| **Aurora**  | `700`        | Hover state for Summit. Not a container.                        |

### Track Definitions (Light Mode)

#### Brand Track

| Depth   | Token                   | Hex       | Name        |
| ------- | ----------------------- | --------- | ----------- |
| Terrace | `surface/brand/terrace` | `#C2E2C2` | Celadon     |
| Path    | `surface/brand/path`    | `#9AC59A` | Sage        |
| Summit  | `surface/brand/summit`  | `#416943` | Grove Grass |
| Aurora  | `surface/brand/aurora`  | `#264D28` | Pine        |

#### Accent Track

| Depth   | Token                    | Hex       | Name        |
| ------- | ------------------------ | --------- | ----------- |
| Terrace | `surface/accent/terrace` | `#F7BFFF` | Lilac       |
| Summit  | `surface/accent/summit`  | `#7F3999` | Grove Prune |
| Aurora  | `surface/accent/aurora`  | `#62187A` | Damson      |

_Accent has no Path depth._

#### Gray Track

| Depth   | Token                  | Hex       | Name      |
| ------- | ---------------------- | --------- | --------- |
| Terrace | `surface/gray/terrace` | `#DBD7D2` | Limestone |
| Path    | `surface/gray/path`    | `#BCB6B1` | Pebble    |
| Summit  | `surface/gray/summit`  | `#615D58` | Granite   |
| Aurora  | `surface/gray/aurora`  | `#46423D` | Basalt    |

#### Danger Track

| Depth   | Token                    | Hex       | Name    |
| ------- | ------------------------ | --------- | ------- |
| Terrace | `surface/danger/terrace` | `#FFC1BE` | Rose    |
| Summit  | `surface/danger/summit`  | `#9E2B32` | Rust    |
| Aurora  | `surface/danger/aurora`  | `#80041A` | Carmine |

_Danger has no Path depth._

#### Success Track

| Depth   | Token                     | Hex       | Name      |
| ------- | ------------------------- | --------- | --------- |
| Terrace | `surface/success/terrace` | `#A3E9CD` | Spearmint |
| Summit  | `surface/success/summit`  | `#006F53` | Myrtle    |
| Aurora  | `surface/success/aurora`  | `#005238` | Kelp      |

_Success has no Path depth._

#### Information Track

| Depth   | Token                         | Hex       | Name  |
| ------- | ----------------------------- | --------- | ----- |
| Terrace | `surface/information/terrace` | `#A6E0FF` | Sky   |
| Summit  | `surface/information/summit`  | `#12648F` | Lapis |
| Aurora  | `surface/information/aurora`  | `#004871` | Navy  |

_Information has no Path depth._

### Depth Availability

| Depth   | Brand | Accent | Gray | Danger | Success | Information |
| ------- | ----- | ------ | ---- | ------ | ------- | ----------- |
| Ground  | ✓     | ✓      | ✓    | ✓      | ✓       | ✓           |
| Terrace | ✓     | ✓      | ✓    | ✓      | ✓       | ✓           |
| Path    | ✓     | ✗      | ✓    | ✗      | ✗       | ✗           |
| Summit  | ✓     | ✓      | ✓    | ✓      | ✓       | ✓           |
| Aurora  | ✓     | ✓      | ✓    | ✓      | ✓       | ✓           |

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

| Role               | Purpose                                     |
| ------------------ | ------------------------------------------- |
| **Emphasis**       | Highest hierarchy. Headings, key content.   |
| **Base**           | Default body text.                          |
| **Subtle**         | De-emphasized. Captions, hints, timestamps. |
| **Unvisited-link** | Link, not yet clicked.                      |
| **Visited-link**   | Link, already clicked.                      |

### Role Availability by Depth

| Role           | Ground | Terrace | Path | Summit | Aurora |
| -------------- | ------ | ------- | ---- | ------ | ------ |
| Emphasis       | ✓      | ✓       | ✗    | ✗      | ✗      |
| Base           | ✓      | ✓       | ✓    | ✓      | ✓      |
| Subtle         | ✓      | ✓       | ✓    | ✓      | ✓      |
| Unvisited-link | ✓      | ✓       | ✓    | ✗      | ✗      |
| Visited-link   | ✓      | ✓       | ✓    | ✗      | ✗      |

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

### Design Intent

Grove's type system is built around two contrasting typefaces that never compete with each other: **Cakra** for expressive moments, **Switzer** for everything readable. The distinction is simple — if it serves communication, it's Switzer. If it expresses character, it's Cakra.

### Font Pairing Rules

| Family              | When to use                                                                               | When NOT to use                           |
| ------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------- |
| **Switzer** (sans)  | Body copy, UI labels, navigation, form fields, captions                                   | Full-page hero text, logotypes            |
| **Cakra** (display) | Hero headings, section titles in marketing contexts, the `hero` and `display` type styles | Body paragraphs, form labels, button text |

> **Rule:** Never use both Cakra and Switzer on adjacent lines within the same text block. The transition between expressive and functional is always at the component boundary, not mid-paragraph.

### Level Selection Guide

Use the composite typography tokens (via CSS classes) rather than assembling font-size + weight + line-height individually.

| UI role                     | Recommended class        | Family  |
| --------------------------- | ------------------------ | ------- |
| Page hero / product name    | `.hero.singleline`       | Cakra   |
| Tagline / campaign headline | `.display.singleline`    | Cakra   |
| Page title, section heading | `.title.singleline`      | Switzer |
| Card heading                | `.heading.singleline`    | Switzer |
| Sub-section header          | `.subheading.singleline` | Switzer |
| Body copy                   | `.base.multiline`        | Switzer |
| Secondary / supportive text | `.subtle.multiline`      | Switzer |
| Blockquote, callout         | `.quote.multiline`       | Switzer |
| Form label, tag, chip       | `.label.singleline`      | Switzer |
| Image caption, timestamp    | `.caption.singleline`    | Switzer |
| Legal text, footnote        | `.footnote.singleline`   | Switzer |

### Single-line vs Multi-line

The `.singleline` and `.multiline` suffixes control line-height:

- **`.singleline`** — tight leading (1.0–1.1×). Use for headings, labels, buttons — anything that fits on one line and doesn't need breathing room between lines.
- **`.multiline`** — looser leading (1.2–1.6×). Use for body copy, descriptions, anything that wraps across two or more lines.

> **Rule:** Apply `.singleline` to interactive and heading elements. Apply `.multiline` to any text block that might exceed one line.

### Emphasis

For Switzer levels (title through footnote), add `.emphasis` to increase font-weight to semibold. Use sparingly — only to signal hierarchy within a block, never decoratively.

```html
<span class="label singleline emphasis">Required</span>
```

`hero` and `display` (Cakra) have no emphasis variant. Cakra's single weight is already expressive enough.

### Icon Fonts

Phosphor comes in two variants: **Regular** (outline strokes) and **Fill** (solid fills).

| Variant | When to use                                    |
| ------- | ---------------------------------------------- |
| Regular | Decorative, informational, neutral state icons |
| Fill    | Active state, selected, toggled-on state       |

Never use Fill for inactive states — the solid weight implies action or selection.

### Cross-references

- **→ Text-on** — color tokens that pair with surfaces for readable contrast
- **→ Spacing & Grid** — gap values for spacing between text blocks

### Font Families

| Token                       | Value         | Usage                        |
| --------------------------- | ------------- | ---------------------------- |
| `font-family/sans-serif`    | Switzer       | Body text, UI elements       |
| `font-family/serif`         | Cakra         | Display, headings, marketing |
| `font-family/icons-regular` | Phosphor      | Icons (outline)              |
| `font-family/icons-fill`    | Phosphor-Fill | Icons (solid)                |

### Font Weights

| Style  | Token                            | Value             |
| ------ | -------------------------------- | ----------------- |
| Normal | `font-weight/normal/extra-light` | Extralight        |
| Normal | `font-weight/normal/regular`     | Regular           |
| Normal | `font-weight/normal/semi-bold`   | Semibold          |
| Italic | `font-weight/italic/extra-light` | Extralight Italic |
| Italic | `font-weight/italic/regular`     | Italic            |
| Italic | `font-weight/italic/semi-bold`   | Semibold Italic   |

### Font Size Scale (Digital)

| Token            | Size  | Usage                      |
| ---------------- | ----- | -------------------------- |
| `font-size/2xs`  | 10px  | Fine print                 |
| `font-size/xs`   | 12px  | Captions, labels           |
| `font-size/sm`   | 14px  | Secondary text             |
| `font-size/base` | 16px  | Body text                  |
| `font-size/md`   | 20px  | Large body, small headings |
| `font-size/lg`   | 24px  | Headings                   |
| `font-size/xl`   | 32px  | Section headings           |
| `font-size/2xl`  | 40px  | Page headings              |
| `font-size/3xl`  | 80px  | Hero text                  |
| `font-size/4xl`  | 240px | Display                    |

### Font Size Scale (Print)

| Token            | Size  |
| ---------------- | ----- |
| `font-size/2xs`  | 6pt   |
| `font-size/xs`   | 6pt   |
| `font-size/sm`   | 8pt   |
| `font-size/base` | 8pt   |
| `font-size/md`   | 12pt  |
| `font-size/lg`   | 16pt  |
| `font-size/xl`   | 24pt  |
| `font-size/2xl`  | 32pt  |
| `font-size/3xl`  | 64pt  |
| `font-size/4xl`  | 192pt |

### Line Height

Two modes: **single-line** (labels, buttons) and **multi-line** (paragraphs).

#### Single-line (Digital)

| Token                          | Value |
| ------------------------------ | ----- |
| `line-height/single-line/2xs`  | 12px  |
| `line-height/single-line/xs`   | 16px  |
| `line-height/single-line/sm`   | 16px  |
| `line-height/single-line/base` | 20px  |
| `line-height/single-line/md`   | 24px  |
| `line-height/single-line/lg`   | 28px  |
| `line-height/single-line/xl`   | 36px  |
| `line-height/single-line/2xl`  | 44px  |
| `line-height/single-line/3xl`  | 88px  |
| `line-height/single-line/4xl`  | 264px |

#### Multi-line (Digital)

| Token                         | Value |
| ----------------------------- | ----- |
| `line-height/multi-line/2xs`  | 16px  |
| `line-height/multi-line/xs`   | 20px  |
| `line-height/multi-line/sm`   | 20px  |
| `line-height/multi-line/base` | 24px  |
| `line-height/multi-line/md`   | 28px  |
| `line-height/multi-line/lg`   | 32px  |
| `line-height/multi-line/xl`   | 40px  |
| `line-height/multi-line/2xl`  | 48px  |
| `line-height/multi-line/3xl`  | 96px  |
| `line-height/multi-line/4xl`  | 304px |

### Letter Spacing

| Token                        | Value | Usage                        |
| ---------------------------- | ----- | ---------------------------- |
| `letter-spacing/tight`       | -2px  | Display text, Cakra headings |
| `letter-spacing/normal`      | 0px   | Default                      |
| `letter-spacing/loose`       | 2px   | All caps labels              |
| `letter-spacing/extra-loose` | 4px   | Spaced headings              |

---

## Spacing & Grid

### Design Intent

**The soft grid is a spacing scale, not a CSS grid.** It provides a set of predefined values (1px increments at small sizes, 4px at larger) so spacing decisions are always consistent and intentional — no arbitrary `17px` or `22px` values.

The number in each token name is the value in pixels at the default 16px root font size. In code, all values are expressed in `rem` so they respect user font-size preferences.

### Semantic Groupings

Not all spacing values are equal — they serve different layers of the UI:

| Range         | Values  | Typical use                                                                 |
| ------------- | ------- | --------------------------------------------------------------------------- |
| **Micro**     | 0–8px   | Internal component spacing — icon-to-label gap, input padding, badge insets |
| **Component** | 12–24px | Component padding, gap between related elements in a group                  |
| **Layout**    | 32–64px | Gap between sections, card margins, hero padding                            |
| **Section**   | 72–96px | Page-level vertical rhythm, spacious section breaks                         |

> **Rule:** If you're spacing elements within a component, stay in 0–24px. If you're spacing between components or sections, use 32px+.

### System vs Landing Grid

Two grid presets exist for different contexts:

| Grid type   | Use case                                      | Margin at laptop |
| ----------- | --------------------------------------------- | ---------------- |
| **System**  | Product UI, app shells, dashboards            | 32px             |
| **Landing** | Marketing pages, documentation, hero sections | 64px             |

Landing grids use wider margins to give content more breathing room and center the reading line at large viewports.

### Breakpoints

| Name    | Min-width |
| ------- | --------- |
| Mobile  | 0px       |
| Tablet  | 768px     |
| Laptop  | 1280px    |
| Desktop | 1560px    |

### Cross-references

- **→ Elevation** — padding values used within each surface depth

### Soft Grid

Spacing values for margins, padding, and gaps.

| Token | Value |
| ----- | ----- |
| `0`   | 0px   |
| `1`   | 1px   |
| `2`   | 2px   |
| `4`   | 4px   |
| `6`   | 6px   |
| `8`   | 8px   |
| `10`  | 10px  |
| `12`  | 12px  |
| `14`  | 14px  |
| `16`  | 16px  |
| `18`  | 18px  |
| `20`  | 20px  |
| `24`  | 24px  |
| `28`  | 28px  |
| `32`  | 32px  |
| `36`  | 36px  |
| `40`  | 40px  |
| `44`  | 44px  |
| `48`  | 48px  |
| `52`  | 52px  |
| `56`  | 56px  |
| `60`  | 60px  |
| `64`  | 64px  |
| `72`  | 72px  |
| `80`  | 80px  |
| `88`  | 88px  |
| `96`  | 96px  |

### Layout Grid

Two grid types: **system** (applications) and **landing** (marketing pages).

#### Base / Mobile (< 768px)

| Property | System | Landing |
| -------- | ------ | ------- |
| Columns  | 4      | 4       |
| Margin   | 16px   | 16px    |
| Gutter   | 16px   | 16px    |

#### Tablet (≥ 768px)

| Property | System | Landing |
| -------- | ------ | ------- |
| Columns  | 8      | 8       |
| Margin   | 24px   | 32px    |
| Gutter   | 16px   | 24px    |

#### Laptop (≥ 1280px)

| Property | System | Landing |
| -------- | ------ | ------- |
| Columns  | 12     | 12      |
| Margin   | 32px   | 64px    |
| Gutter   | 20px   | 32px    |

#### Desktop (≥ 1560px)

| Property | System | Landing |
| -------- | ------ | ------- |
| Columns  | 12     | 12      |
| Margin   | 32px   | 96px    |
| Gutter   | 24px   | 48px    |

---

## Border Width & Radius

### Border Width

| Token                   | Value | Usage                |
| ----------------------- | ----- | -------------------- |
| `border-width/none`     | 0px   | No border            |
| `border-width/hairline` | 0.5px | Subtle dividers      |
| `border-width/base`     | 1px   | Default borders      |
| `border-width/heavy`    | 2px   | Emphasized borders   |
| `border-width/thick`    | 4px   | Strong visual weight |

### Border Radius

| Token                | Value | Usage                |
| -------------------- | ----- | -------------------- |
| `border-radius/none` | 0px   | Sharp corners        |
| `border-radius/sm`   | 4px   | Small elements, tags |
| `border-radius/base` | 8px   | Default              |
| `border-radius/md`   | 12px  | Cards                |
| `border-radius/lg`   | 16px  | Large cards          |
| `border-radius/xl`   | 20px  | Modals               |
| `border-radius/2xl`  | 24px  | Large containers     |
| `border-radius/3xl`  | 28px  | Hero elements        |
| `border-radius/4xl`  | 32px  | Full rounded         |
| `border-radius/6xl`  | 40px  | Pills                |
| `border-radius/8xl`  | 48px  | Large pills          |
| `border-radius/10xl` | 56px  | Capsules             |
| `border-radius/12xl` | 64px  | Full capsules        |

---

## Shadows

Shadows come in three depths, each using two layers for a softer, more natural appearance. Shadows use the track's own color family for cohesive integration.

### Design Intent

Shadows serve one purpose: reinforcing depth that surface contrast alone doesn't fully communicate. If two surfaces already have clear contrast (e.g. a dark Summit button on a light Ground), don't add a shadow — it creates visual noise without adding hierarchy information.

Only use shadows on **Terrace and Summit** surfaces. Ground-level elements don't receive shadows because they have nothing to be elevated above.

### When to Use Each Depth

| Depth       | CSS class                     | Visual weight   | Use for                                       |
| ----------- | ----------------------------- | --------------- | --------------------------------------------- |
| **Summit**  | `drop-shadow-{track}-summit`  | Tight, balanced | Cards, panels, buttons, form inputs           |
| **Terrace** | `drop-shadow-{track}-terrace` | Wide, airy      | Modals, sheets, floating containers, popovers |

Available tracks: `brand`, `accent`, `gray`, `information`, `danger`, `success`

### Rules

- **Don't combine shadows with heavy borders** on the same element — choose one signal of elevation, not both.
- **Match the shadow track to the surface track** — a brand Summit button uses `drop-shadow-brand-*`, not `drop-shadow-gray-*`.
- **Don't shadow Ground elements** — a flat page background doesn't need a shadow.

### Usage (CSS class)

```html
<!-- Card on a surface -->
<div class="drop-shadow-gray-summit">...</div>

<!-- Modal -->
<div class="drop-shadow-gray-terrace">...</div>

<!-- Brand button -->
<button class="drop-shadow-brand-summit">...</button>
```

### Cross-references

- **→ Elevation** — which depths are valid containers for shadows
- **→ Borders & Dividers** — don't use thick borders with shadows on the same element

### Shadow structure (Brand, light mode)

| Depth   | Layer | Offset X/Y  | Blur | Spread | Opacity |
| ------- | ----- | ----------- | ---- | ------ | ------- |
| Summit  | 1     | 4px / 4px   | 16px | 2px    | 4%      |
| Summit  | 2     | 1px / 1px   | 4px  | 1px    | 12%     |
| Terrace | 1     | 16px / 16px | 32px | 4px    | 4%      |
| Terrace | 2     | 4px / 4px   | 16px | 2px    | 8%      |

All other tracks follow the same structure with their own hue.

---

## Token Reference

### Collection Overview

| Collection       | Modes                         | Description                                 |
| ---------------- | ----------------------------- | ------------------------------------------- |
| `color`          | Value                         | Primitive color palette                     |
| `semantic-color` | Light, Dark\*                 | Surface, text-on, border-around, divider-on |
| `typography`     | Digital, Print                | Font size, line height, letter spacing      |
| `font-family`    | —                             | Typeface definitions                        |
| `font-weight`    | Value                         | Weight names                                |
| `soft-grid`      | —                             | Spacing scale                               |
| `grid`           | Base, Tablet, Laptop, Desktop | Layout grid                                 |
| `border-radius`  | —                             | Corner radius scale                         |
| `border-width`   | —                             | Stroke width scale                          |
| `shadow`         | —                             | Shadow definitions                          |

\*Dark mode values are placeholders. Structure is ready for integration.

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

_Dark mode token values are currently placeholders._

The structure is identical to light mode. When dark mode values are finalized:

1. Update `semantic-color_dark_tokens.json` with correct mappings
2. Surface depths may map to different primitive values
3. Text-on values will adjust for light text on dark surfaces
4. Composition rules remain unchanged

---

_Grove Design System — Where living systems take root._
