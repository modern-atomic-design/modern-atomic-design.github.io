---
title: Modern Atomic Design
---

This project is dedicated to collect, present and experiment with both a tech stack and combined methodologies of
<b>atomic design systems</b>, <b>headless components</b> and <b>utility-first styling</b> towards building UI Component Libraries or simply an UI based on a Design System.
<!--more-->

Everyone is welcome to contribute to this project. The Application is based on [NuxtJS](https://nuxtjs.org/docs/get-started/installation), [TailwindCSS](https://tailwindcss.com/) and [HeadlessUI](https://headlessui.dev/) and uses [Figma](https://www.figma.com/) for the design input and [Storybook](https://storybook.js.org/) for the implementation output.


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

The project structure reflects [Nuxt directory structure](https://nuxtjs.org/docs/directory-structure).
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

For the example components you can start the Storybook:

```bash
yarn storybook
```
