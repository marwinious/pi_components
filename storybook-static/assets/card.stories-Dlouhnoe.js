import{x as u}from"./lit-element-Rv6HkL07.js";import{r as c}from"./registerWebComp-xWpx6Xkx.js";import{o as d}from"./unsafe-html-DxF_RYnM.js";import{P as m}from"./card-yLocHZea.js";import"./directive-CJw_OlP2.js";import"./defaultCss-BUBpELKw.js";c("pi-card",m);const p=`
<div slot="header" style="background-color: #eee;">
    This is the header area of a card. By default, it has no padding and is intended to be full filled with a background color or image. Text will work too of course. If using an image without text, add the <code>slot="header"</code> attritbute directly to the img tag for better control. The background-color on this demo was added as an example and is not there by default.
</div>
`,T={title:"Components/Card",component:"pi-card",tags:["autodocs"],argTypes:{slotContent:{control:"text",name:"content slot",description:"Main content area",defaultValue:"The contents of your card will show here via the default slot.",table:{type:{summary:"string"},defaultValue:{summary:""}}},autoWidth:{control:"boolean",name:"autoWidth (optional)",description:"Sizes the card to its content",table:{type:{summary:"string"},defaultValue:{summary:""}}},headerSlot:{control:"text",name:"header slot (optional)",description:"Unstyled header slot",table:{type:{summary:"string"},defaultValue:{summary:""}}},titleSlot:{control:"text",name:"title slot (optional)",description:"Title for card",table:{type:{summary:"string"},defaultValue:{summary:""}}},subTitleSlot:{control:"text",name:"sub-title slot (optional)",description:"Sub-Title for card",table:{type:{summary:"string"},defaultValue:{summary:""}}},footerSlot:{control:"text",name:"footer slot (optional)",description:"Unstyled footer slot",table:{type:{summary:"string"},defaultValue:{summary:""}}}},args:{slotContent:"The contents of your card will show here via the default slot.",autoWidth:!1}},i=({slotContent:n,headerSlot:r,footerSlot:s,autoWidth:l})=>u`
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
`,h=({slotContent:n,titleSlot:r,subTitleSlot:s,autoWidth:l})=>u`
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
`,t=i.bind();t.args={};const o=i.bind();o.args={headerSlot:p};const e=h.bind();e.args={titleSlot:"Title for my card",subTitleSlot:"A nice subtitle for context"};const a=i.bind();a.args={footerSlot:"A footer with similar features as the header."};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
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
\``,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({
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
\``,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`({
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
\``,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({
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
\``,...a.parameters?.docs?.source}}};const $=["Default","Header","Titles","Footer"];export{t as Default,a as Footer,o as Header,e as Titles,$ as __namedExportsOrder,T as default};
