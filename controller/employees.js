const axios = require('axios');
const Employee = require('../models/users');

exports.homePage = async(req, res)=>{
    // try {
    //     const employees = await Employee.find();

    //     res.render('index',{employees});

    // } catch (error) {
    //     console.log(error);
    // }

   
} 

exports.newEmployee = (req, res)=>{
    res.render('new');
}

exports.createEmployee = async(req, res)=>{

    const {name, designation, salary}= req.body;

    try {
        const newEmployee = new Employee({
            name,
            designation,
            salary
        });

        await newEmployee.save();

        res.redirect('/');
    } catch (error) {

        console.log(error);
    }

}

exports.searchEmployee = async(req, res)=>{

    res.render('search',{employee:""})
}

exports.findOneEmployee = async(req, res)=>{

    const {name} = req.query;
    
    try{
        const employee = await Employee.findOne({name});

        res.render('search',{employee:employee});
    }catch(e){
        console.log(e);
    }

}

exports.editEmployee = async(req, res)=>{
    const {id} = req.params;

    try {
        const employee = await Employee.findOne({_id:id});

        res.render('edit',{employee});
        
    } catch (error) {
        console.log(error);
    }
}

exports.updateEmployee = async(req, res)=>{
    const {id} = req.params;
    const {name, designation, salary}= req.body

    try {
        await Employee.updateOne({_id:id}, {$set:{
            name,
            designation,
            salary
    
        }});

        res.redirect('/');
    } catch (error) {

        console.log(error);
    }
  
}

exports.deleteEmployee = async(req, res)=>{
    const {id} =req.params;

    try {
        await Employee.findByIdAndDelete(id);

        req.flash('success_msg',"Employee deleted succesfully")
      
        res.redirect('/');
    } catch (error) {
        req.flash('error_msg',`ERROR ${error}`);
        console.log(error);
    }
}

exports.getTestPage= async(req, res)=>{

    console.log('Hello');

    const {data} = await axios.get('https://nel-api.herokuapp.com/api/old');
    console.log(data.data);
    res.render('test',{devices:data.data})
}