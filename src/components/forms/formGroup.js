import { LitElement, css, html } from 'lit'
import { PiBaseFormElement } from '../inputs/base/baseFormElement';

export class PiFormGroup extends PiBaseFormElement {

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
customElements.define('pi-form-group', PiFormGroup);
