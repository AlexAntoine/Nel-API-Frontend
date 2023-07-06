const User =require('../models/users');
const {loginApi} = require('../utils/userCalls');

exports.getSignupPage = async(req, res)=>{

    res.render('signup');
}

exports.sendNewUser = async(req, res)=>{
   
    try {

        const newUser = await User.create(req.body);

        if(newUser.email){
            throw new Error('This is an existing user. Please login');
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

        if(error.code === 11000){
            throw new Error(`This is an existing user. Please login`)
            
        }
        req.flash('error_msg', `${error.message}`)

        res.redirect('/signup');
    }
    
}