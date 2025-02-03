import { LitElement, css, html } from 'lit'

export class PiGrid extends LitElement {

    static get properties() {
        return {
            gutter: { type: String }
        }
    }

    constructor() {
        super()
        this.gutter = 'md';
    }

    render() {
        return html`
            <slot></slot>
        `;
    }

    static styles = [
        css`
            :host {
                display: grid;
                width: 100%;
                grid-template-columns: repeat(12, 1fr);
                grid-gap: 16px;
                row-gap: 1rem;
            }

            :host([gutter="sm"]) { grid-gap: 0.5rem; }
            :host([gutter="md"]) { grid-gap: 1rem; }
            :host([gutter="lg"]) { grid-gap: 2rem; }

            @media (max-width: 768px) {
                :host {
                    grid-template-columns: repeat(6, 1fr); /* Adjust columns on smaller screens */
                    grid-gap: 0.5rem;
                }
            }
        `
    ]
    
}
customElements.define('pi-grid', PiGrid);
