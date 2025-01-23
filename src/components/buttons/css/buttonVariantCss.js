import { css } from "lit";

export default css`

    /**
    TEXT VARIANT
     */
    .btn_variant_text {
        --pi-button-bg-color: transparent;
        --pi-button-border: none;
        --pi-button-hover-bg-color: #eee;
    }

    .btn_variant_text.btn_severity_primary {
        --pi-button-text-color: var(--pi-button-bg-color-primary);
    }

    .btn_variant_text.btn_severity_secondary {
        /* --pi-button-text-color: var(--pi-button-bg-color-secondary); */
    }

    .btn_variant_text.btn_severity_success {
        --pi-button-text-color: var(--pi-button-bg-color-success);
    }

    .btn_variant_text.btn_severity_info {
        --pi-button-text-color: var(--pi-button-bg-color-info);
    }

    .btn_variant_text.btn_severity_warn {
        --pi-button-text-color: var(--pi-button-bg-color-warn);
    }

    .btn_variant_text.btn_severity_help {
        --pi-button-text-color: var(--pi-button-bg-color-help);
    }

    .btn_variant_text.btn_severity_danger {
        --pi-button-text-color: var(--pi-button-bg-color-danger);
    }

    .btn_variant_text[disabled] {
        --pi-button-disabled-bg-color: transparent;
        --pi-button-disabled-text-color: var(--pi-button-bg-color-disabled);
    }

    /**
    OUTLINED VARIANT
     */
    .btn_variant_outlined{
        --pi-button-bg-color: transparent;
        --pi-button-hover-bg-color: #eee;
    }

    .btn_variant_outlined.btn_severity_primary {
        --pi-button-text-color: var(--pi-button-bg-color-primary);
    }

    .btn_variant_outlined.btn_severity_secondary {
        /* --pi-button-text-color: var(--pi-button-bg-color-secondary); */
    }

    .btn_variant_outlined.btn_severity_success {
        --pi-button-text-color: var(--pi-button-bg-color-success);
    }

    .btn_variant_outlined.btn_severity_info {
        --pi-button-text-color: var(--pi-button-bg-color-info);
    }

    .btn_variant_outlined.btn_severity_warn {
        --pi-button-text-color: var(--pi-button-bg-color-warn);
    }

    .btn_variant_outlined.btn_severity_help {
        --pi-button-text-color: var(--pi-button-bg-color-help);
    }

    .btn_variant_outlined.btn_severity_danger {
        --pi-button-text-color: var(--pi-button-bg-color-danger);
    }

    .btn_variant_outlined[disabled] {
        --pi-button-disabled-bg-color: transparent;
        --pi-button-disabled-text-color: var(--pi-button-bg-color-disabled);
    }
`