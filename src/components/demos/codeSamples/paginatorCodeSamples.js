export const basicPaginatorSample = `<pi-paginator rows=10 totalRecords=100></pi-paginator>`

export const eventPaginatorSample = `<pi-paginator 
rows=10 
totalRecords=100
@navClick="\${(e) => this.child[1].handleCallbackData(e.detail)}"
></pi-paginator>`

export const numbersPaginatorSample = `<pi-paginator 
rows=10 
totalRecords=100
.useStartEndLinks=\${false} 
.useNextPrevLinks=\${false}
></pi-paginator>`

export const nextPrevPaginatorSample = `<pi-paginator 
rows=10 
totalRecords=100
.useStartEndLinks=\${false} 
.useNextPrevLinks=\${true} 
.useNumericLinks=\${false}
></pi-paginator>`

export const startEndPaginatorSample = `<pi-paginator 
rows=10 
totalRecords=100
.useStartEndLinks=${true} 
.useNextPrevLinks=${false} 
.useNumericLinks=${false}
></pi-paginator>`