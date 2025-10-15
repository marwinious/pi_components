import { LitElement, css, html } from 'lit'
import { PiBaseFormElement } from '../inputs/base/baseFormElement';

export class PiFormGroup extends LitElement {

    static get properties() {
        return {
            name: { type: String }
        }
    }

    constructor() {
        super()
        this.name = '';
    }

    render() {
        return html`
            <slot></slot>
        `;
    }

    static styles = [
        css`
            
        `
    ]
    
}

// if(!customElements.get('pi-form-group')) { customElements.define('pi-form-group', PiFormGroup); }