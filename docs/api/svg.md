# svg Library

## `registerSvgLibrary()`

<div class="vx_api" markdown>
<table>
    <thead>
        <th>Parameter</th>
        <th>Type</th>
        <th>Comments</th>
    </thead>
    <tbody>
        <tr>
            <td>name</td>
            <td>string</td>
            <td>The name of the SVG library.</td>
        </tr>
        <tr>
            <td>library</td>
            <td>Record&lt;string, TemplateResult&gt;</td>
            <td>The SVG library.</td>
        </tr>
    </tbody>
</table>
Registers an SVG library.  If the library already exists, is is replaced.
</div>

## `getSvgLibrary()`

<div class="vx_api" markdown>
<table>
    <thead>
        <th>Parameter</th>
        <th>Type</th>
        <th>Comments</th>
    </thead>
    <tbody>
        <tr>
            <td>name</td>
            <td>string</td>
            <td>The name of the SVG library.</td>
        </tr>
    </tbody>
</table>
Returns the SVG library with the given name.
</div>


## `hasSvgLibrary()`

<div class="vx_api" markdown>
<table>
    <thead>
        <th>Parameter</th>
        <th>Type</th>
        <th>Comments</th>
    </thead>
    <tbody>
        <tr>
            <td>name</td>
            <td>string</td>
            <td>The name of the SVG library.</td>
        </tr>
    </tbody>
</table>
Returns `true` if the library exists in the register.
</div>

## `svg()`

<div class="vx_api" markdown>
<table>
    <thead>
        <th>Parameter</th>
        <th>Type</th>
        <th>Comments</th>
    </thead>
    <tbody>
        <tr>
            <td>name</td>
            <td>string</td>
            <td>
                The name of the SVG in the format <code>[library].[name]</code>. <br>
                Eg.: <code>svg("shapes.circle")</code>
            </td>
        </tr>
    </tbody>
</table>
Returns a `TemplateResult` representing the SVG or `nothing` if the SVG does not exist.
</div>

