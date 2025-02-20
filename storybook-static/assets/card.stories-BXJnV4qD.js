import{x as u}from"./lit-element-qJpPW6A9.js";import{o as d}from"./iconUserRoundedLight-DAA4Ng5V.js";import"./card-1Ym2qmk8.js";import"./defaultCss-aEcf2KJM.js";const c=`
<div slot="header" style="background-color: #eee;">
    This is the header area of a card. By default, it has no padding and is intended to be full filled with a background color or image. Text will work too of course. If using an image without text, add the <code>slot="header"</code> attritbute directly to the img tag for better control. The background-color on this demo was added as an example and is not there by default.
</div>
`,v={title:"Components/Card",component:"pi-card",tags:["autodocs"],argTypes:{slotContent:{control:"text",name:"content slot",description:"Main content area",defaultValue:"The contents of your card will show here via the default slot.",table:{type:{summary:"string"},defaultValue:{summary:""}}},autoWidth:{control:"boolean",name:"autoWidth (optional)",description:"Sizes the card to its content",table:{type:{summary:"string"},defaultValue:{summary:""}}},headerSlot:{control:"text",name:"header slot (optional)",description:"Unstyled header slot",table:{type:{summary:"string"},defaultValue:{summary:""}}},titleSlot:{control:"text",name:"title slot (optional)",description:"Title for card",table:{type:{summary:"string"},defaultValue:{summary:""}}},subTitleSlot:{control:"text",name:"sub-title slot (optional)",description:"Sub-Title for card",table:{type:{summary:"string"},defaultValue:{summary:""}}},footerSlot:{control:"text",name:"footer slot (optional)",description:"Unstyled footer slot",table:{type:{summary:"string"},defaultValue:{summary:""}}}},args:{slotContent:"The contents of your card will show here via the default slot.",autoWidth:!1}},i=({slotContent:n,headerSlot:r,footerSlot:s,autoWidth:l})=>u`
    <pi-card
    ?autoWidth=${l}
    >

        <div
        slot="header"
        >${d(r)}</div>

        <slot>${n}</slot>

        <div
        slot="footer"
        >${d(s)}</div>

    </pi-card>
`,m=({slotContent:n,titleSlot:r,subTitleSlot:s,autoWidth:l})=>u`
    <pi-card
    ?autoWidth=${l}
    >

        <div
        slot="title"
        >${r}</div>

        <div
        slot="subTitle"
        >${s}</div>

        <slot>${n}</slot>


    </pi-card>
`,t=i.bind();t.args={};const e=i.bind();e.args={headerSlot:c};const o=m.bind();o.args={titleSlot:"Title for my card",subTitleSlot:"A nice subtitle for context"};const a=i.bind();a.args={footerSlot:"A footer with similar features as the header."};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
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
\``,...a.parameters?.docs?.source}}};const y=["Default","Header","Titles","Footer"];export{t as Default,a as Footer,e as Header,o as Titles,y as __namedExportsOrder,v as default};
