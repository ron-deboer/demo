import { LitElement, html, css } from "../js/lit-element.js";

const template = html`
    <div id="edit-task-modal-overlay" class="modal-overlay">
        <div class="modal">
            <div class="modal-header">
                <h2>Task Details</h2>
            </div>

            <div id="edit-task-form" class="modal-content">
                <form>
                    <fieldset>
                        <input id="id" type="hidden" />
                        <label for="taskid">Task Id</label>
                        <input id="taskid" type="text" placeholder="Task Id" />
                        <label for="desc">Description</label>
                        <input
                            id="desc"
                            type="text"
                            placeholder="Description"
                        />
                        <label for="comment">Comment</label>
                        <input id="comment" type="text" placeholder="Comment" />
                    </fieldset>
                </form>
            </div>

            <div class="modal-footer">
                <button>Close</button>
                <button>Save</button>
            </div>
        </div>
    </div>
`;
export default class EditTaskItem extends LitElement {
    static properties = {
        id: {},
    };

    _handle_edit = (ev) => {
        this.id = ev.detail;
        this.openEditModal();
    };

    _handle_click = (ev) => {
        ev.preventDefault();
        switch (ev.target.innerText) {
            case "CLOSE":
                this.closeModal();
                break;
            case "SAVE":
                this.saveTask();
                break;
            default:
        }
    };

    constructor() {
        super();
        app.eventBus.on("edit-task", this._handle_edit);
    }

    connectedCallback() {
        super.connectedCallback();
        this.addEventListener("click", this._handle_click);
    }

    buildForm(data) {
        const frm = this.querySelector("form");
        for (let prop in data) {
            frm.querySelector("#" + prop).value = data[prop];
        }
    }

    openEditModal() {
        const _this = this;
        setTimeout(async function () {
            const resp = await fetch(`api/Task/${_this.id}`);
            const data = await resp.json();
            const row = {
                id: data[0].id,
                taskid: data[0].taskid,
                desc: data[0].desc,
                comment: data[0].comment,
            };
            _this.buildForm(row);
            $$("edit-task-modal-overlay").style.display = "block";
        }, 10);
    }

    closeModal() {
        $$("edit-task-modal-overlay").style.display = "none";
    }

    saveTask() {
        const _this = this;
        setTimeout(async function () {
            const id = $val("id");
            const resp = await fetch(`api/Task/${id}`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    taskid: $val("taskid"),
                    desc: $val("desc"),
                    comment: $val("comment"),
                }),
            });
            const data = await resp.json();
            _this.closeModal();
        }, 10);
    }

    handleEdit(ev) {
        ev.preventDefault();
        this.openEditModal();
    }

    render() {
        return template;
    }

    createRenderRoot() {
        return this;
    }
}
customElements.define("edit-task-item", EditTaskItem);
