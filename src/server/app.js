require('dotenv/config');

const express = require('express');
const hbs = require('hbs');
const path = require('path');

const routes = require('./routes');
const app = express();

app.set('views', path.join(__dirname, '..', 'views'));
app.set('view engine', 'hbs');

hbs.registerPartials(path.join(__dirname, '..', 'views', 'partials'));

app.use(express.static('public'));
app.use(routes);

module.exports = app;
