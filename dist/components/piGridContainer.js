import{LitElement as t,html as r,css as e}from"lit";class s extends t{static get properties(){return{gutter:{type:String,reflect:!0}}}constructor(){super(),this.gutter="md"}render(){return r`
            <slot></slot>
        `}static styles=[e`
            :host {
                display: flex;
                flex-direction: column; /* Ensures rows stack properly */
                gap: var(--pi-grid-row-gap, 1rem); /* Adjust spacing between rows */
                width: 100%;
                box-sizing: border-box;
            }

            :host([gutter="sm"]) { gap: var(--pi-grid-gap-gutter-sm, 0.5rem) }
            :host([gutter="md"]) { gap: var(--pi-grid-gap-gutter-md, 1rem) }
            :host([gutter="lg"]) { gap: var(--pi-grid-gap-gutter-lg, 2rem) }

            ::slotted(pi-row) { gap: var(--pi-grid-column-gap, 1rem); /* Space between columns */ }
            :host([gutter="sm"]) ::slotted(pi-row) { gap: var(--pi-grid-gap-gutter-sm, 0.5rem); }
            :host([gutter="md"]) ::slotted(pi-row) { gap: var(--pi-grid-gap-gutter-md, 1rem); }
            :host([gutter="lg"]) ::slotted(pi-row) { gap: var(--pi-grid-gap-gutter-lg, 2rem); }

            @media (max-width: 768px) {
                :host {
                    gap: var(--pi-grid-row-gap-mw-768, 0.5rem);
                }
            }
        `]}
//# sourceMappingURL=piGridContainer.js.map
