class CommentManager {
    el = null;
    hostname = '';
    comments = [];
    subscription = null;
    constructor(el) {
        this.el = el;
        this.comments = [];
        this.hostname = window.location.hostname;
        this.getComments();
    }
    getComments() {
        this.subscription = new EventSource(`http://${this.hostname}:3000/api/sse/comment`);
        this.subscription.addEventListener('open', () => {
            console.log('Connection opened')
        });
        this.subscription.addEventListener('error', () => {
            console.error("Subscription error")
        });
        this.subscription.addEventListener('comments', (ev) => {
            console.log('Receive comments');
            const data = JSON.parse(ev.data);
            this.comments = data;
            this.displayComments();
        });
        this.subscription.addEventListener('comment', (ev) => {
            console.log('Receive comment');
            const data = JSON.parse(ev.data);
            // console.log(data);
            this.comments = this.comments.concat(data);
            // console.log(comments);                    
            this.displayComments();
        });        
    }
    displayComments() {
        let list = this.comments.map((c) => {
            return `<tr><td>${c.user}</td><td>${c.comment}</td></tr>`;
        });
        list = list.join(' ');
        const header = `<tr><th>User</th><th>Comment</th></tr>`;
        const markup = `<table>${header}${list}</table>`;
        $$(this.el).querySelector('.commentlist').innerHTML = markup;
    }
}

// insert new comment via sse server ()
async function insertComment(comment) {
    const resp = await fetch(
        `http://${window.location.hostname}:3000/api/sse/comment`,
        {
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify(comment)
        }
    );
    const data = await resp.json();    
}
document.addEventListener("DOMContentLoaded", function () {
    const cm1 = new CommentManager('device1');
    const cm2 = new CommentManager('device2');
    const cm3 = new CommentManager('device3');
    app.eventBus.on('comment', (ev) => {
        insertComment(ev.detail);
    });
});  