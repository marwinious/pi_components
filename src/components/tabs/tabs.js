import { LitElement, css, html } from 'lit'

/*
Main component for this feature
*/

export class PiTabs extends LitElement {

    static get properties() {
        return {
            
        }
    }

    constructor() {
        super()
    }

    render() {
        return html`
            <slot @slotchange=${this.handleSlotChange}></slot>
        `;
    }

    handleTabListSelection(event) {
        console.log('tab from tabs.js: ', event.detail);
        
    }

    handleSlotChange() {
        const slot = this.shadowRoot.querySelector('slot');
        const assignedElements = slot.assignedElements();

        console.log('assignedElements tabs: ', assignedElements);
        assignedElements.forEach((el) => {
            // Check for tab list el
            if(el.tagName == 'PI-TAB-LIST') {
                el.addEventListener('tabSelected', (tab) => this.handleTabListSelection(tab))
            }

            // Check for tab panels el
            if(el.tagName == 'PI-TAB-PANELS') {
                
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
