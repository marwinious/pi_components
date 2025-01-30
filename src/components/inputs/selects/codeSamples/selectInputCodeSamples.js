export const basicSelectSample = `<pi-select-input
.options="\${this.sampleData}"
labelKey="country"
valueKey="income"
@selectionChanged="\${(e) => this.handleInput(e.detail.selectedItem, 0)}"
></pi-select-input>`

export const optionsSelectSample = `<pi-select-input
.options="\${this.sampleData}"
labelKey="country"
valueKey="income"
defaultText="Pick something"
@selectionChanged="\${(e) => this.handleInput(e.detail.selectedItem, 1)}"
></pi-select-input>`

export const preSelectedSelectSample = `<pi-select-input
.options="\${this.sampleData}"
labelKey="country"
valueKey="income"
defaultText="Pick something"
.selectedObject="\${this.sampleData[2]}"
@selectionChanged="\${(e) => this.handleInput(e.detail.selectedItem, 2)}"
></pi-select-input>`