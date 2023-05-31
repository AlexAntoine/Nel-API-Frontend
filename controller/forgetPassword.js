require('dotenv')
const crypto = require('crypto')
const nodemailer = require('nodemailer');
const User = require('../models/users');

exports.forgetPassword = async(req, res)=>{

    res.render('forgot')
}

exports.recoverPassword = async(req, res, done)=>{

    try{
        const token = await createToken();
    
         const user = await User.findOne({email:req.body.email});

         user.resetPasswordToken = token;
         user.restPasswordExpires =  Date.now() + 1800000 // 30 minutes;
     
        const result = await user.save();
        
        sendEmail(req, res, user, token)
        
    }catch(e){
        console.log('error: ',e);
       
       req.flash('error_msg','User does not exist');
       res.redirect('/forgot')
    }

}

const createToken = async()=>{
     //Generate Token
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
        text:`Please click the following link to recover your password\n\nhttp://${req.headers.host}/${token}\n\n 
        If you did not request this, please ignore this emai`
    }

    // smtpTransport.sendMail(mailOptions, err=>{
    //     console.log(err);
    //     req.flash('success_msg', 'Email send with further instructions. Please check your email');
    //     res.redirect('/forgot');
    // })

   const result = await smtpTransport.sendMail(mailOptions)

   console.log(result);
   req.flash('success_msg', 'Email has been sent');
   res.redirect('/forgot')
}