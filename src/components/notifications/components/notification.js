import { LitElement, css, html } from 'lit'

export class PiNotification extends LitElement {

    static get properties() {
        return {
            message: { type: String },
            title: { type: String },
            severity: { type: String },
            position: { type: String },
            offset: { type: Number },
            icon: { type: String },
            closeIcon: { type: String },
            autoClose: { type: Boolean },
            autoCloseDuration: { type: Number }
        }
    }

    constructor() {
        super()
        this.message = '';
        this.title = '';
        this.severity = '';
        this.position = 'top-right';
        this.offset = 0;
        this.icon = '';
        this.closeIcon = '';
        this.autoClose = false;
        this.autoCloseDuration = 2000;
    }

    render() {
        return html`
            
        `;
    }

    static styles = [
        css`
            
        `
    ]
    
}

if(!customElements.get('pi-notification')) { customElements.define('pi-notification', PiNotification); }