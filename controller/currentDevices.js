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