import { LitElement, html, css } from "../js/lit-element.js";

export default class TaskList extends LitElement {
    static properties = {
        id: {type: String},
        title: {type: String},
        tasks: {type: Array},
    };

    render() {
        return html`
            <div class="colHeader bgRed">${this.title}</div>
            <div class="colTasks">
                ${this.tasks.map(task => {
                    return html`<task-item id="${task.id}" desc="${task.desc}"></task-item>`
                })}
            </div>
        `;
    }

    createRenderRoot() {
        return this;
    }
}
customElements.define("task-list", TaskList);
