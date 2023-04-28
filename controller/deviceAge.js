const axios = require('axios');

exports.getDeviceAgePage = async(req, res)=>{
    
    const devices = await axios.get('https://nel-api.herokuapp.com/api/deviceage');

    res.render('deviceage', {devices:devices.data.data});

}