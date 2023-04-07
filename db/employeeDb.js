const mongoose = require('mongoose');

const localDb = async()=>{
    mongoose.set('strictQuery', true);
    
    const db = mongoose.connect('mongodb://127.0.0.1:27017/employeeDB',{useNewUrlParser:true, useUnifiedTopology: true});
    console.log('Database Connected'.cyan.underline.bold);
}

module.exports =  {
    localDb
};