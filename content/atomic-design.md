---
title: Atomic Design
options:
  - { label: "Basic", price: 10, data: 1000 }
  - { label: "Premium", price: 50, data: 5000 }
---

<div style="minHeight: 288px" class="min-h-72 bg-transparent">

![atomic design overview](atomic-design-abstract-concrete.png "abstract to concrete")
_Atomic Design - Brad Frost_

</div>

This article is based on the work of [Brad Frost](https://atomicdesign.bradfrost.com/). You'll find more detailled insights and helpful examples in his [book](https://atomicdesign.bradfrost.com/).

### Atoms

Atoms are the very basic building blocks of a Design System. They cannot be divided into smaller blocks. In the context of Web Development, Atoms are basically the same as the available HTML tags, but can also be extended by e.g. Icon.

<div class="bg-gray-100 rounded-lg p-4 grid gap-4 grid-cols-1 sm:grid-cols-2 grid-flow-row">
<my-button>button</my-button>
<my-button type="secondary">button</my-button>
<text-field placeholder="Password" type="password">hello</text-field>
<text-field placeholder="123" type="number"></text-field>
<toggle></toggle>
</div>

### Molecules

Multiple Atoms can be used to form Molecules. They form the fundamental elements in the Design that serve a certain purpose. For example a Button and an InputField can form a Searchbox.

<div class="bg-gray-100 rounded-lg p-4 grid gap-4 grid-cols-1 lg:grid-cols-2 grid-flow-row">
  <search-field></search-field>
  <card class="h-12 lg:h-24" link="">Some clickable Card</card>
</div>

### Organisms

Organisms are groups of Molecules and provide more complex and distinct parts of the UI. Organisms can also contain Atoms or other Organisms. You can think of a page Navigation containing a Logo, Links, Buttons and a Searchbox.

<div class="bg-gray-100 p-4 rounded-lg ">
<signup-form :options="options"></signup-form>
</div>

### Beyond Chemistry

#### Templates

One step further, the chemistry analogy ends and another step towards a final Page comes into play. Templates are basically layout definitions, similar to Wireframes, that define how a page should be structured from a high-level view. Templates do not have any content and therefore focus on the skeleton of building blocks and how they can be combined and arranged.

#### Pages

Pages are concrete instances of templates and therefore filled with content. While Templates are content agnostic and do not represent any branding or design language, two pages can have quite different look & feel based on the content. Imagine two E-Commerce pages sharing a common Design System and template. One of them sells coffee beans, the other offers dog food. Despite the common ground the both will have distinct appearances due to the context and the choice of content, colors, fonts, images, language etc.

Further, Pages can present variations and combinations of elements of the Design System:

- headlines and other content might be longer/shorter than expected
- content in different languages can have big impact on the resulting layout
- empty shopping cart vs. filled shopping cart
- users with different roles and permissions
- first-time users vs. regular users

### Resources

- [Atomic Design by Brad Frost](https://atomicdesign.bradfrost.com/table-of-contents/)
