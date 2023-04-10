require('dotenv').config({path:'./.env'});
const express = require('express');
const colors = require('colors');
const { urlencoded } = require('body-parser');
const {localDb} = require('./db/employeeDb');
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');

app.use(urlencoded({extended:true}))
app.use(express.static('public'));

//Routes
const employeeRouter = require('./routes/employee');

app.use(employeeRouter);

localDb();


module.exports = app;