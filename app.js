require('dotenv').config({path:'./.env'});
const express = require('express');
const colors = require('colors');
const cookieSession = require('cookie-session'); 
const cookieParser = require('cookie-parser')   
const flash = require('connect-flash');
const methodOverride = require('method-override');
const { urlencoded } = require('body-parser');
const {localDb,prodDb} = require('./db/users');
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, './views'));
app.set('view engine','ejs');

app.use(urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')));

//Routes
const forgetPasswordRouter = require('./routes/forgetPassword')
const homeRouter = require('./routes/login');
const changePasswordRouter = require('./routes/changePassword');
const signupRouter = require('./routes/signup');
const userRoute = require('./routes/users');
const oldRoute = require('./routes/oldDevices');
const deviceAge= require('./routes/deviceAge');
const currentdevice = require('./routes/currentDevices');

prodDb();

app.use(cookieParser());
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys:['abcd']
}));
app.use(flash())
app.use(methodOverride('_method'));

app.use((req, res,next)=>{
    res.locals.success_msg = req.flash(('success_msg'));
    res.locals.error_msg  = req.flash(('error_msg'));
    res.locals.error = req.flash(('error'));
    res.locals.currentUser = req.user;
    
    next();
});

app.use(homeRouter);
app.use(changePasswordRouter)
app.use(forgetPasswordRouter);
app.use(signupRouter);
app.use(userRoute);
app.use(deviceAge);
app.use(oldRoute);
app.use(currentdevice);



module.exports = app;