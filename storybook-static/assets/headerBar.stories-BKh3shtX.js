import{x as r}from"./lit-element-55XysmYc.js";import"./index-Br0BFi8U.js";import{o as n}from"./if-defined-BusrCOEv.js";import"./iconCheckmarkSquareLight4-BieKP9Jg.js";import"./iconHandler-Bvyw3-YZ.js";import"./headerBar-CZm6EMgC.js";import"./v4-CtRu48qb.js";import"./directive-CJw_OlP2.js";import"./defaultCss-Dh8mF8Ic.js";const h={title:"Components/Headers/Header Bar",component:"pi-header-bar",tags:["autodocs"],argTypes:{title:{control:"text",name:"title (optional)",description:"Title for bar",table:{type:{summary:"string"},defaultValue:{summary:""}}},sticky:{control:"boolean",name:"sticky (optional)",description:"Enables sticky mode",table:{type:{summary:"boolean"},defaultValue:{summary:""}}},showNavIcon:{control:"boolean",name:"showNavIcon (optional)",description:"Shows the nav icon at front of bar",table:{type:{summary:"string"},defaultValue:{summary:""}}}},args:{title:"Header Bar Title",sticky:!1,showNavIcon:!0}},s=({title:t,sticky:a,showNavIcon:o})=>r`
    <pi-header-bar
    title=${n(t!=""?t:void 0)}
    ?sticky=${a}
    ?showNavIcon=${o}
    ></pi-header-bar>
`,e=s.bind();e.args={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`({
  title,
  sticky,
  showNavIcon
}) => html\`
    <pi-header-bar
    title=\${ifDefined(title != '' ? title : undefined)}
    ?sticky=\${sticky}
    ?showNavIcon=\${showNavIcon}
    ></pi-header-bar>
\``,...e.parameters?.docs?.source}}};const b=["Default"];export{e as Default,b as __namedExportsOrder,h as default};
