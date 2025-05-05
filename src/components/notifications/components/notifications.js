import { LitElement, css, html } from 'lit'
import { PiNotificationCenter } from './notificationCenter';

export class PiNotification extends LitElement {

    static get properties() {
        return {
            
        }
    }

    constructor() {
        super()
        // Init
        this.initNotifications();
    }

    connectedCallback() {
        super.connectedCallback();
    }

    disconnectedCallback() {
        super.disconnectedCallback();
    }

    initNotifications() {
        // Create notification center if doesn't exist
        if(!document.querySelector('pi-notification-center')) {
            const notificationCenter = document.createElement('pi-notification-center');
            document.body.appendChild(notificationCenter);
        }
    }

    create(notificationData) {

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