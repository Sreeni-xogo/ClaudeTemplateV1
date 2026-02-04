# 10. NetlifyDeployment

**Goal**: Configure and deploy site to Netlify
**Est.**: 1 hour
**Dependencies**: Task #9 (ResponsiveStyling)

## Steps
- [x] Create netlify.toml configuration file
- [x] Configure build settings (build command, publish directory)
- [x] Set up redirects for SPA routing (if needed)
- [ ] Connect GitHub repo to Netlify (manual step)
- [ ] Trigger initial deployment
- [ ] Verify live site works correctly
- [ ] Configure custom domain (if available)

## Definition of Done
- [x] netlify.toml configured
- [ ] Site deploys successfully on push to main
- [ ] Live URL accessible and working

## Outcome
- **Actual Time**: ~10 min
- **Result**: netlify.toml created, repo pushed to GitHub
- **Follow-ups**: Connect repo in Netlify dashboard at https://app.netlify.com

## Netlify Configuration
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Site name**: huntersreeni.netlify.app
