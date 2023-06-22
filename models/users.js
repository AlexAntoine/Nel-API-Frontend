const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

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
    },

    tokens:[{
        token:{
            type:String,
        }
    }],

    resetPasswordToken:{
        type:String
    },
    resetPasswordExpires:{
        type:Date
    }
});

userSchema.pre('save',async function(next){

    const user = this;

    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8);
    }

    next();
});

userSchema.statics.findByCredentials = async(email, password)=>{
    
    const user = await Users.findOne({email:email});

    if(!user){
        console.log('user: ', user);
        throw new Error('unable to login: user issue');
    }

    const isMatched = await bcrypt.compare(password, user.password);

    if(!isMatched){
        throw new Error('unable ot login: Password Issue')
    }

    return user;
}

const Users = mongoose.model('users', userSchema);

module.exports = Users;
