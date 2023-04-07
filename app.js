require('dotenv').config({path:'./.env'});
const express = require('express');
const colors = require('colors');
const {localDb} = require('./db/employeeDb');
const path = require('path');

const app = express();

//Routes
const employeeRouter = require('./routes/employee');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');

app.use(express.static('public'));

app.use(employeeRouter);

localDb();


module.exports = app;