const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8000;
let code = require('./pair');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/code', code);
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'pair.html'));
});

app.listen(PORT, () => {
    console.log(`Deployment Successful! Session-Server Running on http:                      
}).on('error', (err) => {
    console.error(`//localhost:${PORT}`);
}).on('error', (err) => {
    console.error(`Error starting server: ${err}`);
});

module.exports = app;
