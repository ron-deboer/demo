import { LitElement, html, css } from "../js/lit-element.js";

export default class TaskItem extends LitElement {
    static properties = {
        id: {},
        desc: {},
    };

    constructor() {
        super();
    }

    openEditModal(id) {
        setTimeout(async function () {
            const resp = await fetch(`api/Task/${id}`);
            const data = await resp.json();
            const row = {
                id: data[0].id,
                taskid: data[0].taskid,
                desc: data[0].desc,
                comment: data[0].comment,
            };
            app.renderForm("modal-1", row);
            app.openModal("modal");
        }, 10);
    }

    handleEdit(ev) {
        ev.preventDefault();
        this.openEditModal(this.id);
    }

    render() {
        return html`
        <div class="colTask" id="${this.id}" data-taskid="${this.id}" draggable="true">                     
            <div>
                <img src="images/edit.png" width="30px" height="30px" 
                    class="linkImage editLink" 
                    @click="${this.handleEdit}">
                </img>                        
            </div>
            <div>
            ${this.desc}
            </div>                        
        </div>
        `;
    }

    createRenderRoot() {
        return this;
    }
}
customElements.define("task-item", TaskItem);
