---
title: Design Systems
---

A Design System defines the basic variables, guidelines, templates and patterns that define a UI.

### Styleguide, Pattern-Library, Design System...?

A Style Guide ususally refers to colors, grids, icons, typography etc. It also contains documentation about look and feel, corporate identity and branding. Pattern Libraries describe how interactive or dynamic elements behave, e.g. a multiselect input or tab navigation. Further it states in which context and where to use it and provides definition of animations and user interactions.

A Design System is basically a superset of both, providing everything that's needed to build consistent UIs across applications.

> A Design System isn’t a Project, it’s a Product Serving Products - [Nathan Curtis](https://medium.com/eightshapes-llc/a-design-system-isn-t-a-project-it-s-a-product-serving-products-74dcfffef935)

### Break it down

The modern approach is not to provide complete pages for every UI state, but equip developers with atomic designs (see [Atomic Design](/atomic-design)) to create consistent UIs and maximal flexibility. This allows to create all sorts of components and pages that match the design system without having a designer to define all kinds of new composite views.

There might be exceptions when it comes to edge cases, but it still minimizes effort and keeps overall flexibility high.

> We're not designing pages, we're designing systems of components. - Stephen Hay

## UI/UX Design Tools

The probably most known tools used for Design Systems are [Figma](https://www.figma.com/), [Sketch](https://www.sketch.com/) and [Adobe XD](https://www.adobe.com/de/products/xd.html).

<div class="flex gap-8 sm:gap-24 justify-start sm:justify-center">
    <img class="w-12 sm:w-24" src="icons/figma.png" alt="figma logo"></img>
    <img class="w-12 sm:w-24" src="icons/sketch.png" alt="sketch logo"></img>
    <img class="w-12 sm:w-24" src="icons/xd.png" alt="xd logo"></img>
</div>

Those tools are very powerful and can also be used to create vector assets, high fidelity prototypes, components, style exports or even generate code, like for example [Figma-to-React](https://www.figma.com/community/plugin/959795830541939498/Figma-to-React-Component).

## Examples

Here you find some very prominent examples for great Design Systems. Just explore them to gain better understanding of how they work. These are just some examples, of course there is many more great Design Systems provided by lots of companies.

<div class="grid grid-cols-2 gap-8">
    <a target="_blank" href="https://material.io/">
        <div>
            <img class="rounded-xl" src="material.png" alt="material.io"></img>
            <p>Google Material Design 3</p>
        </div>
    </a>
    <a target="_blank" href="https://developer.apple.com/design/">
        <div>
            <img class="rounded-xl" src="apple.png" alt="Human Interface Guidelines by Apple"></img>
            <p>Human Interface Guidelines by Apple</p>
        </div>
    </a>
    <a target="_blank" href="https://www.microsoft.com/design/fluent/#/">
        <div>
            <img class="rounded-xl" src="fluent.png" alt="Fluent Design System"></img>
            <p>Fluent Design System</p>
        </div>
    </a>
     <a target="_blank" href="https://baseweb.design/">
        <div>
            <img class="rounded-xl" src="baseweb.png" alt="baseweb"></img>
            <p>BaseWeb by Uber</p>
        </div>
    </a>
</div>

Some existing Design Systems also are made available as Figma community templates, for instance <a class="underline" target="_blank" href="https://www.figma.com/community/file/1035203688168086460">Material.io Figma Template</a>.
