import{T as f,r as a,x as r,i as l}from"./lit-element-55XysmYc.js";import{d}from"./defaultCss-Dh8mF8Ic.js";import{e as h,i as u,t as y}from"./directive-CJw_OlP2.js";/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const p="important",b=" !"+p,m=h(class extends u{constructor(s){if(super(s),s.type!==y.ATTRIBUTE||s.name!=="style"||s.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(s){return Object.keys(s).reduce((i,t)=>{const o=s[t];return o==null?i:i+`${t=t.includes("-")?t:t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(s,[i]){const{style:t}=s.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(i)),this.render(i);for(const o of this.ft)i[o]==null&&(this.ft.delete(o),o.includes("-")?t.removeProperty(o):t[o]=null);for(const o in i){const e=i[o];if(e!=null){this.ft.add(o);const n=typeof e=="string"&&e.endsWith(b);o.includes("-")||n?t.setProperty(o,n?e.slice(0,-11):e,n?p:""):t[o]=e}}return f}});class v extends a{static get properties(){return{title:{type:String},message:{type:String},severity:{type:String},position:{type:String},offset:{type:Number},icon:{type:String},iconColor:{type:String},closeIcon:{type:String},autoCloseDuration:{type:Number},visible:{type:Boolean,reflect:!0}}}constructor(){super(),this.title="",this.message="",this.severity="",this.position="top-right",this.offset=0,this.icon="",this.iconColor="",this.closeIcon="",this.autoCloseDuration=5e3,this.visible=!1}render(){const i=this.iconColor==""?"var(--pi-notification-icon-color, #333)":this.iconColor,t={color:i,fill:i};return r`
            ${this.icon==""?null:r`
                <div class="pi_notification_icon" style=${m(t)}>
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
        `}_handleCloseClick(){const i=new CustomEvent("removeNotification",{detail:{title:this.title},bubbles:!0,composed:!0});this.dispatchEvent(i)}static styles=[d,l`
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

        `]}customElements.get("pi-notification-item")||customElements.define("pi-notification-item",v);class g extends a{static get properties(){return{notificationsByPosition:{type:Object}}}constructor(){super(),this.notificationsByPosition={"top-left":[],"top-right":[],"bottom-left":[],"bottom-right":[],top:[],bottom:[]},this._renderedNotifications={}}addNotification(i){const t=crypto.randomUUID();i.id=t,this.notificationsByPosition[i.position]?(this.notificationsByPosition={...this.notificationsByPosition,[i.position]:[...this.notificationsByPosition[i.position],{...i}]},this._renderNotifications()):console.warn(`Invalid notification position: ${i.position}`),i.autoCloseDuration>0&&this.autoCloseNotification(t,i.autoCloseDuration,i.position)}_handleNotificationClosed(i,t){this.notificationsByPosition={...this.notificationsByPosition,[t]:this.notificationsByPosition[t].filter(o=>o.id!==i)},this._renderNotifications()}autoCloseNotification(i,t,o){setTimeout(()=>{this._handleNotificationClosed(i,o)},t)}_renderNotifications(){const i=Object.values(this.notificationsByPosition).flat(),t=new Set(Object.keys(this._renderedNotifications)),o=new Set(i.map(e=>e.id));for(const e of t)if(!o.has(e)){const n=this._renderedNotifications[e];n&&n.parentNode===document.body?(n.classList.remove("visible"),setTimeout(()=>{document.body.removeChild(n),delete this._renderedNotifications[e]},300)):n&&delete this._renderedNotifications[e]}for(const e of i)if(this._renderedNotifications[e.id]){const n=this._renderedNotifications[e.id],c=this._calculatePositionStyles(e.position,this._getOffsetForPosition(e.position,e.id));Object.assign(n.style,c),this._applyNotificationData(n,e)}else{const n=document.createElement("pi-notification-item");this._applyNotificationData(n,e);const c=this._calculatePositionStyles(e.position,this._getOffsetForPosition(e.position,e.id));Object.assign(n.style,c),n.addEventListener("removeNotification",x=>this._handleNotificationClosed(e.id,e.position)),document.body.appendChild(n),this._renderedNotifications[e.id]=n,n.offsetHeight,requestAnimationFrame(()=>n.classList.add("visible"))}}_applyNotificationData(i,t){i.setAttribute("title",t.title),i.setAttribute("message",t.message),i.setAttribute("icon",t.icon),i.setAttribute("iconColor",t.iconColor),i.setAttribute("severity",t.severity),i.setAttribute("position",t.position),i.setAttribute("offset",t.offset),i.setAttribute("autoCloseDuration",t.autoCloseDuration),i.setAttribute("closeIcon",t.closeIcon),i.setAttribute("data-id",t.id),i.classList.add(t.position)}_getOffsetForPosition(i,t){const o=this.notificationsByPosition[i];let e=15;for(const n of o){if(n.id===t)return`${e}px`;e+=90}return`${e}px`}_calculatePositionStyles(i,t){const o={};switch(i){case"top-left":o.top=t,o.left="15px";break;case"top-right":o.top=t,o.right="15px";break;case"bottom-left":o.bottom=t,o.left="15px";break;case"bottom-right":o.bottom=t,o.right="15px";break;case"top":o.top=t,o.left="50%",o.transform="translateX(-50%)";break;case"bottom":o.bottom=t,o.left="50%",o.transform="translateX(-50%)";break}return o}render(){return r`<slot></slot>`}static styles=[l`
            :host {
                display: none; /* The center itself might not need to be visible */
                position: fixed;
                top: 0;
                right: 15px;
                z-index: 10000;
            }
        `]}customElements.get("pi-notification-center")||customElements.define("pi-notification-center",g);class _ extends a{static get properties(){return{notificationCenter:{type:Object}}}constructor(){super(),this.notificationCenter=null,this.initNotifications(),this.severityMap={primary:{icon:"flag-wavy-dark",color:"var(--pi-severity-bg-color-primary, #117ab4)"},secondary:{icon:"star-dark",color:"var(--pi-severity-bg-color-secondary, #ccc)"},success:{icon:"thumbs-up-dark",color:"var(--pi-severity-bg-color-success, #208c39)"},info:{icon:"info-sample-dark",color:"var(--pi-severity-bg-color-info, #17A2B9)"},warn:{icon:"alert-triangle-dark",color:"var(--pi-severity-bg-color-warn, #d28809)"},help:{icon:"globe-dark",color:"var(--pi-severity-bg-color-help, #A855F8)"},danger:{icon:"stop-ex-dark",color:"var(--pi-severity-bg-color-danger, #F04544)"}}}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}initNotifications(){if(!document.querySelector("pi-notification-center")){const i=document.createElement("pi-notification-center");document.body.appendChild(i)}this.notificationCenter=document.querySelector("pi-notification-center")}create(i){const t=this.finalizeNotificationData(i);document.querySelector("pi-notification-center").addNotification(t)}finalizeNotificationData(i){return typeof i.severity<"u"&&typeof this.severityMap[i.severity]<"u"&&(i.icon==""||typeof i.icon>"u")&&(i.icon=this.severityMap[i.severity].icon,i.iconColor=this.severityMap[i.severity].color),i}render(){return r`
            
        `}static styles=[l`

        `]}customElements.get("pi-notifications")||customElements.define("pi-notifications",_);
