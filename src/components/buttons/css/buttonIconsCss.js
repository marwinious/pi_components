import { css } from "lit";

export default css`

    .btn_variant_iconOnly.rounded {
        border-radius: 50%;
        padding: 0.5rem;
    }

    .btn_severity_primary {
        .button_icon_container {
            fill: var(--pi-button-text-color-primary);
        }
    }

    .btn_severity_secondary {
        .button_icon_container {
            fill: var(--pi-button-text-color-secondary);
        }
    }

    .btn_severity_success {
        .button_icon_container {
            fill: var(--pi-button-text-color-success);
        }
    }

    .btn_severity_info {
        .button_icon_container {
            fill: var(--pi-button-text-color-info);
        }
    }

    .btn_severity_warn {
        .button_icon_container {
            fill: var(--pi-button-text-color-warn);
        }
    }

    .btn_severity_help {
        .button_icon_container {
            fill: var(--pi-button-text-color-help);
        }
    }

    .btn_severity_danger {
        .button_icon_container {
            fill: var(--pi-button-text-color-danger);
        }
    }

`