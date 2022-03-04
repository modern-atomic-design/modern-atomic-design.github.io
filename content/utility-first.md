---
title: Utility-First
---

In general, organizing styles in a project can be complex and the choice influences your workflow, maintainance and coding experience a lot. When implementing based on a Design System or any given guidelines, this organising CSS becomes even more important to be strictly followed by some conventions.

In the following we'll imagine a scenario where a certain Design System is provided for implementation.

## Semantic CSS

While writing CSS you probably experienced yourself using semantic CSS classes, like

```css
.goat-button {
  padding: 4px 8px;
  background: #fff;
  color: #000;
}

.goat-button--blue {
  padding: 4px 8px;
  background: #ff00ff;
  color: #00fff0;
}
```

Then there is some variant or decendants and you might use more or less complex CSS selectors to style this very part of the HTML. Some conventions like BEM or OOCSS aim to help with that semantic naming to achieve more specific and semantically related class names like **.goat-button\_\_text**, **.goat-button--big** and **.goat-button--blue**.

The reason behind this common approach might be the idea of separation of concerns. Imagine using the classes form above in your HTML. You don't need to know the details of how the Button is styled, but only give it the correct classes describing the button:

```html
<button class="btn btn--big btn--blue">click me</button>
```

### And you'll get a really great big blue button...do you?

There is a great article from the creator of TailwindCSS about Semantic CSS and his thoughts towards Utility-First CSS: <u>[CSS Utility Classes and "Separation of Concerns"](https://adamwathan.me/css-utility-classes-and-separation-of-concerns/)</u>

## Utility-First / Functional CSS

Complying with Design Systems, organising and reusing CSS in combination with other frameworks and the semantic approach is harder - _or at least more effort_ - than you might think. A quite different way to do it is using **Functional CSS**. Also referred to as Utility-First or Atomic CSS, this approach builds upon a set of small, primitive utilities - just like the Design System itself. The primitives or atomic classes are defined once and then used in combination to create any of the Design's components.

Usually you would not want to create all the classes you'll ever might need. So there are some libraries providing such a comprehensive set of utility classes. The most popular one might be [TailwindCSS](https://tailwindcss.com/) that comes with great options for customisation and production optimisations.

> isn’t this just inline styles?

Not exactly. To some extend it is because all the styling is done inline. Let's look at this example based on TailwindCSS to spot the benefits and differences to the traditional approach.

```html
<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <button class="py-3 px-4 uppercase font-semibold text-base rounded-lg border-2 border-primary text-primary hover:text-white hover:bg-primary-hover">hover me</button>
    <button class="w-full py-3 px-4 uppercase font-semibold text-base rounded-lg border-2 border-primary text-white bg-primary hover:bg-primary-hover">click me</button>
</div>
```

The rendered result looks exactly like this

<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <button class="py-3 px-4 uppercase font-semibold text-base rounded-lg border-2 border-primary text-primary hover:text-white hover:bg-primary-hover">hover me</button>
    <button class="w-full py-3 px-4 uppercase font-semibold text-base rounded-lg border-2 border-primary text-white bg-primary hover:bg-primary-hover">click me</button>
</div>

At first this seems quite a lot classes to write for just a basic button and yes, this might flood your templates with long strings of classes. The advantages however are powerful and elegant:

- Design with constraints - based on your Design System, no magic numbers!
- No need for writing or organising any CSS (would actually be bad practise)
- Responsive utilities - inline styles can't do that
- Variants like **hover, focus etc** or even advanced **group-hover** - inline styles can't do that
- Fast development
- Excellent IDE integration with IntelliSense

Checkout a more complex comparison of components styled with Functional CSS vs. Semantic CSS at [Utility-First Fundamentals](https://tailwindcss.com/docs/utility-first).
