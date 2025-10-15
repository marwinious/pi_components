import { LitElement, css, html } from 'lit'

export class PiLabel extends LitElement {

    static get properties() {
        return {
            text: { type: String }
        }
    }

    constructor() {
        super()
        this.text = '';
    }

    render() {
        return html`
            ${this.text}
        `;
    }

    static styles = [
        css`
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
        `
    ]
    
}

// if(!customElements.get('pi-label')) { customElements.define('pi-label', PiLabel); }