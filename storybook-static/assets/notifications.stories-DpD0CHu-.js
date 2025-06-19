import{T as m,r as f,x as a,i as d}from"./lit-element-55XysmYc.js";import{d as y}from"./defaultCss-Dh8mF8Ic.js";import{e as h,i as b,t as g}from"./directive-CJw_OlP2.js";/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const u="important",v=" !"+u,x=h(class extends b{constructor(s){if(super(s),s.type!==g.ATTRIBUTE||s.name!=="style"||s.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(s){return Object.keys(s).reduce((t,i)=>{const o=s[i];return o==null?t:t+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(s,[t]){const{style:i}=s.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const o of this.ft)t[o]==null&&(this.ft.delete(o),o.includes("-")?i.removeProperty(o):i[o]=null);for(const o in t){const e=t[o];if(e!=null){this.ft.add(o);const n=typeof e=="string"&&e.endsWith(v);o.includes("-")||n?i.setProperty(o,n?e.slice(0,-11):e,n?u:""):i[o]=e}}return m}});class C extends f{static get properties(){return{title:{type:String},message:{type:String},severity:{type:String},position:{type:String},offset:{type:Number},icon:{type:String},iconColor:{type:String},closeIcon:{type:String},autoCloseDuration:{type:Number},visible:{type:Boolean,reflect:!0}}}constructor(){super(),this.title="",this.message="",this.severity="",this.position="top-right",this.offset=0,this.icon="",this.iconColor="",this.closeIcon="",this.autoCloseDuration=5e3,this.visible=!1}render(){const t=this.iconColor==""?"var(--pi-notification-icon-color, #333)":this.iconColor,i={color:t,fill:t};return a`
            ${this.icon==""?null:a`
                <div class="pi_notification_icon" style=${x(i)}>
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
        `}_handleCloseClick(){const t=new CustomEvent("removeNotification",{detail:{title:this.title},bubbles:!0,composed:!0});this.dispatchEvent(t)}static styles=[y,d`
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

        `]}customElements.get("pi-notification-item")||customElements.define("pi-notification-item",C);class _ extends f{static get properties(){return{notificationsByPosition:{type:Object}}}constructor(){super(),this.notificationsByPosition={"top-left":[],"top-right":[],"bottom-left":[],"bottom-right":[],top:[],bottom:[]},this._renderedNotifications={}}addNotification(t){const i=crypto.randomUUID();t.id=i,this.notificationsByPosition[t.position]?(this.notificationsByPosition={...this.notificationsByPosition,[t.position]:[...this.notificationsByPosition[t.position],{...t}]},this._renderNotifications()):console.warn(`Invalid notification position: ${t.position}`),t.autoCloseDuration>0&&this.autoCloseNotification(i,t.autoCloseDuration,t.position)}_handleNotificationClosed(t,i){this.notificationsByPosition={...this.notificationsByPosition,[i]:this.notificationsByPosition[i].filter(o=>o.id!==t)},this._renderNotifications()}autoCloseNotification(t,i,o){setTimeout(()=>{this._handleNotificationClosed(t,o)},i)}_renderNotifications(){const t=Object.values(this.notificationsByPosition).flat(),i=new Set(Object.keys(this._renderedNotifications)),o=new Set(t.map(e=>e.id));for(const e of i)if(!o.has(e)){const n=this._renderedNotifications[e];n&&n.parentNode===document.body?(n.classList.remove("visible"),setTimeout(()=>{document.body.removeChild(n),delete this._renderedNotifications[e]},300)):n&&delete this._renderedNotifications[e]}for(const e of t)if(this._renderedNotifications[e.id]){const n=this._renderedNotifications[e.id],r=this._calculatePositionStyles(e.position,this._getOffsetForPosition(e.position,e.id));Object.assign(n.style,r),this._applyNotificationData(n,e)}else{const n=document.createElement("pi-notification-item");this._applyNotificationData(n,e);const r=this._calculatePositionStyles(e.position,this._getOffsetForPosition(e.position,e.id));Object.assign(n.style,r),n.addEventListener("removeNotification",l=>this._handleNotificationClosed(e.id,e.position)),document.body.appendChild(n),this._renderedNotifications[e.id]=n,n.offsetHeight,requestAnimationFrame(()=>n.classList.add("visible"))}}_applyNotificationData(t,i){t.setAttribute("title",i.title),t.setAttribute("message",i.message),t.setAttribute("icon",i.icon),t.setAttribute("iconColor",i.iconColor),t.setAttribute("severity",i.severity),t.setAttribute("position",i.position),t.setAttribute("offset",i.offset),t.setAttribute("autoCloseDuration",i.autoCloseDuration),t.setAttribute("closeIcon",i.closeIcon),t.setAttribute("data-id",i.id),t.classList.add(i.position)}_getOffsetForPosition(t,i){const o=this.notificationsByPosition[t];let e=15;for(const n of o){if(n.id===i)return`${e}px`;e+=90}return`${e}px`}_calculatePositionStyles(t,i){const o={};switch(t){case"top-left":o.top=i,o.left="15px";break;case"top-right":o.top=i,o.right="15px";break;case"bottom-left":o.bottom=i,o.left="15px";break;case"bottom-right":o.bottom=i,o.right="15px";break;case"top":o.top=i,o.left="50%",o.transform="translateX(-50%)";break;case"bottom":o.bottom=i,o.left="50%",o.transform="translateX(-50%)";break}return o}render(){return a`<slot></slot>`}static styles=[d`
            :host {
                display: none; /* The center itself might not need to be visible */
                position: fixed;
                top: 0;
                right: 15px;
                z-index: 10000;
            }
        `]}customElements.get("pi-notification-center")||customElements.define("pi-notification-center",_);class N extends f{static get properties(){return{notificationCenter:{type:Object}}}constructor(){super(),this.notificationCenter=null,this.initNotifications(),this.severityMap={primary:{icon:"flag-wavy-dark",color:"var(--pi-severity-bg-color-primary, #117ab4)"},secondary:{icon:"star-dark",color:"var(--pi-severity-bg-color-secondary, #ccc)"},success:{icon:"thumbs-up-dark",color:"var(--pi-severity-bg-color-success, #208c39)"},info:{icon:"info-sample-dark",color:"var(--pi-severity-bg-color-info, #17A2B9)"},warn:{icon:"alert-triangle-dark",color:"var(--pi-severity-bg-color-warn, #d28809)"},help:{icon:"globe-dark",color:"var(--pi-severity-bg-color-help, #A855F8)"},danger:{icon:"stop-ex-dark",color:"var(--pi-severity-bg-color-danger, #F04544)"}}}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}initNotifications(){if(!document.querySelector("pi-notification-center")){const t=document.createElement("pi-notification-center");document.body.appendChild(t)}this.notificationCenter=document.querySelector("pi-notification-center")}create(t){const i=this.finalizeNotificationData(t);document.querySelector("pi-notification-center").addNotification(i)}finalizeNotificationData(t){return t.severity&&typeof this.severityMap[t.severity]<"u"&&t.icon==""&&(t.icon=this.severityMap[t.severity].icon,t.iconColor=this.severityMap[t.severity].color),t}render(){return a`
            
        `}static styles=[d`

        `]}customElements.get("pi-notifications")||customElements.define("pi-notifications",N);const T={title:"Components/Notifications",component:"pi-notifications",tags:["autodocs"],argTypes:{title:{control:"text",name:"Title",description:"Title for notification",table:{type:{summary:"string"},defaultValue:{summary:""}}},message:{control:"text",name:"Message",description:"Message text of notification",table:{type:{summary:"string"},defaultValue:{summary:""}}},severity:{control:"select",options:["","primary","secondary","success","info","warn","help","danger"],description:"Applies icon/colors of severity to notification",table:{type:{summary:"string"},defaultValue:{summary:"none"}}},position:{control:"select",options:["","top-left","top-right","bottom-left","bottom-right","top","bottom"],description:"Applies icon/colors of severity to notification",table:{type:{summary:"string"},defaultValue:{summary:"top-right"}}},offset:{control:{type:"number",min:0,max:1e3,step:1},description:"Top position offset of notification",table:{type:{summary:"number"},defaultValue:{summary:"0"}}},icon:{control:"text",name:"Icon",description:"Specific icon for notification (overrides severity)",table:{type:{summary:"string"},defaultValue:{summary:""}}},iconColor:{control:"text",name:"Icon color",description:"Specific icon color for notification (overrides severity)",table:{type:{summary:"string"},defaultValue:{summary:""}}},closeIcon:{control:"text",name:"Close Icon",description:"Specific close icon for notification (overrides severity)",table:{type:{summary:"string"},defaultValue:{summary:""}}},autoCloseDuration:{control:"number",description:"Duration notification is visible in milliseconds (0 = until closed)",table:{type:{summary:"number"},defaultValue:{summary:"5000"}}}},args:{title:"Title text",message:"Message text",severity:"",position:"top-right",offset:0,icon:"",iconColor:"",closeIcon:"",autoCloseDuration:5e3}},k=(s,t,i,o,e,n,r,l,p)=>{document.querySelector("pi-notifications").create({title:s,message:t,severity:i,position:o,offset:e,icon:n,iconColor:r,closeIcon:l,autoCloseDuration:p})},w=({title:s,message:t,severity:i,position:o,offset:e,icon:n,iconColor:r,closeIcon:l,autoCloseDuration:p})=>a`
    <pi-notifications></pi-notifications>

    <button
    type="button"
    @click=${()=>k(s,t,i,o,e,n,r,l,p)}
    >Trigger Alert</button>
`,c=w.bind();c.args={};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`({
  title,
  message,
  severity,
  position,
  offset,
  icon,
  iconColor,
  closeIcon,
  autoCloseDuration
}) => html\`
    <pi-notifications></pi-notifications>

    <button
    type="button"
    @click=\${() => triggerAlert(title, message, severity, position, offset, icon, iconColor, closeIcon, autoCloseDuration)}
    >Trigger Alert</button>
\``,...c.parameters?.docs?.source}}};const E=["Default"];export{c as Default,E as __namedExportsOrder,T as default};
