import { LitElement, html } from "./lit-element.js";

export default class DmPageHeader extends LitElement {
    static properties = {
        text: {},
        href: {},
    };

    constructor() {
        super();
    }

    click(ev) {
        const currPage = "#" + ev.target.closest(".dm-page").getAttribute("id");
        const nextPage = ev.target.closest("span").getAttribute("data-next");
        window.postMessage({ msg: "navigate", currPage, nextPage });
    }

    render() {
        if (this.href != "") {
            return html`
                <div class="header spbetween">
                    <span
                        class="link"
                        @click="${this.click}"
                        data-next="${this.href}"
                    >
                        <h1>&#11207;</h1>
                    </span>
                    <h1>${this.text}</h1>
                    <h1>&nbsp;</h1>
                </div>
            `;
        }
        return html`
            <div class="header center">
                <h1>${this.text}</h1>
            </div>
        `;
    }

    createRenderRoot() {
        return this;
    }
}
customElements.define("dm-page-header", DmPageHeader);
