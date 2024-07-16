import { LitElement, html, css } from "../js/lit-element.js";

export default class CommentList extends LitElement {
    static properties = {
        comments: {type: Array},
    };
    
    constructor() {
        super();
        this.comments = [];
    }
    
    render() {
        if (!this.comments || this.comments.length == 0) {
            return 'loading...';
        }
        let list = this.comments.map((c) => {
            return `<tr><td>${c.user}</td><td>${c.comment}</td></tr>`;
        });
        list = list.join(' ');
        const header = `<tr><th>User</th><th>Comment</th></tr>`;
        const markup = `<table>${header}${list}</table>`;
        return html`${markup}`;
    }

    createRenderRoot() {
        return this;
    }
}
customElements.define("comment-list", CommentList);
