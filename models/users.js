const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = mongoose.Schema({
    name:{
        type:String
    },

    email:{
        type:String,
        unique:true
    },

    password:{
        type:String,
        //hides password
        select:false
    },
    resetPasswordToken:{
        type:String
    },
    restPasswordExpires:{
        type:Date
    }
});

userSchema.plugin(passportLocalMongoose, {usernameField:'email'});

const Users = mongoose.model('users', userSchema);

module.exports = Users;
