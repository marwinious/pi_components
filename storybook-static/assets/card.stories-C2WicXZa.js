import{r as c,x as i,i as h}from"./lit-element-CIbSzfXw.js";import{o as d}from"./iconUserRoundedLight-D36zYM6r.js";import{d as m}from"./defaultCss-CkMoNE8s.js";import"./directive-CF8sV3Lr.js";class p extends c{static get properties(){return{headerHasContent:{type:Boolean},titleHasContent:{type:Boolean},subTitleHasContent:{type:Boolean},footerHasContent:{type:Boolean}}}constructor(){super(),this.headerHasContent=!1,this.titleHasContent=!1,this.subTitleHasContent=!1,this.footerHasContent=!1}firstUpdated(){this.determineSlotContents()}render(){return i`

            <!-- Conditionally show header if slot is not empty -->
            <div 
            class="header" 
            ?hidden=${!this.headerHasContent}
            >
                <slot name="header"></slot>
            </div>

            <!-- Conditionally show title if slot is not empty -->
            <div 
            class="title" 
            ?hidden=${!this.titleHasContent}
            >
                <slot name="title"></slot>
            </div>

            <!-- Conditionally show title if slot is not empty -->
            <div 
            class="sub_title" 
            ?hidden=${!this.subTitleHasContent}
            >
                <slot name="subTitle"></slot>
            </div>

            <!-- Render default content slot -->
            <div class="content">
                <slot></slot>
            </div>

            <!-- Conditionally show footer if slot is not empty -->
            <div 
            class="footer"
            ?hidden=${!this.footerHasContent}
            >
                <slot name="footer"></slot>
            </div>

        `}determineSlotContents(){this.headerHasContent=this.shadowRoot?.querySelector('slot[name="header"]')?.assignedNodes()?.length>0,this.titleHasContent=this.shadowRoot?.querySelector('slot[name="title"]')?.assignedNodes()?.length>0,this.subTitleHasContent=this.shadowRoot?.querySelector('slot[name="subTitle"]')?.assignedNodes()?.length>0,this.footerHasContent=this.shadowRoot?.querySelector('slot[name="footer"]')?.assignedNodes()?.length>0}static styles=[m,h`
            :host {
                display: block;
                max-width: 100%;
                width: 100%;
                min-width: 0;
                line-height: var(--pi-card-line-height, 1.4rem);
                border: var(--pi-card-border, solid 1px #ccc);
                border-radius: var(--pi-card-border-radius, 4px);
                box-shadow: var(--pi-card-box-shadow, 1px 1px 1px #ddd);
                overflow: hidden;
                margin: var(--pi-card-margin, 0.5rem 0);
            }

            slot {
                display: block;
            }

            .header {
                width: 100%;
                display: block;
                box-sizing: border-box;
                overflow: hidden;
            }

            .header ::slotted(img) {
                width: 100%;
                max-width: 100%;
                height: auto;
                display: block;
            }

            .title {
                padding: var(--pi-card-title-padding, 1rem 1rem 0rem 1rem);
                font-weight: var(--pi-card-title-font-weight, bold);
                color: var(--pi-card-title-color, #555);
                font-size: var(--pi-card-title-font-size, 1.2rem);
            }

            .sub_title {
                padding: var(--pi-card-sub-title-padding, 0.25rem 1rem 0rem 1rem);
                color: var(--pi-card-sub-title-color, #777);
            }

            .content {
                padding: var(--pi-card-content-padding, 1rem);
            }

            .footer {
                width: 100%;
                display: block;
                box-sizing: border-box;
                overflow: hidden;
                /* padding: var(--pi-card-footer-padding, 0.5rem 1rem 1rem 1rem); */
            }
        `]}customElements.define("pi-card",p);const u=`
<div slot="header" style="background-color: #eee;">
    This is the header area of a card. By default, it has no padding and is intended to be full filled with a background color or image. Text will work too of course. If using an image without text, add the <code>slot="header"</code> attritbute directly to the img tag for better control. The background-color on this demo was added as an example and is not there by default.
</div>
`,C={title:"Components/Card",component:"pi-card",tags:["autodocs"],argTypes:{slotContent:{control:"text",name:"content slot",description:"Main content area",defaultValue:"The contents of your card will show here via the default slot.",table:{type:{summary:"string"},defaultValue:{summary:""}}},headerSlot:{control:"text",name:"header slot (optional)",description:"Unstyled header slot",table:{type:{summary:"string"},defaultValue:{summary:""}}},titleSlot:{control:"text",name:"title slot (optional)",description:"Title for card",table:{type:{summary:"string"},defaultValue:{summary:""}}},subTitleSlot:{control:"text",name:"sub-title slot (optional)",description:"Sub-Title for card",table:{type:{summary:"string"},defaultValue:{summary:""}}},footerSlot:{control:"text",name:"footer slot (optional)",description:"Unstyled footer slot",table:{type:{summary:"string"},defaultValue:{summary:""}}}},args:{slotContent:"The contents of your card will show here via the default slot."}},l=({slotContent:r,headerSlot:a,footerSlot:n})=>i`
    <pi-card>

        <div
        slot="header"
        >${d(a)}</div>

        <slot>${r}</slot>

        <div
        slot="footer"
        >${d(n)}</div>

    </pi-card>
`,f=({slotContent:r,titleSlot:a,subTitleSlot:n})=>i`
    <pi-card>

        <div
        slot="title"
        >${a}</div>

        <div
        slot="subTitle"
        >${n}</div>

        <slot>${r}</slot>


    </pi-card>
`,t=l.bind();t.args={};const e=l.bind();e.args={headerSlot:u};const o=f.bind();o.args={titleSlot:"Title for my card",subTitleSlot:"A nice subtitle for context"};const s=l.bind();s.args={footerSlot:"A footer with similar features as the header."};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
  slotContent,
  headerSlot,
  footerSlot
}) => html\`
    <pi-card>

        <div
        slot="header"
        >\${unsafeHTML(headerSlot)}</div>

        <slot>\${slotContent}</slot>

        <div
        slot="footer"
        >\${unsafeHTML(footerSlot)}</div>

    </pi-card>
\``,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`({
  slotContent,
  headerSlot,
  footerSlot
}) => html\`
    <pi-card>

        <div
        slot="header"
        >\${unsafeHTML(headerSlot)}</div>

        <slot>\${slotContent}</slot>

        <div
        slot="footer"
        >\${unsafeHTML(footerSlot)}</div>

    </pi-card>
\``,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({
  slotContent,
  titleSlot,
  subTitleSlot
}) => html\`
    <pi-card>

        <div
        slot="title"
        >\${titleSlot}</div>

        <div
        slot="subTitle"
        >\${subTitleSlot}</div>

        <slot>\${slotContent}</slot>


    </pi-card>
\``,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`({
  slotContent,
  headerSlot,
  footerSlot
}) => html\`
    <pi-card>

        <div
        slot="header"
        >\${unsafeHTML(headerSlot)}</div>

        <slot>\${slotContent}</slot>

        <div
        slot="footer"
        >\${unsafeHTML(footerSlot)}</div>

    </pi-card>
\``,...s.parameters?.docs?.source}}};const S=["Default","Header","Titles","Footer"];export{t as Default,s as Footer,e as Header,o as Titles,S as __namedExportsOrder,C as default};
