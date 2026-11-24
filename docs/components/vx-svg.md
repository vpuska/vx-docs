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

