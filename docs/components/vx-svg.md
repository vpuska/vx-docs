# vx-svg

`vx-svg | VxSVG`

The `vx-svg` component displays an SVG element from a registered SVG library.  See [SVG Libraries](../topics/svg.md).

## Examples

=== "Output"

    <div class="vx">
        <div style="display: flex; flex-flow: row wrap; gap: 12px; color: orange; font-size: 3em">
            <vx-svg library="shapes" name="circle"></vx-svg>
            <vx-svg library="shapes" name="square" button></vx-svg>
            <vx-svg library="shapes" name="square-fill"></vx-svg>
        </div>
    </div>

=== "HTML"

    ```html
        <div style="display: flex; flex-flow: row wrap; gap: 12px; color: orange; font-size: 3em">
            <vx-svg library="shapes" name="circle"></vx-svg>
            <vx-svg library="shapes" name="square" button></vx-svg>
            <vx-svg library="shapes" name="square-fill"></vx-svg>
        </div>
    ```
    
## Attributes

### `library`
<div class="vx_attribute" markdown>
<table>
    <tr><td>Type</td>   <td>string</td></tr>
    <tr><td>Default</td><td>"default"</td></tr>
</table>
The name of the registered library the SVG resides in. See [SVG Libraries](../topics/svg.md).  Id omitted, the default library is used.
</div>

### `name`
<div class="vx_attribute" markdown>
<table>
    <tr><td>Type</td>   <td>string</td></tr>
    <tr><td>Default</td><td>(none)</td></tr>
</table>
The name of the SVG to display.
</div>

### `button`
<div class="vx_attribute" markdown>
<table>
    <tr><td>Type</td>   <td>boolean</td></tr>
    <tr><td>Default</td><td>false</td></tr>
</table>
If `button` is set, the `vx-svg` element will be clickable and raise a `click` event.  The cursor will 
become a pointer and the element highlighted when the mouse is over the element.
</div>

    
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
