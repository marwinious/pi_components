import{a,x as s,r as l,i as o}from"./lit-element-SFUTxaLj.js";import{r as t}from"./registerWebComp-C8LEvlHW.js";import{d as n}from"./defaultCss-fIp2nCNg.js";import{c as p}from"./common-Bdu-62Ky.js";class m extends a{static get properties(){return{label:{type:String},removable:{type:Boolean},isVisible:{type:Boolean}}}constructor(){super(),this.label="",this.removable=!1,this.isVisible=!0}render(){return s`
            <!-- <div class="icon"></div> -->
            <!-- <div class="image"></div> -->
            <div class="label">${this.label}</div>

            ${this.removable?s`
                <div class="remove_icon" @click=${this.closeChip}>X</div>
            `:null}
        `}closeChip(){this.isVisible=!1,this.toggleAttribute("hidden",!this.isVisible)}static styles=[n,l(p),o`
            :host {
                display: inline-flex;
                background: #eee;
                border-radius: 16px;
                padding: 0.5rem 0.75rem;
                align-items: center;
                gap: 0.5rem;
            }

            :host([hidden]) {
                display: none;
            }

            .label {
                color: #444;
                font-size: 14px;
            }

            .remove_icon {
                border: solid 1px #444;
                border-radius: 50%;
                font-size: 8px;
                padding: 0.15rem 0.25rem;
                cursor: pointer;
                user-select: none;
            }
        `]}t("pi-chip",m);const v={title:"Components/Chips",component:"pi-chip",tags:["autodocs"],argTypes:{label:{control:"text",name:"label",description:"Label for chip",table:{type:{summary:"string"},defaultValue:{summary:""}}},removable:{control:"boolean",name:"Removable",description:"Allows chip to be removed",table:{type:{summary:"string"},defaultValue:{summary:""}}}},args:{label:"Chip label",removable:!1}},c=({label:i,removable:r})=>s`
    <pi-chip 
    label=${i}
    ?removable=${r}
    ></pi-chip>
`,e=c.bind();e.args={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`({
  label,
  removable
}) => html\`
    <pi-chip 
    label=\${label}
    ?removable=\${removable}
    ></pi-chip>
\``,...e.parameters?.docs?.source}}};const g=["Default"];export{e as Default,g as __namedExportsOrder,v as default};
