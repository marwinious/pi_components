import { LitElement, css, html } from 'lit'
import defaultCss from '../../../css/defaultCss';

export class PiNotificationItem extends LitElement {

    static get properties() {
        return {
            title: { type: String },
            message: { type: String },
            severity: { type: String },
            position: { type: String },
            offset: { type: Number },
            icon: { type: String },
            closeIcon: { type: String },
            autoCloseDuration: { type: Number }
        }
    }

    constructor() {
        super()
        this.title = '';
        this.message = '';
        this.severity = '';
        this.position = 'top-right';
        this.offset = 0;
        this.icon = '';
        this.closeIcon = '';
        this.autoCloseDuration = 5000;
    }

    render() {
        return html`
            ${this.icon == '' ? null : html`
                <div class="pi_notification_icon">
                    <pi-icon-handler icon="info-filled"></pi-icon-handler>
                </div>
            `}
            <div class="pi_notification_group">
                <div class="pi_notification_title">${this.title}</div>
                <div class="pi_notification_message">${this.message}</div>
            </div>
            <div class="pi_notification_close_icon">x${this.closeIcon}</div>
        `;
    }

    static styles = [
        defaultCss,
        css`
            :host {
                width: 100%;
                background: var(--pi-notifications-bg-color, #FFF);
                display: flex;
                gap: 5px;
                margin: 0.5rem 0;
                justify-content: space-between;
                padding: var(--pi-notifications-padding, 1rem);
                border-radius: var(--pi-notifications-border-radius, 7px);
                box-sizing: border-box;
                border: var(--pi-notifications-border, 1px solid #eee);
                box-shadow: var(--pi-notifications-box-shadow, 0 0 12px rgba(0, 0, 0, 0.12));
            }

            .pi_notification_icon {
                width: var(--pi-notification-icon-size, 24px);
                color: var(--pi-notification-icon-color, #333);
            }

            .pi_notification_group {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                width: 100%;
                margin: var(--pi-notification-content-margin, 0 8px 0 13px);
            }

            .pi_notification_title {
                font-size: var(--pi-notification-title-font-size, 16px);
                font-weight: bold;
                color: var(--pi-notification-title-text-color, #333);
                line-height: var(--pi-notification-title-line-height, 24px);
            }

            .pi_notification_message {
                font-size: var(--pi-notification-content-font-size, 14px);
                color: var(--pi-notification-content-text-color, #666);
                line-height: var(--pi-notification-content-line-height, 24px);
            }

            .pi_notification_close_icon {
                width: var(--pi-notification-close-icon-size, 16px);
                color: var(--pi-notification-close-icon-color, #999);
                cursor: pointer;
            }

        `
    ]
    
}

if(!customElements.get('pi-notification-item')) { customElements.define('pi-notification-item', PiNotificationItem); }