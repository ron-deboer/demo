import { LitElement, html } from "./lit-element.js";

export default class DmCryptoList extends LitElement {
    static properties = {
        text: {},
        href: {},
    };

    constructor() {
        super();
    }

    click(ev) {}

    render() {
        return html`
            <table class="dm-table">
                <thead>
                    <tr>
                        <th scope="col">Coin</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="row">BTC</td>
                        <td class="right">$67,447</td>
                    </tr>
                    <tr>
                        <td scope="row">ETH</td>
                        <td class="right">$3,501</td>
                    </tr>
                    <tr>
                        <td scope="row">XRP</td>
                        <td class="right">$0.4809</td>
                    </tr>
                    <tr>
                        <td scope="row">BNB</td>
                        <td class="right">$605</td>
                    </tr>
                </tbody>
            </table>
        `;
    }

    createRenderRoot() {
        return this;
    }
}
customElements.define("dm-crypto-list", DmCryptoList);
