import { LitElement, css, html } from 'lit'
import { PiCard } from '../../cards/components/card';
import { CodeDisplaySample } from '../../samples/codeSampleDisplay';

export class PiFeatureExampleContainer extends LitElement {

    static get properties() {
        return {
            title: { type: String },
            sampleCode: { type: String },
            callbackData: { type: Object }
        }
    }

    constructor() {
        super()
        this.title = '';
        this.sampleCode = '';
        this.callbackData = null;
    }

    render() {
        return html`
            <pi-card>
                <div slot="title">${this.title}</div>

                <div class="flex_container"><slot></slot></div>

                ${this.callbackData ? html`
                    <div class="callback_data">${JSON.stringify(this.callbackData, null, 2)}</div>
                ` : null }

                ${this.sampleCode != '' ? html`
                    <code-display-sample
                    .code=${this.sampleCode}
                    ></code-display-sample>
                ` : null }
                
            </pi-card>
        `;
    }

    handleCallbackData(data) { this.callbackData = data; }

    static styles = [
        css`
            
        `
    ]
    
}
customElements.define('pi-feature-example-container', PiFeatureExampleContainer);
