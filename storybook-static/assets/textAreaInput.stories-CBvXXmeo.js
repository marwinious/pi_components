import{x as c}from"./lit-element-qJpPW6A9.js";import{a as m}from"./chunk-D5ZWXAHU-CUVymvc5.js";import{o as d}from"./if-defined-CTt8SaA8.js";import"./iconUserRoundedLight-DAA4Ng5V.js";import"./textAreaInput-BB_vpX0i.js";import"./v4-CtRu48qb.js";import"./defaultCss-aEcf2KJM.js";import"./label-Blmss6rD.js";const T={title:"Components/Inputs/Textarea",component:"pi-text-area-input",tags:["autodocs"],argTypes:{label:{control:"text",name:"label (optional)",description:"Label for the text field",table:{type:{summary:"string"},defaultValue:{summary:""}}},placeholder:{control:"text",name:"placeholder (optional)",description:"Hint for input",table:{type:{summary:"string"},defaultValue:{summary:""}}},value:{control:"text",name:"value (optional)",description:"Initial value for field",table:{type:{summary:"string"},defaultValue:{summary:""}}},disabled:{control:"boolean",name:"disabled (optional)",description:"Disables the field",table:{type:{summary:"string"},defaultValue:{summary:""}}}},args:{label:"",placeholder:"",value:"",disabled:!1}},i=({label:r,placeholder:o,value:s,disabled:p})=>c`
    <pi-text-area-input
    name="piTextArea"
    label=${d(r!=""?r:void 0)}
    placeholder=${d(o!=""?o:void 0)}
    value=${d(s!=""?s:void 0)}
    ?disabled=${p}
    @change=${u=>m("Text changed")(u.detail)}
    ></pi-text-area-input>
`,e=i.bind();e.args={};const a=i.bind();a.args={label:"Short bio"};const n=i.bind();n.args={placeholder:"Summarize your interests..."};const l=i.bind();l.args={value:"I love walking on the beach, but I hate those seagulls."};const t=i.bind();t.args={disabled:!0};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`({
  label,
  placeholder,
  value,
  disabled
}) => html\`
    <pi-text-area-input
    name="piTextArea"
    label=\${ifDefined(label != '' ? label : undefined)}
    placeholder=\${ifDefined(placeholder != '' ? placeholder : undefined)}
    value=\${ifDefined(value != '' ? value : undefined)}
    ?disabled=\${disabled}
    @change=\${e => action('Text changed')(e.detail)}
    ></pi-text-area-input>
\``,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({
  label,
  placeholder,
  value,
  disabled
}) => html\`
    <pi-text-area-input
    name="piTextArea"
    label=\${ifDefined(label != '' ? label : undefined)}
    placeholder=\${ifDefined(placeholder != '' ? placeholder : undefined)}
    value=\${ifDefined(value != '' ? value : undefined)}
    ?disabled=\${disabled}
    @change=\${e => action('Text changed')(e.detail)}
    ></pi-text-area-input>
\``,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`({
  label,
  placeholder,
  value,
  disabled
}) => html\`
    <pi-text-area-input
    name="piTextArea"
    label=\${ifDefined(label != '' ? label : undefined)}
    placeholder=\${ifDefined(placeholder != '' ? placeholder : undefined)}
    value=\${ifDefined(value != '' ? value : undefined)}
    ?disabled=\${disabled}
    @change=\${e => action('Text changed')(e.detail)}
    ></pi-text-area-input>
\``,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`({
  label,
  placeholder,
  value,
  disabled
}) => html\`
    <pi-text-area-input
    name="piTextArea"
    label=\${ifDefined(label != '' ? label : undefined)}
    placeholder=\${ifDefined(placeholder != '' ? placeholder : undefined)}
    value=\${ifDefined(value != '' ? value : undefined)}
    ?disabled=\${disabled}
    @change=\${e => action('Text changed')(e.detail)}
    ></pi-text-area-input>
\``,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
  label,
  placeholder,
  value,
  disabled
}) => html\`
    <pi-text-area-input
    name="piTextArea"
    label=\${ifDefined(label != '' ? label : undefined)}
    placeholder=\${ifDefined(placeholder != '' ? placeholder : undefined)}
    value=\${ifDefined(value != '' ? value : undefined)}
    ?disabled=\${disabled}
    @change=\${e => action('Text changed')(e.detail)}
    ></pi-text-area-input>
\``,...t.parameters?.docs?.source}}};const y=["Default","Label","Placeholder","Value","Disabled"];export{e as Default,t as Disabled,a as Label,n as Placeholder,l as Value,y as __namedExportsOrder,T as default};
