import { LitElement, css, html } from 'lit'
import { PiTabs } from './tabs';
import { PiTabList } from './tabList';
import { PiTab } from './tab';

export class PiDemoTabs extends LitElement {

    static get properties() {
        return {
            
        }
    }

    constructor() {
        super()
    }

    render() {
        return html`
            <pi-tabs>
                <pi-tab-list>
                    <pi-tab></pi-tab>
                    <pi-tab></pi-tab>
                    <pi-tab></pi-tab>
                </pi-tab-list>
            </pi-tabs>
        `;
    }

    static styles = [
        css`
            
        `
    ]
    
}
customElements.define('pi-demo-tabs', PiDemoTabs);
