import{LitElement as r,html as t,css as e}from"lit";class s extends r{static properties={};constructor(){super()}render(){return t`<slot></slot>`}static styles=e`
        :host {
            display: none;
            color: var(--pi-tabs-panel-text-color, inherit);
            background-color: var(--pi-tabs-panel-bg-color, inherit);
            padding: var(--pi-tabs-panel-padding, 1rem);
            border-style: var(--pi-tabs-panel-border-style, solid);
            border-width: var(--pi-tabs-panel-border-width, 1px);
            border-color: var(--pi-tabs-panel-border-color, #ddd);
        }
        
        :host([active]) {
            display: block;
        }
    `}export{s as PiTabPanel};
//# sourceMappingURL=tabPanel.js.map
