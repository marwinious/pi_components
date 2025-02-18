import{x as b}from"./lit-element-qJpPW6A9.js";import{o as e}from"./if-defined-CTt8SaA8.js";import"./iconUserRoundedLight-DAA4Ng5V.js";import"./tableColumn-DbbijIEK.js";import"./defaultCss-aEcf2KJM.js";import"./class-map-yYL26NNl.js";import"./paginator-B6elyfOC.js";const g=[{name:"Alice",age:30,country:"USA",income:"$100,000",rawIncome:"100000"},{name:"Bob",age:25,country:"UK",income:"$50,000",rawIncome:"50000"},{name:"Charlie",age:35,country:"Canada",income:"$200,000",rawIncome:"200000"},{name:"David",age:32,country:"Spain",income:"$70,000",rawIncome:"70000"},{name:"Edward",age:27,country:"New Zealand",income:"$150,000",rawIncome:"150000"}],S={title:"Components/Tables",component:"pi-table",tags:["autodocs"],argTypes:{striped:{control:"boolean",name:"striped",description:"Stripe table rows",table:{type:{summary:"string"},defaultValue:{summary:""}}},gridlines:{control:"boolean",name:"gridlines",description:"Show gridlines",table:{type:{summary:"string"},defaultValue:{summary:""}}},paginate:{control:"boolean",name:"paginate",description:"Enable pagination",table:{type:{summary:"string"},defaultValue:{summary:""}}},rowsPerPage:{control:"number",name:"rowsPerPage",description:"Number of rows per paginated page",table:{type:{summary:"string"},defaultValue:{summary:""}}},sortKey:{control:"select",name:"sortKey",description:"Pre-sorted table sort key",options:["","name","age","country","income","rawIncome"],table:{type:{summary:"string"},defaultValue:{summary:""}}},sortDirection:{control:"select",name:"sortDirection",description:"Pre-sorted table sort direction",options:["asc","desc"],table:{type:{summary:"string"},defaultValue:{summary:""}}}},args:{striped:!1,gridlines:!1,paginate:!1,rowsPerPage:3,sortKey:"",sortDirection:""}},m=({striped:p,gridlines:d,paginate:n,rowsPerPage:u,sortKey:a,sortDirection:i})=>b`
    <pi-table 
    .rows=${g}
    .striped=${p}
    .gridlines=${d}
    .paginate=${n}
    rowsPerPage=${e(n==!0?u:void 0)}
    sortKey=${e(a!=""?a:void 0)}
    sortDirection=${e(i!=""?i:void 0)}
    >
        <pi-table-column key="name" label="Name"></pi-table-column>
        <pi-table-column key="age" label="Age"></pi-table-column>
        <pi-table-column key="country" label="Country"></pi-table-column>
        <pi-table-column key="income" label="Income"></pi-table-column>
    </pi-table>
`,y=({striped:p,gridlines:d,paginate:n,rowsPerPage:u,sortKey:a,sortDirection:i})=>b`
    <pi-table 
    .rows=${g}
    .striped=${p}
    .gridlines=${d}
    .paginate=${n}
    rowsPerPage=${e(n==!0?u:void 0)}
    sortKey=${e(a!=""?a:void 0)}
    sortDirection=${e(i!=""?i:void 0)}
    >
        <pi-table-column key="name" label="Name" sortable sortKey="name"></pi-table-column>
        <pi-table-column key="age" label="Age"></pi-table-column>
        <pi-table-column key="country" label="Country"></pi-table-column>
        <pi-table-column key="income" label="Income"></pi-table-column>
    </pi-table>
`,r=m.bind();r.args={};const t=m.bind();t.args={striped:!0};const o=m.bind();o.args={gridlines:!0};const l=y.bind();l.args={};const s=m.bind();s.args={sortKey:"age",sortDirection:"asc"};const c=m.bind();c.args={paginate:!0,rowsPerPage:3};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`({
  striped,
  gridlines,
  paginate,
  rowsPerPage,
  sortKey,
  sortDirection
}) => html\`
    <pi-table 
    .rows=\${sampleRows}
    .striped=\${striped}
    .gridlines=\${gridlines}
    .paginate=\${paginate}
    rowsPerPage=\${ifDefined(paginate == true ? rowsPerPage : undefined)}
    sortKey=\${ifDefined(sortKey != '' ? sortKey : undefined)}
    sortDirection=\${ifDefined(sortDirection != '' ? sortDirection : undefined)}
    >
        <pi-table-column key="name" label="Name"></pi-table-column>
        <pi-table-column key="age" label="Age"></pi-table-column>
        <pi-table-column key="country" label="Country"></pi-table-column>
        <pi-table-column key="income" label="Income"></pi-table-column>
    </pi-table>
\``,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
  striped,
  gridlines,
  paginate,
  rowsPerPage,
  sortKey,
  sortDirection
}) => html\`
    <pi-table 
    .rows=\${sampleRows}
    .striped=\${striped}
    .gridlines=\${gridlines}
    .paginate=\${paginate}
    rowsPerPage=\${ifDefined(paginate == true ? rowsPerPage : undefined)}
    sortKey=\${ifDefined(sortKey != '' ? sortKey : undefined)}
    sortDirection=\${ifDefined(sortDirection != '' ? sortDirection : undefined)}
    >
        <pi-table-column key="name" label="Name"></pi-table-column>
        <pi-table-column key="age" label="Age"></pi-table-column>
        <pi-table-column key="country" label="Country"></pi-table-column>
        <pi-table-column key="income" label="Income"></pi-table-column>
    </pi-table>
\``,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({
  striped,
  gridlines,
  paginate,
  rowsPerPage,
  sortKey,
  sortDirection
}) => html\`
    <pi-table 
    .rows=\${sampleRows}
    .striped=\${striped}
    .gridlines=\${gridlines}
    .paginate=\${paginate}
    rowsPerPage=\${ifDefined(paginate == true ? rowsPerPage : undefined)}
    sortKey=\${ifDefined(sortKey != '' ? sortKey : undefined)}
    sortDirection=\${ifDefined(sortDirection != '' ? sortDirection : undefined)}
    >
        <pi-table-column key="name" label="Name"></pi-table-column>
        <pi-table-column key="age" label="Age"></pi-table-column>
        <pi-table-column key="country" label="Country"></pi-table-column>
        <pi-table-column key="income" label="Income"></pi-table-column>
    </pi-table>
\``,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`({
  striped,
  gridlines,
  paginate,
  rowsPerPage,
  sortKey,
  sortDirection
}) => html\`
    <pi-table 
    .rows=\${sampleRows}
    .striped=\${striped}
    .gridlines=\${gridlines}
    .paginate=\${paginate}
    rowsPerPage=\${ifDefined(paginate == true ? rowsPerPage : undefined)}
    sortKey=\${ifDefined(sortKey != '' ? sortKey : undefined)}
    sortDirection=\${ifDefined(sortDirection != '' ? sortDirection : undefined)}
    >
        <pi-table-column key="name" label="Name" sortable sortKey="name"></pi-table-column>
        <pi-table-column key="age" label="Age"></pi-table-column>
        <pi-table-column key="country" label="Country"></pi-table-column>
        <pi-table-column key="income" label="Income"></pi-table-column>
    </pi-table>
\``,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`({
  striped,
  gridlines,
  paginate,
  rowsPerPage,
  sortKey,
  sortDirection
}) => html\`
    <pi-table 
    .rows=\${sampleRows}
    .striped=\${striped}
    .gridlines=\${gridlines}
    .paginate=\${paginate}
    rowsPerPage=\${ifDefined(paginate == true ? rowsPerPage : undefined)}
    sortKey=\${ifDefined(sortKey != '' ? sortKey : undefined)}
    sortDirection=\${ifDefined(sortDirection != '' ? sortDirection : undefined)}
    >
        <pi-table-column key="name" label="Name"></pi-table-column>
        <pi-table-column key="age" label="Age"></pi-table-column>
        <pi-table-column key="country" label="Country"></pi-table-column>
        <pi-table-column key="income" label="Income"></pi-table-column>
    </pi-table>
\``,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`({
  striped,
  gridlines,
  paginate,
  rowsPerPage,
  sortKey,
  sortDirection
}) => html\`
    <pi-table 
    .rows=\${sampleRows}
    .striped=\${striped}
    .gridlines=\${gridlines}
    .paginate=\${paginate}
    rowsPerPage=\${ifDefined(paginate == true ? rowsPerPage : undefined)}
    sortKey=\${ifDefined(sortKey != '' ? sortKey : undefined)}
    sortDirection=\${ifDefined(sortDirection != '' ? sortDirection : undefined)}
    >
        <pi-table-column key="name" label="Name"></pi-table-column>
        <pi-table-column key="age" label="Age"></pi-table-column>
        <pi-table-column key="country" label="Country"></pi-table-column>
        <pi-table-column key="income" label="Income"></pi-table-column>
    </pi-table>
\``,...c.parameters?.docs?.source}}};const I=["Default","Striped","Gridlines","SelectiveSorting","PreSorted","Paginated"];export{r as Default,o as Gridlines,c as Paginated,s as PreSorted,l as SelectiveSorting,t as Striped,I as __namedExportsOrder,S as default};
