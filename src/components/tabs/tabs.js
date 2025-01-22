import { LitElement, css, html } from 'lit'

/*
Main component for this feature
*/

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
            <slot></slot>
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
        `
    ]

}
customElements.define('pi-tabs', PiTabs);
