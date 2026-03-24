const express = require('express');
const path = require('path');
const mainRoutes = require('./routes/index');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', mainRoutes);

module.exports = app;
