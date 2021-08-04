import { html, render } from "lit";

import "./app.component.scss";

class AppComponent extends HTMLElement {
    connectedCallback() {
        render(html``,this)
    }
}

window.customElements.define('lit-app', AppComponent);
