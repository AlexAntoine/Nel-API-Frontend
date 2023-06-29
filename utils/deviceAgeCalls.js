const axios = require('axios');

// GET all device
exports.getDeviceAgeData = async(token)=>{

    const {data}  = await axios.get(`https://nel-api.herokuapp.com/api/deviceage`, {
        headers:{
            'Authorization': `Bearer ${token}`
        }
    });

   return data.data;

}

// GET single device
exports.getSingleDeviceage = async(id,token)=>{

    const {data}  = await axios.get(`https://nel-api.herokuapp.com/api/deviceage/${id}`, {
        headers:{
            'Authorization': `Bearer ${token}`
        }
    });
    
    return data.data;
}

// Update device
exports.updateDeviceage = async(id,deviceData, token)=>{

    const {data}  = await axios.put(`https://nel-api.herokuapp.com/api/deviceage/${id}`, deviceData, {
        headers:{
            'Authorization': `Bearer ${token}`
        }
    });
    
    return data.data;
}

// Add new device
exports.addNewDevice = async(deviceData,token)=>{

    const {data}  = await axios.post(`https://nel-api.herokuapp.com/api/deviceage`, deviceData, {
        headers:{
            'Authorization': `Bearer ${token}`
        }
    });

    return data;

}

// DELETE device
exports.deleteDeviceAgeData = async(id, token)=>{

    const {data}  = await axios.delete(`https://nel-api.herokuapp.com/api/deviceage/${id}`, {
        headers:{
            'Authorization': `Bearer ${token}`
        }
    });
    
    return data.data;
}