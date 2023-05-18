const axios = require('axios');

exports.getCurrentDevicePage = async(req, res)=>{

    const devices = await axios.get('https://nel-api.herokuapp.com/api/current');
   
    res.render('currentdevices', {devices: devices.data.data})
}

exports.getCurrentDeviceEditPage = async (req, res)=>{
   
    const {data} = await axios.get(`https://nel-api.herokuapp.com/api/current/${req.params.id}`);
    
    res.render('editCurrentDevice',{devices:data.device});
}

exports.getAddCurrentDevicePage = async (req, res)=>{
   res.render('addCurrentDevice')
}

exports.updateCurrentDevice = async (req, res)=>{

   const {ComputerName,Manufacturer,SerialNumber,ModelNumber,Age,CurrentYear,ShipDate,AssignedTo,Notes} = req.body;

   const data = {
      ComputerName: ComputerName,
      Manufacturer: Manufacturer,
      SerialNumber:SerialNumber,
      ModelNumber:ModelNumber,
      Age:Age,
      CurrentYear:CurrentYear,
      ShipDate:ShipDate,
      assignTo:AssignedTo,
      notes:Notes
   }

    await axios.put(`https://nel-api.herokuapp.com/api/current/${req.params.id}`,data);
    
    res.redirect('/current');
}

exports.addCurrentDevice = async(req, res)=>{
    console.log(req.body);
    const {ComputerName,Manufacturer,SerialNumber,ModelNumber,Age,CurrentYear,ShipDate} = req.body;

    const data ={
        ComputerName,
        Manufacturer,
        SerialNumber,
        ModelNumber,
        Age,
        CurrentYear,
        ShipDate,
    }
    
    const result = await axios.post(`https://nel-api.herokuapp.com/api/current`,data);
    console.log(result);

    res.redirect('/current');
}

exports.deleteCurrentDevice  = async(req, res)=>{
    const {id} = req.params;

    const result = await axios.delete(`https://nel-api.herokuapp.com/api/current/${id}`);
    
    res.redirect('/current');
}