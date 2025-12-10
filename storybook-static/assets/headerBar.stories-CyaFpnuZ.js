import{a as i,x as o,i as s}from"./lit-element-SFUTxaLj.js";import{r}from"./registerWebComp-C8LEvlHW.js";import"./index-Br0BFi8U.js";import{o as c}from"./if-defined-BbYDxsAN.js";import{n as l,r as d,i as p,x as h,a as u,b as m}from"./iconBase-D6R8-dG5.js";import{d as b}from"./defaultCss-fIp2nCNg.js";import"./v4-CtRu48qb.js";class v extends i{static get properties(){return{sticky:{type:Boolean},showNavIcon:{type:Boolean},title:{type:String}}}constructor(){super(),this.sticky=!1,this.showNavIcon=!1,this.title=""}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}render(){return o`
            <div class="prepend_container">
                <slot name="prepend">
                    ${this.showNavIcon?o`
                        <div 
                        class="nav_icon"
                        @click=${this.handleNavIconClick}
                        >
                            <slot name="menuIcon"></slot>
                        </div>
                    `:null}
                </slot>
            </div>

            <div class="header_content">
                <div class="header_title">
                    ${this.title}
                </div>
            </div>

            <div class="append_container">
                <slot name="append"></slot>
            </div>
        `}handleNavIconClick(){const t=new CustomEvent("navIconClick",{detail:!1,bubbles:!0,composed:!0});this.dispatchEvent(t)}static styles=[b,s`
            :host {
                box-sizing: border-box;
                display: flex;
                align-items: center;
                /* border: solid 1px blue; */
                padding: var(--pi-header-bar-padding, 0.8rem);
                box-shadow: var(--pi-header-bar-box-shadow, 0px 1px 2px #666);
                gap: 1.2rem;
                background-color: var(--pi-header-bar-background-color, #fff);
                width: 100%;
                z-index: 9999;
            }

            :host([sticky]) {
                position: fixed;
                top: 0;
                left: 0;
            }

            .nav_icon {
                width: 25px;
                height: 25px;
                cursor: pointer;
                border-radius: 50%;
                padding: 5px;
                transition: all 0.25s ease-in-out;
                fill: var(--pi-header-bar-nav-icon-color, #333);

                &:hover {
                    background: var(--pi-header-bar-nav-icon-hover-bg-color, rgba(0,0,0,0.1));
                    fill: var(--pi-header-bar-nav-icon-hover-color, #333);
                }
            }

            .header_content {
                font-size: var(--pi-header-bar-content-font-size, 1.4rem);
                flex-grow: 1;
                color: var(--pi-header-bar-content-text-color, #333);
            }
        `]}l("pi-icon-base",d);class f extends p{static get properties(){return{pathData:{type:String}}}constructor(){super(),this.pathData="m22 16.75c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75z"}render(){return h`
            <pi-icon-base 
            pathData=${this.pathData}
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLineJoin="round"
            strokeMiterLimit="2"
            ></pi-icon-base>
        `}static styles=[u`
            
        `]}r("pi-icon-handler",m);r("pi-icon-menu-hamburger-rounded",f);r("pi-header-bar",v);const C={title:"Components/Headers/Header Bar",component:"pi-header-bar",tags:["autodocs"],argTypes:{title:{control:"text",name:"title (optional)",description:"Title for bar",table:{type:{summary:"string"},defaultValue:{summary:""}}},sticky:{control:"boolean",name:"sticky (optional)",description:"Enables sticky mode",table:{type:{summary:"boolean"},defaultValue:{summary:""}}},showNavIcon:{control:"boolean",name:"showNavIcon (optional)",description:"Shows the nav icon at front of bar",table:{type:{summary:"string"},defaultValue:{summary:""}}}},args:{title:"Header Bar Title",sticky:!1,showNavIcon:!0}},g=({title:a,sticky:t,showNavIcon:n})=>o`
    <pi-header-bar
    title=${c(a!=""?a:void 0)}
    ?sticky=${t}
    ?showNavIcon=${n}
    >
        <pi-icon-handler icon="menu-hamburger-rounded" slot="menuIcon"></pi-icon-handler>
    </pi-header-bar>
`,e=g.bind();e.args={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`({
  title,
  sticky,
  showNavIcon
}) => html\`
    <pi-header-bar
    title=\${ifDefined(title != '' ? title : undefined)}
    ?sticky=\${sticky}
    ?showNavIcon=\${showNavIcon}
    >
        <pi-icon-handler icon="menu-hamburger-rounded" slot="menuIcon"></pi-icon-handler>
    </pi-header-bar>
\``,...e.parameters?.docs?.source}}};const _=["Default"];export{e as Default,_ as __namedExportsOrder,C as default};
