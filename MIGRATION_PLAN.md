# Vue 2/Nuxt 2 → Vue 3/Nuxt 3 Migration Plan

## Overview
Migrating from Vue 2.7.16/Nuxt 2.18.1 to Vue 3/Nuxt 3 to eliminate remaining 59 security vulnerabilities.

**Current State:**
- Vue 2.7.16 with Nuxt 2.18.1
- 14 Vue components (atoms, molecules, organisms)
- 2 pages (index.vue, _.vue)
- 6 markdown content files
- Using @nuxt/content v1, Tailwind CSS, HeadlessUI
- 59 remaining vulnerabilities (mostly in Storybook and old dependencies)

**Target State:**
- Vue 3 with Nuxt 3
- All components migrated to Vue 3 syntax
- @nuxt/content v2
- Updated Tailwind CSS and HeadlessUI for Vue 3
- Storybook v7+ or removed
- Minimal/zero security vulnerabilities

---

## Migration Steps

### Phase 1: Preparation & Documentation ✅ COMPLETE
- [x] Document current application behavior and features
- [x] Create test suite for critical functionality
- [x] Document current component APIs and props
- [ ] Take screenshots of all pages and components (will do after dev server working)
- [x] Audit and document all @nuxt/content usage

### Phase 2: Dependency Updates (Breaking Changes)
- [ ] Update to Nuxt 3 (`nuxt@^3.x`)
- [ ] Update to Vue 3 (`vue@^3.x`)
- [ ] Update @nuxt/content v1 → v2
- [ ] Update @nuxtjs/tailwindcss for Nuxt 3
- [ ] Update @headlessui/vue to Vue 3 compatible version
- [ ] Remove or update @nuxtjs/storybook (requires v7+ for Vue 3)
- [ ] Update build tools (Vite instead of webpack)
- [ ] Update all dev dependencies

### Phase 3: Configuration Migration
- [ ] Migrate nuxt.config.js → nuxt.config.ts
- [ ] Update component auto-import configuration
- [ ] Update Tailwind CSS configuration
- [ ] Migrate module configurations
- [ ] Update TypeScript configuration
- [ ] Update build/generate settings

### Phase 4: Component Migration (Atoms)
- [ ] Migrate MyButton.vue to Vue 3 syntax
- [ ] Migrate TextField.vue to Vue 3 syntax
- [ ] Migrate Toggle.vue to Vue 3 syntax
- [ ] Migrate Logo.vue to Vue 3 syntax
- [ ] Test all atom components

### Phase 5: Component Migration (Molecules)
- [ ] Migrate Card.vue to Vue 3 syntax
- [ ] Migrate PlanCard.vue to Vue 3 syntax
- [ ] Migrate PlanSelector.vue to Vue 3 syntax
- [ ] Migrate SearchField.vue to Vue 3 syntax
- [ ] Migrate TheFooter.vue to Vue 3 syntax
- [ ] Migrate TheHeader.vue to Vue 3 syntax
- [ ] Test all molecule components

### Phase 6: Component Migration (Organisms)
- [ ] Migrate SignupForm.vue to Vue 3 syntax
- [ ] Test organism components

### Phase 7: Page Migration
- [ ] Migrate index.vue (replace asyncData with useAsyncData)
- [ ] Migrate _.vue (dynamic content page)
- [ ] Update router configuration if needed
- [ ] Test page navigation and rendering

### Phase 8: Content & Static Assets
- [ ] Verify markdown content compatibility
- [ ] Update content queries for @nuxt/content v2
- [ ] Verify static assets loading
- [ ] Test all content pages

### Phase 9: Testing & Validation
- [ ] Run all tests
- [ ] Build for production
- [ ] Generate static site
- [ ] Visual regression testing
- [ ] Check all links and navigation
- [ ] Verify responsive design
- [ ] Test on multiple browsers

### Phase 10: Security Audit
- [ ] Run yarn audit
- [ ] Verify all critical vulnerabilities resolved
- [ ] Document any remaining issues
- [ ] Update dependencies to latest compatible versions

### Phase 11: Cleanup
- [ ] Remove unused dependencies
- [ ] Remove old configuration files
- [ ] Update documentation
- [ ] Update README.md
- [ ] Clean up any migration artifacts

---

## Technical Notes

### Key Breaking Changes
1. **Composition API**: Vue 3 uses Composition API (setup script) instead of Options API
2. **asyncData**: Nuxt 3 uses `useAsyncData()` and `useFetch()` instead of `asyncData()`
3. **$content**: @nuxt/content v2 has different API (`queryContent()` instead of `$content()`)
4. **Components**: Auto-import works differently in Nuxt 3
5. **Build**: Nuxt 3 uses Vite instead of webpack by default

### Known Issues / Technical Debt
*Will be updated as migration progresses*

---

## Rollback Strategy
Each phase is committed separately, allowing rollback to any previous working state:
- Use `git log` to find the commit before problematic changes
- Use `git revert <commit>` or `git reset --hard <commit>` if needed
- Each commit includes working tests and build verification

---

## Progress Tracking
**Started:** 2025-11-04  
**Current Phase:** Phase 2 - Dependency Updates  
**Last Updated:** 2025-11-04

### Phase 1 Summary ✅
- Created CURRENT_APPLICATION_DOCS.md with full documentation
- Added initial test suite (MyButton, Card components)
- All tests passing (5 tests)
- Added @babel/preset-env for test compatibility

