import{LitElement as t,html as r,css as a}from"lit";import{register as e}from"../utils/registerWebComp2.js";import{PiIconBase as s}from"./iconBase.js";e("pi-icon-base",s);class c extends t{static get properties(){return{pathData:{type:String}}}constructor(){super(),this.pathData="M12 1l-12 22h24l-12-22zm-1 8h2v7h-2v-7zm1 11.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z"}render(){return r`
            <pi-icon-base 
            pathData=${this.pathData}
            ></pi-icon-base>
        `}static styles=[a`
            
        `]}export{c as PiIconAlertTriangleDark};
//# sourceMappingURL=iconAlertTriangleDark.js.map
