import { LitElement, html } from "./lit-element.js";

export default class DmCardList extends LitElement {
    static properties = {
        text: {},
        href: {},
    };

    cards = [
        { id: 1, name: "Visa - 3412", balance: "$880.25", due: "22/6/2024" },
        { id: 2, name: "AMEX", balance: "$1,134.66", due: "05/7/2024" },
        { id: 3, name: "Mastercard", balance: "$235.00", due: "10/7/2024" },
        { id: 4, name: "Visa - 6208", balance: "$23.00", due: "23/7/2024" },
    ];

    constructor() {
        super();
        this.card = {};
    }

    openModal(id) {
        app.renderForm("modal-1", row);
        app.openModal("modal");
    }

    click(ev) {
        const id = ev.target.closest("tr").getAttribute("id");
        this.card = this.cards.find((c) => c.id == id);
        app.openModal("page4");
        $$("modal").innerHTML = app.buildTable(this.card);
    }

    render() {
        return html`
            <table class="dm-table">
                <thead>
                    <tr>
                        <th class="left">Account</th>
                        <th class="right">Balance</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    ${this.cards.map(
                        (c) => html`
                            <tr id="${c.id}" @click="${this.click}">
                                <td>${c.name}</td>
                                <td class="right red">${c.balance}</td>
                                <td class="next">&#11208;</td>
                            </tr>
                        `
                    )}
                </tbody>
            </table>
        `;
    }

    createRenderRoot() {
        return this;
    }
}
customElements.define("dm-card-list", DmCardList);
