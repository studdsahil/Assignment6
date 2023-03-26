const express = require('express');
const app = express();


// Import routes
const blogRoute = require('./routes/blog');



app.use(express.json());
app.use('/', blogRoute);

module.exports = app;
