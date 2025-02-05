import { LitElement, css, html } from 'lit'
import { PiCard } from '../../cards/components/card';

export class PiFeatureDemoContainer extends LitElement {

    static get properties() {
        return {
            label: { type: String }
        }
    }

    constructor() {
        super()
        this.label = '';
    }

    render() {
        return html`
            <pi-card>
                <div class="feature_header" slot="header">${this.label}</div>
                <slot></slot>
            </pi-card>
        `;
    }

    static styles = [
        css`
            .feature_header {
                display: block;
                background: #444;
                color: #eee;
                padding: 0.5rem;
                font-weight: bold;
            }
        `
    ]
    
}
customElements.define('pi-feature-demo-container', PiFeatureDemoContainer);
