import{LitElement as t,html as i,css as e}from"lit";class r extends t{static get properties(){return{viewBox:{type:String},pathData:{type:String},fillRule:{type:String},clipRule:{type:String},strokeLineJoin:{type:String},strokeMiterLimit:{type:String},pathFillRule:{type:String}}}constructor(){super(),this.viewBox="0 0 24 24",this.pathData="",this.fillRule="",this.clipRule="",this.strokeLineJoin="",this.strokeMiterLimit="",this.pathFillRule=""}render(){return i`
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="${this.viewBox}" 
            role="img"
            fill-rule=${this.fillRule}
            clip-rule=${this.clipRule}
            stroke-linejoin=${this.strokeLineJoin}
            stroke-miterlimit=${this.strokeMiterLimit}
            >
                <path 
                d="${this.pathData}"
                fill-rule=${this.pathFillRule}
                ></path>
            </svg>
        `}static styles=[e`
            :host {
                display: inline-flex;
                /* width: 100%;
                height: 100%; */
            }

            svg {
                width: 100%;
                height: 100%;
            }
        `]}export{r as PiIconBase};
//# sourceMappingURL=iconBase.js.map
