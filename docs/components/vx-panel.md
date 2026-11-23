# vx-panel

`vx-panel | VxPanel`

## Examples

=== "Output"

    <div class="vx">
        <vx-panel style="width:50%; margin-left: 0">
            <em slot="header">Demo vx-panel header</em>
            <p>This is the panel content.</p>
            <p>
                The header and footer can be suppressed
                by not providing content for the corresponding
                slots.
            </p>
            <small slot="footer">Here is the footer</small>
        </vx-panel>
    </div>

=== "HTML"

    ```html
        <vx-panel>
            <em slot="header">Demo vx-panel header</em>
            <p>This is the panel content.</p>
            <p>
                The header and footer can be suppressed
                by not providing content for the corresponding
                slots.
            </p>
            <small slot="footer">Here is the footer</small>
        </vx-panel>
    ```
    
