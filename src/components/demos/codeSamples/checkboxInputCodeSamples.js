export const basicCheckboxSample = `<pi-checkbox-input
name="basic_checkbox"
@change="\${(e) => this.handleInput(e.detail, 0)}"
></pi-checkbox-input>`

export const labeledCheckboxSample = `<pi-checkbox-input
name="labeled_checkbox"
label="Check me"
@change="\${(e) => this.handleInput(e.detail, 1)}"
></pi-checkbox-input>`

export const presetCheckboxSample = `<pi-checkbox-input
name="preset_checkbox"
label="On by default"
checked
@change="\${(e) => this.handleInput(e.detail, 2)}"
></pi-checkbox-input>`