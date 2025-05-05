import { LitElement, css, html } from 'lit'
import { PiNotificationCenter } from './notificationCenter';

export class PiNotifications extends LitElement {

    static get properties() {
        return {
            notificationCenter: { type: Object },
        }
    }

    constructor() {
        super()
        this.notificationCenter = null;

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

        this.notificationCenter = document.querySelector('pi-notification-center');
    }

    create(notificationData) {
        console.log({notificationData});

        document.querySelector('pi-notification-center').addNotification(notificationData);
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

if(!customElements.get('pi-notifications')) { customElements.define('pi-notifications', PiNotifications); }