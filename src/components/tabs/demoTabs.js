import { LitElement, css, html } from 'lit'
import { PiTabs } from './tabs';
import { PiTabList } from './tabList';
import { PiTab } from './tab';
import { PiTabPanels } from './tabPanels';
import { PiTabPanel } from './tabPanel';

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
                    <pi-tab value="tab1"></pi-tab>
                    <pi-tab value="tab2"></pi-tab>
                    <pi-tab value="tab3"></pi-tab>
                </pi-tab-list>
                <pi-tab-panels>
                    <pi-tab-panel value="tab1"></pi-tab-panel>
                    <pi-tab-panel value="tab2"></pi-tab-panel>
                    <pi-tab-panel value="tab3"></pi-tab-panel>
                </pi-tab-panels>
            </pi-tabs>
        `;
    }

    static styles = [
        css`
            
        `
    ]
    
}
customElements.define('pi-demo-tabs', PiDemoTabs);
