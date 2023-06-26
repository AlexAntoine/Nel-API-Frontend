const jwt = require('jsonwebtoken');
const User = require('../models/users');

exports.auth = async(req, res, next)=>{
  
    try{
        token = req.cookies.token;
        // console.log('line 7: ', token);
    
        const decoded = jwt.verify(token,'abcd');
        // console.log('decoded: ', decoded);
    
        const user = await User.findOne({email:decoded.email, 'tokens.token':token});
        // console.log('auth 13: ',user);
        if(!user){
            throw new Error('Something went wrong')
        }
        
        req.token = token;
        req.user = user;
        next();
        
    }catch(error){
        console.log('Error: ',error);
        req.flash('error_msg', 'Please log In!')
        res.redirect('/')
    }
}
    
   