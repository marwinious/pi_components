export const basicSelectSample = `<pi-select-input
.options="\${this.sampleData}"
labelKey="country"
valueKey="income"
@selectionChanged="\${(e) => this.handleInput(e.detail.selectedItem, 0)}"
></pi-select-input>`