import { LitElement, css, html } from 'lit'
import { PiFeatureDemoContainer } from '../base/featureDemoContainer';
import { PiFeatureExampleContainer } from '../base/featureExampleContainer';
import { 
    basicTabsSample
} from '../codeSamples/tabsCodeSamples';
import { PiTab } from '../../tabs/tab';
import { PiTabList } from '../../tabs/tabList';
import { PiTabs } from '../../tabs/tabs';
import { PiTabPanels } from '../../tabs/tabPanels';
import { PiTabPanel } from '../../tabs/tabPanel';

export class PiTabsDemo extends LitElement {

    static get properties() {
        return {
            child: { type: Object }
        }
    }

    constructor() {
        super()
        this.child = {}
    }

    firstUpdated() {
        this.child = this.shadowRoot.querySelectorAll('pi-feature-example-container')
    }

    render() {
        return html`
            <pi-feature-demo-container 
            label="Tabs"
            >

                <pi-feature-example-container
                title="Basic Tabs"
                .sampleCode=${basicTabsSample}
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

                </pi-feature-example-container>

            </pi-feature-demo-container>
        `;
    }

    static styles = [
        css`
            
        `
    ]
    
}
customElements.define('pi-tabs-demo', PiTabsDemo);
