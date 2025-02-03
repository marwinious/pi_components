import { LitElement, css, html } from 'lit'

export class PiGrid extends LitElement {

    static get properties() {
        return {
            gutter: { type: String, reflect: true }
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
                display: flex;
                flex-direction: column; /* Ensures rows stack properly */
                gap: var(--pi-grid-row-gap, 1rem); /* Adjust spacing between rows */
                width: 100%;
            }

            :host([gutter="sm"]) { gap: var(--pi-grid-gap-gutter-sm, 0.5rem) }
            :host([gutter="md"]) { gap: var(--pi-grid-gap-gutter-md, 1rem) }
            :host([gutter="lg"]) { gap: var(--pi-grid-gap-gutter-lg, 2rem) }

            ::slotted(pi-row) { gap: var(--pi-grid-column-gap, 1rem); /* Space between columns */ }
            :host([gutter="sm"]) ::slotted(pi-row) { gap: var(--pi-grid-gap-gutter-sm, 0.5rem); }
            :host([gutter="md"]) ::slotted(pi-row) { gap: var(--pi-grid-gap-gutter-md, 1rem); }
            :host([gutter="lg"]) ::slotted(pi-row) { gap: var(--pi-grid-gap-gutter-lg, 2rem); }

            @media (max-width: 768px) {
                :host {
                    gap: var(--pi-grid-row-gap-mw-768, 0.5rem);
                }
            }
        `
    ]
    
}
customElements.define('pi-grid', PiGrid);
