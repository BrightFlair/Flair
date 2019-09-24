# Progressive, declarative UI system, powered by Sass placeholder selectors

Progressive means you can `@extend` as much or as little as you want into your stylesheet. Only areas of the system that you actually use will be rendered to CSS.

Declarative means your style definitions are made server-side in your Sass sourcecode, not in your HTML. This allows the markup to be minimal and semantic, so you can switch stylesheets without changing HTML.

Sass placeholder selectors are used to define named selectors. Placeholders can extend others, providing the benefits of object oriented programming. This allows your design flair to be added in layers on top of a base style. Layers can start small, describing the style of particular elements, and extend right up to whole page layouts.

Example:

```html
<!doctype html>
<title>Homepage</title>
<body id="uri--index">
        <header class="hero">
                <h1>Introducing Sliced Bread</h1>
                <h2>Are you tired of carving your own?</h2>
                <a href="/store">Buy now!</a>                        
        </header>
        
        <h1>Welcome to the website</h1>
        ...
</body>
```

```scss
body#uri--index {
        @extend %page-homepage;

        >.hero {
                @extend %component-hero;
        }
}
```

In the above example, rather than specifying styles in your HTML using class name selectors, an existing page layout is applied to the Sass. Classes are used to identify elements rather than specify design.

