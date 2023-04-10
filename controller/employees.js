const Employee = require('../models/employees');

exports.homePage = async(req, res)=>{
   const employees = await Employee.find();
    res.render('index',{employees});
} 

exports.newEmployee = (req, res)=>{
    res.render('new');
}

exports.createEmployee = async(req, res)=>{
    const {name, designation, salary}= req.body;
    // console.log(req.body)
    const newEmployee = new Employee({
        name,
        designation,
        salary
    });

    const data = await newEmployee.save();

    res.redirect('/');
    // console.log(data);
}