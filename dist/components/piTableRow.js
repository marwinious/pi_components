import{LitElement as r,html as t,css as l}from"lit";import{repeat as o}from"lit/directives/repeat.js";class s extends r{static get properties(){return{item:{type:Object},columns:{type:Array},rowIndex:{type:Number}}}constructor(){super(),this.item={},this.columns=[],this.rowIndex=-1}render(){return t`
            ${o(this.columns,e=>e.key,e=>t`
                <td role="cell">
                    ${e.render?e.render(this.item,this.rowIndex):this.item[e.key]}
                </td>
            `)}
        `}static styles=[l`
            :host {
                display: table-row;
            }

            td {
                padding: var(--pi-table-cell-padding, 0.75em);
                border-top: var(--pi-table-cell-border-top, 1px solid #ddd);
                border-right: var(--pi-table-cell-border-right, 1px solid #ddd);
                border-bottom: var(--pi-table-cell-border-bottom, 1px solid #ddd);
                border-left: var(--pi-table-cell-border-left, 1px solid #ddd);
                background-color: var(--pi-table-cell-bg-color, #f4f4f4);
                color: var(--pi-table-cell-text-color);
                text-align: var(--pi-table-cell-text-align, left);
                font-weight: var(--pi-table-cell-font-weight, bold);
                transition: var(--pi-table-cell-transition, background-color 0.5s ease, border 0.5s ease, color 0.5s ease);
            }
        `]}
//# sourceMappingURL=piTableRow.js.map
