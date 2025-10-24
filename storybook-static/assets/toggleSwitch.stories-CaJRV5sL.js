import{x as d}from"./lit-element-Rv6HkL07.js";import{r}from"./registerWebComp-xWpx6Xkx.js";import{a as g}from"./index-Br0BFi8U.js";import{o as m}from"./if-defined-CT_LCv84.js";import"./iconXLogo-wd1NX9XZ.js";import{P as p}from"./toggleSwitch-Bi2fp7d5.js";import"./v4-CtRu48qb.js";import"./directive-CJw_OlP2.js";import"./defaultCss-BUBpELKw.js";import"./label-B4rynypE.js";r("pi-toggle-switch",p);const D={title:"Components/Inputs/Toggle Switch",component:"pi-toggle-switch",tags:["autodocs"],argTypes:{label:{control:"text",name:"label (optional)",description:"Label for the text field",table:{type:{summary:"string"},defaultValue:{summary:""}}},checked:{control:"boolean",name:"checked",description:"Toggled on or off (true or false)",table:{type:{summary:"string"},defaultValue:{summary:""}}},disabled:{control:"boolean",name:"disabled (optional)",description:"Disables the field",table:{type:{summary:"string"},defaultValue:{summary:""}}}},args:{label:"",checked:!1,disabled:!1}},i=({label:n,checked:o,disabled:c})=>d`
    <pi-toggle-switch
    name="piToggleSwitch"
    label=${m(n!=""?n:void 0)}
    ?checked=${o}
    ?disabled=${c}
    @change=${s=>g("Switch toggled")(s.detail)}
    ></pi-toggle-switch>
`,e=i.bind();e.args={};const a=i.bind();a.args={label:"Enable something"};const t=i.bind();t.args={label:'Pre-selected to "on"',checked:!0};const l=i.bind();l.args={disabled:!0};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`({
  label,
  checked,
  disabled
}) => html\`
    <pi-toggle-switch
    name="piToggleSwitch"
    label=\${ifDefined(label != '' ? label : undefined)}
    ?checked=\${checked}
    ?disabled=\${disabled}
    @change=\${e => action('Switch toggled')(e.detail)}
    ></pi-toggle-switch>
\``,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({
  label,
  checked,
  disabled
}) => html\`
    <pi-toggle-switch
    name="piToggleSwitch"
    label=\${ifDefined(label != '' ? label : undefined)}
    ?checked=\${checked}
    ?disabled=\${disabled}
    @change=\${e => action('Switch toggled')(e.detail)}
    ></pi-toggle-switch>
\``,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
  label,
  checked,
  disabled
}) => html\`
    <pi-toggle-switch
    name="piToggleSwitch"
    label=\${ifDefined(label != '' ? label : undefined)}
    ?checked=\${checked}
    ?disabled=\${disabled}
    @change=\${e => action('Switch toggled')(e.detail)}
    ></pi-toggle-switch>
\``,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`({
  label,
  checked,
  disabled
}) => html\`
    <pi-toggle-switch
    name="piToggleSwitch"
    label=\${ifDefined(label != '' ? label : undefined)}
    ?checked=\${checked}
    ?disabled=\${disabled}
    @change=\${e => action('Switch toggled')(e.detail)}
    ></pi-toggle-switch>
\``,...l.parameters?.docs?.source}}};const x=["Default","Label","Checked","Disabled"];export{t as Checked,e as Default,l as Disabled,a as Label,x as __namedExportsOrder,D as default};
