require('dotenv/config');

const express = require('express');
const path = require('path');

const routes = require('./routes');

const app = express();

app.set('views', path.join(__dirname, '..', 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(routes);

module.exports = app;
