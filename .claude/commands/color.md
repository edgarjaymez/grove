# Grove Color System

Return the relevant color tokens for the task described below. Use semantic tokens for all UI — primitives are only for SVG illustrations.

## Primitives

Only use directly for SVG illustrations. For all other UI, use semantic tokens (see `/elevation`, `/text-on`).

**Base:** `base/light` (#FAF8F2 Parchment), `base/dark` (#0B0B0B Obsidian)

**Brand (Green):** 50 Honeydew, 100 Celadon, 200 Sage, 300 Fern, 400 Laurel, **500 Grove Grass (#416943)**, 600 Forest, 700 Pine, 800 Juniper, 900 Spruce, 950 Evergreen

**Accent (Purple):** 50 Thistle, 100 Lilac, 200 Wisteria, 300 Orchid, 400 Heather, **500 Grove Prune (#7F3999)**, 600 Plum, 700 Damson, 800 Aubergine, 900 Nightshade, 950 Blackberry

**Gray (Rock):** 50 Chalk, 100 Limestone, 200 Pebble, 300 Flint, 400 Slate, 500 Granite, 600 Shale, 700 Basalt, 800 Coal, 900 Onyx, 950 Site

**Danger (Red):** 50 Blush, 100 Rose, 200 Coral, 300 Poppy, 400 Vermilion, 500 Rust, 600 Crimson, 700 Carmine, 800 Burgundy, 900 Maroon, 950 Oxblood

**Success (Aqua Green):** 50 Seafoam, 100 Spearmint, 200 Opal, 300 Cove, 400 Serpentine, 500 Myrtle, 600 Mangrove, 700 Kelp, 800 Reef, 900 Grotto, 950 Seabed

**Information (Blue):** 50 Mist, 100 Sky, 200 Azure, 300 Cerulean, 400 Cobalt, 500 Lapis, 600 Sapphire, 700 Navy, 800 Indigo, 900 Midnight, 950 Ink

## CSS Custom Property Pattern

Primitive tokens map to: `--color-{family}-{scale}` (e.g., `--color-brand-500`)

Semantic tokens (surfaces, text, borders) follow patterns documented in `/elevation`, `/text-on`, `/borders`.

## Rules

- Never use primitive color values directly in component styles
- Always use semantic tokens via CSS custom properties
- Primitives are only for SVG illustration fills/strokes
- The color space is OKLCH — hex values above are for reference only

## Task

$ARGUMENTS
