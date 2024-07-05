import { LitElement, html, css } from "../js/lit-element.js";

export default class TaskItem extends LitElement {
    static properties = {
        id: {type: String},
        desc: {type: String},
    };

    handleEdit(ev) {
        ev.preventDefault();
        app.eventBus.emit("edit-task", this.id);
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
