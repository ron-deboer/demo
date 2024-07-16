// 149.167.0.0/16

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = 3000;
let clients = [];
let comments = [
    {user: 'Mark', comment: 'Lets go for a latte ?', },
    {user: 'Grant', comment: 'Count me in !', },
    {user: 'Linda', comment: 'Ditto.', },    
];

const timestamp = ()=> {
    const d = new Date()
    const date = d.toISOString().split('T')[0];
    const time = d.toTimeString().split(' ')[0].replace(/:/g, '-');
    return `${date} ${time}`
}

app.listen(PORT, '0.0.0.0', () => {
    console.log(`API service listening at http://0.0.0.0:${PORT}`)
})

function getComments(req, res, next) {
    const headers = {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Content-Encoding': 'none',
        'Connection': 'keep-alive',
        'Access-Control-Allow-Origin': '*'
    };
    res.writeHead(200, headers);
   
    const clientId = Date.now();
    const newClient = {
        id: clientId,
        res
    };
    clients.push(newClient);

    res.write(`event: comments\n`);
    res.write(`data: ${JSON.stringify(comments)}\n`);
    res.write(`\n\n`);
}

function closeClient(request, response, next) {
    console.log(`${clientId} Connection closed`);
    clients = clients.filter(client => client.id !== clientId);
}

function postComment(req, res, next) {
    const body = req.body;
    comments.push(body);
    const payload = [body]
    res.json(payload);
    return sendToAllClients(payload);
}

function sendToAllClients(payload) {
    clients.forEach(client => {
        client.res.write(`event: comment\n`);
        client.res.write(`data: ${JSON.stringify(payload)}\n`);
        client.res.write(`\n\n`);
    });
}

app.get('/api/sse/comment', getComments);
app.post('/api/sse/comment', postComment);
app.get('/api/sse/close', closeClient);
