const User = require('../models/users');
const {loginApi} = require('../utils/userCalls');

exports.getLoginPage = async(req, res, next)=>{
  
    res.render('login');

}

exports.userLogin = async(req, res, next)=>{
    try {
        const {email, password} = req.body;
        const user = await User.findByCredentials(email, password);

        if(!user){
            throw new Error();
        }
 
        const token = await loginApi(req);
   
        if(!token){
            throw new Error()
        }
    
        user.tokens = user.tokens.concat({token});

        res.cookie('token',token,{
            httpOnly:true
        });
    
        const result = await user.save();

        if(!result){
            throw new Error()
        }
        // console.log('result: ',result);
        res.redirect('/users');

    } catch (error) {
        console.log(error);

        req.flash('error_msg',`${error.message}`);
        res.redirect('/login');

    }
   
}

exports.logOut = async(req, res, next)=>{

     res.clearCookie('token');
     req.session = null;

     res.redirect('/');
   
}



