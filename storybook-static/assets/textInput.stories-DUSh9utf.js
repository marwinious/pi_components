import{x as c}from"./lit-element-CIbSzfXw.js";import{a as m}from"./chunk-D5ZWXAHU-BihnyLEY.js";import{o as d}from"./if-defined-jbakrIYG.js";import"./iconUserRoundedLight-6uJswbzO.js";/* empty css              */import"./label-dcaqkyBl.js";import"./button-Dm2HOfH1.js";import"./textInput-CMNIR-sy.js";import"./selectInput-DUjMpMCX.js";import"./checkboxInput-DwCKe97t.js";import"./radioInputGroup-CzJiqg2r.js";import"./toggleSwitch-CbpdktX1.js";import"./textAreaInput-CTJxMNFD.js";import"./card-uwJcKstK.js";import"./gridRow-D2YGSdgM.js";import"./paginator-1UNip4SV.js";import"./tableColumn-Brp-kVxB.js";import"./tabs-D_HqK2Rk.js";import"./v4-CtRu48qb.js";import"./class-map-BsLbcEoW.js";import"./defaultCss-CkMoNE8s.js";const J={title:"Components/Inputs/Text",component:"pi-text-input",tags:["autodocs"],argTypes:{label:{control:"text",name:"label (optional)",description:"Label for the text field",table:{type:{summary:"string"},defaultValue:{summary:""}}},placeholder:{control:"text",name:"placeholder (optional)",description:"Hint for input",table:{type:{summary:"string"},defaultValue:{summary:""}}},value:{control:"text",name:"value (optional)",description:"Initial value for field",table:{type:{summary:"string"},defaultValue:{summary:""}}},disabled:{control:"boolean",name:"disabled (optional)",description:"Disables the field",table:{type:{summary:"string"},defaultValue:{summary:""}}}},args:{placeholder:"",label:"",value:"",disabled:!1}},i=({label:r,placeholder:o,value:p,disabled:s})=>c`
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
