import { LitElement, html, css } from "../js/lit-element.js";

export default class CommentBlock extends LitElement {
    static properties = {
        desc: {type: String},
        user: {type: String},        
    };

    handlePost(ev) {
        const el = this.querySelector('input');
        const payload = {
            user: this.user,
            comment: el.value
        };
        app.eventBus.emit("comment", payload);
        el.value = '';
    }

    render() {
        return html`
            <form
                    class="dm-form"
                    onsubmit="javascript:return false;"
            >
                <label>*${this.user}</label>
                <input
                        id="${this.user}"
                        class="comment"
                        type="text"
                        name="${this.user}"
                        value="${this.desc}"
                        autocomplete="off"
                />
                <button @click="${this.handlePost}" class="dm-button">
                    Post Comment
                </button>
            </form>
        `;
    }

    createRenderRoot() {
        return this;
    }
}
customElements.define("comment-block", CommentBlock);
