const axios = require('axios');

exports.getOldDevicesPage = async(req, res)=>{
    
    const {data} = await axios.get('https://nel-api.herokuapp.com/api/old');

    res.render('old',{devices:data.data})
    
}

exports.getOldDevicesEditPage = async(req, res)=>{
   const {id} = req.params;
    
   const {data} =  await axios.get(`https://nel-api.herokuapp.com/api/old/${id}`);
   res.render('editOldDevice', {devices:data.data});
    
}

exports.getAddPage = async(req,res)=>{
    res.render('addOldDevice')
}

exports.updateOldDevice = async(req, res)=>{
    
    const {ComputerName,Manufacturer,SerialNumber,ModelNumber,Age,CurrentYear, ShipDate, assignedTo,notes} = req.body;

    const data = {
        ComputerName: ComputerName,
        Manufacturer: Manufacturer,
        SerialNumber:SerialNumber,
        ModelNumber:ModelNumber,
        Age:Age,
        CurrentYear:CurrentYear,
        ShipDate:ShipDate,
        assignTo:assignedTo,
        notes:notes  
    }

    await axios.put(`https://nel-api.herokuapp.com/api/old/${req.params.id}`, data);
   
    res.redirect('/old')
}