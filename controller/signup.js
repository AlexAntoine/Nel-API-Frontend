const User =require('../models/users');
const {loginApi} = require('../utils/userCalls');

exports.getSignupPage = async(req, res)=>{

    res.render('signup');
}

exports.sendNewUser = async(req, res)=>{
   
    try {

        const newUser = await User.create(req.body);

        if(!newUser){
            throw new Error('Unable to register User');
        }

        const token = await loginApi(req);

        if(!token){
            throw new Error('Unable to register User');
        }

        newUser.tokens = newUser.tokens.concat({token})

        const result = await newUser.save();

        if(!result){
            throw new Error('Unable to register User');
        }

        res.cookie('token',token,{
            httpOnly:true
        });

        res.redirect('/users')
        
    } catch (error) {
        
        console.log('signup error: ', error);

        req.flash('error_msg', `${error.message}`)

        res.redirect('/signup');
    }
    
}