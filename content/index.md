---
title: Modern Atomic Design
---

### Storybook

<a class="cursor-pointer" target="_blank" href="/storybook">
<div class="group hover:bg-gray-100 hover:border-gray-100 transition-all bg-white border-4 border-white rounded-xl shadow h-full w-full flex sm:justify-between justify-center flex-wrap items-center  px-6 my-6 ">
<p class="text-gray-600">Discover the example components in storybook.<p>
<my-button class="rounded-lg border-2 border-primary py-3 px-4 uppercase font-semibold bg-white text-lg text-primary group-hover:text-white group-hover:bg-primary-hover group-hover:border-primary-hover">Storybook</my-button>
</div>
</a>

### Contributing

This project is dedicated to collect, present and experiment with both a tech stack and combined methodologies of
<b>atomic design systems</b>, <b>headless components</b> and <b>utility-first styling</b> towards building UI Component Libraries or simply an UI based on a Design System.

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

The application is built as a static site served by Gitlab Pages, content like this article can be modified directly on Gitlab. Find out more about [@nuxt/content](https://content.nuxtjs.org/).
