require('dotenv').config();
const express = require('express');
const app = express();
const reverse = require("./reverse");
const sum = require("./sum");
app.use(express.json());

app.get('/c', (req, res) => {
    let {a,b} = req.query;
    res.send(JSON.stringify((sum(parseInt(a,10) , parseInt(b,10)))));
});
app.get('/', (req, res) => {
    let r = {
        hostname:req.hostname,
        ip:req.ip,
        method:req.method,
        query:req.query
    };
    res.send(JSON.stringify(r));
});
app.post('/',(req, res) => {
    res.send(JSON.stringify({
        message:'hello',
        body:req.body.a,
    }));
});
app.post('/b',(req, res) => {
    res.send(JSON.stringify({
        message: process.env.GREETING_TEXT,
        body:reverse(req.body.a),
    }));
});
app.listen(3000, () => console.log('Server ready'));