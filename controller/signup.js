const passport = require('passport');
const User =require('../models/users')

exports.getSignupPage = async(req, res)=>{

    res.render('signup');
}

exports.sendNewUser = async(req, res)=>{
    const {name, email, password} = req.body;

    const user = {
        name,
        email,
    }

    User.register(user,password,(err, user)=>{
        if(err){
            req.flash('error_msg','error '+err);
            res.redirect('/signup');
            console.log(err)
        }

        passport.authenticate('local')(req,res,()=>{
            req.flash('success_msg', 'Account Created Succcessfully');
            res.redirect('/login')
        })
    })
}