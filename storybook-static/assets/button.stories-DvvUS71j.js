import{x as v}from"./lit-element-SFUTxaLj.js";import{r as c}from"./registerWebComp-C8LEvlHW.js";import{o as W}from"./if-defined-BbYDxsAN.js";import{n as $,i as m,x as f,a as h,r as g,b as V}from"./iconBase-D6R8-dG5.js";import{P as B}from"./button-BoLlYXrc.js";$("pi-icon-base",g);class R extends m{static get properties(){return{pathData:{type:String}}}constructor(){super(),this.pathData="M12 5.177l8.631 15.823h-17.262l8.631-15.823zm0-4.177l-12 22h24l-12-22zm-1 9h2v6h-2v-6zm1 9.75c-.689 0-1.25-.56-1.25-1.25s.561-1.25 1.25-1.25 1.25.56 1.25 1.25-.561 1.25-1.25 1.25z"}render(){return f`
            <pi-icon-base 
            pathData=${this.pathData}
            ></pi-icon-base>
        `}static styles=[h`
            
        `]}$("pi-icon-base",g);class _ extends m{static get properties(){return{pathData:{type:String}}}constructor(){super(),this.pathData="M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"}render(){return f`
            <pi-icon-base 
            pathData=${this.pathData}
            ></pi-icon-base>
        `}static styles=[h`
            
        `]}$("pi-icon-base",g);class M extends m{static get properties(){return{pathData:{type:String}}}constructor(){super(),this.pathData="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.033 16.01c.564-1.789 1.632-3.932 1.821-4.474.273-.787-.211-1.136-1.74.209l-.34-.64c1.744-1.897 5.335-2.326 4.113.613-.763 1.835-1.309 3.074-1.621 4.03-.455 1.393.694.828 1.819-.211.153.25.203.331.356.619-2.498 2.378-5.271 2.588-4.408-.146zm4.742-8.169c-.532.453-1.32.443-1.761-.022-.441-.465-.367-1.208.164-1.661.532-.453 1.32-.442 1.761.022.439.466.367 1.209-.164 1.661z"}render(){return f`
            <pi-icon-base 
            pathData=${this.pathData}
            ></pi-icon-base>
        `}static styles=[h`
            
        `]}c("pi-icon-handler",V);c("pi-button",B);c("pi-icon-alert-triangle-light",R);c("pi-icon-gear-solid",_);c("pi-icon-info-filled",M);const I={title:"Components/Button",component:"pi-button",tags:["autodocs"],argTypes:{slotContent:{control:"text",name:"button text",description:"Text displayed on the button",table:{type:{summary:"string"},defaultValue:{summary:"none"}}},variant:{control:"select",options:["","text","outlined","iconOnly"],description:"Main display variations",table:{type:{summary:"string"},defaultValue:{summary:"none"}}},severity:{control:"select",options:["","primary","secondary","success","info","warn","help","danger"],description:"Colorized versions for various scenarios",table:{type:{summary:"string"},defaultValue:{summary:"none"}}},raised:{control:"boolean",description:'Adds a shadow to "elevate" the button',table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},rounded:{control:"boolean",description:"Rounds the corners of the button",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},squared:{control:"boolean",description:"Squares the corners of the button",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},badge:{control:{type:"number",min:0,max:10,step:1},description:"Adds a number to the button representing a count",table:{type:{summary:"number"},defaultValue:{summary:"none"}}},icon:{control:"select",options:["","alert-triangle-light","gear-solid","info-filled"],description:"Adds a pi icon to the button",table:{type:{summary:"string"},defaultValue:{summary:"none"}}},disabled:{control:"boolean",description:"Disables click and hover events",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},fullWidth:{control:"boolean",description:"Makes the button as wide as its container",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},n=({slotContent:p,variant:q,severity:D,raised:C,rounded:S,squared:x,badge:y,icon:b,disabled:z,fullWidth:O})=>v`
    <pi-button 
    variant="${q}" 
    severity="${D}" 
    ?raised=${C}
    ?rounded=${S}
    ?squared=${x}
    ?disabled=${z}
    ?fullWidth=${O}
    badge=${W(y>0?y:void 0)}
    icon=${W(b!=""?b:void 0)}
    >
        ${p}

        ${b?v`
            <pi-icon-handler icon="${b}" slot="icon"></pi-icon-handler>
        `:null}
    </pi-button>
`,e=n.bind();e.args={slotContent:"Button"};const t=n.bind();t.args={slotContent:"Button",fullWidth:!0};const i=n.bind();i.args={slotContent:"Severity",severity:"primary"};const a=n.bind();a.args={slotContent:"Rounded",rounded:!0};const o=n.bind();o.args={slotContent:"Squared",squared:!0};const d=n.bind();d.args={slotContent:"Outlined",variant:"outlined"};const r=n.bind();r.args={slotContent:"Raised",raised:!0};const s=n.bind();s.args={slotContent:"Badge",badge:2};const l=n.bind();l.args={slotContent:"With Icon",icon:"gear-solid"};const u=n.bind();u.args={slotContent:"",variant:"iconOnly",icon:"gear-solid"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`({
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
    >
        \${slotContent}

        \${icon ? html\`
            <pi-icon-handler icon="\${icon}" slot="icon"></pi-icon-handler>
        \` : null}
    </pi-button>
\``,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
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
    >
        \${slotContent}

        \${icon ? html\`
            <pi-icon-handler icon="\${icon}" slot="icon"></pi-icon-handler>
        \` : null}
    </pi-button>
\``,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`({
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
    >
        \${slotContent}

        \${icon ? html\`
            <pi-icon-handler icon="\${icon}" slot="icon"></pi-icon-handler>
        \` : null}
    </pi-button>
\``,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({
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
    >
        \${slotContent}

        \${icon ? html\`
            <pi-icon-handler icon="\${icon}" slot="icon"></pi-icon-handler>
        \` : null}
    </pi-button>
\``,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({
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
    >
        \${slotContent}

        \${icon ? html\`
            <pi-icon-handler icon="\${icon}" slot="icon"></pi-icon-handler>
        \` : null}
    </pi-button>
\``,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`({
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
    >
        \${slotContent}

        \${icon ? html\`
            <pi-icon-handler icon="\${icon}" slot="icon"></pi-icon-handler>
        \` : null}
    </pi-button>
\``,...d.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`({
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
    >
        \${slotContent}

        \${icon ? html\`
            <pi-icon-handler icon="\${icon}" slot="icon"></pi-icon-handler>
        \` : null}
    </pi-button>
\``,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`({
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
    >
        \${slotContent}

        \${icon ? html\`
            <pi-icon-handler icon="\${icon}" slot="icon"></pi-icon-handler>
        \` : null}
    </pi-button>
\``,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`({
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
    >
        \${slotContent}

        \${icon ? html\`
            <pi-icon-handler icon="\${icon}" slot="icon"></pi-icon-handler>
        \` : null}
    </pi-button>
\``,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`({
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
    >
        \${slotContent}

        \${icon ? html\`
            <pi-icon-handler icon="\${icon}" slot="icon"></pi-icon-handler>
        \` : null}
    </pi-button>
\``,...u.parameters?.docs?.source}}};const P=["Default","FullWidth","Severity","Rounded","Squared","Outlined","Raised","Badge","WithIcon","IconOnly"],F=Object.freeze(Object.defineProperty({__proto__:null,Badge:s,Default:e,FullWidth:t,IconOnly:u,Outlined:d,Raised:r,Rounded:a,Severity:i,Squared:o,WithIcon:l,__namedExportsOrder:P,default:I},Symbol.toStringTag,{value:"Module"}));export{F as P};
