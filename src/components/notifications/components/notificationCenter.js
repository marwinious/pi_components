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

    render() {
        return html`
            ${this.notifications.map((notification) => html`
                <notification-item
                title=${notification.title}
                message=${notification.message}
                ?icon=${notification.icon}
                ?severity=${notification.severity}
                ?position=${notification.position}
                ?offset=${notification.offset}
                ?autoCloseDuration=${notification.autoCloseDuration}
                ?closeIcon=${notification.closeIcon}
                @removeNotification=${() => this.removeNotification(notification.id)}
                ></notification-item>
            `)}
        `;
    }

    addNotification(notificationData) {
        this.notifications = [...this.notifications, {...notificationData, id: Date.now()}];
    }

    removeNotification(notificationId) {
        this.notifications = this.notifications.filter(notification => notification.id !== notificationId);
    }

    static styles = [
        css`
            :host {
                position: fixed;
                top: 16px;
                z-index: 10000;
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                pointer-events: none;
            }
        `
    ]
    
}

if(!customElements.get('pi-notification-center')) { customElements.define('pi-notification-center', PiNotificationCenter); }