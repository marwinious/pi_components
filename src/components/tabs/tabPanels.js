import { LitElement, css, html } from 'lit'

export class PiTabPanels extends LitElement {

    static get properties() {
        return {
            selectedTab: { type: String },
            panelList: { type: Array },
        }
    }

    constructor() {
        super()
        this.selectedTab = '';
        this.panelList = [];
    }

    render() {
        return html`
            <slot @slotchange=${this.updatePanelList}></slot>
        `;
    }

    updateSelectedTab(selectedTab) {
        this.selectedTab = selectedTab;
        this.setActivePanel(this.selectedTab);
    }

    setActivePanel(selectedTab) {
        // Loop through tab list
        this.panelList.forEach((panel) => {
            // If this tab matches the chosen tab
            if(panel.getAttribute('value') === selectedTab) {
                // Add active attribute
                panel.setAttribute('active', true);
            }
            else {
                // Otherwise, remove active attribute
                panel.removeAttribute('active')
            }
        })
    }

    updatePanelList() {
        // Get slot(s)
        const slot = this.shadowRoot.querySelector('slot');
        const assignedElements = slot.assignedElements();

        // Loop through slot nodes
        assignedElements.forEach(el => {    
            // Check if el is a pi-tab-panel
            if(el.tagName == 'PI-TAB-PANEL') {
                // Add to panel list
                this.panelList.push(el);
            }
        })

        this.setActivePanel(this.selectedTab);
    }

    static styles = [
        css`
            
        `
    ]
    
}

if(!customElements.get('pi-tab-panels')) { customElements.define('pi-tab-panels', PiTabPanels); }