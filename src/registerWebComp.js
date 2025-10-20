import { LitElement } from 'lit';

/**
 * Defines a custom element only if it hasn't been defined yet.
 * @param {string} tagName - The tag name for the custom element (e.g., 'my-button').
 * @param {typeof LitElement} componentClass - The LitElement class to register.
 */
export function register(tagName, componentClass) {
    if (!customElements.get(tagName)) {
        customElements.define(tagName, componentClass);
    }
}