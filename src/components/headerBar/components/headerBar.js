import { LitElement, css, html } from 'lit'

export class PiHeaderBar extends LitElement {

    static get properties() {
        return {
            sticky: { type: Boolean },
            showNavIcon: { type: Boolean },
            title: { type: String }
        }
    }

    constructor() {
        super()
        this.sticky = false;
        this.showNavIcon = false;
        this.title = "";
    }

    connectedCallback() {
        super.connectedCallback();
    }

    disconnectedCallback() {
        super.disconnectedCallback();
    }

    render() {
        return html`
            <div class="nav_icon">
                
            </div>
        `;
    }

    static styles = [
        css`
            :host {

            }
        `
    ]
    
}

if(!customElements.get('pi-header-bar')) { customElements.define('pi-header-bar', PiHeaderBar); }