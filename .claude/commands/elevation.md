# Grove Elevation System

Return the correct surface tokens and composition tree for the task described below.

## Tracks

Six color tracks define which surfaces are available:

| Track | Role | Has Path? |
|-------|------|-----------|
| **Brand** | Primary brand expression (Grove Grass) | Yes |
| **Accent** | High-priority actions, links (Grove Prune) | No |
| **Gray** | Neutral surfaces, default for most UI | Yes |
| **Danger** | Error states, destructive actions | No |
| **Success** | Confirmation, positive feedback | No |
| **Information** | Notices, helpful context | No |

## Depths

| Depth | Primitive | Role |
|-------|-----------|------|
| **Ground** | `base/light` | Base surface. Where everything begins. |
| **Terrace** | `{track}/100` | Light surface. Cards, containers, sections. |
| **Path** | `{track}/200` | Mid surface. Brand and Gray only. |
| **Summit** | `{track}/500` | Dark surface. Interactive elements. |
| **Aurora** | `{track}/700` | Hover state for Summit only. |

## CSS Custom Properties

- Ground: `--semantic-color-surface-ground`
- Others: `--semantic-color-surface-{track}-{depth}` (e.g., `--semantic-color-surface-brand-summit`)

## Composition Rules

1. **Ground is the base.** Every layout starts on `surface/ground`.
2. **Depths progress forward** within a track: Terrace -> Path -> Summit. Skip allowed, backward never.
3. **New track requires depth change.** Prefer one depth deeper. Same depth = no contrast = wrong.
   - From Terrace: start new track at Path (preferred) or Summit
   - From Path: start new track at Summit (preferred) or return to Ground
   - From Summit: return to Ground
4. **Gray is universal.** It can appear inside any track at any depth.
5. **Accent can appear inside Gray.** For emphasis (e.g., buttons on gray cards).
6. **Brand and semantic tracks don't mix.** Don't nest Danger/Success/Information inside Brand or Accent.
7. **Aurora is a state, not a container.** Hover state for Summit only. Never contains children.
8. **Floating elements return to Ground.** Modals, popovers, tooltips reset to Ground.

## Color Distribution

- 60% Ground
- 25% Terrace
- 10% Path / Summit
- 5% Aurora (interactive states only)

## Output Format

Return a composition tree like:

```
Ground (--semantic-color-surface-ground)
  +-- gray/terrace (--semantic-color-surface-gray-terrace)
        +-- text-on/gray/terrace/emphasis
        +-- accent/summit (--semantic-color-surface-accent-summit)
              +-- text-on/accent/summit/base
```

## Task

$ARGUMENTS
