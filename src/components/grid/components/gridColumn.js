import { LitElement, css, html } from 'lit'

export class PiGridColumn extends LitElement {

    static get properties() {
        return {
            cols: { type: Number }
        }
    }

    constructor() {
        super()
        this.cols = 0;
    }

    render() {
        if(this.cols > 0) {
            this.style.gridColumn = `span ${this.cols}`;
        }
        else {
            // this.style.gridColumn = 'auto';
        }

        return html`
            <slot></slot>
        `;
    }

    static styles = [
        css`
            :host {
                display: block;
                grid-column: auto;
                width: 100%;
                min-width: 0;
                box-sizing: border-box;
            }
        `
    ]
    
}

// if(!customElements.get('pi-col')) { customElements.define('pi-col', PiGridColumn); }