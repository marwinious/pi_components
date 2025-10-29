import{x as n}from"./lit-element-Rv6HkL07.js";import{r as a}from"./registerWebComp-xWpx6Xkx.js";import"./index-Br0BFi8U.js";import{o as i}from"./if-defined-CT_LCv84.js";import{P as s}from"./headerBar-DZ0q1dNX.js";import{n as c,r as p,i as l,x as m,a as d,b as u}from"./iconBase-D6R8-dG5.js";import"./v4-CtRu48qb.js";import"./defaultCss-BUBpELKw.js";c("pi-icon-base",p);class h extends l{static get properties(){return{pathData:{type:String}}}constructor(){super(),this.pathData="m22 16.75c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75z"}render(){return m`
            <pi-icon-base 
            pathData=${this.pathData}
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLineJoin="round"
            strokeMiterLimit="2"
            ></pi-icon-base>
        `}static styles=[d`
            
        `]}a("pi-icon-handler",u);a("pi-icon-menu-hamburger-rounded",h);a("pi-header-bar",s);const x={title:"Components/Headers/Header Bar",component:"pi-header-bar",tags:["autodocs"],argTypes:{title:{control:"text",name:"title (optional)",description:"Title for bar",table:{type:{summary:"string"},defaultValue:{summary:""}}},sticky:{control:"boolean",name:"sticky (optional)",description:"Enables sticky mode",table:{type:{summary:"boolean"},defaultValue:{summary:""}}},showNavIcon:{control:"boolean",name:"showNavIcon (optional)",description:"Shows the nav icon at front of bar",table:{type:{summary:"string"},defaultValue:{summary:""}}}},args:{title:"Header Bar Title",sticky:!1,showNavIcon:!0}},b=({title:t,sticky:r,showNavIcon:o})=>n`
    <pi-header-bar
    title=${i(t!=""?t:void 0)}
    ?sticky=${r}
    ?showNavIcon=${o}
    >
        <pi-icon-handler icon="menu-hamburger-rounded" slot="menuIcon"></pi-icon-handler>
    </pi-header-bar>
`,e=b.bind();e.args={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`({
  title,
  sticky,
  showNavIcon
}) => html\`
    <pi-header-bar
    title=\${ifDefined(title != '' ? title : undefined)}
    ?sticky=\${sticky}
    ?showNavIcon=\${showNavIcon}
    >
        <pi-icon-handler icon="menu-hamburger-rounded" slot="menuIcon"></pi-icon-handler>
    </pi-header-bar>
\``,...e.parameters?.docs?.source}}};const D=["Default"];export{e as Default,D as __namedExportsOrder,x as default};
