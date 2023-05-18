const axios = require('axios');

exports.getDeviceAgePage = async(req, res)=>{
    
    const devices = await axios.get('https://nel-api.herokuapp.com/api/deviceage');
    
    res.render('deviceage', {devices:devices.data.data});

}

exports.getDeviceAgeEditPage = async(req,res)=>{

    const {data} = await axios.get(`https://nel-api.herokuapp.com/api/deviceage/${req.params.id}`);

    res.render('editDeviceAge',{devices:data.data})
}

exports.updateDeviceAge = async(req, res)=>{
    const {devicename,shipdate} = req.body;

    const data =  {
        DeviceName:devicename,
        ShipDate:shipdate

    }
   
    await axios.put(`https://nel-api.herokuapp.com/api/deviceage/${req.params.id}`, data);
    
    res.redirect('/deviceage')
}

exports.addDevicePage =(req, res)=>{
    
    res.render('addDeviceAge')
}

exports.addNewDeviceAge = async(req, res)=>{
   const {devicename,shipdate} = req.body;

   const data = {
        DeviceName:devicename,
        ShipDate:shipdate
   }

  
    await axios.post(`https://nel-api.herokuapp.com/api/deviceage`, data);
    
    res.redirect('/deviceage');

  
   
}

exports.deleteDevice = async(req, res)=>{

    const result = await axios.delete(`https://nel-api.herokuapp.com/api/deviceage/${req.params.id}`);   
    
    res.redirect('/deviceage');
}