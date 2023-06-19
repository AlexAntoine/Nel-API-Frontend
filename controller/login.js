const passport = require('passport')
exports.getLoginPage = async(req, res, next)=>{
  
    res.render('login');

}

exports.logOut = async(req, res, next)=>{

    req.logout((err)=>{
        if(err){
            return next(err);
        }

        req.session.token = undefined;
        req.session.user = null;
        req.flash('success_msg', 'You have been logged out');
        res.redirect('/')
    });
   
}



