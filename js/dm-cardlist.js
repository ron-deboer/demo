import { LitElement, html } from "./lit-element.js";

export default class DmCardList extends LitElement {
    static properties = {
        text: {},
        href: {},
    };

    constructor() {
        super();
    }

    click(ev) {
        // const currPage = "#" + ev.target.closest(".dm-page").getAttribute("id");
        // const nextPage = ev.target.closest("span").getAttribute("data-next");
        // window.postMessage({ msg: "navigate", currPage, nextPage });
    }

    render() {
        return html`
            <table class="dm-table">
                <thead>
                    <tr>
                        <th scope="col">Account</th>
                        <th scope="col">Balance</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Visa - 3412</td>
                        <td class="right">$1,190</td>
                    </tr>
                    <tr>
                        <td scope="row">Visa - 6076</td>
                        <td class="right">$2,443</td>
                    </tr>
                    <tr>
                        <td scope="row">AMEX</td>
                        <td class="right">$1,181</td>
                    </tr>
                    <tr>
                        <td scope="row" data-label="Acount">Visa - 3332</td>
                        <td class="right">$842</td>
                    </tr>
                </tbody>
            </table>
        `;
    }

    createRenderRoot() {
        return this;
    }
}
customElements.define("dm-card-list", DmCardList);
