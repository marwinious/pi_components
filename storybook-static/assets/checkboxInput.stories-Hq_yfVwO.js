import{x as l}from"./lit-element-CIbSzfXw.js";import{a as s}from"./chunk-D5ZWXAHU-BihnyLEY.js";import{o as r}from"./if-defined-jbakrIYG.js";import"./iconUserRoundedLight-D36zYM6r.js";import"./checkboxInput-CdQO_DLy.js";import"./v4-CtRu48qb.js";import"./directive-CF8sV3Lr.js";import"./defaultCss-CkMoNE8s.js";import"./label-C_mcLEiD.js";const $={title:"Components/Inputs/Checkbox",component:"pi-checkbox-input",tags:["autodocs"],argTypes:{label:{control:"text",name:"label (optional)",description:"Label for the text field",table:{type:{summary:"string"},defaultValue:{summary:""}}},checked:{control:"boolean",name:"checked",description:"Toggled on or off (true or false)",table:{type:{summary:"string"},defaultValue:{summary:""}}},disabled:{control:"boolean",name:"disabled (optional)",description:"Disables the field",table:{type:{summary:"string"},defaultValue:{summary:""}}}},args:{label:"Check me out",checked:!1,disabled:!1}},n=({label:o,checked:i,disabled:t})=>l`
    <pi-checkbox-input
    name="piCheckbox"
    label=${r(o!=""?o:void 0)}
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
\``,...c.parameters?.docs?.source}}};const C=["Default","Checked","Disabled"];export{a as Checked,e as Default,c as Disabled,C as __namedExportsOrder,$ as default};
