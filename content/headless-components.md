---
title: Headless Components
---

## Head what?

When speaking of _headless or renderless_ components, it's about UI components that only serve functionality but do not (or barely) render anything. There are many ways to create headless components. Some approaches would be usage of Custom Hooks, Higher-Order Components, Mixins, Slots or Composable Funcations. Depending on the technology used there are others of course. The underlying concept however stays the same. 

> Headless Components aim to share functionality, logic and accessibility in a **design-agnostic** way.

In this project's <u>[lib/components](https://gitlab.maibornwolff.de/department-dtd/modern-atomic-design/-/tree/main/lib/components)</u> directory, you can find simplistic examples of headless components using Vue scoped slots.


## Create your own

Creating headless components can help to **share functionality or logic** inside or across your applications. Further, it separates functionality and logic from the visual representation. A Select Box might always work the same and fulfill the same requirements but needs to be displayed in different ways depending on the context used.

## Use existing Libraries

Using existing headless components can also be a huge advantage in terms of productivity. In combination with a Design System and TailwindCSS it is a perfect match for customized, complex components. Two great examples would be tiptap and HeadlessUI.

<img src="icons/tiptap.svg" width="200" alt="tiptap"></img>
<u>[tiptap.dev](https://tiptap.dev/)</u> is a rich-text editor (barely) without rendering.
All functionality and state reactivity is provided by the library. The controls and display however needs to be implemented, without any implementation you get a plain text area. This leverages the need of having to overwrite, theme or work around any default styles which might be complex, restricted or interferring with internal styling approaches.

<img src="icons/headlessui.svg" width="200" alt="headlessui"></img>

<u>[HeadlessUI](https://headlessui.dev/)</u> is a project of the TailwindLabs and provides several components without any rendering. Those are components that are widely used and offer therefore the benefits of best practises in a11y and help to not always having to implement the same things again and again... but different.
