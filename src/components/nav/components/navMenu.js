import { LitElement, css, html } from 'lit'

export class PiNavMenu extends LitElement {

    static get properties() {
        return {
            items: { type: Array },
            vertical: { type: Boolean },
            depth: { type: Number },
        }
    }

    constructor() {
        super()

        this.items = [];
        this.vertical = false;
        this.depth = 0;
    }

    render() {
        return html`
            
        `;
    }

    static styles = [
        css`
            
        `
    ]
    
}

// if(!customElements.get('pi-nav-menu')) { customElements.define('pi-nav-menu', PiNavMenu); }