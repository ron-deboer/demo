import { LitElement, html } from "./lit-element.js";

export default class DmListItem extends LitElement {
    static properties = {
        text: {},
        href: {},
    };

    constructor() {
        super();
    }

    click(ev) {
        const currPage = "#" + ev.target.closest(".dm-page").getAttribute("id");
        const nextPage = ev.target
            .closest(".dm-item")
            .getAttribute("data-next");
        window.postMessage({ msg: "navigate", currPage, nextPage });
    }

    render() {
        return html`
            <li>
                <div
                    class="dm-item"
                    @click="${this.click}"
                    data-next="${this.href}"
                >
                    <p>${this.text}</p>
                    <h1>&#11208;</h1>
                </div>
            </li>
        `;
    }

    createRenderRoot() {
        return this;
    }
}
customElements.define("dm-list-item", DmListItem);
