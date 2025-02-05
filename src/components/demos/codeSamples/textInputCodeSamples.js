export const basicTextInputSample = `<pi-text-input @change="\${(e) => this.child[0].handleCallbackData(e.detail)}"></pi-text-input>`

export const optionsTextInputSample = `<pi-text-input 
placeholder="Type something here"
@change="\${(e) => this.child[1].handleCallbackData(e.detail)}"
>
    Field label sample
</pi-text-input>`

export const presetTextInputSample = `<pi-text-input 
value="Hello world!"
@change="\${(e) => this.child[2].handleCallbackData(e.detail)}"
></pi-text-input>`

export const disabledTextInputSample = `<pi-text-input 
name="disabled_text_field"
placeholder="You can't type here"
disabled
@change="\${(e) => this.child[3].handleCallbackData(e.detail)}"
></pi-text-input>`