# vx-router

`vx-router | VxRouter`

A `vx-router` component manages the application's routing.  The current URL is checked against a set of
defined routes ([vx-route](vx-route.md) components) in the component's content (default slot).

The routes should be defined in order of specificity, ascending or descending depending on the
`reversed` property.

`vx-router` components can be nested in the DOM. 

## Examples

```html
<vx-router>
    <vx-route path="/home">
        This is the content of the home page
    </vx-route>
    <vx-route path="/about">
        This is the content of the about page
    </vx-route>
    <vx-route path="/contact">
        This is the content of the contact page
    </vx-route>
</vx-router>
```
## Attributes
### `reversed`
<div class="vx_property" markdown>
<table>
    <tr><td>Type</td>   <td>boolean</td></tr>
    <tr><td>Default</td><td>false</td></tr>
</table>
Normally routes are matched top to bottom, ordered from the most specific to the 
least specific.  When set to true, the order is reversed.
</div>

## Slots
<div class="vx_event" markdown>
<table>
    <tr><td>(default)</td>   <td><code>vx-route</code> components defining the individual routes.</td></tr>
</table>
</div>
