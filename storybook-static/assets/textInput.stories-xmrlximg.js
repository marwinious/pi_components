import{x as c}from"./lit-element-CIbSzfXw.js";import{a as m}from"./chunk-D5ZWXAHU-BihnyLEY.js";import{o as d}from"./if-defined-jbakrIYG.js";import"./iconUserRoundedLight-D36zYM6r.js";/* empty css              */import"./button-pjHN6GD3.js";import"./textInput-EgJjYZ2v.js";import"./selectInput-BpJ8ug0a.js";import"./checkboxInput-CdQO_DLy.js";import"./radioInput-DmYT9yqH.js";import"./toggleSwitch-YtaylxhS.js";import"./textAreaInput-BudRh6ee.js";import"./v4-CtRu48qb.js";import"./directive-CF8sV3Lr.js";import"./class-map-CB0bDZon.js";import"./label-C_mcLEiD.js";import"./defaultCss-CkMoNE8s.js";const C={title:"Components/Inputs/Text",component:"pi-text-input",tags:["autodocs"],argTypes:{label:{control:"text",name:"label (optional)",description:"Label for the text field",table:{type:{summary:"string"},defaultValue:{summary:""}}},placeholder:{control:"text",name:"placeholder (optional)",description:"Hint for input",table:{type:{summary:"string"},defaultValue:{summary:""}}},value:{control:"text",name:"value (optional)",description:"Initial value for field",table:{type:{summary:"string"},defaultValue:{summary:""}}},disabled:{control:"boolean",name:"disabled (optional)",description:"Disables the field",table:{type:{summary:"string"},defaultValue:{summary:""}}}},args:{placeholder:"",label:"",value:"",disabled:!1}},i=({label:r,placeholder:o,value:s,disabled:p})=>c`
    <pi-text-input 
    name="firstName"
    label=${d(r!=""?r:void 0)}
    placeholder=${d(o!=""?o:void 0)}
    value=${d(s!=""?s:void 0)}
    ?disabled=${p}
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
\``,...t.parameters?.docs?.source}}};const E=["Default","Label","Placeholder","Value","Disabled"];export{e as Default,t as Disabled,a as Label,n as Placeholder,l as Value,E as __namedExportsOrder,C as default};
