import{x as $}from"./lit-element-qJpPW6A9.js";import{a as D}from"./index-Br0BFi8U.js";import{o as e}from"./if-defined-CTt8SaA8.js";import"./iconMagnifyingGlass-_Z3B_Qwa.js";import"./iconHandler-BlAUk5Qy.js";import"./selectInput-CNEGNpk2.js";import"./v4-CtRu48qb.js";import"./directive-CJw_OlP2.js";import"./defaultCss-aEcf2KJM.js";import"./label-Blmss6rD.js";const f=[{name:"Alice",age:30,country:"USA",income:"$100,000",rawIncome:"100000"},{name:"Bob",age:25,country:"UK",income:"$50,000",rawIncome:"50000"},{name:"Charlie",age:35,country:"Canada",income:"$200,000",rawIncome:"200000"},{name:"David",age:32,country:"Spain",income:"$70,000",rawIncome:"70000"},{name:"Edward",age:27,country:"New Zealand",income:"$150,000",rawIncome:"150000"}],V={title:"Components/Inputs/Select",component:"pi-select-input",tags:["autodocs"],argTypes:{label:{control:"text",name:"label (optional)",description:"Label for the field",table:{type:{summary:"string"},defaultValue:{summary:""}}},options:{control:"array",name:"options",description:"Data array to populate options",table:{type:{summary:"array"},defaultValue:{summary:""}}},labelKey:{control:"text",name:"labelKey",description:"Key from objects in options array for select label",table:{type:{summary:"string"},defaultValue:{summary:""}}},valueKey:{control:"text",name:"valueKey",description:"Key from objects in options array for value of selected item",table:{type:{summary:"string"},defaultValue:{summary:""}}},defaultText:{control:"text",name:"defaultText",description:"Placeholder text for no selected items in select box",table:{type:{summary:"string"},defaultValue:{summary:""}}},selectedObject:{control:"object",name:"selectedObject",description:"Object from options array to auto-select from select",table:{type:{summary:"string"},defaultValue:{summary:""}}},disabled:{control:"boolean",description:"Disables field",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},preventDefaultSelection:{control:"boolean",description:"Prevents initial default option from being re-selected",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}},args:{label:"",options:f,disabled:!1,selectedObject:"",labelKey:"country",valueKey:"country",preventDefaultSelection:!1}},d=({label:o,options:p,labelKey:c,valueKey:s,defaultText:r,selectedObject:u,disabled:b,preventDefaultSelection:m})=>$`
    <pi-select-input
    name="piSelect"
    .options="${p}"
    label=${e(o!=""?o:void 0)}
    labelKey=${e(c!=""?c:void 0)}
    valueKey=${e(s!=""?s:void 0)}
    defaultText=${e(r!=""?r:void 0)}
    .selectedObject=${e(u!=""?u:void 0)}
    ?disabled=${b}
    ?preventDefaultSelection=${m}
    @change=${y=>D("Selection changed")(y.detail)}
    ></pi-select-input>
`,n=d.bind();n.args={};const t=d.bind();t.args={label:"Country"};const l=d.bind();l.args={label:"Country",defaultText:"Choose a country"};const a=d.bind();a.args={label:"Country",defaultText:"Choose a country",selectedObject:f[2]};const i=d.bind();i.args={label:"Country",defaultText:"Choose a country",disabled:!0};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`({
  label,
  options,
  labelKey,
  valueKey,
  defaultText,
  selectedObject,
  disabled,
  preventDefaultSelection
}) => html\`
    <pi-select-input
    name="piSelect"
    .options="\${options}"
    label=\${ifDefined(label != '' ? label : undefined)}
    labelKey=\${ifDefined(labelKey != '' ? labelKey : undefined)}
    valueKey=\${ifDefined(valueKey != '' ? valueKey : undefined)}
    defaultText=\${ifDefined(defaultText != '' ? defaultText : undefined)}
    .selectedObject=\${ifDefined(selectedObject != '' ? selectedObject : undefined)}
    ?disabled=\${disabled}
    ?preventDefaultSelection=\${preventDefaultSelection}
    @change=\${e => action('Selection changed')(e.detail)}
    ></pi-select-input>
\``,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
  label,
  options,
  labelKey,
  valueKey,
  defaultText,
  selectedObject,
  disabled,
  preventDefaultSelection
}) => html\`
    <pi-select-input
    name="piSelect"
    .options="\${options}"
    label=\${ifDefined(label != '' ? label : undefined)}
    labelKey=\${ifDefined(labelKey != '' ? labelKey : undefined)}
    valueKey=\${ifDefined(valueKey != '' ? valueKey : undefined)}
    defaultText=\${ifDefined(defaultText != '' ? defaultText : undefined)}
    .selectedObject=\${ifDefined(selectedObject != '' ? selectedObject : undefined)}
    ?disabled=\${disabled}
    ?preventDefaultSelection=\${preventDefaultSelection}
    @change=\${e => action('Selection changed')(e.detail)}
    ></pi-select-input>
\``,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`({
  label,
  options,
  labelKey,
  valueKey,
  defaultText,
  selectedObject,
  disabled,
  preventDefaultSelection
}) => html\`
    <pi-select-input
    name="piSelect"
    .options="\${options}"
    label=\${ifDefined(label != '' ? label : undefined)}
    labelKey=\${ifDefined(labelKey != '' ? labelKey : undefined)}
    valueKey=\${ifDefined(valueKey != '' ? valueKey : undefined)}
    defaultText=\${ifDefined(defaultText != '' ? defaultText : undefined)}
    .selectedObject=\${ifDefined(selectedObject != '' ? selectedObject : undefined)}
    ?disabled=\${disabled}
    ?preventDefaultSelection=\${preventDefaultSelection}
    @change=\${e => action('Selection changed')(e.detail)}
    ></pi-select-input>
\``,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({
  label,
  options,
  labelKey,
  valueKey,
  defaultText,
  selectedObject,
  disabled,
  preventDefaultSelection
}) => html\`
    <pi-select-input
    name="piSelect"
    .options="\${options}"
    label=\${ifDefined(label != '' ? label : undefined)}
    labelKey=\${ifDefined(labelKey != '' ? labelKey : undefined)}
    valueKey=\${ifDefined(valueKey != '' ? valueKey : undefined)}
    defaultText=\${ifDefined(defaultText != '' ? defaultText : undefined)}
    .selectedObject=\${ifDefined(selectedObject != '' ? selectedObject : undefined)}
    ?disabled=\${disabled}
    ?preventDefaultSelection=\${preventDefaultSelection}
    @change=\${e => action('Selection changed')(e.detail)}
    ></pi-select-input>
\``,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`({
  label,
  options,
  labelKey,
  valueKey,
  defaultText,
  selectedObject,
  disabled,
  preventDefaultSelection
}) => html\`
    <pi-select-input
    name="piSelect"
    .options="\${options}"
    label=\${ifDefined(label != '' ? label : undefined)}
    labelKey=\${ifDefined(labelKey != '' ? labelKey : undefined)}
    valueKey=\${ifDefined(valueKey != '' ? valueKey : undefined)}
    defaultText=\${ifDefined(defaultText != '' ? defaultText : undefined)}
    .selectedObject=\${ifDefined(selectedObject != '' ? selectedObject : undefined)}
    ?disabled=\${disabled}
    ?preventDefaultSelection=\${preventDefaultSelection}
    @change=\${e => action('Selection changed')(e.detail)}
    ></pi-select-input>
\``,...i.parameters?.docs?.source}}};const w=["Default","Label","Placeholder","PreSelected","Disabled"];export{n as Default,i as Disabled,t as Label,l as Placeholder,a as PreSelected,w as __namedExportsOrder,V as default};
