require('dotenv').config({path:'./.env'});
const express = require('express');
const colors = require('colors');
const methodOverride = require('method-override');
const { urlencoded } = require('body-parser');
const {localDb} = require('./db/employeeDb');
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');

app.use(urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')));

//Routes
const employeeRouter = require('./routes/employee');

app.use(methodOverride('_method'));
app.use(employeeRouter);

localDb();


module.exports = app;