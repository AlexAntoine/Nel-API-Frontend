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

exports.searchEmployee = async(req, res)=>{

    res.render('search',{employee:""})
}

exports.findOneEmployee = async(req, res)=>{

    const {name} = req.query;
    // console.log(searchQuery);
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

exports.getEditPage = async(req, res)=>{
   res.render('edit',{employee:""})
}

exports.updateEmployee = async(req, res)=>{
    const {id} = req.params;
    const data = req.body

    console.log(data);
    const employee = await Employee.updateOne({_id:id}, {$set:{
        name:req.body.name,

    }});
    console.log(employee);

    res.redirect('/');

}