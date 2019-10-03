console.log("Java Script Linked Up");

const express = require('express');
const path = require('path');

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static('public'));

app.get('/', (reg, res) => {
	res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/contact', (req, res) => {
	res.send('on the contact page');
})