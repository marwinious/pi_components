export const basicSelectSample = `<pi-select-input
.options="\${this.sampleData}"
labelKey="country"
valueKey="income"
name="basic_select"
@selectionChanged="\${(e) => this.handleInput(e.detail.selectedItem, 0)}"
></pi-select-input>`

export const optionsSelectSample = `<pi-select-input
.options="\${this.sampleData}"
labelKey="country"
valueKey="income"
name="options_select"
defaultText="Pick something"
@selectionChanged="\${(e) => this.handleInput(e.detail.selectedItem, 1)}"
></pi-select-input>`

export const preSelectedSelectSample = `<pi-select-input
.options="\${this.sampleData}"
labelKey="country"
valueKey="income"
name="preset_select"
defaultText="Pick something"
.selectedObject="\${this.sampleData[2]}"
@selectionChanged="\${(e) => this.handleInput(e.detail.selectedItem, 2)}"
></pi-select-input>`

export const disabledSelectSample = `<pi-select-input
.options="\${this.sampleData}"
labelKey="country"
valueKey="income"
name="disabled_select"
.selectedObject="\${this.sampleData[1]}"
disabled
@selectionChanged="\${(e) => this.handleInput(e.detail.selectedItem, 3)}"
></pi-select-input>`