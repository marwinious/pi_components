import{LitElement as n,html as t,css as e}from"lit";import s from"./defaultCss.js";import{styleMap as a}from"lit/directives/style-map.js";class f extends n{static get properties(){return{title:{type:String},message:{type:String},severity:{type:String},position:{type:String},offset:{type:Number},icon:{type:String},iconColor:{type:String},closeIcon:{type:String},autoCloseDuration:{type:Number},visible:{type:Boolean,reflect:!0}}}constructor(){super(),this.title="",this.message="",this.severity="",this.position="top-right",this.offset=0,this.icon="",this.iconColor="",this.closeIcon="",this.autoCloseDuration=5e3,this.visible=!1}render(){const i=this.iconColor==""?"var(--pi-notification-icon-color, #333)":this.iconColor,o={color:i,fill:i};return t`
            ${this.icon==""?null:t`
                <div class="pi_notification_icon" style=${a(o)}>
                    <pi-icon-handler icon=${this.icon}></pi-icon-handler>
                </div>
            `}
            <div class="pi_notification_group">
                <div class="pi_notification_title">${this.title}</div>
                <div class="pi_notification_message">${this.message}</div>
            </div>
            <div 
            class="pi_notification_close_icon"
            @click=${this._handleCloseClick}
            >
                <pi-icon-handler icon="close-square-dark"></pi-icon-handler>
            </div>
        `}_handleCloseClick(){const i=new CustomEvent("removeNotification",{detail:{title:this.title},bubbles:!0,composed:!0});this.dispatchEvent(i)}static styles=[s,e`
            :host {
                /* width: 100%; */
                background: var(--pi-notification-bg-color, #FFF);
                display: flex;
                gap: 5px;
                margin: 0.5rem 0;
                justify-content: space-between;
                padding: var(--pi-notification-padding, 1rem);
                border-radius: var(--pi-notification-border-radius, 7px);
                box-sizing: border-box;
                border: var(--pi-notification-border, 1px solid #eee);
                box-shadow: var(--pi-notification-box-shadow, 0 0 12px rgba(0, 0, 0, 0.12));
                position: fixed;
                z-index: 10000;
                width: var(--pi-notification-width, 330px);

                opacity: 0; /* Initially invisible for fade-in */
                transform: translateY(-20px); /* Initial position slightly off for slide-in */
                transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out, top 0.3s ease-in-out, bottom 0.3s ease-in-out, right 0.3s ease-in-out, left 0.3s ease-in-out; /* Apply transition to relevant properties */
            }

            :host(.visible) {
                opacity: 1;
                transform: translateY(0); /* Slide into final position */
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
                width: var(--pi-notification-close-icon-size, 20px);
                color: var(--pi-notification-close-icon-color, #999);
                cursor: pointer;

                pi-icon-handler {
                    width: var(--pi-notification-close-icon-size, 20px);
                    height: auto;
                    fill: #ccc;

                    &:hover {
                        fill: #888;
                    }
                }
            }

        `]}export{f as PiNotificationItem};
//# sourceMappingURL=notificationItem.js.map
