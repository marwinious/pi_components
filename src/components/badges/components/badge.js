import { LitElement, css, html } from 'lit'

export class PiBadge extends LitElement {

    static get properties() {
        return {
            
        }
    }

    constructor() {
        super()
    }

    render() {
        return html`
            <slot></slot>
        `;
    }

    static styles = [
        css`
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
                color: #FFF;
            }
        `
    ]
    
}

// if(!customElements.get('pi-badge')) { customElements.define('pi-badge', PiBadge); }