import{x as q}from"./lit-element-CIbSzfXw.js";import{o as b}from"./if-defined-jbakrIYG.js";import"./iconUserRoundedLight-6uJswbzO.js";import"./button-Dm2HOfH1.js";const C={title:"Components/Button",component:"pi-button",tags:["autodocs"],argTypes:{slotContent:{control:"text",name:"button text",description:"Text displayed on the button",table:{type:{summary:"string"},defaultValue:{summary:"none"}}},variant:{control:"select",options:["","text","outlined","iconOnly"],description:"Main display variations",table:{type:{summary:"string"},defaultValue:{summary:"none"}}},severity:{control:"select",options:["","primary","secondary","success","info","warn","help","danger"],description:"Colorized versions for various scenarios",table:{type:{summary:"string"},defaultValue:{summary:"none"}}},raised:{control:"boolean",description:'Adds a shadow to "elevate" the button',table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},rounded:{control:"boolean",description:"Rounds the corners of the button",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},squared:{control:"boolean",description:"Squares the corners of the button",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},badge:{control:{type:"number",min:0,max:10,step:1},description:"Adds a number to the button representing a count",table:{type:{summary:"number"},defaultValue:{summary:"none"}}},icon:{control:"select",options:["","alert-triangle-light","gear-solid","info-filled"],description:"Adds a pi icon to the button",table:{type:{summary:"string"},defaultValue:{summary:"none"}}},disabled:{control:"boolean",description:"Disables click and hover events",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},e=({slotContent:m,variant:p,severity:$,raised:f,rounded:g,squared:y,badge:l,icon:c,disabled:v})=>q`
    <pi-button 
    variant="${p}" 
    severity="${$}" 
    ?raised=${f}
    ?rounded=${g}
    ?squared=${y}
    ?disabled=${v}
    badge=${b(l>0?l:void 0)}
    icon=${b(c!=""?c:void 0)}
    >${m}</pi-button>
`,n=e.bind();n.args={slotContent:"Button"};const t=e.bind();t.args={slotContent:"Severity",severity:"primary"};const a=e.bind();a.args={slotContent:"Rounded",rounded:!0};const d=e.bind();d.args={slotContent:"Squared",squared:!0};const r=e.bind();r.args={slotContent:"Outlined",variant:"outlined"};const o=e.bind();o.args={slotContent:"Raised",raised:!0};const i=e.bind();i.args={slotContent:"Badge",badge:2};const s=e.bind();s.args={slotContent:"With Icon",icon:"gear-solid"};const u=e.bind();u.args={slotContent:"",variant:"iconOnly",icon:"gear-solid"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`({
  slotContent,
  variant,
  severity,
  raised,
  rounded,
  squared,
  badge,
  icon,
  disabled
}) => html\`
    <pi-button 
    variant="\${variant}" 
    severity="\${severity}" 
    ?raised=\${raised}
    ?rounded=\${rounded}
    ?squared=\${squared}
    ?disabled=\${disabled}
    badge=\${ifDefined(badge > 0 ? badge : undefined)}
    icon=\${ifDefined(icon != '' ? icon : undefined)}
    >\${slotContent}</pi-button>
\``,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
  slotContent,
  variant,
  severity,
  raised,
  rounded,
  squared,
  badge,
  icon,
  disabled
}) => html\`
    <pi-button 
    variant="\${variant}" 
    severity="\${severity}" 
    ?raised=\${raised}
    ?rounded=\${rounded}
    ?squared=\${squared}
    ?disabled=\${disabled}
    badge=\${ifDefined(badge > 0 ? badge : undefined)}
    icon=\${ifDefined(icon != '' ? icon : undefined)}
    >\${slotContent}</pi-button>
\``,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({
  slotContent,
  variant,
  severity,
  raised,
  rounded,
  squared,
  badge,
  icon,
  disabled
}) => html\`
    <pi-button 
    variant="\${variant}" 
    severity="\${severity}" 
    ?raised=\${raised}
    ?rounded=\${rounded}
    ?squared=\${squared}
    ?disabled=\${disabled}
    badge=\${ifDefined(badge > 0 ? badge : undefined)}
    icon=\${ifDefined(icon != '' ? icon : undefined)}
    >\${slotContent}</pi-button>
\``,...a.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`({
  slotContent,
  variant,
  severity,
  raised,
  rounded,
  squared,
  badge,
  icon,
  disabled
}) => html\`
    <pi-button 
    variant="\${variant}" 
    severity="\${severity}" 
    ?raised=\${raised}
    ?rounded=\${rounded}
    ?squared=\${squared}
    ?disabled=\${disabled}
    badge=\${ifDefined(badge > 0 ? badge : undefined)}
    icon=\${ifDefined(icon != '' ? icon : undefined)}
    >\${slotContent}</pi-button>
\``,...d.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`({
  slotContent,
  variant,
  severity,
  raised,
  rounded,
  squared,
  badge,
  icon,
  disabled
}) => html\`
    <pi-button 
    variant="\${variant}" 
    severity="\${severity}" 
    ?raised=\${raised}
    ?rounded=\${rounded}
    ?squared=\${squared}
    ?disabled=\${disabled}
    badge=\${ifDefined(badge > 0 ? badge : undefined)}
    icon=\${ifDefined(icon != '' ? icon : undefined)}
    >\${slotContent}</pi-button>
\``,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({
  slotContent,
  variant,
  severity,
  raised,
  rounded,
  squared,
  badge,
  icon,
  disabled
}) => html\`
    <pi-button 
    variant="\${variant}" 
    severity="\${severity}" 
    ?raised=\${raised}
    ?rounded=\${rounded}
    ?squared=\${squared}
    ?disabled=\${disabled}
    badge=\${ifDefined(badge > 0 ? badge : undefined)}
    icon=\${ifDefined(icon != '' ? icon : undefined)}
    >\${slotContent}</pi-button>
\``,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`({
  slotContent,
  variant,
  severity,
  raised,
  rounded,
  squared,
  badge,
  icon,
  disabled
}) => html\`
    <pi-button 
    variant="\${variant}" 
    severity="\${severity}" 
    ?raised=\${raised}
    ?rounded=\${rounded}
    ?squared=\${squared}
    ?disabled=\${disabled}
    badge=\${ifDefined(badge > 0 ? badge : undefined)}
    icon=\${ifDefined(icon != '' ? icon : undefined)}
    >\${slotContent}</pi-button>
\``,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`({
  slotContent,
  variant,
  severity,
  raised,
  rounded,
  squared,
  badge,
  icon,
  disabled
}) => html\`
    <pi-button 
    variant="\${variant}" 
    severity="\${severity}" 
    ?raised=\${raised}
    ?rounded=\${rounded}
    ?squared=\${squared}
    ?disabled=\${disabled}
    badge=\${ifDefined(badge > 0 ? badge : undefined)}
    icon=\${ifDefined(icon != '' ? icon : undefined)}
    >\${slotContent}</pi-button>
\``,...s.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`({
  slotContent,
  variant,
  severity,
  raised,
  rounded,
  squared,
  badge,
  icon,
  disabled
}) => html\`
    <pi-button 
    variant="\${variant}" 
    severity="\${severity}" 
    ?raised=\${raised}
    ?rounded=\${rounded}
    ?squared=\${squared}
    ?disabled=\${disabled}
    badge=\${ifDefined(badge > 0 ? badge : undefined)}
    icon=\${ifDefined(icon != '' ? icon : undefined)}
    >\${slotContent}</pi-button>
\``,...u.parameters?.docs?.source}}};const h=["Default","Severity","Rounded","Squared","Outlined","Raised","Badge","WithIcon","IconOnly"],x=Object.freeze(Object.defineProperty({__proto__:null,Badge:i,Default:n,IconOnly:u,Outlined:r,Raised:o,Rounded:a,Severity:t,Squared:d,WithIcon:s,__namedExportsOrder:h,default:C},Symbol.toStringTag,{value:"Module"}));export{n as D,x as P,t as S};
