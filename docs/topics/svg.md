# SVG Libraries

The `svg` API provides routines for managing and using SVG libraries.  A library is a collection of SVG elements stored as a javascript object.  By using libraries, there is no need to deploy separate asset files with your application.

For example:

```typescript
const shapeIcons: SVGLibrary = {

    "circle" : html`<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
    </svg>`,

    "square" : html`<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
    </svg>`,

    "square-fill" : html`<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z"/>
    </svg>`
}

// register the library...
registerSvgLibrary("shapes", shapeIcons);
```

The shapes can be used via the `svg()` function or `vx-svg` component.

=== "`svg()`"
    
    ```typescript
    svg("shapes.square");
    ```

=== "`vx-svg`"

    ```html
    <vx-svg library="shapes" name="square"></vx-svg>
    ```

## Example

=== "Output"

    <div>
        <div style="display: flex; gap: 1rem; font-size:3em; color:orange">
            <vx-svg library="shapes" name="circle"></vx-svg>
            <vx-svg library="shapes" name="square"></vx-svg>
            <vx-svg library="shapes" name="square-fill"></vx-svg>
        </div>
    </div>

=== "Source"

    ```html
        <script type="module">
            import {registerSvgLibrary, html} from "/vx-components.js";
            registerSvgLibrary("shapes", {
                "circle" : html`<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" 
                    fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                </svg>`,
                "square" : html`<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" 
                    fill="currentColor" viewBox="0 0 16 16">
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                </svg>`,
                "square-fill" : html`<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" 
                    fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z"/>
                </svg>`
            });
        </script>
        <div style="display: flex; gap: 1rem; font-size:3em; color: orange">
            <vx-svg library="shapes" name="circle"></vx-svg>
            <vx-svg library="shapes" name="square"></vx-svg>
            <vx-svg library="shapes" name="square-fill"></vx-svg>
        </div> 
    ```

<script type="module">
    import {registerSvgLibrary, html} from "/vx-components.js";
    registerSvgLibrary("shapes", {
        "circle" : html`<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
        </svg>`,
        "square" : html`<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
        </svg>`,
        "square-fill" : html`<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
            <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z"/>
        </svg>`
    });
</script>
