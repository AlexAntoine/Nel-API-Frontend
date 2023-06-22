const User =require('../models/users');
const {loginApi} = require('../utils/userCalls');

exports.getSignupPage = async(req, res)=>{

    res.render('signup');
}

exports.sendNewUser = async(req, res)=>{
   
    const newUser = await User.create(req.body);

    const token = await loginApi(req);
    console.log('line 13 Token: ', token);

    newUser.tokens = newUser.tokens.concat({token})

    const result = await newUser.save();
    console.log('line 19 result: ',result);

    res.cookie('token',token,{
        httpOnly:true
    });

    res.redirect('/users')
}