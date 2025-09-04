import{x as m}from"./lit-element-55XysmYc.js";import"./notifications-BzwIlMOM.js";import"./defaultCss-Dh8mF8Ic.js";import"./directive-CJw_OlP2.js";const v={title:"Components/Notifications",component:"pi-notifications",tags:["autodocs"],argTypes:{title:{control:"text",name:"Title",description:"Title for notification",table:{type:{summary:"string"},defaultValue:{summary:""}}},message:{control:"text",name:"Message",description:"Message text of notification",table:{type:{summary:"string"},defaultValue:{summary:""}}},severity:{control:"select",options:["","primary","secondary","success","info","warn","help","danger"],description:"Applies icon/colors of severity to notification",table:{type:{summary:"string"},defaultValue:{summary:"none"}}},position:{control:"select",options:["","top-left","top-right","bottom-left","bottom-right","top","bottom"],description:"Applies icon/colors of severity to notification",table:{type:{summary:"string"},defaultValue:{summary:"top-right"}}},offset:{control:{type:"number",min:0,max:1e3,step:1},description:"Top position offset of notification",table:{type:{summary:"number"},defaultValue:{summary:"0"}}},icon:{control:"text",name:"Icon",description:"Specific icon for notification (overrides severity)",table:{type:{summary:"string"},defaultValue:{summary:""}}},iconColor:{control:"text",name:"Icon color",description:"Specific icon color for notification (overrides severity)",table:{type:{summary:"string"},defaultValue:{summary:""}}},closeIcon:{control:"text",name:"Close Icon",description:"Specific close icon for notification (overrides severity)",table:{type:{summary:"string"},defaultValue:{summary:""}}},autoCloseDuration:{control:"number",description:"Duration notification is visible in milliseconds (0 = until closed)",table:{type:{summary:"number"},defaultValue:{summary:"5000"}}}},args:{title:"Title text",message:"Message text",severity:"",position:"top-right",offset:0,icon:"",iconColor:"",closeIcon:"",autoCloseDuration:5e3}},u=(o,e,i,n,s,r,a,c,l)=>{document.querySelector("pi-notifications").create({title:o,message:e,severity:i,position:n,offset:s,icon:r,iconColor:a,closeIcon:c,autoCloseDuration:l})},p=({title:o,message:e,severity:i,position:n,offset:s,icon:r,iconColor:a,closeIcon:c,autoCloseDuration:l})=>m`
    <pi-notifications></pi-notifications>

    <button
    type="button"
    @click=${()=>u(o,e,i,n,s,r,a,c,l)}
    >Trigger Alert</button>
`,t=p.bind();t.args={};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
  title,
  message,
  severity,
  position,
  offset,
  icon,
  iconColor,
  closeIcon,
  autoCloseDuration
}) => html\`
    <pi-notifications></pi-notifications>

    <button
    type="button"
    @click=\${() => triggerAlert(title, message, severity, position, offset, icon, iconColor, closeIcon, autoCloseDuration)}
    >Trigger Alert</button>
\``,...t.parameters?.docs?.source}}};const x=["Default"];export{t as Default,x as __namedExportsOrder,v as default};
