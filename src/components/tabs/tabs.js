import { LitElement, css, html } from 'lit'
import { PiTab } from './tab';
import { PiTabButton } from './tabButton';

export class PiTabs extends LitElement {

    static get properties() {
        return {
            selectedTab: { type: String },
            tabOptions: { type: Array },
            panels: { type: Array }
        }
    }

    constructor() {
        super()
        this.selectedTab = '';
        this.tabOptions = []
        this.panels = []
    }

    willUpdate() {
        if (!this.selectedTab && this.tabOptions.length > 0) {
            // Default to first tab if no tab is selected
            this.selectedTab = this.tabOptions[0].getAttribute('value');
        }
    }

    render() {
        return html`
            <div class="tab-header">
                <slot name="tab-option" @slotchange=${this._updateTabOptions}></slot>
            </div>
            <div class="tab-content">
                <slot name="tab-panel" @slotchange=${this._updateTabPanels}></slot>
            </div>
        `;
    }

    handleTabClick(tab) {
        this.selectedTab = tab.getAttribute('value');

        this.updateSelectedTab();
        this.updateSelectedPanel();
        
        this.requestUpdate();
    }

    updateSelectedTab() {
        this.tabOptions.forEach((tabOption) => {
            if(tabOption.getAttribute('value') === this.selectedTab) {
                tabOption.setAttribute('selected', 'true')
            }
            else {
                tabOption.removeAttribute('selected')
            }
        });

        // Emit event with selected tab
        const event = new CustomEvent('tabSelected', {
            detail: this.selectedTab,
            bubbles: true,
            composed: true
        })

        this.dispatchEvent(event);
    }
    
    updateSelectedPanel() {
        this.panels.forEach((panel) => {
            if(panel.getAttribute('value') === this.selectedTab) {
                panel.setAttribute('active', 'true')
            }
            else {
                panel.removeAttribute('active')
            }
        });
    }

    _updateTabOptions() {
        const tabOptions = this.querySelectorAll('tab-option');
        this.tabOptions = tabOptions;

        tabOptions.forEach((tab) => {
            tab.addEventListener('click', () => this.handleTabClick(tab));
        });

        if (!this.selectedTab && tabOptions.length > 0) {
            // Default to first tab if no tab is selected
            this.selectedTab = tabOptions[0].getAttribute('value');
            this.updateSelectedTab();
        }
    }

    _updateTabPanels() {
        const tabPanels = this.querySelectorAll('tab-panel');
        this.panels = tabPanels;
        
        this.updateSelectedPanel()
  }

    static styles = [
        css`
            :host {
                display: block;
            }

            .tab-header {
                display: flex;
                border: var(--tabbed-box-tab-header-border, none);
                border-top: var(--tabbed-box-tab-header-border-top, none);
                border-right: var(--tabbed-box-tab-header-border-right, none);
                border-bottom: var(--tabbed-box-tab-header-border-bottom, 1px solid #ddd);
                border-left: var(--tabbed-box-tab-header-border-left, none);
            }
        `
    ]
    
}
customElements.define('pi-tabs', PiTabs);
