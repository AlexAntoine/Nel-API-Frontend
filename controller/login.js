const User = require('../models/users');
const {loginApi} = require('../utils/userCalls');

exports.getLoginPage = async(req, res, next)=>{
  
    res.render('login');

}

exports.userLogin = async(req, res, next)=>{
    const {email, password} = req.body;
    const user = await User.findByCredentials(email, password);
    // console.log(user);
    // console.log(req);
    // console.log('user: ',user);
    const token = await loginApi(req);
    console.log('token: ',token);

    user.tokens = user.tokens.concat({token});
    res.cookie('token',token)

    const result = await user.save();
    console.log('result: ',result);
    res.redirect('/users');
}

exports.logOut = async(req, res, next)=>{

    req.logout((err)=>{
        if(err){
            return next(err);
        }
        
        req.flash('success_msg', 'You have been logged out');
        res.redirect('/')
    });
   
}



