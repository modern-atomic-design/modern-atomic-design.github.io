---
title: Modern Atomic Design
---

### Storybook

<card link="/storybook/?path=/docs/organisms-signupform--signup-form" button-label="Storybook">
    <p class="text-gray-600 text-xl py-3">Discover example components in Storybook.</p>
</card>

### Contributing

This project is dedicated to collect, present and experiment with both a tech stack and combined methodologies of
<b>atomic design systems</b>, <b>headless components</b> and <b>utility-first styling</b> towards building UI Component Libraries or simply an UI based on a Design System.

Everyone is welcome to contribute to this project. The Application is based on <u>[NuxtJS](https://nuxtjs.org/docs/get-started/installation)</u>, <u>[TailwindCSS](https://tailwindcss.com/)</u> and <u>[HeadlessUI](https://headlessui.dev/)</u> and uses <u>[Figma](https://www.figma.com/)</u> for the design input and <u>[Storybook](https://storybook.js.org/)</u> for the implementation output.

<details>
<summary><b>Content</b></summary>
Markdown articles like the one you are reading now collect information in a blog-like manner to present different topics involved in the project.
</details>

<details>
<summary><b>Figma</b></summary>
An example Design System is provided in Figma containing guidelines for the fictive implementation.
</details>

<details>
<summary><b>Library</b></summary>
The local library folder serves as space to experiment with own headless components
</details>

<details>
<summary><b>Storybook</b></summary>
Visual and interactive presentation of the Component Library implementation
</details>

<details>
<summary><b>Components</b></summary>
Implementation of examples, split into atoms, molecules and organisms. Each should contain a story definition.
</details>
</details>

### Getting Started

```bash
# install dependencies
yarn

# static site generation / production
yarn generate
yarn start

# serve with hot reload at localhost:3000
yarn dev
```

For the example components you can start the Storybook locally:

```bash
yarn storybook
```

The application is built as a static site served by Github Pages, content like this article can be modified directly on Github. Find out more about [@nuxt/content](https://content.nuxtjs.org/).
