import{T as v,i as u,x as f,a as y}from"./lit-element-Rv6HkL07.js";import{r}from"./registerWebComp-xWpx6Xkx.js";import{d as m}from"./defaultCss-BUBpELKw.js";import{e as g,i as x,t as _}from"./directive-CJw_OlP2.js";import{n as a,r as c,i as l,x as p,a as d,b as C}from"./iconBase-D6R8-dG5.js";/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const b="important",k=" !"+b,N=g(class extends x{constructor(n){if(super(n),n.type!==_.ATTRIBUTE||n.name!=="style"||n.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(n){return Object.keys(n).reduce(((t,i)=>{const o=n[i];return o==null?t:t+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`}),"")}update(n,[t]){const{style:i}=n.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const o of this.ft)t[o]==null&&(this.ft.delete(o),o.includes("-")?i.removeProperty(o):i[o]=null);for(const o in t){const e=t[o];if(e!=null){this.ft.add(o);const s=typeof e=="string"&&e.endsWith(k);o.includes("-")||s?i.setProperty(o,s?e.slice(0,-11):e,s?b:""):i[o]=e}}return v}});class z extends u{static get properties(){return{title:{type:String},message:{type:String},severity:{type:String},position:{type:String},offset:{type:Number},icon:{type:String},iconColor:{type:String},closeIcon:{type:String},autoCloseDuration:{type:Number},visible:{type:Boolean,reflect:!0}}}constructor(){super(),this.title="",this.message="",this.severity="",this.position="top-right",this.offset=0,this.icon="",this.iconColor="",this.closeIcon="",this.autoCloseDuration=5e3,this.visible=!1}render(){const t=this.iconColor==""?"var(--pi-notification-icon-color, #333)":this.iconColor,i={color:t,fill:t};return f`
            ${this.icon==""?null:f`
                <div class="pi_notification_icon" style=${N(i)}>
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
        `}_handleCloseClick(){const t=new CustomEvent("removeNotification",{detail:{title:this.title},bubbles:!0,composed:!0});this.dispatchEvent(t)}static styles=[m,y`
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

        `]}r("pi-notification-item",z);class D extends u{static get properties(){return{notificationsByPosition:{type:Object}}}constructor(){super(),this.notificationsByPosition={"top-left":[],"top-right":[],"bottom-left":[],"bottom-right":[],top:[],bottom:[]},this._renderedNotifications={}}addNotification(t){const i=crypto.randomUUID();t.id=i,this.notificationsByPosition[t.position]?(this.notificationsByPosition={...this.notificationsByPosition,[t.position]:[...this.notificationsByPosition[t.position],{...t}]},this._renderNotifications()):console.warn(`Invalid notification position: ${t.position}`),t.autoCloseDuration>0&&this.autoCloseNotification(i,t.autoCloseDuration,t.position)}_handleNotificationClosed(t,i){this.notificationsByPosition={...this.notificationsByPosition,[i]:this.notificationsByPosition[i].filter(o=>o.id!==t)},this._renderNotifications()}autoCloseNotification(t,i,o){setTimeout(()=>{this._handleNotificationClosed(t,o)},i)}_renderNotifications(){const t=Object.values(this.notificationsByPosition).flat(),i=new Set(Object.keys(this._renderedNotifications)),o=new Set(t.map(e=>e.id));for(const e of i)if(!o.has(e)){const s=this._renderedNotifications[e];s&&s.parentNode===document.body?(s.classList.remove("visible"),setTimeout(()=>{document.body.removeChild(s),delete this._renderedNotifications[e]},300)):s&&delete this._renderedNotifications[e]}for(const e of t)if(this._renderedNotifications[e.id]){const s=this._renderedNotifications[e.id],h=this._calculatePositionStyles(e.position,this._getOffsetForPosition(e.position,e.id));Object.assign(s.style,h),this._applyNotificationData(s,e)}else{const s=document.createElement("pi-notification-item");this._applyNotificationData(s,e);const h=this._calculatePositionStyles(e.position,this._getOffsetForPosition(e.position,e.id));Object.assign(s.style,h),s.addEventListener("removeNotification",M=>this._handleNotificationClosed(e.id,e.position)),document.body.appendChild(s),this._renderedNotifications[e.id]=s,s.offsetHeight,requestAnimationFrame(()=>s.classList.add("visible"))}}_applyNotificationData(t,i){t.setAttribute("title",i.title),t.setAttribute("message",i.message),t.setAttribute("icon",i.icon),t.setAttribute("iconColor",i.iconColor),t.setAttribute("severity",i.severity),t.setAttribute("position",i.position),t.setAttribute("offset",i.offset),t.setAttribute("autoCloseDuration",i.autoCloseDuration),t.setAttribute("closeIcon",i.closeIcon),t.setAttribute("data-id",i.id),t.classList.add(i.position)}_getOffsetForPosition(t,i){const o=this.notificationsByPosition[t];let e=15;for(const s of o){if(s.id===i)return`${e}px`;e+=90}return`${e}px`}_calculatePositionStyles(t,i){const o={};switch(t){case"top-left":o.top=i,o.left="15px";break;case"top-right":o.top=i,o.right="15px";break;case"bottom-left":o.bottom=i,o.left="15px";break;case"bottom-right":o.bottom=i,o.right="15px";break;case"top":o.top=i,o.left="50%",o.transform="translateX(-50%)";break;case"bottom":o.bottom=i,o.left="50%",o.transform="translateX(-50%)";break}return o}render(){return f`<slot></slot>`}static styles=[y`
            :host {
                display: none; /* The center itself might not need to be visible */
                position: fixed;
                top: 0;
                right: 15px;
                z-index: 10000;
            }
        `]}a("pi-icon-base",c);let $=class extends l{static get properties(){return{pathData:{type:String}}}constructor(){super(),this.pathData="M4 24h-2v-24h2v24zm18-21.387s-1.621 1.43-3.754 1.43c-3.36 0-3.436-2.895-7.337-2.895-2.108 0-4.075.98-4.909 1.694v12.085c1.184-.819 2.979-1.681 4.923-1.681 3.684 0 4.201 2.754 7.484 2.754 2.122 0 3.593-1.359 3.593-1.359v-12.028z"}render(){return p`
            <pi-icon-base 
            pathData=${this.pathData}
            ></pi-icon-base>
        `}static styles=[d`
            
        `]};a("pi-icon-base",c);class S extends l{static get properties(){return{pathData:{type:String}}}constructor(){super(),this.pathData="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z"}render(){return p`
            <pi-icon-base 
            pathData=${this.pathData}
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLineJoin="round"
            strokeMiterLimit="2"
            fillRule="nonzero"
            ></pi-icon-base>
        `}static styles=[d`
            
        `]}a("pi-icon-base",c);class w extends l{static get properties(){return{pathData:{type:String}}}constructor(){super(),this.pathData="M5 22h-5v-12h5v12zm17.615-8.412c-.857-.115-.578-.734.031-.922.521-.16 1.354-.5 1.354-1.51 0-.672-.5-1.562-2.271-1.49-1.228.05-3.666-.198-4.979-.885.906-3.656.688-8.781-1.688-8.781-1.594 0-1.896 1.807-2.375 3.469-1.221 4.242-3.312 6.017-5.687 6.885v10.878c4.382.701 6.345 2.768 10.505 2.768 3.198 0 4.852-1.735 4.852-2.666 0-.335-.272-.573-.96-.626-.811-.062-.734-.812.031-.953 1.268-.234 1.826-.914 1.826-1.543 0-.529-.396-1.022-1.098-1.181-.837-.189-.664-.757.031-.812 1.133-.09 1.688-.764 1.688-1.41 0-.565-.424-1.109-1.26-1.221z"}render(){return p`
            <pi-icon-base 
            pathData=${this.pathData}
            ></pi-icon-base>
        `}static styles=[d`
            
        `]}a("pi-icon-base",c);let P=class extends l{static get properties(){return{pathData:{type:String}}}constructor(){super(),this.pathData="m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 8c-.414 0-.75.336-.75.75v5.5c0 .414.336.75.75.75s.75-.336.75-.75v-5.5c0-.414-.336-.75-.75-.75zm-.002-3c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1z"}render(){return p`
            <pi-icon-base 
            pathData=${this.pathData}
            fillRule="evenodd"
            clipRule="evenodd"
            strokeLineJoin="round"
            strokeMiterLimit="2"
            pathFillRule="nonzero"
            ></pi-icon-base>
        `}static styles=[d`
            
        `]};a("pi-icon-base",c);let A=class extends l{static get properties(){return{pathData:{type:String}}}constructor(){super(),this.pathData="M12 1l-12 22h24l-12-22zm-1 8h2v7h-2v-7zm1 11.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z"}render(){return p`
            <pi-icon-base 
            pathData=${this.pathData}
            ></pi-icon-base>
        `}static styles=[d`
            
        `]};a("pi-icon-base",c);class B extends l{static get properties(){return{pathData:{type:String}}}constructor(){super(),this.pathData="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm9.567 9.098c-.059-.058-.127-.108-.206-.138-.258-.101-1.35.603-1.515.256-.108-.231-.327.148-.578.008-.121-.067-.459-.52-.611-.465-.312.112.479.974.694 1.087.203-.154.86-.469 1.002-.039.271.812-.745 1.702-1.264 2.171-.775.702-.63-.454-1.159-.86-.277-.213-.274-.667-.555-.824-.125-.071-.7-.732-.694-.821l-.017.167c-.095.072-.297-.27-.319-.325 0 .298.485.772.646 1.011.273.409.42 1.005.756 1.339.179.18.866.923 1.045.908l.921-.437c.649.154-1.531 3.237-1.738 3.619-.171.321.139 1.112.114 1.49-.029.437-.374.579-.7.817-.35.255-.268.752-.562.934-.521.321-.897 1.366-1.639 1.361-.219-.001-1.151.364-1.273.007-.095-.258-.223-.455-.356-.71-.131-.25-.015-.51-.175-.731-.11-.154-.479-.502-.513-.684-.002-.157.118-.632.283-.715.231-.118.044-.462.016-.663-.048-.357-.27-.652-.535-.859-.393-.302-.189-.542-.098-.974 0-.206-.126-.476-.402-.396-.57.166-.396-.445-.812-.417-.299.021-.543.211-.821.295-.349.104-.707-.083-1.053-.126-1.421-.179-1.885-1.804-1.514-2.976.037-.192-.115-.547-.048-.696.159-.352.485-.752.768-1.021.16-.152.365-.113.553-.231.29-.182.294-.558.578-.789.404-.328.956-.321 1.482-.392.281-.037 1.35-.268 1.518-.06 0 .039.193.611-.019.578.438.023 1.061.756 1.476.585.213-.089.135-.744.573-.427.265.19 1.45.275 1.696.07.152-.125.236-.939.053-1.031.117.116-.618.125-.686.099-.122-.044-.235.115-.43.025.117.055-.651-.358-.22-.674-.181.132-.349-.037-.544.109-.135.109.062.181-.13.277-.305.155-.535-.53-.649-.607-.118-.077-1.024-.713-.777-.298l.797.793c-.04.026-.209-.289-.209-.059.053-.136.02.585-.105.35-.056-.09.091-.14.006-.271 0-.085-.23-.169-.275-.228-.126-.157-.462-.502-.644-.585-.05-.024-.771.088-.832.111-.071.099-.131.203-.181.314-.149.055-.29.127-.423.216l-.159.356c-.068.061-.772.294-.776.303.03-.076-.492-.172-.457-.324.038-.167.215-.687.169-.877-.048-.199 1.085.287 1.158-.238.029-.227.047-.492-.316-.531.069.008.702-.249.807-.364.148-.169.486-.447.731-.447.286 0 .225-.417.356-.622.133.053-.071.38.088.512-.01-.104.45.057.494.033.105-.056.691-.023.601-.299-.101-.28.052-.197.183-.255-.02.008.248-.458.363-.456-.104-.089-.398.112-.516.103-.308-.024-.177-.525-.061-.672.09-.116-.246-.258-.25-.036-.006.332-.314.633-.243 1.075.109.666-.743-.161-.816-.115-.283.172-.515-.216-.368-.449.149-.238.51-.226.659-.48.104-.179.227-.389.388-.524.541-.454.689-.091 1.229-.042.526.048.178.125.105.327-.07.192.289.261.413.1.071-.092.232-.326.301-.499.07-.175.578-.2.527-.365 2.72 1.148 4.827 3.465 5.694 6.318zm-11.113-3.779l.068-.087.073-.019c.042-.034.086-.118.151-.104.043.009.146.095.111.148-.037.054-.066-.049-.081.101-.018.169-.188.167-.313.222-.087.037-.175-.018-.09-.104l.088-.108-.007-.049zm.442.245c.046-.045.138-.008.151-.094.014-.084.078-.178-.008-.335-.022-.042.116-.082.051-.137l-.109.032s.155-.668.364-.366l-.089.103c.135.134.172.47.215.687.127.066.324.078.098.192.117-.02-.618.314-.715.178-.072-.083.317-.139.307-.173-.004-.011-.317-.02-.265-.087zm1.43-3.547l-.356.326c-.36.298-1.28.883-1.793.705-.524-.18-1.647.667-1.826.673-.067.003.002-.641.36-.689-.141.021.993-.575 1.185-.805.678-.146 1.381-.227 2.104-.227l.326.017zm-5.086 1.19c.07.082.278.092-.026.288-.183.11-.377.809-.548.809-.51.223-.542-.439-1.109.413-.078.115-.395.158-.644.236.685-.688 1.468-1.279 2.327-1.746zm-5.24 8.793c0-.541.055-1.068.139-1.586l.292.185c.113.135.113.719.169.911.139.482.484.751.748 1.19.155.261.414.923.332 1.197.109-.179 1.081.824 1.259 1.033.418.492.74 1.088.061 1.574-.219.158.334 1.14.049 1.382l-.365.094c-.225.138-.235.397-.166.631-1.562-1.765-2.518-4.076-2.518-6.611zm14.347-5.823c.083-.01-.107.167-.107.167.033.256.222.396.581.527.437.157.038.455-.213.385-.139-.039-.854-.255-.879.025 0 .167-.679.001-.573-.175.073-.119.05-.387.186-.562.193-.255.38-.116.386.032-.001.394.398-.373.619-.399z"}render(){return p`
            <pi-icon-base 
            pathData=${this.pathData}
            ></pi-icon-base>
        `}static styles=[d`
            
        `]}a("pi-icon-base",c);class I extends l{static get properties(){return{pathData:{type:String}}}constructor(){super(),this.pathData="M16.971 0h-9.942l-7.029 7.029v9.941l7.029 7.03h9.941l7.03-7.029v-9.942l-7.029-7.029zm-1.402 16.945l-3.554-3.521-3.518 3.568-1.418-1.418 3.507-3.566-3.586-3.472 1.418-1.417 3.581 3.458 3.539-3.583 1.431 1.431-3.535 3.568 3.566 3.522-1.431 1.43z"}render(){return p`
            <pi-icon-base 
            pathData=${this.pathData}
            ></pi-icon-base>
        `}static styles=[d`
            
        `]}r("pi-notification-center",D);r("pi-icon-handler",C);r("pi-icon-flag-wavy-dark",$);r("pi-icon-star-dark",S);r("pi-icon-thumbs-up-dark",w);r("pi-icon-info-simple-dark",P);r("pi-icon-alert-triangle-dark",A);r("pi-icon-globe-dark",B);r("pi-icon-stop-ex-dark",I);class U extends u{static get properties(){return{notificationCenter:{type:Object},severityMap:{type:Object}}}constructor(){super(),this.notificationCenter=null,this.initNotifications(),this.severityMap={primary:{icon:"flag-wavy-dark",color:"var(--pi-severity-bg-color-primary, #117ab4)"},secondary:{icon:"star-dark",color:"var(--pi-severity-bg-color-secondary, #ccc)"},success:{icon:"thumbs-up-dark",color:"var(--pi-severity-bg-color-success, #208c39)"},info:{icon:"info-simple-dark",color:"var(--pi-severity-bg-color-info, #17A2B9)"},warn:{icon:"alert-triangle-dark",color:"var(--pi-severity-bg-color-warn, #d28809)"},help:{icon:"globe-dark",color:"var(--pi-severity-bg-color-help, #A855F8)"},danger:{icon:"stop-ex-dark",color:"var(--pi-severity-bg-color-danger, #F04544)"}}}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}initNotifications(){if(!document.querySelector("pi-notification-center")){const t=document.createElement("pi-notification-center");document.body.appendChild(t)}this.notificationCenter=document.querySelector("pi-notification-center")}create(t){const i=this.finalizeNotificationData(t);document.querySelector("pi-notification-center").addNotification(i)}finalizeNotificationData(t){return typeof t.severity<"u"&&typeof this.severityMap[t.severity]<"u"&&(t.icon==""||typeof t.icon>"u")&&(t.icon=this.severityMap[t.severity].icon,t.iconColor=this.severityMap[t.severity].color),t}render(){return f`
            
        `}static styles=[y`

        `]}export{U as P};
