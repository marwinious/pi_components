import { LitElement, css, html } from 'lit'
import { PiNotificationItem } from './notificationItem';

export class PiNotificationCenter extends LitElement {

    static get properties() {
        return {
            notifications: { type: Array },
        }
    }

    constructor() {
        super()
        this.notifications = [];
    }

    connectedCallback() {
        super.connectedCallback();
    }

    updated(changedProperties) {
        super.updated(changedProperties);

        // Check for notifications changes
        if (changedProperties.has('notifications')) {
            // Hide notification center if zero notifications present
            this.hidden = this.notifications.length < 1;
        }
    }

    render() {
        return html`
            ${this.notifications.map((notification) => html`
                <!-- <div>Data: ${JSON.stringify(notification)}</div> -->
                <pi-notification-item
                title=${notification.title}
                message=${notification.message}
                icon=${notification.icon}
                severity=${notification.severity}
                position=${notification.position}
                offset=${notification.offset}
                autoCloseDuration=${notification.autoCloseDuration}
                closeIcon=${notification.closeIcon}
                @removeNotification=${() => this.removeNotification(notification.id)}
                ></pi-notification-item>
            `)}
        `;
    }

    addNotification(notificationData) {
        this.notifications = [...this.notifications, {...notificationData, id: Date.now()}];

        console.log("this.notifications: ", this.notifications);
    }

    removeNotification(notificationId) {
        this.notifications = this.notifications.filter(notification => notification.id !== notificationId);
    }

    static styles = [
        css`
            :host {
                position: fixed;
                top: 0;
                right: 0;
                z-index: 10000;
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                /* pointer-events: none; */
                width: var(--pi-notifications-width, 330px);
                height: 100%;
                background: transparent;
            }

            :host([hidden]) {
                display: none;
            }
        `
    ]
    
}

if(!customElements.get('pi-notification-center')) { customElements.define('pi-notification-center', PiNotificationCenter); }