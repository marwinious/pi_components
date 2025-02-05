import { LitElement, css, html } from 'lit'

/*
Main component for this feature
*/

export class PiTabs extends LitElement {

    static get properties() {
        return {
            selectedTab: { type: String },
            tabListEl: { type: Object },
            panelListEl: { type: Object }
        }
    }

    constructor() {
        super()
        this.selectedTab = '';
        this.tabListEl = {};
        this.panelListEl = {};
    }

    render() {
        return html`
            <slot @slotchange=${this.handleSlotChange}></slot>
        `;
    }

    handleTabListSelection(event) {
        // Update local selected tab
        this.selectedTab = event.detail;

        // Pass selected tab to panelList
        this.panelListEl.updateSelectedTab(this.selectedTab)
    }

    handleSlotChange() {
        const slot = this.shadowRoot.querySelector('slot');
        const assignedElements = slot.assignedElements({ flatten: true });

        // console.log('assignedElements tabs: ', assignedElements);
        assignedElements.forEach((el) => {
            // Check for tab list el
            if(el.tagName == 'PI-TAB-LIST') {
                // Add listener
                el.addEventListener('tabSelected', (tab) => this.handleTabListSelection(tab))

                // Save tabList el to local state for later use
                this.tabListEl = el;
            }

            // Check for tab panels el
            if(el.tagName == 'PI-TAB-PANELS') {
                // Save tabPanels el to local state for later use
                this.panelListEl = el;
            }
        })
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
