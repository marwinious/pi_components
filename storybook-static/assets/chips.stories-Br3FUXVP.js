import{x as o}from"./lit-element-Rv6HkL07.js";import{r as l}from"./registerWebComp-xWpx6Xkx.js";import{P as t}from"./chip-BYNiX30g.js";import"./defaultCss-BUBpELKw.js";import"./common-Bdu-62Ky.js";l("pi-chip",t);const b={title:"Components/Chips",component:"pi-chip",tags:["autodocs"],argTypes:{label:{control:"text",name:"label",description:"Label for chip",table:{type:{summary:"string"},defaultValue:{summary:""}}},removable:{control:"boolean",name:"Removable",description:"Allows chip to be removed",table:{type:{summary:"string"},defaultValue:{summary:""}}}},args:{label:"Chip label",removable:!1}},s=({label:a,removable:r})=>o`
    <pi-chip 
    label=${a}
    ?removable=${r}
    ></pi-chip>
`,e=s.bind();e.args={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`({
  label,
  removable
}) => html\`
    <pi-chip 
    label=\${label}
    ?removable=\${removable}
    ></pi-chip>
\``,...e.parameters?.docs?.source}}};const u=["Default"];export{e as Default,u as __namedExportsOrder,b as default};
