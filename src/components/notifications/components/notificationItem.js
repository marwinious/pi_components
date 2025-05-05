import { LitElement, css, html } from 'lit'

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
            <div class="pi_notification_icon">icon</div>
            <div class="pi_notification_group">
                <div class="pi_notification_title">${this.title}</div>
                <div class="pi_notification_message">${this.message}</div>
                <div class="pi_notification_close_icon">${this.closeIcon}</div>
            </div>
        `;
    }

    static styles = [
        css`
            :host {
                position: fixed;
                top: 16px;
                z-index: 10000;
            }


        `
    ]
    
}

if(!customElements.get('pi-notification-item')) { customElements.define('pi-notification-item', PiNotificationItem); }