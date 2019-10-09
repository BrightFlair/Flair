# Progressive, declarative UI system, powered by Sass placeholder selectors

Progressive means you can `@extend` as much or as little as you want into your stylesheet. Only areas of the system that you actually use will be rendered to CSS.

Declarative means your style definitions are made server-side in your Sass sourcecode, not in your HTML. This allows the markup to be minimal and semantic, so you can switch stylesheets without changing HTML.

Sass placeholder selectors are used to define named selectors. Placeholders can extend others, providing the benefits of object oriented programming. This allows your design flair to be added in layers on top of a base style. Layers can start small, describing the style of particular elements, and extend right up to whole page layouts.

## Directory structure of Flair:

Flair uses this directory structure to organise the layers of the stylesheets. You can use this structure within your application too, but it is not necessary. The styles provided by Flair are intentionally basic but allow your stylesheets to extend them and apply your own brand. 

1. **Variable**: default variables for your application to override where necessary e.g. palette, size and breakpoint.
2. **Element**: normalisation for all elements e.g. h1, button, body.
3. **Pattern**: non-decorated positioning and basic styles for extension by components or other placeholders e.g. padding, margin, alignment, column/row application.
4. **Decoration**: decorated styles, typically applied over basic patterns e.g. borders, backgrounds, interaction effects.
5. **Layout**, providing pre-written collections of components for common layouts e.g. blog-comments

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

## Documentation:

Read the full documentation at the Github wiki: https://github.com/BrightFlair/flair/wiki