import{x as m}from"./lit-element-Rv6HkL07.js";import{r as c}from"./registerWebComp-xWpx6Xkx.js";import{a as f}from"./index-Br0BFi8U.js";import{o as r}from"./if-defined-CT_LCv84.js";/* empty css              */import"./label-B4rynypE.js";import"./button-BOBJE-_P.js";import{b}from"./textInput-D3o0PP1B.js";import"./selectInput-DDizFH8J.js";import"./checkboxInput-0uXweIWG.js";import"./radioInputGroup-2nst8SSk.js";import"./toggleSwitch-Bi2fp7d5.js";import"./textAreaInput-CIlRUaP7.js";import"./card-yLocHZea.js";import"./gridRow-CmMBURRA.js";import"./paginator-CWwSxXN6.js";import"./table-DdY3P1Jp.js";import"./tabs-CJumrZMp.js";import"./chip-BYNiX30g.js";import"./headerBar-DZ0q1dNX.js";import"./navDrawer-DElHHZe8.js";import"./notifications-1UJDinW3.js";import"./v4-CtRu48qb.js";import"./common-Bdu-62Ky.js";import"./class-map-KOhBCLCh.js";import"./directive-CJw_OlP2.js";import"./defaultCss-BUBpELKw.js";import"./directive-helpers-CnTqk2HR.js";import"./iconBase-D6R8-dG5.js";c("pi-text-input",b);const K={title:"Components/Inputs/Text",component:"pi-text-input",tags:["autodocs"],argTypes:{label:{control:"text",name:"label (optional)",description:"Label for the text field",table:{type:{summary:"string"},defaultValue:{summary:""}}},placeholder:{control:"text",name:"placeholder (optional)",description:"Hint for input",table:{type:{summary:"string"},defaultValue:{summary:""}}},value:{control:"text",name:"value (optional)",description:"Initial value for field",table:{type:{summary:"string"},defaultValue:{summary:""}}},disabled:{control:"boolean",name:"disabled (optional)",description:"Disables the field",table:{type:{summary:"string"},defaultValue:{summary:""}}}},args:{placeholder:"",label:"",value:"",disabled:!1}},i=({label:d,placeholder:o,value:p,disabled:s})=>m`
    <pi-text-input 
    name="firstName"
    label=${r(d!=""?d:void 0)}
    placeholder=${r(o!=""?o:void 0)}
    value=${r(p!=""?p:void 0)}
    ?disabled=${s}
    @change=${u=>f("Text input changed")(u.detail)}
    ></pi-text-input>
`,e=i.bind();e.args={};const a=i.bind();a.args={label:"First Name"};const n=i.bind();n.args={placeholder:"Type here to start"};const t=i.bind();t.args={value:"John Doe"};const l=i.bind();l.args={disabled:!0};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`({
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
\``,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
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
\``,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`({
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
\``,...l.parameters?.docs?.source}}};const M=["Default","Label","Placeholder","Value","Disabled"];export{e as Default,l as Disabled,a as Label,n as Placeholder,t as Value,M as __namedExportsOrder,K as default};
