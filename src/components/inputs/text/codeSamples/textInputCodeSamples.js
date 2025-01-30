export const basicTextInputSample = `<pi-text-input @inputChanged="\${(e) => this.handleInput(e.detail)}"></pi-text-input>`

export const optionsTextInputSample = `<pi-text-input 
placeholder="Type something here"
showLabel
@inputChanged="\${(e) => this.handleInput2(e.detail)}"
>
    Field label sample
</pi-text-input>`

export const presetTextInputSample = `<pi-text-input 
value="Hello world!"
@inputChanged="${(e) => this.handleInput3(e.detail)}"
></pi-text-input>`