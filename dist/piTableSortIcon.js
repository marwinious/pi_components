import{LitElement as t,html as r,css as o}from"lit";class s extends t{static get properties(){return{sortDirection:{type:String}}}constructor(){super(),this.sortDirection=""}render(){return r`
            ${this.sortDirection==="asc"?"▲":this.sortDirection==="desc"?"▼":"↕"}
        `}static styles=[o`
            :host {
                margin: var(--pi-table-sort-icon-margin, 0 0 0 0.5em);
                font-size: var(--pi-table-sort-icon-font-size, 0.8em);
                color: var(--pi-table-sort-icon-color, #666);
            }

            :host([data-active="true"]) {
                color: var(--pi-table-sort-icon-active-color, #000);
            }
        `]}export{s as PiTableSortIcon};
//# sourceMappingURL=piTableSortIcon.js.map
