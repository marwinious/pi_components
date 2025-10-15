import{LitElement as t,html as o,css as r}from"lit";class s extends t{static properties={};constructor(){super()}render(){return o`<slot></slot>`}static styles=r`
        :host {
            display: inline-block;
            padding: var(--pi-tabs-tab-padding, 0.5em 1em);
            cursor: var(--pi-tabs-tab-cursor, pointer);
            color: var(--pi-tabs-tab-text-color, #000);
            font-weight: var(--pi-tabs-tab-font-weight, normal);
            border-bottom: var(--pi-tabs-tab-border-bottom 2px solid transparent);
            background-color: var(--pi-tabs-tab-bg-color, #FFF);
            transition: background-color 0.5s ease, border 0.5s ease, color 0.5s ease;
            user-select: none;
        }

        :host([selected]) {
            font-weight: var(--pi-tabs-tab-font-weight-selected, normal);
            color: var(--pi-tabs-tab-text-color-selected, #000);
            background-color: var(--pi-tabs-tab-bg-color-selected, #DDD);
            border-bottom: var(--pi-tabs-tab-border-bottom-selected, #000);
        }
    `}
//# sourceMappingURL=piTab.js.map
