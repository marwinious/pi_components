import{x as y}from"./lit-element-CIbSzfXw.js";import{a as $}from"./chunk-D5ZWXAHU-BihnyLEY.js";import{o as e}from"./if-defined-jbakrIYG.js";import"./iconUserRoundedLight-6uJswbzO.js";import"./selectInput-DUjMpMCX.js";import"./v4-CtRu48qb.js";import"./defaultCss-CkMoNE8s.js";import"./label-dcaqkyBl.js";const f=[{name:"Alice",age:30,country:"USA",income:"$100,000",rawIncome:"100000"},{name:"Bob",age:25,country:"UK",income:"$50,000",rawIncome:"50000"},{name:"Charlie",age:35,country:"Canada",income:"$200,000",rawIncome:"200000"},{name:"David",age:32,country:"Spain",income:"$70,000",rawIncome:"70000"},{name:"Edward",age:27,country:"New Zealand",income:"$150,000",rawIncome:"150000"}],v={title:"Components/Inputs/Select",component:"pi-select-input",tags:["autodocs"],argTypes:{label:{control:"text",name:"label (optional)",description:"Label for the field",table:{type:{summary:"string"},defaultValue:{summary:""}}},options:{control:"array",name:"options",description:"Data array to populate options",table:{type:{summary:"array"},defaultValue:{summary:""}}},labelKey:{control:"text",name:"labelKey",description:"Key from objects in options array for select label",table:{type:{summary:"string"},defaultValue:{summary:""}}},valueKey:{control:"text",name:"valueKey",description:"Key from objects in options array for value of selected item",table:{type:{summary:"string"},defaultValue:{summary:""}}},defaultText:{control:"text",name:"defaultText",description:"Placeholder text for no selected items in select box",table:{type:{summary:"string"},defaultValue:{summary:""}}},selectedObject:{control:"object",name:"selectedObject",description:"Object from options array to auto-select from select",table:{type:{summary:"string"},defaultValue:{summary:""}}},disabled:{control:"boolean",description:"Disables field",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}},args:{label:"",options:f,disabled:!1,selectedObject:"",labelKey:"country",valueKey:"country"}},i=({label:o,options:b,labelKey:s,valueKey:c,defaultText:r,selectedObject:u,disabled:p})=>y`
    <pi-select-input
    name="piSelect"
    .options="${b}"
    label=${e(o!=""?o:void 0)}
    labelKey=${e(s!=""?s:void 0)}
    valueKey=${e(c!=""?c:void 0)}
    defaultText=${e(r!=""?r:void 0)}
    .selectedObject=${e(u!=""?u:void 0)}
    ?disabled=${p}
    @change=${m=>$("Selection changed")(m.detail)}
    ></pi-select-input>
`,n=i.bind();n.args={};const t=i.bind();t.args={label:"Country"};const a=i.bind();a.args={label:"Country",defaultText:"Choose a country"};const l=i.bind();l.args={label:"Country",defaultText:"Choose a country",selectedObject:f[2]};const d=i.bind();d.args={label:"Country",defaultText:"Choose a country",disabled:!0};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`({
  label,
  options,
  labelKey,
  valueKey,
  defaultText,
  selectedObject,
  disabled
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
    @change=\${e => action('Selection changed')(e.detail)}
    ></pi-select-input>
\``,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
  label,
  options,
  labelKey,
  valueKey,
  defaultText,
  selectedObject,
  disabled
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
    @change=\${e => action('Selection changed')(e.detail)}
    ></pi-select-input>
\``,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({
  label,
  options,
  labelKey,
  valueKey,
  defaultText,
  selectedObject,
  disabled
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
    @change=\${e => action('Selection changed')(e.detail)}
    ></pi-select-input>
\``,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`({
  label,
  options,
  labelKey,
  valueKey,
  defaultText,
  selectedObject,
  disabled
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
    @change=\${e => action('Selection changed')(e.detail)}
    ></pi-select-input>
\``,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`({
  label,
  options,
  labelKey,
  valueKey,
  defaultText,
  selectedObject,
  disabled
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
    @change=\${e => action('Selection changed')(e.detail)}
    ></pi-select-input>
\``,...d.parameters?.docs?.source}}};const S=["Default","Label","Placeholder","PreSelected","Disabled"];export{n as Default,d as Disabled,t as Label,a as Placeholder,l as PreSelected,S as __namedExportsOrder,v as default};
