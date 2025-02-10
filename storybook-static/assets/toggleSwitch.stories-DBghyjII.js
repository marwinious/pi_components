import{x as s}from"./lit-element-CIbSzfXw.js";import{a as r}from"./chunk-D5ZWXAHU-BihnyLEY.js";import{o as g}from"./if-defined-jbakrIYG.js";import"./iconUserRoundedLight-D36zYM6r.js";import"./toggleSwitch-YtaylxhS.js";import"./v4-CtRu48qb.js";import"./directive-CF8sV3Lr.js";import"./defaultCss-CkMoNE8s.js";import"./label-C_mcLEiD.js";const S={title:"Components/Inputs/Toggle Switch",component:"pi-toggle-switch",tags:["autodocs"],argTypes:{label:{control:"text",name:"label (optional)",description:"Label for the text field",table:{type:{summary:"string"},defaultValue:{summary:""}}},checked:{control:"boolean",name:"checked",description:"Toggled on or off (true or false)",table:{type:{summary:"string"},defaultValue:{summary:""}}},disabled:{control:"boolean",name:"disabled (optional)",description:"Disables the field",table:{type:{summary:"string"},defaultValue:{summary:""}}}},args:{label:"",checked:!1,disabled:!1}},i=({label:n,checked:o,disabled:c})=>s`
    <pi-toggle-switch
    name="piToggleSwitch"
    label=${g(n!=""?n:void 0)}
    ?checked=${o}
    ?disabled=${c}
    @change=${d=>r("Switch toggled")(d.detail)}
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
\``,...l.parameters?.docs?.source}}};const y=["Default","Label","Checked","Disabled"];export{t as Checked,e as Default,l as Disabled,a as Label,y as __namedExportsOrder,S as default};
