import{html as t,css as e}from"lit";import{P as o}from"../chunks/baseFormElement.js";import"./piLabel.js";import{d as r}from"../chunks/defaultCss.js";class s extends o{static get properties(){return{placeholder:{type:String},value:{type:String},disabled:{type:Boolean},label:{type:String}}}constructor(){super(),this.placeholder="",this.value="",this.disabled=!1,this.label=""}render(){return t`
            <pi-label 
            text=${this.label}
            ?hidden=${this.label==""}
            ></pi-label>
            
            <input 
            type="text" 
            placeholder=${this.placeholder} 
            @input=${this._handleInputChange}
            .value=${this.value}
            ?disabled=${this.disabled}
            >
        `}static styles=[r,e`
            :host {
                display: block;
                width: 100%;
                min-width: 0;
                max-width: 100%;
                box-sizing: border-box;
            }

            input {
                box-sizing: border-box;
                font-size: var(--pi-text-input-font-size, 16px);
                padding: var(--pi-text-input-padding, 5px 7px);
                background-color: var(--pi-text-input-bg-color, #fff);
                border-radius: var(--pi-text-input-border-radius, 5px);
                border-style: var(--pi-text-input-border-style, solid);
                border-width: var(--pi-text-input-border-width, 1px);
                border-color: var(--pi-text-input-border-color, #aaa);
                color: var(--pi-text-input-text-color, #555);
                box-shadow: var(--pi-text-input-box-shadow, none);
                width: 100%;
                min-width: 0;
                max-width: 100%;
                transition: background 0.3s ease, 
                            box-shadow 0.3s ease,
                            border-color 0.3s ease;

                &::placeholder {
                    color: var(--pi-text-input-placeholder-text-color, #aaa);
                }

                &:disabled, &:disabled::placeholder {
                    background-color: var(--pi-text-input-bg-color-disabled, #eee);
                    color: var(--pi-text-input-text-color-disabled, #888);
                }

                &:focus {
                    background: var(--pi-text-input-bg-color-focus, #f2fcff);
                    outline: none;
                    border-style: var(--pi-text-input-border-style-focus, solid);
                    border-width: var(--pi-text-input-border-width-focus, 1px);
                    border-color: var(--pi-text-input-border-color-focus, #aaa);
                    box-shadow: var(--pi-text-input-box-shadow-focus, 1px 1px 1px #ddd);
                }
            }

        `]}
//# sourceMappingURL=piInputText.js.map
