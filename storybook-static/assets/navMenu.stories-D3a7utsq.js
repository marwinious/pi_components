import{a as s,x as e,i as o}from"./lit-element-SFUTxaLj.js";import{r as u}from"./registerWebComp-C8LEvlHW.js";import"./index-Br0BFi8U.js";import{c as r}from"./repeat-DvLqIwgm.js";import{d as v}from"./defaultCss-fIp2nCNg.js";class m extends s{static get properties(){return{items:{type:Array},vertical:{type:Boolean}}}connectedCallback(){super.connectedCallback()}constructor(){super(),this.items=[],this.vertical=!1}createSubnav(){}render(){return e`
            <ul class="nav_menu ${this.vertical?"vertical":"horizontal"}">
                ${r(this.items,a=>a.label,a=>e`
                    <li class="menu_item">
                        <a href=${a.href}>${a.label}</a>

                        ${a.children?e`
                            <ul class="sub_nav_menu">
                                ${r(a.children,n=>n.label,n=>e`
                                    <li class="menu_item">
                                        <a href=${n.href}>${n.label}</a>

                                        ${n.children?e`
                                            <ul class="sub_nav_menu">
                                                ${r(n.children,i=>i.label,i=>e`
                                                    <li class="menu_item">
                                                        <a href=${i.href}>${i.label}</a>
                                                    </li>
                                                `)}
                                            </ul>
                                        `:null}
                                    </li>
                                `)}
                            </ul>
                        `:null}
                    </li>
                `)}
            </ul>
        `}static styles=[v,o`
            :host {
                display: block;

            }

            .nav_menu {
                list-style: none;
                padding: 0;
                margin: 0;
            }

            /* HORIZONTAL ROOT MENU */
            .nav_menu.horizontal {
                display: flex; /* Lays out top-level items side-by-side */
            }

            .menu_item {
                position: relative;
            }

            .nav_menu > .menu_item {
                position: relative;
                display: block;
            }

            .nav_menu > .menu_item a {
                padding: var(--pi-nav-menu-item-padding, 10px 15px);
                background: var(--pi-nav-menu-item-background, transparent);
                color: var(--pi-nav-menu-item-text-color, blue);
                display: block;
                text-decoration: var(--pi-nav-menu-item-text-decoration, none);
            }

            .nav_menu > .menu_item a:hover {
                background: var(--pi-nav-menu-item-hover-background, #ddd);
                color: var(--pi-nav-menu-item-text-hover-color, inherit);
            }

            /* GLOBAL SUB NAV MENU */
            .sub_nav_menu {
                list-style: none;
                padding: 0;
                margin: 0;
                visibility: hidden;
                opacity: 0;
                position: absolute; /* Allows it to 'fly out' over content */
                top: var(--pi-nav-menu-sub-nav-top, 100%); /* Positions it right below the parent item */
                left: var(--pi-nav-menu-sub-nav-left, 0);
                background: var(--pi-nav-menu-sub-nav-background, #f9f9f9);
                border: var(--pi-nav-menu-sub-nav-border, 1px solid #ccc);
                min-width: var(--pi-nav-menu-sub-nav-min-width, 150px);
                z-index: var(--pi-nav-menu-sub-nav-z-index, 10);
                transition: var(--pi-nav-menu-sub-nav-transition, opacity 0.5s);
            }

            .menu_item:hover > .sub_nav_menu {
                visibility: visible;
                opacity: 1;
            }

            .sub_nav_menu > .menu_item:hover > .sub_nav_menu {
                top: var(--pi-nav-menu-sub-sub-nav-top, 0);
                left: var(--pi-nav-menu-sub-sub-nav-left, 100%);
            }

            /* VERTICAL MENU */
            .nav_menu.vertical,
            .nav_menu.vertical > .menu_item a {
                display: inline-block;
            }

            .nav_menu.vertical .menu_item:hover > .sub_nav_menu {
                top: var(--pi-nav-menu-vertical-sub-nav-top, 0); /* Align with parent sub-item */
                left: var(--pi-nav-menu-vertical-sub-nav-left, 100%); /* Fly out to the right */
            }
        `]}u("pi-nav-menu-test",m);const c=[{label:"Home",href:"/"},{label:"Products",href:"/products",children:[{label:"Software",href:"/products/software"},{label:"Hardware",href:"/products/hardware",children:[{label:"Drivers",href:"/drivers"},{label:"Documentation",href:"/docs"}]}]},{label:"Contact",href:"/contact"}],p={title:"Components/Navigation/Nav Menu",component:"pi-nav-menu-test",tags:["autodocs"],argTypes:{vertical:{control:"boolean",name:"vertical",description:"Changes to vertical menu",table:{type:{summary:"string"},defaultValue:{summary:""}}}},args:{vertical:!1}},d=({vertical:l})=>e`
    <pi-nav-menu-test
    .items=${c}
    ?vertical=${l}
    ></pi-nav-menu-test>
`,t=d.bind();t.args={};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
  vertical
}) => html\`
    <pi-nav-menu-test
    .items=\${menuData}
    ?vertical=\${vertical}
    ></pi-nav-menu-test>
\``,...t.parameters?.docs?.source}}};const b=["Default"],$=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:b,default:p},Symbol.toStringTag,{value:"Module"}));export{$ as P};
