const crypto = require('crypto')
const nodemailer = require('nodemailer');
const async = require('async');
const User = require('../models/users');

exports.forgetPassword = async(req, res)=>{

    res.render('forgot')
}

exports.recoverPassword = async(req, res, next)=>{
    // Run method on after the other
    async.waterfall([
        //Generate Token
        (done)=>{
            crypto.randomBytes(20,(err, buffer)=>{
                const token = buffer.toString('hex');

                done(err, token)
            });
        },
        // Search User in DB and save token
       (token, done)=>{
           //Use findOne to fix the error. 
            User.find({email: req.body.email})
            .then(user =>{
                if(!user){
                    req.flash('error_msg','User does not exist');
                }

                user.resetPasswordToken = token;
                user.restPasswordExpires =  Date.now() + 1800000 // 30 minutes;

                user.save(err =>{
                    done(err, token, user)
                });
            })
            .catch(err =>{
                req.flash('error_msg', 'Error' + err);
                res.redirect('/forgot')
            })

        }
        
        // 3. Send email to user 

    ], err =>{
        if(err){
            res.redirect();
        }
    })
}