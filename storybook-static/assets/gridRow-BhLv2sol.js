import{r as t,x as r,i as e}from"./lit-element-CIbSzfXw.js";class i extends t{static get properties(){return{gutter:{type:String,reflect:!0}}}constructor(){super(),this.gutter="md"}render(){return r`
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
        `]}customElements.define("pi-grid",i);class o extends t{static get properties(){return{cols:{type:Number}}}constructor(){super(),this.cols=0}render(){return this.cols>0&&(this.style.gridColumn=`span ${this.cols}`),r`
            <slot></slot>
        `}static styles=[e`
            :host {
                display: block;
                grid-column: auto;
                width: 100%;
                min-width: 0;
                box-sizing: border-box;
            }
        `]}customElements.define("pi-col",o);class p extends t{static get properties(){return{}}constructor(){super()}render(){return r`
            <slot></slot>
        `}static styles=[e`
            :host {
                display: grid;
                grid-template-columns: var(--pi-grid-template-columns, repeat(12, 1fr)); /* 12-column layout */
                /* gap: 16px; Space between columns */
                width: 100%;
                box-sizing: border-box;
            }

            @media (max-width: 768px) {
                :host {
                    grid-template-columns: var(--pi-grid-template-columns-mw-768, repeat(6, 1fr)); /* Switch to 6 columns */
                }
            }

            @media (max-width: 480px) {
                :host {
                    grid-template-columns: var(--pi-grid-template-columns-mw-480, repeat(2, 1fr)); /* Switch to 6 columns */
                }
            }
        `]}customElements.define("pi-row",p);
