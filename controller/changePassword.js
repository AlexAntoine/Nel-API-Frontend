const User = require('../models/users');

exports.getChangePasswordPage = (req, res)=>{

    res.render('changepassword');
}

exports.getChangePassword = (req, res)=>{

    const {password, confirmpassword} = req.body;

    if(password !== confirmpassword){
        req.flash('error_msg', `Passwords do not match!`);
        return res.redirect('/password/change');
    }

    User.findOne({email:req.user.email})
    .then(user => {
        user.setPassword(password, err =>{
            user.save()
            .then(user =>{
                req.falsh('success_msg','password changed!');
                res.redirect('/user')
            })
            .catch(err =>{
                req.flash('error_msg',`${err.message}`);
                res.redirect('/password/change')
            })
        })
    })
}

exports.getChangePassword = async(req, res)=>{
   
    try {
        const {password, confirmpassword} = req.body;

        if(password !== confirmpassword){
            throw new Error('Passwords do not match')
        }

        const user = await User.findOne({email:req.user.email});
        
        await user.setPassword(password);
        
        await user.save();
        
        res.redirect('/user');

    } catch (error) {

        req.flash('error_msg',`${error.message}`)
        res.redirect('/password/change');
    }
}