import{E as n,T as r,r as o,x as c,i as l}from"./lit-element-55XysmYc.js";import{e as h,i as a,t as u}from"./directive-CJw_OlP2.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class e extends a{constructor(t){if(super(t),this.it=n,t.type!==u.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===n||t==null)return this._t=void 0,this.it=t;if(t===r)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const i=[t];return i.raw=i,this._t={_$litType$:this.constructor.resultType,strings:i,values:[]}}}e.directiveName="unsafeHTML",e.resultType=1;const d=h(e);class p extends o{static get properties(){return{icon:{type:String}}}constructor(){super(),this.icon=""}render(){return c`
            <div class="icon">${d("<pi-icon-"+this.icon+"></pi-icon-"+this.icon)}</div>
        `}static styles=[l`
            :host {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                height: 100%;
            }

            .icon {
                display: inline-flex;
                height: 100%;

                * {
                    display: inline-flex;
                    height: 100%;
                }
            }
        `]}customElements.get("pi-icon-handler")||customElements.define("pi-icon-handler",p);export{d as o};
