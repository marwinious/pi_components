import{LitElement as t,html as s,css as i}from"lit";class e extends t{static get properties(){return{cols:{type:Number}}}constructor(){super(),this.cols=0}render(){return this.cols>0&&(this.style.gridColumn=`span ${this.cols}`),s`
            <slot></slot>
        `}static styles=[i`
            :host {
                display: block;
                grid-column: auto;
                width: 100%;
                min-width: 0;
                box-sizing: border-box;
            }
        `]}
//# sourceMappingURL=piGridColumn.js.map
