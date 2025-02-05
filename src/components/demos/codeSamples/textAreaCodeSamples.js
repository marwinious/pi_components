export const basicTextAreaSample = `<pi-text-area-input
name="shortBio"
@change="\${(e) => this.child[0].handleCallbackData(e.detail)}"
></pi-text-area-input>`

export const optionsTextAreaSample = `<pi-text-area-input
name="summary"
label="Summary"
placeholder="Summarize your interests here"
@change="\${(e) => this.child[1].handleCallbackData(e.detail)}"
></pi-text-area-input>`

export const disabledTextAreaSample = `<pi-text-area-input
name="aboutYou"
label="About You"
disabled
@change="\${(e) => this.child[2].handleCallbackData(e.detail)}"
></pi-text-area-input>`