import { LitElement, css, html } from 'lit'
import { PiButton } from './button';
import { CodeDisplaySample } from '../samples/codeSampleDisplay';

export class PiDemoButtons extends LitElement {

    static get properties() {
        return {
            
        }
    }

    constructor() {
        super()
    }

    render() {

        const codeSample = `
<pi-tabs>
    <pi-tab-list>
        <pi-tab value="tab1">Tab 1</pi-tab>
        <pi-tab value="tab2">Tab 2</pi-tab>
        <pi-tab value="tab3">Tab 3</pi-tab>
    </pi-tab-list>
    <pi-tab-panels>
        <pi-tab-panel value="tab1">
            <p>Content for tab 1</p>
        </pi-tab-panel>
        <pi-tab-panel value="tab2">
            <ul>
                <li>Content</li>
                <li>for</li>
                <li>tab</li>
                <li>2</li>
            </ul>
        </pi-tab-panel>
        <pi-tab-panel value="tab3">
            <h5>Content for tab 3</h5>
        </pi-tab-panel>
    </pi-tab-panels>
</pi-tabs>
        `

        return html`
            
        `;
    }

    static styles = [
        css`
            
        `
    ]
    
}
customElements.define('pi-demo-buttons', PiDemoButtons);
