const axios = require('axios');

// Get all devices
exports.getOldDeviceData = async(token)=>{

    const {data}  = await axios.get(`https://nel-api.herokuapp.com/api/old`, {
        headers:{
            'Authorization': `Bearer ${token}`
        }
    });

    return data.data;

}

// Delete device
exports.deleteOldDeviceData = async(id,token)=>{

    const {data}  = await axios.delete(`https://nel-api.herokuapp.com/api/old/${id}`, {
        headers:{
            'Authorization': `Bearer ${token}`
        }
    });

    return data.data;

}

// Get single old device
exports.getSingleOldDevice = async(id,token)=>{

    const {data}  = await axios.get(`https://nel-api.herokuapp.com/api/old/${id}`, {
        headers:{
            'Authorization': `Bearer ${token}`
        }
    });

    return data.data;

}

// Add old device
exports.addOldDevice = async(deviceData,token)=>{

    const {data}  = await axios.post(`https://nel-api.herokuapp.com/api/old`, deviceData,{
        headers:{
            'Authorization': `Bearer ${token}`
        }
    });

    return data.data;

}

// update old device
exports.updateOldDeviceData = async(id, deviceData,token)=>{

    const {data}  = await axios.put(`https://nel-api.herokuapp.com/api/old/${id}`, deviceData,{
        headers:{
            'Authorization': `Bearer ${token}`
        }
    });

    return data.data;

}

