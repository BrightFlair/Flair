# Progressive, declarative UI system, powered by Sass placeholder selectors.

Progressive means you can `@extend` as much or as little of the library as you want into your application. Only areas of the system that you actually use will be rendered to CSS.

Declarative means your style definitions are made server-side in your Sass sourcecode, rather than in your HTML. This allows the markup to be minimal and semantic, so you can switch stylesheets without changing HTML.

Sass placeholder selectors are used to define named selectors. Placeholders can extend others, providing the benefits of encapsulation and inheritance. This allows _your_ design flair to be added in layers on top of a base style. Layers can start small, describing the style of particular elements, and extend right up to whole page layouts.

## Hierarchy of Flair:

Flair uses the following hierarchy structure to organise the layers of the stylesheets. This structure should be present within your application's stylesheets too, so Flair's starting styles can be overridden.

The styles provided by Flair are intentionally basic but allow your stylesheets to extend them and apply your own brand's "flair".

The layers, organised by specificity:

1. **Variable**: default variables for your application to override where necessary, e.g. palette, size and breakpoint.
2. **Element**: defines the default style for all elements, normalising across browsers, e.g. h1, button, body.
3. **Decoration**: basic visual styles for extension by patterns, components or other placeholders, e.g. typography, padding, margin, alignment, background.
4. **Pattern**: UI patterns that repeat across multiple projects, e.g. navigation, form-fields, vertical-list. 
5. **Layout**: pre-written collections of patterns and decorations that require their own markup, for common layouts that are more complex than simple patterns, e.g. blog-comments, photo-gallery, calendar.
6. **Component**: individual, one-off components of user interface that require specific style overrides, e.g. contact-form (extends form-fields), .
7. **Page**: styles that are only applied to specific pages, or page templates.

After importing flair.scss, your application styles can apply patterns, components and layouts to its selectors, override colour palettes and sizing variables, then create or extend its own patterns, components and layouts.

Only the elements of flair that are used by your Sass will be rendered to the final CSS output, so there is no need for complicated CSS removal processes.

## Including flair in your project:

In your main sass file, before you import flair, load your fonts and declare any variables that you wish to overwrite. After flair is imported, import any custom stylesheets from your application.

```
@import "myproject/font/roboto";
@import "myproject/variable/palette";
 
@import "vendor/flair";

@import "myproject/layout/shop-filters";
@import "myproject/component/shop-product";
@import "myproject/page/_common";
@import "myproject/page/shop";
```

## Documentation and examples:

This repository holds a website that is used to demonstrate Flair in action. It can be hosted locally using [PHP.Gt WebEngine](https://www.php.gt/webengine) and is available online at https://flair.brightflair.com.

Read the full documentation at the Github wiki: https://github.com/BrightFlair/flair/wiki.