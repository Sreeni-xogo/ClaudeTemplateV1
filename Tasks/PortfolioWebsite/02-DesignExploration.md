# 2. DesignExploration

**Goal**: Define visual design direction including color palette, typography, and layout structure
**Est.**: 1.5 hours
**Dependencies**: Task #1 (ProjectSetup)

## Steps
- [x] Research space-themed portfolio designs for inspiration
- [x] Define color palette (dark theme with accent colors for space feel)
- [x] Select typography (Google Fonts or system fonts)
- [x] Create wireframe/layout sketch for single-page structure
- [x] Document design decisions in this file

## Design Decisions

### Color Palette
| Role | Color | Hex |
|------|-------|-----|
| Background | Deep Space | `#0a0a0f` |
| Surface | Nebula Dark | `#12121a` |
| Primary | Cosmic Blue | `#6366f1` |
| Secondary | Stellar Purple | `#a855f7` |
| Accent | Nebula Pink | `#ec4899` |
| Text Primary | Star White | `#f8fafc` |
| Text Secondary | Moon Gray | `#94a3b8` |
| Glow | Aurora Cyan | `#22d3ee` |

### Typography
- **Headings**: Inter (700 Bold)
- **Body**: Inter (400 Regular)
- **Code**: JetBrains Mono (400)

### Layout Structure
1. **Navigation** - Fixed, transparent header
2. **Hero** - Full viewport, 3D particle animation, name/title/CTA
3. **Projects** - 2 cards side-by-side (desktop), stacked (mobile)
4. **Skills** - Grouped by category with tag/pill style
5. **Contact** - Social links, minimal footer

## Definition of Done
- [x] Color palette defined with hex codes
- [x] Font families selected and documented
- [x] Section layout wireframe sketched/described

## Outcome
- **Actual Time**: ~10 min
- **Result**: Success - Design system created in `src/styles/variables.css` and `main.css`
- **Follow-ups**: None
