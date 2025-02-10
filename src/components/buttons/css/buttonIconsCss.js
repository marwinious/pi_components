import { css } from "lit";

export default css`

    .btn_variant_iconOnly.rounded {
        border-radius: 50%;
        padding: 0.5rem;
    }

    :host([icon]) .btn_variant_outlined .button_icon_container,
    :host([icon]) .btn_variant_text .button_icon_container {
        fill: var(--pi-button-bg-color-default);
    }

    .btn_severity_primary .button_icon_container {
        fill: var(--pi-button-text-color-primary);
    }

    :host([icon]) .btn_variant_outlined.btn_severity_primary .button_icon_container,
    :host([icon]) .btn_variant_text.btn_severity_primary .button_icon_container {
        fill: var(--pi-button-bg-color-primary);
    }

    .btn_severity_secondary .button_icon_container {
        fill: var(--pi-button-text-color-secondary);
    }

    :host([icon]) .btn_variant_outlined.btn_severity_secondary .button_icon_container,
    :host([icon]) .btn_variant_text.btn_severity_secondary .button_icon_container {
        fill: var(--pi-button-text-color-secondary);
    }

    .btn_severity_success .button_icon_container {
        fill: var(--pi-button-text-color-success);
    }

    :host([icon]) .btn_variant_outlined.btn_severity_success .button_icon_container,
    :host([icon]) .btn_variant_text.btn_severity_success .button_icon_container {
        fill: var(--pi-button-bg-color-success);
    }

    .btn_severity_info .button_icon_container {
        fill: var(--pi-button-text-color-info);
    }

    :host([icon]) .btn_variant_outlined.btn_severity_info .button_icon_container,
    :host([icon]) .btn_variant_text.btn_severity_info .button_icon_container {
        fill: var(--pi-button-bg-color-info);
    }

    .btn_severity_warn .button_icon_container {
        fill: var(--pi-button-text-color-warn);
    }

    :host([icon]) .btn_variant_outlined.btn_severity_warn .button_icon_container,
    :host([icon]) .btn_variant_text.btn_severity_warn .button_icon_container {
        fill: var(--pi-button-bg-color-warn);
    }

    .btn_severity_help .button_icon_container {
        fill: var(--pi-button-text-color-help);
    }

    :host([icon]) .btn_variant_outlined.btn_severity_help .button_icon_container,
    :host([icon]) .btn_variant_text.btn_severity_help .button_icon_container {
        fill: var(--pi-button-bg-color-help);
    }

    .btn_severity_danger .button_icon_container {
        fill: var(--pi-button-text-color-danger);
    }

    :host([icon]) .btn_variant_outlined.btn_severity_danger .button_icon_container,
    :host([icon]) .btn_variant_text.btn_severity_danger .button_icon_container {
        fill: var(--pi-button-bg-color-danger);
    }

    button[disabled].btn_variant_outlined .button_icon_container,
    button[disabled].btn_variant_text .button_icon_container {
        fill: var(--pi-button-bg-color-disabled) !important;
    }

`