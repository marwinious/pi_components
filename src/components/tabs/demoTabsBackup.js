import { LitElement, css, html } from 'lit'
import { PiTabs } from './tabs';
import { PiTabList } from './tabList';
import { PiTab } from './tab';
import { PiTabPanels } from './tabPanels';
import { PiTabPanel } from './tabPanel';
import { CodeDisplaySample } from '../samples/codeSampleDisplay';

export class PiDemoTabs extends LitElement {

    static get properties() {
        return {
            demoCode: { type: String },
        }
    }

    constructor() {
        super()
        this.demoCode = '';
    }

    firstUpdated() {
        const demoCode = this.shadowRoot.querySelector('.demo_code').innerHTML;
        if(demoCode) {
            this.demoCode = this.removeLeadingWhiteSpace(demoCode);
        }
    }

    render() {
        return html`
            <h4>Tabs</h4>

            <div class="demo_code">
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
            </div>

            <code-display-sample
            .code=${this.demoCode}
            ></code-display-sample>
        `;
    }

    removeLeadingWhiteSpace(codeString) {
        // Step 1: Find the leading whitespace of the first non-empty line
        const lines = codeString.split('\n');
        const firstNonEmptyLine = lines.find(line => line.trim() !== '');  // Find the first non-empty line
        
        if (firstNonEmptyLine) {
            const leadingWhitespace = firstNonEmptyLine.match(/^(\s*)/);  // Match leading spaces/tabs
            if (leadingWhitespace) {
                const whitespaceToRemove = leadingWhitespace[1];  // Capture the leading whitespace

                // Step 2: Remove the same amount of leading whitespace from all lines
                codeString = lines
                    .map(line => line.replace(new RegExp(`^${whitespaceToRemove}`), ''))  // Remove the leading whitespace
                    .join('\n');  // Reassemble the lines into a string
            }
        }

        // console.log('codeString:', codeString);
        
        return codeString;
    }

    static styles = [
        css`
            
        `
    ]
    
}
customElements.define('pi-demo-tabs', PiDemoTabs);
