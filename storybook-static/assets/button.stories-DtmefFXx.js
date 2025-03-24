import{x as q}from"./lit-element-qJpPW6A9.js";import{o as f}from"./if-defined-CTt8SaA8.js";import"./iconWebGlobeLight-0llzJadL.js";import"./iconHandler-sfKwfwWR.js";import"./button-j9u3CyV6.js";const C={title:"Components/Button",component:"pi-button",tags:["autodocs"],argTypes:{slotContent:{control:"text",name:"button text",description:"Text displayed on the button",table:{type:{summary:"string"},defaultValue:{summary:"none"}}},variant:{control:"select",options:["","text","outlined","iconOnly"],description:"Main display variations",table:{type:{summary:"string"},defaultValue:{summary:"none"}}},severity:{control:"select",options:["","primary","secondary","success","info","warn","help","danger"],description:"Colorized versions for various scenarios",table:{type:{summary:"string"},defaultValue:{summary:"none"}}},raised:{control:"boolean",description:'Adds a shadow to "elevate" the button',table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},rounded:{control:"boolean",description:"Rounds the corners of the button",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},squared:{control:"boolean",description:"Squares the corners of the button",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},badge:{control:{type:"number",min:0,max:10,step:1},description:"Adds a number to the button representing a count",table:{type:{summary:"number"},defaultValue:{summary:"none"}}},icon:{control:"select",options:["","alert-triangle-light","gear-solid","info-filled"],description:"Adds a pi icon to the button",table:{type:{summary:"string"},defaultValue:{summary:"none"}}},disabled:{control:"boolean",description:"Disables click and hover events",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},fullWidth:{control:"boolean",description:"Makes the button as wide as its container",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},e=({slotContent:m,variant:$,severity:p,raised:g,rounded:y,squared:v,badge:c,icon:b,disabled:h,fullWidth:W})=>q`
    <pi-button 
    variant="${$}" 
    severity="${p}" 
    ?raised=${g}
    ?rounded=${y}
    ?squared=${v}
    ?disabled=${h}
    ?fullWidth=${W}
    badge=${f(c>0?c:void 0)}
    icon=${f(b!=""?b:void 0)}
    >${m}</pi-button>
`,n=e.bind();n.args={slotContent:"Button"};const t=e.bind();t.args={slotContent:"Button",fullWidth:!0};const d=e.bind();d.args={slotContent:"Severity",severity:"primary"};const a=e.bind();a.args={slotContent:"Rounded",rounded:!0};const i=e.bind();i.args={slotContent:"Squared",squared:!0};const r=e.bind();r.args={slotContent:"Outlined",variant:"outlined"};const o=e.bind();o.args={slotContent:"Raised",raised:!0};const s=e.bind();s.args={slotContent:"Badge",badge:2};const u=e.bind();u.args={slotContent:"With Icon",icon:"gear-solid"};const l=e.bind();l.args={slotContent:"",variant:"iconOnly",icon:"gear-solid"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`({
  slotContent,
  variant,
  severity,
  raised,
  rounded,
  squared,
  badge,
  icon,
  disabled,
  fullWidth
}) => html\`
    <pi-button 
    variant="\${variant}" 
    severity="\${severity}" 
    ?raised=\${raised}
    ?rounded=\${rounded}
    ?squared=\${squared}
    ?disabled=\${disabled}
    ?fullWidth=\${fullWidth}
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
  disabled,
  fullWidth
}) => html\`
    <pi-button 
    variant="\${variant}" 
    severity="\${severity}" 
    ?raised=\${raised}
    ?rounded=\${rounded}
    ?squared=\${squared}
    ?disabled=\${disabled}
    ?fullWidth=\${fullWidth}
    badge=\${ifDefined(badge > 0 ? badge : undefined)}
    icon=\${ifDefined(icon != '' ? icon : undefined)}
    >\${slotContent}</pi-button>
\``,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`({
  slotContent,
  variant,
  severity,
  raised,
  rounded,
  squared,
  badge,
  icon,
  disabled,
  fullWidth
}) => html\`
    <pi-button 
    variant="\${variant}" 
    severity="\${severity}" 
    ?raised=\${raised}
    ?rounded=\${rounded}
    ?squared=\${squared}
    ?disabled=\${disabled}
    ?fullWidth=\${fullWidth}
    badge=\${ifDefined(badge > 0 ? badge : undefined)}
    icon=\${ifDefined(icon != '' ? icon : undefined)}
    >\${slotContent}</pi-button>
\``,...d.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({
  slotContent,
  variant,
  severity,
  raised,
  rounded,
  squared,
  badge,
  icon,
  disabled,
  fullWidth
}) => html\`
    <pi-button 
    variant="\${variant}" 
    severity="\${severity}" 
    ?raised=\${raised}
    ?rounded=\${rounded}
    ?squared=\${squared}
    ?disabled=\${disabled}
    ?fullWidth=\${fullWidth}
    badge=\${ifDefined(badge > 0 ? badge : undefined)}
    icon=\${ifDefined(icon != '' ? icon : undefined)}
    >\${slotContent}</pi-button>
\``,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`({
  slotContent,
  variant,
  severity,
  raised,
  rounded,
  squared,
  badge,
  icon,
  disabled,
  fullWidth
}) => html\`
    <pi-button 
    variant="\${variant}" 
    severity="\${severity}" 
    ?raised=\${raised}
    ?rounded=\${rounded}
    ?squared=\${squared}
    ?disabled=\${disabled}
    ?fullWidth=\${fullWidth}
    badge=\${ifDefined(badge > 0 ? badge : undefined)}
    icon=\${ifDefined(icon != '' ? icon : undefined)}
    >\${slotContent}</pi-button>
\``,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`({
  slotContent,
  variant,
  severity,
  raised,
  rounded,
  squared,
  badge,
  icon,
  disabled,
  fullWidth
}) => html\`
    <pi-button 
    variant="\${variant}" 
    severity="\${severity}" 
    ?raised=\${raised}
    ?rounded=\${rounded}
    ?squared=\${squared}
    ?disabled=\${disabled}
    ?fullWidth=\${fullWidth}
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
  disabled,
  fullWidth
}) => html\`
    <pi-button 
    variant="\${variant}" 
    severity="\${severity}" 
    ?raised=\${raised}
    ?rounded=\${rounded}
    ?squared=\${squared}
    ?disabled=\${disabled}
    ?fullWidth=\${fullWidth}
    badge=\${ifDefined(badge > 0 ? badge : undefined)}
    icon=\${ifDefined(icon != '' ? icon : undefined)}
    >\${slotContent}</pi-button>
\``,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`({
  slotContent,
  variant,
  severity,
  raised,
  rounded,
  squared,
  badge,
  icon,
  disabled,
  fullWidth
}) => html\`
    <pi-button 
    variant="\${variant}" 
    severity="\${severity}" 
    ?raised=\${raised}
    ?rounded=\${rounded}
    ?squared=\${squared}
    ?disabled=\${disabled}
    ?fullWidth=\${fullWidth}
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
  disabled,
  fullWidth
}) => html\`
    <pi-button 
    variant="\${variant}" 
    severity="\${severity}" 
    ?raised=\${raised}
    ?rounded=\${rounded}
    ?squared=\${squared}
    ?disabled=\${disabled}
    ?fullWidth=\${fullWidth}
    badge=\${ifDefined(badge > 0 ? badge : undefined)}
    icon=\${ifDefined(icon != '' ? icon : undefined)}
    >\${slotContent}</pi-button>
\``,...u.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`({
  slotContent,
  variant,
  severity,
  raised,
  rounded,
  squared,
  badge,
  icon,
  disabled,
  fullWidth
}) => html\`
    <pi-button 
    variant="\${variant}" 
    severity="\${severity}" 
    ?raised=\${raised}
    ?rounded=\${rounded}
    ?squared=\${squared}
    ?disabled=\${disabled}
    ?fullWidth=\${fullWidth}
    badge=\${ifDefined(badge > 0 ? badge : undefined)}
    icon=\${ifDefined(icon != '' ? icon : undefined)}
    >\${slotContent}</pi-button>
\``,...l.parameters?.docs?.source}}};const D=["Default","FullWidth","Severity","Rounded","Squared","Outlined","Raised","Badge","WithIcon","IconOnly"],R=Object.freeze(Object.defineProperty({__proto__:null,Badge:s,Default:n,FullWidth:t,IconOnly:l,Outlined:r,Raised:o,Rounded:a,Severity:d,Squared:i,WithIcon:u,__namedExportsOrder:D,default:C},Symbol.toStringTag,{value:"Module"}));export{R as P};
