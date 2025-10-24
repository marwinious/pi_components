import{unsafeCSS as t,css as r}from"lit";const b=["primary","secondary","success","info","warn","help","danger"],c=()=>b.map(o=>`
    .btn_severity_${o} {
        --pi-button-bg-color: var(--pi-button-bg-color-${o});
        --pi-button-text-color: var(--pi-button-text-color-${o});
        --pi-button-border: var(--pi-button-border-${o});
        --pi-button-hover-bg-color: var(--pi-button-hover-bg-color-${o});
        --pi-button-hover-text-color: var(--pi-button-hover-text-color-${o}, #FFF);
        --pi-button-hover-border-color: var(--pi-button-hover-border-color-${o});
        --pi-button-active-bg-color: var(--pi-button-active-bg-color-${o});
        --pi-button-active-text-color: var(--pi-button-active-text-color-${o});
        --pi-button-active-border-color: var(--pi-button-active-border-color-${o});
    }
`).join(""),e=r`

    ${t(c())}


`;export{e as default};
//# sourceMappingURL=buttonSeverityCss.js.map
