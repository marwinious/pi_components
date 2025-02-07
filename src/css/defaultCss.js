import { css } from "lit";

export default css`

    :host {
        color: var(--pi-text-color, #333);
        font-family: var(--pi-font-family, Arial, Helvetica, sans-serif);
        font-size: var(--pi-font-size, 1rem);
        font-weight: var(--pi-font-weight, normal);
        letter-spacing: var(--pi-letter-spacing, normal);
        line-height: var(--pi-line-height, normal);
        text-align: var(--pi-text-align, left);
        white-space: var(--pi-white-space, normal);
        word-spacing: var(--pi-word-spacing, normal);
        visibility: var(--pi-visibility, visible);
    }

`