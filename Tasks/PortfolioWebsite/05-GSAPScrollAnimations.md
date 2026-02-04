# 5. GSAPScrollAnimations

**Goal**: Add GSAP scroll-triggered animations throughout the site
**Est.**: 1.5 hours
**Dependencies**: Task #4 (HeroParticleScene)

## Steps
- [x] Set up GSAP ScrollTrigger plugin
- [x] Add fade-in animations for section headings
- [x] Add staggered reveal for list items (skills, projects)
- [x] Add parallax effects where appropriate
- [x] Ensure animations don't conflict with Three.js performance

## Definition of Done
- [x] Sections animate on scroll into view
- [x] Animations feel smooth and polished
- [x] No jank or performance issues

## Outcome
- **Actual Time**: ~15 min
- **Result**: Success - All sections have scroll-triggered animations
- **Follow-ups**: None

## Animations Added
- **Projects**: Title/subtitle fade-in, cards staggered reveal
- **Skills**: Title/subtitle fade-in, categories stagger, tags scale-in
- **Contact**: Title/subtitle fade-in, links stagger with scale, footer fade

## Technical Details
- Using GSAP ScrollTrigger plugin
- Animations trigger at 80-85% viewport entry
- Stagger timing varies by element type
- Using power3.out and back.out easing for polish
