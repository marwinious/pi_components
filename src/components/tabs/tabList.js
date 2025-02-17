import { LitElement, css, html } from 'lit'

export class PiTabList extends LitElement {

    static get properties() {
        return {
            selectedTab: { type: String },
            tabList: { type: Array },
        }
    }

    constructor() {
        super()
        this.selectedTab = '';
        this.tabList = [];
    }

    render() {
        return html`
            <slot @slotchange=${this.updateTabList}></slot>
        `;
    }

    handleTabClick(tab) {
        this.selectedTab = tab.getAttribute('value');
        this.updateSelectedTab()
    }

    updateSelectedTab() {
        // Loop through tab list
        this.tabList.forEach((tab) => {
            // If this tab matches the chosen tab
            if(tab.getAttribute('value') === this.selectedTab) {
                // Add selected attribute
                tab.setAttribute('selected', true);
            }
            else {
                // Otherwise, remove selected attribute
                tab.removeAttribute('selected')
            }
        })

        // Emit event with selected tab
        const event = new CustomEvent('tabSelected', {
            detail: this.selectedTab,
            bubbles: true,
            composed: true
        })

        this.dispatchEvent(event);
    }

    updateTabList() {
        // Get slot(s)
        const slot = this.shadowRoot.querySelector('slot');
        const assignedElements = slot.assignedElements();

        // console.log('assignedElements: ', assignedElements);

        // Loop through slot nodes
        assignedElements.forEach(el => {    
            // Check if el is a pi-tab
            if(el.tagName == 'PI-TAB') {
                // Add to tab list
                this.tabList.push(el);

                // Assign listener
                this.assignTabListener(el);
            }
        })

        this.initSelectedTab();
    }

    initSelectedTab() {
        // Check for no selected tab but a non-empty tab list
        if(!this.selectedTab && this.tabList.length > 0) {
            // Default selected tab to the first tab in the list
            this.selectedTab = this.tabList[0].getAttribute('value');

            // Update selected tab
            this.updateSelectedTab();
        }
    }

    assignTabListener(tab) {
        tab.addEventListener('click', () => this.handleTabClick(tab));
    }

    static styles = [
        css`
            :host {
                display: flex;
                border-top: var(--pi-tabs-tab-header-border-top, none);
                border-right: var(--pi-tabs-tab-header-border-right, none);
                border-bottom: var(--pi-tabs-tab-header-border-bottom, 1px solid #ddd);
                border-left: var(--pi-tabs-tab-header-border-left, none);
            }
        `
    ]
    
}

if(!customElements.get('pi-tab-list')) { customElements.define('pi-tab-list', PiTabList); }