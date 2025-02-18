import{x as c}from"./lit-element-qJpPW6A9.js";import{a as m}from"./chunk-D5ZWXAHU-CUVymvc5.js";import{o as d}from"./if-defined-CTt8SaA8.js";import"./iconUserRoundedLight-DAA4Ng5V.js";/* empty css              */import"./label-Blmss6rD.js";import"./button-CLhyr8J3.js";import"./textInput-BVBE0bKS.js";import"./selectInput-C3XGY4DD.js";import"./checkboxInput-CIYz59_W.js";import"./radioInputGroup-CJpdepT1.js";import"./toggleSwitch-DUJgR8Bh.js";import"./textAreaInput-BB_vpX0i.js";import"./card-BKqo6j5H.js";import"./gridRow-B9G3p6lS.js";import"./paginator-B6elyfOC.js";import"./tableColumn-DbbijIEK.js";import"./tabs-BnVmsyvf.js";import"./v4-CtRu48qb.js";import"./class-map-yYL26NNl.js";import"./defaultCss-aEcf2KJM.js";const J={title:"Components/Inputs/Text",component:"pi-text-input",tags:["autodocs"],argTypes:{label:{control:"text",name:"label (optional)",description:"Label for the text field",table:{type:{summary:"string"},defaultValue:{summary:""}}},placeholder:{control:"text",name:"placeholder (optional)",description:"Hint for input",table:{type:{summary:"string"},defaultValue:{summary:""}}},value:{control:"text",name:"value (optional)",description:"Initial value for field",table:{type:{summary:"string"},defaultValue:{summary:""}}},disabled:{control:"boolean",name:"disabled (optional)",description:"Disables the field",table:{type:{summary:"string"},defaultValue:{summary:""}}}},args:{placeholder:"",label:"",value:"",disabled:!1}},i=({label:r,placeholder:o,value:p,disabled:s})=>c`
    <pi-text-input 
    name="firstName"
    label=${d(r!=""?r:void 0)}
    placeholder=${d(o!=""?o:void 0)}
    value=${d(p!=""?p:void 0)}
    ?disabled=${s}
    @change=${u=>m("Text input changed")(u.detail)}
    ></pi-text-input>
`,e=i.bind();e.args={};const a=i.bind();a.args={label:"First Name"};const n=i.bind();n.args={placeholder:"Type here to start"};const l=i.bind();l.args={value:"John Doe"};const t=i.bind();t.args={disabled:!0};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`({
  label,
  placeholder,
  value,
  disabled
}) => html\`
    <pi-text-input 
    name="firstName"
    label=\${ifDefined(label != '' ? label : undefined)}
    placeholder=\${ifDefined(placeholder != '' ? placeholder : undefined)}
    value=\${ifDefined(value != '' ? value : undefined)}
    ?disabled=\${disabled}
    @change=\${e => action('Text input changed')(e.detail)}
    ></pi-text-input>
\``,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({
  label,
  placeholder,
  value,
  disabled
}) => html\`
    <pi-text-input 
    name="firstName"
    label=\${ifDefined(label != '' ? label : undefined)}
    placeholder=\${ifDefined(placeholder != '' ? placeholder : undefined)}
    value=\${ifDefined(value != '' ? value : undefined)}
    ?disabled=\${disabled}
    @change=\${e => action('Text input changed')(e.detail)}
    ></pi-text-input>
\``,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`({
  label,
  placeholder,
  value,
  disabled
}) => html\`
    <pi-text-input 
    name="firstName"
    label=\${ifDefined(label != '' ? label : undefined)}
    placeholder=\${ifDefined(placeholder != '' ? placeholder : undefined)}
    value=\${ifDefined(value != '' ? value : undefined)}
    ?disabled=\${disabled}
    @change=\${e => action('Text input changed')(e.detail)}
    ></pi-text-input>
\``,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`({
  label,
  placeholder,
  value,
  disabled
}) => html\`
    <pi-text-input 
    name="firstName"
    label=\${ifDefined(label != '' ? label : undefined)}
    placeholder=\${ifDefined(placeholder != '' ? placeholder : undefined)}
    value=\${ifDefined(value != '' ? value : undefined)}
    ?disabled=\${disabled}
    @change=\${e => action('Text input changed')(e.detail)}
    ></pi-text-input>
\``,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
  label,
  placeholder,
  value,
  disabled
}) => html\`
    <pi-text-input 
    name="firstName"
    label=\${ifDefined(label != '' ? label : undefined)}
    placeholder=\${ifDefined(placeholder != '' ? placeholder : undefined)}
    value=\${ifDefined(value != '' ? value : undefined)}
    ?disabled=\${disabled}
    @change=\${e => action('Text input changed')(e.detail)}
    ></pi-text-input>
\``,...t.parameters?.docs?.source}}};const O=["Default","Label","Placeholder","Value","Disabled"];export{e as Default,t as Disabled,a as Label,n as Placeholder,l as Value,O as __namedExportsOrder,J as default};
