import{LitElement as t,html as e,css as o}from"lit";class r extends t{static get properties(){return{disabled:{type:Boolean},value:{type:String}}}constructor(){super(),this.disabled=!1,this.value=""}render(){return e`
            <slot>${this.value}</slot>
        `}static styles=[o`
            :host {
                display: block;
                padding: var(--pi-paginator-nav-item-padding, 5px 10px);
                cursor: pointer;
                color: var(--pi-paginator-nav-item-text-color, #777);
                user-select: none;

                &:hover {
                    color: var(--pi-paginator-nav-item-text-color-hover, #000);
                }
            }

            :host([disabled]) {
                pointer-events: none;
                opacity: 0.6;
            }

            :host([active]) {
                color: var(--pi-paginator-nav-item-text-color-active, #000);
                font-weight: var(--pi-paginator-nav-item-font-weight-active, bold);
            }
        `]}export{r as PiPaginatorNavItem};
//# sourceMappingURL=paginatorNavItem.js.map
