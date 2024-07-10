// iife type class
const sse = (() => {
    let comments = [
        {user: 'Mark', comment: 'Lets go for a latte ?', },
        {user: 'Grant', comment: 'Count me in !', },
        {user: 'Linda', comment: 'Ditto.', },
    ];
    return { 
        updateComments: (comment) => {
            comments.push(comment);
            sse.displayComments();
        },
        displayComments: () => {
            let list = comments.map((c) => {
                return `<tr><td>${c.user}</td><td>${c.comment}</td></tr>`;
            });
            list = list.join(' ');
            const header = `<tr><th>User</th><th>Comment</th></tr>`;
            const markup = `<table>${header}${list}</table>`;
            $$('comments1').innerHTML = markup;
            $$('comments2').innerHTML = markup;
            $$('comments3').innerHTML = markup;
        },        
    };
})();

document.addEventListener("DOMContentLoaded", function () {
    sse.displayComments();
    app.eventBus.on('comment', (ev) => {
        sse.updateComments(ev.detail);
    });
});  