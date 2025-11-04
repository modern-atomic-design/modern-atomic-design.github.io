# Current Application Documentation (Vue 2/Nuxt 2)

## Overview
A static site showcasing Modern Atomic Design principles with articles about design systems, atomic design, and related topics.

**Technology Stack:**
- Vue 2.7.16
- Nuxt 2.18.1
- @nuxt/content v1 (markdown-based CMS)
- Tailwind CSS
- @headlessui/vue (for accessible UI components)

---

## Application Structure

### Pages (2)
1. **index.vue** - Homepage
   - Lists all articles as cards
   - Shows index.md content
   - Uses asyncData to fetch content
   - Components: Logo, Card

2. **_.vue** - Dynamic content pages
   - Catch-all route for markdown content
   - Shows article title and content
   - Uses asyncData to fetch content
   - Back link to homepage

### Components (14)

#### Atoms (4)
1. **MyButton.vue**
   - Props: `type` (String, default: "primary", values: "primary" | "secondary")
   - Events: `@click`
   - Styling: Tailwind CSS with conditional classes
   
2. **TextField.vue**
   - Props: 
     - `value` (String, default: "")
     - `name` (String, default: "")
     - `type` (String, default: "text")
     - `placeholder` (String, default: "")
   - Events: `@input`
   - Two-way binding via v-model pattern

3. **Toggle.vue**
   - Props:
     - `offLabel` (String, optional)
     - `onLabel` (String, optional)
   - Uses @headlessui/vue SwitchGroup
   - Emits value changes

4. **Logo.vue**
   - No props
   - SVG logo component

#### Molecules (6)
1. **Card.vue**
   - Props:
     - `link` (String, required)
     - `buttonLabel` (String, optional)
   - Uses nuxt-link for routing
   - Slot for content

2. **PlanCard.vue**
   - Props:
     - `option` (Object, required)
     - `selected` (Boolean, default: false)
   - Radio button card for plan selection

3. **PlanSelector.vue**
   - Props: `options` (Array, required)
   - Uses @headlessui/vue RadioGroup
   - Renders multiple PlanCard components

4. **SearchField.vue**
   - Search input component
   - No props documented

5. **TheHeader.vue**
   - Site header/navigation
   - No props

6. **TheFooter.vue**
   - Site footer
   - No props

#### Organisms (1)
1. **SignupForm.vue**
   - Props: `options` (Array, required)
   - Form fields: name, email, password, cardnumber
   - Uses PlanSelector, TextField, MyButton, Toggle
   - Data: form object with field values

---

## Content Files (6)
Located in `/content/` directory:

1. **index.md** - Homepage content
2. **atomic-design.md** - Article about Atomic Design
3. **design-systems.md** - Article about Design Systems
4. **design-tokens.md** - Article about Design Tokens
5. **headless-components.md** - Article about Headless Components
6. **utility-first.md** - Article about Utility-First CSS

---

## Key Features

### Content Management
- Uses @nuxt/content v1 for markdown processing
- asyncData pattern for data fetching:
  ```js
  async asyncData({ $content, params, $config }) {
    const page = await $content('index').fetch()
    const articles = await $content().fetch()
    return { page, articles }
  }
  ```

### Routing
- Static site generation (SSG)
- Catch-all route (`_.vue`) for dynamic content
- nuxt-link for internal navigation

### Styling
- Tailwind CSS utility classes
- Responsive design (sm:, lg:, xl: breakpoints)
- Custom color classes (primary, primary-hover)

### Accessibility
- @headlessui/vue for accessible components
- RadioGroup for plan selection
- SwitchGroup for toggles

### Configuration
- Output directory: `public/`
- Base path: `/`
- SSR: true
- Target: static
- Component auto-import from specific directories

---

## Build & Deploy

### Scripts
```json
{
  "dev": "nuxt",
  "build": "nuxt build",
  "generate": "nuxt generate",
  "start": "nuxt start"
}
```

### Requirements
- Node 20 with `NODE_OPTIONS=--openssl-legacy-provider` (webpack 4 compatibility)
- Yarn package manager

### Build Process
1. Nuxt compiles Vue components
2. Webpack bundles assets
3. Static site generated to `public/` directory
4. Content parsed and rendered

---

## Current Issues
- 59 security vulnerabilities (mostly in Storybook and old dependencies)
- Requires OpenSSL legacy provider for Node 20
- Uses deprecated lodash.template
- Old webpack 4 with known vulnerabilities

---

## Migration Considerations

### Data Fetching Pattern Change
- Vue 2 `asyncData` → Vue 3 `useAsyncData()` or `useFetch()`
- `$content()` → `queryContent()`

### Component API Changes
- Options API → Composition API (setup script)
- `$emit` → `defineEmits()`
- Props validation syntax changes

### Build Tool Change
- Webpack 4 → Vite (default in Nuxt 3)
- Faster builds and HMR

### Module Updates
- @nuxt/content v1 → v2 (breaking API changes)
- @nuxtjs/tailwindcss (Nuxt 3 compatible version)
- @headlessui/vue (already Vue 3 compatible)

