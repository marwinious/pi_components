export const basicCheckboxSample = `<pi-checkbox-input
name="basic_checkbox"
@change="\${(e) => this.child[0].handleCallbackData(e.detail)}"
></pi-checkbox-input>`

export const labeledCheckboxSample = `<pi-checkbox-input
name="labeled_checkbox"
label="Check me"
@change="\${(e) => this.child[1].handleCallbackData(e.detail)}"
></pi-checkbox-input>`

export const presetCheckboxSample = `<pi-checkbox-input
name="preset_checkbox"
label="On by default"
checked
@change="\${(e) => this.handleInput(e.detail, 2)}"
></pi-checkbox-input>`