const jwt = require('jsonwebtoken');
const User = require('../models/users');

exports.auth = async(req, res, next)=>{
  
    token = req.cookies.token;
    console.log('line 7: ', token);

    const decoded = jwt.verify(token,'abcd');
    console.log('decoded: ', decoded);

    const user = await User.findById({email:decoded.email, 'tokens.token':token});

    if(!user){
        throw new Error('Something went wrong')
    }
    
    req.token = token;
    req.user = user;
    next();
}