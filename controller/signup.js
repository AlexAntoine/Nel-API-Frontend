const User =require('../models/users');
const {loginApi} = require('../utils/userCalls');

exports.getSignupPage = async(req, res)=>{

    res.render('signup');
}

exports.sendNewUser = async(req, res)=>{
   
    try {

        const newUser = await User.create(req.body);

        const token = await loginApi(req);

        newUser.tokens = newUser.tokens.concat({token})

        const result = await newUser.save();

        res.cookie('token',token,{
            httpOnly:true
        });

        res.redirect('/users')
        
    } catch (error) {
        
        console.log('signup error: ', error);

        req.flash('error_msg', `Unable to register user`)

        res.redirect('/signup');
    }
    
}