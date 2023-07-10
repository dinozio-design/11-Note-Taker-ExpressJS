const express = require('express');
// modular routers for api end points
const notesRouter = require('./notes');
const app = express();
app.use ('/notes', notesRouter);


module.exports = app;
