const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const db = require('./api/db')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let router = require('./api/routers/routers')
app.use('/api', router)

app.listen(port);

console.log('Running on port: ' + port);