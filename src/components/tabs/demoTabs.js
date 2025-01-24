import { LitElement, css, html } from 'lit'
import { PiTabs } from './tabs';
import { PiTabList } from './tabList';
import { PiTab } from './tab';
import { PiTabPanels } from './tabPanels';
import { PiTabPanel } from './tabPanel';
import { PiDemoContainer } from '../samples/demoContainer';

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

            <pi-demo-container
            title="Tabs"
            >
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
            </pi-demo-container>

        `;
    }

    static styles = [
        css`
            
        `
    ]
    
}
customElements.define('pi-demo-tabs', PiDemoTabs);
