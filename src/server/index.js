const express = require('express');

const userRouter = require('./routes/index.routes');
const aboutRouter = require('./routes/about.routes');

const app = express();

app.use('/', userRouter);
app.use('/sobre', aboutRouter);

app.set('view engine', 'ejs');

module.exports = app;
