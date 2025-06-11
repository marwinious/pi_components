import{x as c}from"./lit-element-qJpPW6A9.js";import{a as m}from"./index-Br0BFi8U.js";import{o as d}from"./if-defined-CTt8SaA8.js";import"./iconMagnifyingGlass-_Z3B_Qwa.js";import"./iconHandler-BlAUk5Qy.js";/* empty css              */import"./label-Blmss6rD.js";import"./button-COcJbvyg.js";import"./textInput-CgW7TRR-.js";import"./selectInput-CNEGNpk2.js";import"./checkboxInput-CIYz59_W.js";import"./radioInputGroup-CJpdepT1.js";import"./toggleSwitch-DUJgR8Bh.js";import"./textAreaInput-BB_vpX0i.js";import"./card-1Ym2qmk8.js";import"./gridRow-B9G3p6lS.js";import"./paginator-B6elyfOC.js";import"./tableColumn-CE7dSoIP.js";import"./tabs-BnVmsyvf.js";import"./chip-LpiFCO_s.js";import"./headerBar-D7S1Wdmp.js";import"./navDrawer-VhDhMaoq.js";import"./v4-CtRu48qb.js";import"./directive-CJw_OlP2.js";import"./common-Bdu-62Ky.js";import"./class-map-j0Yd3Bp3.js";import"./defaultCss-aEcf2KJM.js";const z={title:"Components/Inputs/Text",component:"pi-text-input",tags:["autodocs"],argTypes:{label:{control:"text",name:"label (optional)",description:"Label for the text field",table:{type:{summary:"string"},defaultValue:{summary:""}}},placeholder:{control:"text",name:"placeholder (optional)",description:"Hint for input",table:{type:{summary:"string"},defaultValue:{summary:""}}},value:{control:"text",name:"value (optional)",description:"Initial value for field",table:{type:{summary:"string"},defaultValue:{summary:""}}},disabled:{control:"boolean",name:"disabled (optional)",description:"Disables the field",table:{type:{summary:"string"},defaultValue:{summary:""}}}},args:{placeholder:"",label:"",value:"",disabled:!1}},i=({label:r,placeholder:o,value:p,disabled:s})=>c`
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
\``,...t.parameters?.docs?.source}}};const A=["Default","Label","Placeholder","Value","Disabled"];export{e as Default,t as Disabled,a as Label,n as Placeholder,l as Value,A as __namedExportsOrder,z as default};
