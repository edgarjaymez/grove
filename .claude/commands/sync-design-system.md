# Sync Design System Skills

DESIGN_SYSTEM.md has been updated. Your job is to sync the skill files in `.claude/commands/` to reflect the changes.

## Steps

1. Read `DESIGN_SYSTEM.md` at the repo root.
2. Read ALL current skill files in `.claude/commands/` (except this one and `build-surface.md` / `build-interactive.md`):
   - `color.md`
   - `elevation.md`
   - `text-on.md`
   - `typography.md`
   - `spacing.md`
   - `borders.md`
   - `shadows.md`
3. For each skill file, compare its content against the corresponding section in `DESIGN_SYSTEM.md`. Identify what changed — new tokens, removed tokens, renamed values, updated rules, new sections.
4. Rewrite only the skill files that have drifts. Preserve the existing structure of each skill file:
   - Title and purpose line
   - Reference tables
   - CSS custom property patterns
   - Rules section
   - `## Task` section with `$ARGUMENTS` at the end
5. After updating reference skills, read the composite skills (`build-surface.md`, `build-interactive.md`) and update them if the changes affect their checklists or referenced tokens.
6. Report a summary of what changed:

```
SYNC REPORT:
  color.md        — [updated/unchanged] (brief description if updated)
  elevation.md    — [updated/unchanged]
  text-on.md      — [updated/unchanged]
  typography.md   — [updated/unchanged]
  spacing.md      — [updated/unchanged]
  borders.md      — [updated/unchanged]
  shadows.md      — [updated/unchanged]
  build-surface.md     — [updated/unchanged]
  build-interactive.md — [updated/unchanged]
```

## Rules

- Skill files are authored for AI consumption — keep them concise and structured, not prose-heavy.
- Every reference skill must end with `## Task\n\n$ARGUMENTS`.
- Do NOT modify `DESIGN_SYSTEM.md` — it is the source of truth.
- Do NOT modify this file (`sync-design-system.md`).
- If DESIGN_SYSTEM.md introduces a concept that doesn't fit any existing skill file, flag it in the report and suggest whether a new skill file is needed.
