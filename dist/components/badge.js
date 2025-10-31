import{LitElement as e,html as r,css as t}from"lit";class d extends e{static get properties(){return{}}constructor(){super()}render(){return r`
            <slot></slot>
        `}static styles=[t`
            :host {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                width: var(--pi-badge-width, 10px);
                height: var(--pi-badge-height, 10px);
                font-size: var(--pi-badge-font-size, 0.75rem);
                border-radius: var(--pi-badge-border-radius, 50%);
                background: var(--pi-badge-background-color, rgba(0,0,0,0.25));
                padding: var(--pi-badge-padding, 0.27rem);
                color: var(--pi-badge-text-color, #FFF);
            }
        `]}export{d as PiBadge};
//# sourceMappingURL=badge.js.map
