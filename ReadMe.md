# Progressive, declarative UI system, powered by Sass placeholder selectors

Progressive means you can `@extend` as much or as little as you want into your stylesheet. Only areas of the system that you actually use will be rendered to CSS.

Declarative means your style definitions are made server-side in your Sass sourcecode, not in your HTML. This allows the markup to be minimal and semantic, so you can switch stylesheets without changing HTML.

Sass placeholder selectors are used to define named selectors. Placeholders can extend others, providing the benefits of object oriented programming. This allows your design flair to be added in layers on top of a base style. Layers can start small, describing the style of particular elements, and extend right up to whole page layouts.

## Flair provides layers to your stylesheets:

1. **Default variables** for your application's override, such as colours, sizes and breakpoints.
2. **Element selectors**, providing a normalised starting point for all elements.
3. **Pattern placeholders**, providing non-decorated layout placeholders for application to elements or other placeholders.
4. **Component placeholders**, providing pre-written collections of pattern placeholders for applying to HTML structures within your application.
5. **Layout placeholders**, providing pre-written collections of components for common layouts.

After importing flair.scss, your application styles can apply patterns, components and layouts to its selectors, override colour palettes and sizing variables, then create or extend its own patterns, components and layouts.

Only the elements of flair that are used by your Sass will be rendered to the final CSS output.

## Including flair in your project:

Declare any variables that you wish to overwrite before you import flair, and import any custom stylesheets after flair, then everything will be handled automatically for you.

```
@import "myvars";
@import "vendor/flair";
@import "mycomponent/product";
@import "mylayout/shop";
```