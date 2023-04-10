const mongoose = require('mongoose');

const newEmployeeSchema = mongoose.Schema({
    name:{
        type:String
    },

    designation:{
        type:String
    },

    salary:{
        type:Number
    }
});

const Employee = mongoose.model('employee', newEmployeeSchema);

module.exports = Employee;
