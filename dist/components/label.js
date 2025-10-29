import{LitElement as t,html as r,css as e}from"lit";class a extends t{static get properties(){return{text:{type:String}}}constructor(){super(),this.text=""}render(){return r`
            ${this.text}
        `}static styles=[e`
            :host {
                display: inline-block;
                box-sizing: border-box;
                font-size: var(--pi-label-font-size, 1rem);
                text-transform: var(--pi-label-transform, none);
                color: var(--pi-label-color, #888);
                font-weight: var(--pi-label-font-weight, normal);
                padding: var(--pi-label-padding, 0 0 0 0.5rem);
                margin: var(--pi-label-margin, 0 0 0.25rem 0);
            }

            :host([block]) {
                display: block;
            }

            :host([no-padding]) {
                padding: 0;
            }

            :host([no-margin]) {
                margin: 0;
            }
        `]}export{a as PiLabel};
//# sourceMappingURL=label.js.map
