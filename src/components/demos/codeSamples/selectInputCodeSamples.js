export const basicSelectSample = `<pi-select-input
.options="\${this.sampleData}"
labelKey="country"
valueKey="country"
name="basic_select"
@change="\${(e) => this.child[0].handleCallbackData(e.detail)}"
></pi-select-input>`

export const optionsSelectSample = `<pi-select-input
.options="\${this.sampleData}"
labelKey="country"
valueKey="income"
name="options_select"
defaultText="Pick something"
@change="\${(e) => this.child[1].handleCallbackData(e.detail)}"
></pi-select-input>`

export const preSelectedSelectSample = `<pi-select-input
.options="\${this.sampleData}"
labelKey="country"
valueKey="income"
name="preset_select"
defaultText="Pick something"
.selectedObject="\${this.sampleData[2]}"
@change="\${(e) => this.child[2].handleCallbackData(e.detail)}"
></pi-select-input>`

export const disabledSelectSample = `<pi-select-input
.options="\${this.sampleData}"
labelKey="country"
valueKey="income"
name="disabled_select"
.selectedObject="\${this.sampleData[1]}"
disabled
@change="\${(e) => this.child[3].handleCallbackData(e.detail)}"
></pi-select-input>`