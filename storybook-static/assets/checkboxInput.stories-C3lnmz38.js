import{x as l}from"./lit-element-Rv6HkL07.js";import{r}from"./registerWebComp-xWpx6Xkx.js";import{a as s}from"./index-Br0BFi8U.js";import{o as b}from"./if-defined-CT_LCv84.js";import{P as p}from"./checkboxInput-0uXweIWG.js";import"./v4-CtRu48qb.js";import"./defaultCss-BUBpELKw.js";import"./label-B4rynypE.js";r("pi-checkbox-input",p);const C={title:"Components/Inputs/Checkbox",component:"pi-checkbox-input",tags:["autodocs"],argTypes:{label:{control:"text",name:"label (optional)",description:"Label for the text field",table:{type:{summary:"string"},defaultValue:{summary:""}}},checked:{control:"boolean",name:"checked",description:"Toggled on or off (true or false)",table:{type:{summary:"string"},defaultValue:{summary:""}}},disabled:{control:"boolean",name:"disabled (optional)",description:"Disables the field",table:{type:{summary:"string"},defaultValue:{summary:""}}}},args:{label:"Check me out",checked:!1,disabled:!1}},n=({label:o,checked:i,disabled:t})=>l`
    <pi-checkbox-input
    name="piCheckbox"
    label=${b(o!=""?o:void 0)}
    ?checked=${i}
    ?disabled=${t}
    @change=${d=>s("Checkbox clicked")(d.detail)}
    ></pi-checkbox-input>
`,e=n.bind();e.args={};const a=n.bind();a.args={checked:!0};const c=n.bind();c.args={disabled:!0};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`({
  label,
  checked,
  disabled
}) => html\`
    <pi-checkbox-input
    name="piCheckbox"
    label=\${ifDefined(label != '' ? label : undefined)}
    ?checked=\${checked}
    ?disabled=\${disabled}
    @change=\${e => action('Checkbox clicked')(e.detail)}
    ></pi-checkbox-input>
\``,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({
  label,
  checked,
  disabled
}) => html\`
    <pi-checkbox-input
    name="piCheckbox"
    label=\${ifDefined(label != '' ? label : undefined)}
    ?checked=\${checked}
    ?disabled=\${disabled}
    @change=\${e => action('Checkbox clicked')(e.detail)}
    ></pi-checkbox-input>
\``,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`({
  label,
  checked,
  disabled
}) => html\`
    <pi-checkbox-input
    name="piCheckbox"
    label=\${ifDefined(label != '' ? label : undefined)}
    ?checked=\${checked}
    ?disabled=\${disabled}
    @change=\${e => action('Checkbox clicked')(e.detail)}
    ></pi-checkbox-input>
\``,...c.parameters?.docs?.source}}};const y=["Default","Checked","Disabled"];export{a as Checked,e as Default,c as Disabled,y as __namedExportsOrder,C as default};
