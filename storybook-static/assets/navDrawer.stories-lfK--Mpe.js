import{x as t}from"./lit-element-Rv6HkL07.js";import{r as a}from"./registerWebComp-xWpx6Xkx.js";import"./index-Br0BFi8U.js";import"./iconXLogo-wd1NX9XZ.js";import{P as o}from"./navDrawer-DElHHZe8.js";import"./v4-CtRu48qb.js";import"./directive-CJw_OlP2.js";import"./defaultCss-BUBpELKw.js";a("pi-nav-drawer",o);const u={title:"Components/Navigation/Nav Drawer",component:"pi-nav-drawer",tags:["autodocs"],argTypes:{contents:{control:"text",name:"content slot",description:"Slot for content",table:{type:{summary:"string"},defaultValue:{summary:""}}}},args:{contents:""}},n=()=>{document.querySelector("pi-nav-drawer").toggleDrawer()},s=({contents:e})=>t`
    <button @click=${()=>n()}>Toggle Drawer</button>

    <pi-nav-drawer
    ?showDrawer=${!1}
    >${e}</pi-nav-drawer>
`,r=s.bind();r.args={};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`({
  contents
}) => html\`
    <button @click=\${() => toggleDrawer()}>Toggle Drawer</button>

    <pi-nav-drawer
    ?showDrawer=\${false}
    >\${contents}</pi-nav-drawer>
\``,...r.parameters?.docs?.source}}};const D=["Default"];export{r as Default,D as __namedExportsOrder,u as default};
