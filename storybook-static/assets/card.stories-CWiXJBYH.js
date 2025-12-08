import{a as h,x as d,i as u}from"./lit-element-SFUTxaLj.js";import{r as m}from"./registerWebComp-C8LEvlHW.js";import{o as c}from"./unsafe-html-BQ0NA8vO.js";import{d as p}from"./defaultCss-fIp2nCNg.js";import"./directive-CJw_OlP2.js";class f extends h{static get properties(){return{headerHasContent:{type:Boolean},titleHasContent:{type:Boolean},subTitleHasContent:{type:Boolean},footerHasContent:{type:Boolean}}}constructor(){super(),this.headerHasContent=!1,this.titleHasContent=!1,this.subTitleHasContent=!1,this.footerHasContent=!1}firstUpdated(){this.determineSlotContents()}render(){return d`

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

        `}determineSlotContents(){this.headerHasContent=this.shadowRoot?.querySelector('slot[name="header"]')?.assignedNodes()?.length>0,this.titleHasContent=this.shadowRoot?.querySelector('slot[name="title"]')?.assignedNodes()?.length>0,this.subTitleHasContent=this.shadowRoot?.querySelector('slot[name="subTitle"]')?.assignedNodes()?.length>0,this.footerHasContent=this.shadowRoot?.querySelector('slot[name="footer"]')?.assignedNodes()?.length>0}static styles=[p,u`
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
                background: var(--pi-card-background, #FFF);
            }

            :host([autoWidth]) {
                display: inline-block;
                width: auto;
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
                font-size: var(--pi-card-sub-title-font-size, 1rem);
            }

            .content {
                padding: 0.5rem var(--pi-card-content-padding, 1rem);
            }

            .footer {
                width: 100%;
                display: block;
                box-sizing: border-box;
                overflow: hidden;
                /* padding: var(--pi-card-footer-padding, 0.5rem 1rem 1rem 1rem); */
            }
        `]}m("pi-card",f);const b=`
<div slot="header" style="background-color: #eee;">
    This is the header area of a card. By default, it has no padding and is intended to be full filled with a background color or image. Text will work too of course. If using an image without text, add the <code>slot="header"</code> attritbute directly to the img tag for better control. The background-color on this demo was added as an example and is not there by default.
</div>
`,T={title:"Components/Card",component:"pi-card",tags:["autodocs"],argTypes:{slotContent:{control:"text",name:"content slot",description:"Main content area",defaultValue:"The contents of your card will show here via the default slot.",table:{type:{summary:"string"},defaultValue:{summary:""}}},autoWidth:{control:"boolean",name:"autoWidth (optional)",description:"Sizes the card to its content",table:{type:{summary:"string"},defaultValue:{summary:""}}},headerSlot:{control:"text",name:"header slot (optional)",description:"Unstyled header slot",table:{type:{summary:"string"},defaultValue:{summary:""}}},titleSlot:{control:"text",name:"title slot (optional)",description:"Title for card",table:{type:{summary:"string"},defaultValue:{summary:""}}},subTitleSlot:{control:"text",name:"sub-title slot (optional)",description:"Sub-Title for card",table:{type:{summary:"string"},defaultValue:{summary:""}}},footerSlot:{control:"text",name:"footer slot (optional)",description:"Unstyled footer slot",table:{type:{summary:"string"},defaultValue:{summary:""}}}},args:{slotContent:"The contents of your card will show here via the default slot.",autoWidth:!1}},l=({slotContent:n,headerSlot:s,footerSlot:r,autoWidth:i})=>d`
    <pi-card
    ?autoWidth=${i}
    >

        <div
        slot="header"
        >${c(s)}</div>

        <slot>${n}</slot>

        <div
        slot="footer"
        >${c(r)}</div>

    </pi-card>
`,g=({slotContent:n,titleSlot:s,subTitleSlot:r,autoWidth:i})=>d`
    <pi-card
    ?autoWidth=${i}
    >

        <div
        slot="title"
        >${s}</div>

        <div
        slot="subTitle"
        >${r}</div>

        <slot>${n}</slot>


    </pi-card>
`,t=l.bind();t.args={};const e=l.bind();e.args={headerSlot:b};const o=g.bind();o.args={titleSlot:"Title for my card",subTitleSlot:"A nice subtitle for context"};const a=l.bind();a.args={footerSlot:"A footer with similar features as the header."};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
  slotContent,
  headerSlot,
  footerSlot,
  autoWidth
}) => html\`
    <pi-card
    ?autoWidth=\${autoWidth}
    >

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
  footerSlot,
  autoWidth
}) => html\`
    <pi-card
    ?autoWidth=\${autoWidth}
    >

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
  subTitleSlot,
  autoWidth
}) => html\`
    <pi-card
    ?autoWidth=\${autoWidth}
    >

        <div
        slot="title"
        >\${titleSlot}</div>

        <div
        slot="subTitle"
        >\${subTitleSlot}</div>

        <slot>\${slotContent}</slot>


    </pi-card>
\``,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({
  slotContent,
  headerSlot,
  footerSlot,
  autoWidth
}) => html\`
    <pi-card
    ?autoWidth=\${autoWidth}
    >

        <div
        slot="header"
        >\${unsafeHTML(headerSlot)}</div>

        <slot>\${slotContent}</slot>

        <div
        slot="footer"
        >\${unsafeHTML(footerSlot)}</div>

    </pi-card>
\``,...a.parameters?.docs?.source}}};const $=["Default","Header","Titles","Footer"];export{t as Default,a as Footer,e as Header,o as Titles,$ as __namedExportsOrder,T as default};
