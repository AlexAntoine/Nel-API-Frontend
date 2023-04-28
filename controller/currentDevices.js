const axios = require('axios');

exports.getCurrentDevicePage = async(req, res)=>{

    const devices = await axios.get('https://nel-api.herokuapp.com/api/current');
    // console.log(devices.data.data);
    res.render('currentdevices', {devices: devices.data.data})
}