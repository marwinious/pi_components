import { LitElement, css, html } from 'lit'

export class SampleComponent extends LitElement {

    static get properties() {
        return {
            
        }
    }

    constructor() {
        super()
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

// if(!customElements.get('sample-component')) { customElements.define('sample-component', SampleComponent); }