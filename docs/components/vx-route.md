# vx-route

`vx-route | VxRoute`

A `vx-route` defines an individual route path.  A route must be defined as a direct child of a [VxRouter](vx-router.md)
element.

Parsing of the route is done by the `path-to-regexp` package on [npm](https://www.npmjs.com/package/path-to-regexp) and any parameters extracted stored in
the route's `paramters` property.

## Examples

```html
    <vx-route path="/home">
        This is the content of the home page
    </vx-route>
```
The parameter is saved in the route's `parameters` property and can be interrogated
by child elements.
```html
    <vx-route path="/products/:id">
        <my-products-page></my-products-page>
    </vx-route>
```
The `subroute` flag indicate a routing node.  A child `<vx-router` element would be responsible
for processing further path fragments.  The child router does not have to be a direct child.

```html
    <vx-route path="/products" subroute>
        <my-products-page></my-products-page>
    </vx-route>
```
Instead of placing content in the default slot, a component can be named.  The component element
is created and added to the DOM by the route.  When the route is no longer active, the element is
removed from the DOM.
```html
    <vx-route path="/products" component="my-products-page" subroute>
    </vx-route>
```

## Attributes

### `path`
<div class="vx_attribute" markdown>
<table>
    <tr><td>Type</td>   <td>string</td></tr>
    <tr><td>Default</td><td>-</td></tr>
</table>
The path for this route relative to any parent routes. See [path-to-regexp on npmjs.com](https://www.npmjs.com/package/path-to-regexp) 
for an explanation of the path syntax
</div>

### `subroute`
<div class="vx_property" markdown>
<table>
    <tr><td>Type</td>   <td>boolean</td></tr>
    <tr><td>Default</td><td>false</td></tr>
</table>
Identifies the route as a subroute.
</div>

### `component`
<div class="vx_property" markdown>
<table>
    <tr><td>Type</td>   <td>string</td></tr>
    <tr><td>Default</td><td>null</td></tr>
</table>
This component will be created and added to the DOM instead of rendering the slotted elements.
</div>

### `active`
<div class="vx_property" markdown>
<table>
    <tr><td>Type</td>   <td>boolean</td></tr>
    <tr><td>Default</td><td>false</td></tr>
</table>
Indicates this path is active.  The attribute is automatically set/reset by the parent `vx-router` component.
</div>


## Properties

### `customTemplate`

<div class="vx_property" markdown>
<table>
    <tr><td>Type</td>   <td>TemplateResult</td></tr>
    <tr><td>Default</td><td>TemplateResult | () => TemplateResult</td></tr>
</table>
An alternative template to use where using slotted elements is not suitable.
The value of this property should be set during a `vx-connected` or `vx-activated`
event.
</div>

### `componentRef`
<div class="vx_property" markdown>
<table>
    <tr><td>Type</td>   <td>HtmlElement</td></tr>
    <tr><td>Default</td><td>undefined</td></tr>
</table>
A reference to the component created when the `component` attribute was specified
</div>

### `parameters`
<div class="vx_property" markdown>
<table>
    <tr><td>Type</td>   <td>object</td></tr>
    <tr><td>Default</td><td>{}</td></tr>
</table>
The parameters extracted from the URL by the route
</div>


## Events

<div class="vx_event">
<table>
    <thead>
        <tr>
            <th>Event</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>vx-connected</td>
            <td>Called when the route is connected to the DOM.</td>
        </tr><tr>
            <td>vx-activate</td>
            <td>Called when the route is about to be activated.</td>
        </tr><tr>
            <td>vx-activated</td>
            <td>Called when the route has been activated.</td>
        </tr><tr>
            <td>vx-deactivate</td>
            <td>Called when the route is about to be deactivated.</td>
        </tr><tr>
            <td>vx-deactivated</td>
            <td>Called when the route has been deactivated.</td>
        </tr>
    </tbody>
</table>
</div>


## Slots

<div class="vx_slot">
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>(default)</td>
            <td>Content to be displayed when the route is active and <code>component</code> property is not set.</td>
        </tr>
    </tbody>
</table>
</div>
