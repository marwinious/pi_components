import { css, unsafeCSS } from "lit";

const severities = [
    'primary',
    'secondary',
    'success',
    'info',
    'warn',
    'help',
    'danger'
]

const generateSeverityStyles = () => severities.map(severity => `
    .btn_severity_${severity} {
        --pi-button-bg-color: var(--pi-button-bg-color-${severity});
        --pi-button-text-color: var(--pi-button-text-color-${severity});
        --pi-button-border: var(--pi-button-border-${severity});
        --pi-button-hover-bg-color: var(--pi-button-hover-bg-color-${severity});
        --pi-button-hover-text-color: var(--pi-button-hover-text-color-${severity}, #FFF);
        --pi-button-hover-border-color: var(--pi-button-hover-border-color-${severity});
        --pi-button-active-bg-color: var(--pi-button-active-bg-color-${severity});
        --pi-button-active-text-color: var(--pi-button-active-text-color-${severity});
        --pi-button-active-border-color: var(--pi-button-active-border-color-${severity});
    }
`).join('');

export default css`

    ${unsafeCSS(generateSeverityStyles('text'))}


`