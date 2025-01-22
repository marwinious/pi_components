import { LitElement, css, html } from 'lit'

export class PiTab extends LitElement {

    static properties = {
        value: { type: String },
        selected: { type: Boolean },
    };

    static styles = css`
        :host {
            display: inline-block;
            padding: var(--tabbed-box-tab-padding, 0.5em 1em);
            cursor: var(--tabbed-box-tab-cursor, pointer);
            color: var(--tabbed-box-tab-text-color, #000);
            font-weight: var(--tabbed-box-tab-font-weight, normal);
            border-bottom: 2px solid transparent;
            background-color: var(--tabbed-box-tab-bg-color, #FFF);
            border-bottom-color: var(--tabbed-box-tab-bottom-border-color, transparent);
            transition: background-color 0.5s ease, border 0.5s ease, color 0.5s ease;
            user-select: none;
        }

        :host([selected]) {
            font-weight: var(--tabbed-box-tab-selected-font-weight, normal);
            color: var(--tabbed-box-tab-selected-text-color, #000);
            background-color: var(--tabbed-box-tab-selected-bg-color, #DDD);
            border-bottom-color: var(--tabbed-box-tab-selected-bottom-border-color, #000);
        }
    `;

    render() {
        return html`<slot></slot>`;
    }

}
customElements.define('pi-tab', PiTab);
