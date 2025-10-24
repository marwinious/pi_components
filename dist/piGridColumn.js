import{LitElement as t,html as s,css as o}from"lit";class e extends t{static get properties(){return{cols:{type:Number}}}constructor(){super(),this.cols=0}render(){return this.cols>0&&(this.style.gridColumn=`span ${this.cols}`),s`
            <slot></slot>
        `}static styles=[o`
            :host {
                display: block;
                grid-column: auto;
                width: 100%;
                min-width: 0;
                box-sizing: border-box;
            }
        `]}export{e as PiGridColumn};
//# sourceMappingURL=piGridColumn.js.map
