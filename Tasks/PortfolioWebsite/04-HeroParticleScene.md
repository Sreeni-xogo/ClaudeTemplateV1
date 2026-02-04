# 4. HeroParticleScene

**Goal**: Create Three.js space-themed particle animation for hero section
**Est.**: 2 hours
**Dependencies**: Task #3 (BaseLayoutNavigation)

## Steps
- [x] Create ThreeScene.vue component
- [x] Set up Three.js scene, camera, and renderer
- [x] Create particle system (stars/space dust effect)
- [x] Add mouse interaction (particles react to cursor)
- [x] Implement resize handling for responsiveness
- [x] Optimize performance (limit particle count, use BufferGeometry)
- [x] Integrate into Hero section

## Definition of Done
- [x] Particle animation renders in hero section
- [x] Animation responds to mouse movement
- [x] No performance issues (60fps target)
- [x] Resizes correctly with viewport

## Outcome
- **Actual Time**: ~20 min
- **Result**: Success - Space particle animation with mouse interactivity
- **Follow-ups**: Consider code-splitting Three.js for smaller bundle size

## Technical Details
- 2000 particles using BufferGeometry for performance
- Color palette: Cosmic Blue, Stellar Purple, Nebula Pink, Aurora Cyan, Star White
- Additive blending for glow effect
- Smooth mouse follow with lerping
- Proper cleanup on unmount (dispose geometry/material/renderer)
