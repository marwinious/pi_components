import{x as l}from"./lit-element-55XysmYc.js";import"./chip-DcnM3xU7.js";import"./defaultCss-Dh8mF8Ic.js";import"./common-Bdu-62Ky.js";const i={title:"Components/Chips",component:"pi-chip",tags:["autodocs"],argTypes:{label:{control:"text",name:"label",description:"Label for chip",table:{type:{summary:"string"},defaultValue:{summary:""}}},removable:{control:"boolean",name:"Removable",description:"Allows chip to be removed",table:{type:{summary:"string"},defaultValue:{summary:""}}}},args:{label:"Chip label",removable:!1}},r=({label:a,removable:o})=>l`
    <pi-chip 
    label=${a}
    ?removable=${o}
    ></pi-chip>
`,e=r.bind();e.args={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`({
  label,
  removable
}) => html\`
    <pi-chip 
    label=\${label}
    ?removable=\${removable}
    ></pi-chip>
\``,...e.parameters?.docs?.source}}};const n=["Default"];export{e as Default,n as __namedExportsOrder,i as default};
