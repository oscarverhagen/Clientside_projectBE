const { response } = require("express");
const { readFile } = require("fs");

console.log("hello word");

const express = require('express');

const app = express();
app.get('/', (request, response => {
    readFile('./home.html', 'utf8', (err, html) => {

    if(err){
        response.status(500).send('sorry, out of order')
    }
        response.send(html);
    })
}));

app.listen(process.env.PORT || 3000, () => console.log("App avaiable on http://localhost:3000"))