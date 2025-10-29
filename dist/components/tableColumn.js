import{LitElement as a,html as o,css as s}from"lit";import{register as l}from"../utils/registerWebComp.js";import{classMap as n}from"lit/directives/class-map.js";import{PiTableSortIcon as c}from"./tableSortIcon.js";l("pi-table-sort-icon",c);class m extends a{static get properties(){return{sortable:{type:Boolean},sortDirection:{type:String},key:{type:String},label:{type:String}}}constructor(){super(),this.sortable=!1,this.sortDirection="",this.key="",this.label=""}connectedCallback(){super.connectedCallback(),this.addEventListener("updateSorter",t=>this.handleUpdateSorter(t.detail))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("updateSorter",t=>this.handleUpdateSorter(t.detail))}render(){const t={isSortable:this.sortable};return o`
            <div 
            class="table_th ${n(t)}"
            @click=${this.handleSortClick}
            >
                ${this.label}
                ${this.sortable?o`
                    <pi-table-sort-icon
                    .sortDirection=${this.sortDirection}
                    ></pi-table-sort-icon>
                `:null}
            </div>
            
        `}handleUpdateSorter(t){t.sortKey!=this.key?this.sortDirection="":this.sortDirection=t.sortDirection}handleSortClick(t){if(this.sortable==!0){const e=this.sortDirection,r=e=="asc"?"desc":"asc",i=new CustomEvent("sortRequested",{detail:{key:this.key,label:this.label,currentSortDirection:e,newSortDirection:r},bubbles:!0,composed:!0});this.dispatchEvent(i),this.sortDirection=r}}static styles=[s`
            :host {
                display: table-cell;
                padding: var(--pi-table-th-padding, 0.75em);
                border-top: var(--pi-table-th-border-top, 1px solid #ddd);
                border-right: var(--pi-table-th-border-right, 1px solid #ddd);
                border-bottom: var(--pi-table-th-border-bottom, 1px solid #ddd);
                border-left: var(--pi-table-th-border-left, 1px solid #ddd);
                background-color: var(--pi-table-th-bg-color, #f4f4f4);
                color: var(--pi-table-th-text-color, #555);
                text-align: var(--pi-table-th-text-align, left);
                position: relative;
                font-weight: var(--pi-table-th-font-weight, bold);
                transition: var(--pi-table-th-transition, background-color 0.5s ease, border 0.5s ease, color 0.5s ease);

                &[data-active="true"] {
                    background-color: var(--pi-table-th-bg-color-active, color-mix(in srgb, var(--pi-table-th-bg-color, #f4f4f4), black 20%));
                }
            }

            .table_th {
                &.isSortable {
                    cursor: pointer;
                }
            }

            @media (max-width: 768px) {
                :host {
                    font-size: var(--pi-table-th-font-size-sm, 0.9em);
                }
            }
        `]}export{m as PiTableColumn};
//# sourceMappingURL=tableColumn.js.map
