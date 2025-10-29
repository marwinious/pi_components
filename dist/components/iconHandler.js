import{LitElement as i,html as n,css as t}from"lit";import{unsafeHTML as s}from"lit/directives/unsafe-html.js";class o extends i{static get properties(){return{icon:{type:String}}}constructor(){super(),this.icon=""}render(){return n`
            <div class="icon">${s("<pi-icon-"+this.icon+"></pi-icon-"+this.icon)}</div>
        `}static styles=[t`
            :host {
                display: var(--pi-icons-display, inline-flex);
                align-items: var(--pi-icons-align-items, center);
                justify-content: var(--pi-icons-justify-content, center);
                height: var(--pi-icons-height, 100%);
            }

            .icon {
                display: var(--pi-icons-display, inline-flex);
                height: var(--pi-icons-height, 100%);

                * {
                    display: var(--pi-icons-display, inline-flex);
                    height: var(--pi-icons-height, 100%);
                }
            }
        `]}export{o as PiIconHandler};
//# sourceMappingURL=iconHandler.js.map
