import { LitElement, css, html } from 'lit'

export class PiTab extends LitElement {

    static properties = {
        
    };

    constructor() {
        super()
    }

    render() {
        return html`<slot></slot>`;
    }

    static styles = css`
        :host {
            display: inline-block;
            padding: var(--pi-tabs-tab-padding, 0.5em 1em);
            cursor: var(--pi-tabs-tab-cursor, pointer);
            color: var(--pi-tabs-tab-text-color, #000);
            font-weight: var(--pi-tabs-tab-font-weight, normal);
            border-bottom: 2px solid transparent;
            background-color: var(--pi-tabs-tab-bg-color, #FFF);
            border-bottom-color: var(--pi-tabs-tab-bottom-border-color, transparent);
            transition: background-color 0.5s ease, border 0.5s ease, color 0.5s ease;
            user-select: none;
        }

        :host([selected]) {
            font-weight: var(--pi-tabs-tab-selected-font-weight, normal);
            color: var(--pi-tabs-tab-selected-text-color, #000);
            background-color: var(--pi-tabs-tab-selected-bg-color, #DDD);
            border-bottom-color: var(--pi-tabs-tab-selected-bottom-border-color, #000);
        }
    `;

}
customElements.define('pi-tab', PiTab);
