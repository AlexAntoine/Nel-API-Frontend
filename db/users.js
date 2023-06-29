const mongoose = require('mongoose');

const localDb = async()=>{
    mongoose.set('strictQuery', true);
    
    const db = mongoose.connect('mongodb://127.0.0.1:27017/usersDb',{useNewUrlParser:true, useUnifiedTopology: true});
    console.log('Database Connected'.cyan.underline.bold);
}

const prodDb = async()=>{
    mongoose.set('strictQuery', true);
    
    const db = mongoose.connect(process.env.PRODUCTION,{useNewUrlParser:true, useUnifiedTopology: true});
    console.log('Database Connected'.cyan.underline.bold);
}

module.exports =  {
    localDb,
    prodDb
};