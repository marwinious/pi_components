import{LitElement as i,html as t,css as e}from"lit";import{unsafeHTML as n}from"lit/directives/unsafe-html.js";class o extends i{static get properties(){return{icon:{type:String}}}constructor(){super(),this.icon=""}render(){return t`
            <div class="icon">${n("<pi-icon-"+this.icon+"></pi-icon-"+this.icon)}</div>
        `}static styles=[e`
            :host {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                height: 100%;
            }

            .icon {
                display: inline-flex;
                height: 100%;

                * {
                    display: inline-flex;
                    height: 100%;
                }
            }
        `]}export{o as PiIconHandler};
//# sourceMappingURL=iconHandler.js.map
