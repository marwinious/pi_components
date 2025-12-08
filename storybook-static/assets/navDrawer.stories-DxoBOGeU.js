import{a as o,x as a,i as s}from"./lit-element-SFUTxaLj.js";import{r as n}from"./registerWebComp-C8LEvlHW.js";import"./index-Br0BFi8U.js";import{d as i}from"./defaultCss-fIp2nCNg.js";import"./v4-CtRu48qb.js";class l extends o{static get properties(){return{showDrawer:{type:Boolean,reflect:!0}}}constructor(){super(),this.showDrawer=!1}render(){return a`
            <div class="close_container">
                <span @click="${this.closeDrawer}">x</span>
            </div>

            <div class="content_container">
                <slot>
                    <p>
                        The drawer is controlled by the showDrawer boolean attribute on this component. Change that value from the parent to control the drawer's visbility. 
                    </p>
                    <p>
                        Alternatively, you may select this component from a querySelector and call closeDrawer(), openDrawer(), or toggleDrawer() on that element.
                    </p>
                    <p>
                        There is an default slot in the drawer where you can pass in content to override this message.
                    </p>
                </slot>
            </div>
        `}closeDrawer(){this.showDrawer=!1;const t=new CustomEvent("drawerClosed",{detail:this.showDrawer,bubbles:!0,composed:!0});this.dispatchEvent(t)}openDrawer(){this.showDrawer=!0;const t=new CustomEvent("drawerOpened",{detail:this.showDrawer,bubbles:!0,composed:!0});this.dispatchEvent(t)}toggleDrawer(){this.showDrawer?this.closeDrawer():this.openDrawer()}static styles=[i,s`
            :host {
                box-sizing: border-box;
                position: fixed;
                top: 0;
                left: 0;
                z-index: 10000;
                height: 100%;
                width: 256px;
                min-width: 256px;
                transform: translateX(-260px);
                transition: all 0.25s ease-in-out;
                background: var(--pi-nav-drawer-bg-color, #FFF);
                box-shadow: var(--pi-nav-drawer-box-shadow, 1px 1px 2px #666);
                padding: var(--pi-nav-drawer-padding, 1.2rem);
            }

            :host([showDrawer]) {
                transform: translateX(0px);
            }

            .close_container {
                box-sizing: border-box;
                position: absolute;
                top: 0px;
                right: 0px;
                cursor: pointer;
                font-size: 1.4rem;
                user-select: none;
                padding: var(--pi-nav-drawer-padding, 0.2rem 0.4rem);
                color: var(--pi-nav-drawer-close-color, #333);
            }
        `]}n("pi-nav-drawer",l);const g={title:"Components/Navigation/Nav Drawer",component:"pi-nav-drawer",tags:["autodocs"],argTypes:{contents:{control:"text",name:"content slot",description:"Slot for content",table:{type:{summary:"string"},defaultValue:{summary:""}}}},args:{contents:""}},p=()=>{document.querySelector("pi-nav-drawer").toggleDrawer()},c=({contents:r})=>a`
    <button @click=${()=>p()}>Toggle Drawer</button>

    <pi-nav-drawer
    ?showDrawer=${!1}
    >${r}</pi-nav-drawer>
`,e=c.bind();e.args={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`({
  contents
}) => html\`
    <button @click=\${() => toggleDrawer()}>Toggle Drawer</button>

    <pi-nav-drawer
    ?showDrawer=\${false}
    >\${contents}</pi-nav-drawer>
\``,...e.parameters?.docs?.source}}};const v=["Default"];export{e as Default,v as __namedExportsOrder,g as default};
