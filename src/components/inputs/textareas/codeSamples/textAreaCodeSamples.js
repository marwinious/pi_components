export const basicTextAreaSample = `<pi-text-area-input name="shortBio" @change="\${(e) => this.handleInput(e.detail, 0)}"></pi-text-area-input>`

export const optionsTextAreaSample = `<pi-text-area-input
name="summary"
label="Summary"
placeholder="Summarize your interests here"
@change="\${(e) => this.handleInput(e.detail, 1)}"
></pi-text-area-input>`

export const disabledTextAreaSample = `<pi-text-area-input
name="aboutYou"
label="About You"
disabled
@change="${(e) => this.handleInput(e.detail, 2)}"
></pi-text-area-input>`