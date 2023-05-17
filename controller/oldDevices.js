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
    
    const {ComputerName,Manufacturer,SerialNumber,ModelNumber,Age,CurrentYear, AssignedTo,ShipDate,notes} = req.body;

    const data = {
        ComputerName: ComputerName,
        Manufacturer: Manufacturer,
        SerialNumber:SerialNumber,
        ModelNumber:ModelNumber,
        Age:Age,
        CurrentYear:CurrentYear,
        ShipDate:ShipDate,
        notes:notes ,
        assignedTo:AssignedTo, 
    }

    await axios.put(`https://nel-api.herokuapp.com/api/old/${req.params.id}`, data);
   
    res.redirect('/old')
}

exports.addNewDevice = async(req, res)=>{
    const {ComputerName,Manufacturer,SerialNumber,ModelNumber,Age,CurrentYear,ShipDate, AssignedTo,Notes} = req.body;
    
    const data ={
        ComputerName: ComputerName,
        Manufacturer: Manufacturer,
        SerialNumber:SerialNumber,
        ModelNumber:ModelNumber,
        Age:Age,
        CurrentYear:CurrentYear,
        ShipDate:ShipDate,
        assignedTo:AssignedTo,
        notes:Notes  
    }

    await axios.post(`https://nel-api.herokuapp.com/api/old`, data);

    res.redirect('/old')

}