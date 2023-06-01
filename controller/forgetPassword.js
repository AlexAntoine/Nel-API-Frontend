require('dotenv')
const crypto = require('crypto')
const nodemailer = require('nodemailer');
const User = require('../models/users');

exports.forgetPassword = (req, res)=>{

    res.render('forgot')
}

exports.getNewPasswordPage = async(req,res)=>{
    const user = await User.findOne({resetPasswordToken:req.params.token, restPasswordExpires: {$gt:Date.now()} });

    // console.log(user);

    res.render('newPassword',{token:req.params.token})
}

exports.sendNewPassword = async(req, res,next)=>{
    
    try{
        const user = await User.findOne({resetPasswordToken:req.params.token, restPasswordExpires: {$gt:Date.now()} });
     
        if(!user){
            console.log(user);
            throw new Error('Token is invalid or has been expired')
        }
        
        if(req.body.password !== req.body.confirmpassword){
            throw new Error('Passwords do not match');
        }
        
        user.setPassword(req.body.password, err =>{
            user.resetPasswordToken = undefined;
            user.resetPasswordExpires = undefined;

            user.save(err =>{
                req.login(user, err =>{
                    next(err,user);
                });
            });
        })



    }catch(error){
        console.log(error)
        req.flash('error_msg',`${error.message}`);
        res.redirect('/forgot')
    }
  

}

exports.recoverPassword = async(req, res)=>{

    try{
        const token = await createToken();
    
         const user = await User.findOne({email:req.body.email});

         if(!user){
            throw new Error('User does not exist')
         }

         user.resetPasswordToken = token;
         user.restPasswordExpires =  Date.now() + 1800000 // 30 minutes;
     
       await user.save();
        
        sendEmail(req, res, user, token)
        
    }catch(e){
        console.log('error: ',e);
       
    //    req.flash('error_msg','User does not exist');
       res.redirect('/forgot')
    }

}

const createToken = async()=>{
     const buffer = await crypto.randomBytes(20);

     const token =  buffer.toString('hex');

    return token;
}

const sendEmail = async(req, res,user, token)=>{
    
    const smtpTransport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth:{
            user:process.env.USER,
            pass:process.env.PASS
        }
    });

    const mailOptions={
        to: user.email,
        from:'Don-Alex Antoine aantoine@newenglandlab.com',
        subject:'Recovery Email from Auth Project',
        text:`Please click the following link to recover your password\n\nhttp://${req.headers.host}/reset/${token}\n\nIf you did not request this, please ignore this email`
    }

   await smtpTransport.sendMail(mailOptions);

   req.flash('success_msg', 'Email has been sent');
   res.redirect('/forgot')
}

const confirmPasswordChange = async(req, res,user, token)=>{
    const smtpTransport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth:{
            user:process.env.USER,
            pass:process.env.PASS
        }
    });

    const mailOptions={
        to: user.email,
        from:'Don-Alex Antoine aantoine@newenglandlab.com',
        subject:'Your password has changed',
        text:`Hello ${user.name}\n\n 
        This is the confirmation that your password to your account ${user.email} has been changed`
    }

    await smtpTransport.sendMail(mailOptions);

    req.flash('success_msg', 'password has been changed successfully');
    res.redirect('/')
}