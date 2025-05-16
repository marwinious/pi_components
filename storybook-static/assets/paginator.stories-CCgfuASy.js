import{x as l}from"./lit-element-qJpPW6A9.js";import{a as d}from"./chunk-D5ZWXAHU-CUVymvc5.js";import"./iconWebGlobeLight-0llzJadL.js";import"./iconHandler-BlAUk5Qy.js";import"./paginator-B6elyfOC.js";import"./v4-CtRu48qb.js";import"./directive-CJw_OlP2.js";import"./defaultCss-aEcf2KJM.js";const P={title:"Components/Paginator",component:"pi-paginator",tags:["autodocs"],argTypes:{rows:{control:"number",name:"rows",description:"Rows per page",table:{type:{summary:"string"},defaultValue:{summary:""}}},totalRecords:{control:"number",name:"totalRecords",description:"Total number of rows/records in dataset",table:{type:{summary:"string"},defaultValue:{summary:""}}},useStartEndLinks:{control:"boolean",name:"useStartEndLinks",description:"Show start/end jump link buttons",table:{type:{summary:"string"},defaultValue:{summary:""}}},useNextPrevLinks:{control:"boolean",name:"useNextPrevLinks",description:"Show next/prev page link buttons",table:{type:{summary:"string"},defaultValue:{summary:""}}},useNumericLinks:{control:"boolean",name:"useNumericLinks",description:"Show numbered page link buttons",table:{type:{summary:"string"},defaultValue:{summary:""}}}},args:{rows:10,totalRecords:100,useStartEndLinks:!0,useNextPrevLinks:!0,useNumericLinks:!0}},t=({rows:a,totalRecords:i,useStartEndLinks:o,useNextPrevLinks:u,useNumericLinks:c})=>l`
    <pi-paginator 
    rows=${a}
    totalRecords=${i}
    @navClick="${m=>d("Pager nav clicked")(m.detail)}"
    .useStartEndLinks=${o} 
    .useNextPrevLinks=${u}
    .useNumericLinks=${c}
    ></pi-paginator>
`,e=t.bind();e.args={};const s=t.bind();s.args={useStartEndLinks:!1,useNextPrevLinks:!1};const n=t.bind();n.args={useStartEndLinks:!1,useNextPrevLinks:!0,useNumericLinks:!1};const r=t.bind();r.args={useStartEndLinks:!0,useNextPrevLinks:!1,useNumericLinks:!1};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`({
  rows,
  totalRecords,
  useStartEndLinks,
  useNextPrevLinks,
  useNumericLinks
}) => html\`
    <pi-paginator 
    rows=\${rows}
    totalRecords=\${totalRecords}
    @navClick="\${e => action('Pager nav clicked')(e.detail)}"
    .useStartEndLinks=\${useStartEndLinks} 
    .useNextPrevLinks=\${useNextPrevLinks}
    .useNumericLinks=\${useNumericLinks}
    ></pi-paginator>
\``,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`({
  rows,
  totalRecords,
  useStartEndLinks,
  useNextPrevLinks,
  useNumericLinks
}) => html\`
    <pi-paginator 
    rows=\${rows}
    totalRecords=\${totalRecords}
    @navClick="\${e => action('Pager nav clicked')(e.detail)}"
    .useStartEndLinks=\${useStartEndLinks} 
    .useNextPrevLinks=\${useNextPrevLinks}
    .useNumericLinks=\${useNumericLinks}
    ></pi-paginator>
\``,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`({
  rows,
  totalRecords,
  useStartEndLinks,
  useNextPrevLinks,
  useNumericLinks
}) => html\`
    <pi-paginator 
    rows=\${rows}
    totalRecords=\${totalRecords}
    @navClick="\${e => action('Pager nav clicked')(e.detail)}"
    .useStartEndLinks=\${useStartEndLinks} 
    .useNextPrevLinks=\${useNextPrevLinks}
    .useNumericLinks=\${useNumericLinks}
    ></pi-paginator>
\``,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`({
  rows,
  totalRecords,
  useStartEndLinks,
  useNextPrevLinks,
  useNumericLinks
}) => html\`
    <pi-paginator 
    rows=\${rows}
    totalRecords=\${totalRecords}
    @navClick="\${e => action('Pager nav clicked')(e.detail)}"
    .useStartEndLinks=\${useStartEndLinks} 
    .useNextPrevLinks=\${useNextPrevLinks}
    .useNumericLinks=\${useNumericLinks}
    ></pi-paginator>
\``,...r.parameters?.docs?.source}}};const x=["Default","NumberOnly","NextPrevOnly","StartEndOnly"];export{e as Default,n as NextPrevOnly,s as NumberOnly,r as StartEndOnly,x as __namedExportsOrder,P as default};
