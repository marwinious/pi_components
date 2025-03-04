import{E as n,T as c,r as o,x as l,i as h}from"./lit-element-qJpPW6A9.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const u={ATTRIBUTE:1,CHILD:2},a=e=>(...t)=>({_$litDirective$:e,values:t});class d{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,r){this._$Ct=t,this._$AM=i,this._$Ci=r}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class s extends d{constructor(t){if(super(t),this.it=n,t.type!==u.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===n||t==null)return this._t=void 0,this.it=t;if(t===c)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const i=[t];return i.raw=i,this._t={_$litType$:this.constructor.resultType,strings:i,values:[]}}}s.directiveName="unsafeHTML",s.resultType=1;const p=a(s);class $ extends o{static get properties(){return{icon:{type:String}}}constructor(){super(),this.icon=""}render(){return l`
            <div class="icon">${p("<pi-icon-"+this.icon+"></pi-icon-"+this.icon)}</div>
        `}static styles=[h`
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
        `]}customElements.get("pi-icon-handler")||customElements.define("pi-icon-handler",$);export{a as e,d as i,p as o,u as t};
