require('dotenv').config({path:'./.env'});
const express = require('express');
const colors = require('colors');
const session = require('express-session');
const flash = require('connect-flash');
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
const userRoute = require('./routes/users');
const deviceAge= require('./routes/deviceAge');

app.use(session({secret:'abcd', resave:true, saveUninitialized:true}));
app.use(flash())
app.use(methodOverride('_method'));


app.use((req, res,next)=>{
    res.locals.success_msg = req.flash(('success_msg'));
    res.locals.error_msg  = req.flash(('error_msg'));

    next();
});

app.use(employeeRouter);
app.use(userRoute);
app.use(deviceAge);

localDb();


module.exports = app;