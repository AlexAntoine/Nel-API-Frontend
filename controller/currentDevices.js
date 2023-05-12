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