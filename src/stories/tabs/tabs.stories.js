import { html } from "lit";
import { register } from "../../registerWebComp";
import { ifDefined } from "lit/directives/if-defined.js";
import { PiTab } from "../../components/tabs/tab";
import { PiTabList } from "../../components/tabs/tabList";
import { PiTabs } from "../../components/tabs/tabs";
import { PiTabPanels } from "../../components/tabs/tabPanels";
import { PiTabPanel } from "../../components/tabs/tabPanel";

register('pi-tab', PiTab)
register('pi-tab-list', PiTabList)
register('pi-tabs', PiTabs)
register('pi-tab-panels', PiTabPanels)
register('pi-tab-panel', PiTabPanel)

export default {
    title: 'Components/Tabs',
    component: 'pi-tabs',
    tags: ['autodocs'],
    argTypes: {
        
    },
    args: {
        
    }
}

const Template = ({}) => html`
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
`;

export const Default = Template.bind();
Default.args = {
    
}
