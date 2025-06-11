import{x as e}from"./lit-element-qJpPW6A9.js";import"./index-Br0BFi8U.js";import"./iconMagnifyingGlass-_Z3B_Qwa.js";import"./iconHandler-BlAUk5Qy.js";import"./navDrawer-VhDhMaoq.js";import"./v4-CtRu48qb.js";import"./directive-CJw_OlP2.js";import"./defaultCss-aEcf2KJM.js";const w={title:"Components/Navigation/Nav Drawer",component:"pi-nav-drawer",tags:["autodocs"],argTypes:{contents:{control:"text",name:"content slot",description:"Slot for content",table:{type:{summary:"string"},defaultValue:{summary:""}}}},args:{contents:""}},o=()=>{document.querySelector("pi-nav-drawer").toggleDrawer()},a=({contents:t})=>e`
    <button @click=${()=>o()}>Toggle Drawer</button>

    <pi-nav-drawer
    ?showDrawer=${!1}
    >${t}</pi-nav-drawer>
`,r=a.bind();r.args={};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`({
  contents
}) => html\`
    <button @click=\${() => toggleDrawer()}>Toggle Drawer</button>

    <pi-nav-drawer
    ?showDrawer=\${false}
    >\${contents}</pi-nav-drawer>
\``,...r.parameters?.docs?.source}}};const g=["Default"];export{r as Default,g as __namedExportsOrder,w as default};
