const axios = require('axios');

//GET all device
exports.getCurrentDevices = async(token)=>{

    const {data}  = await axios.get(`https://nel-api.herokuapp.com/api/current`, {
        headers:{
            'Authorization': `Bearer ${token}`
        }
    });

    return data.data;

}

//GET Single Device
exports.getSingleCurrentDevice = async(id,token)=>{

    const {data}  = await axios.get(`https://nel-api.herokuapp.com/api/current/${id}`, {
        headers:{
            'Authorization': `Bearer ${token}`
        }
    });
    
    return data.device;
}


// DELETE Device
exports.deleteDevice = async(id,token)=>{

    const data  = await axios.delete(`https://nel-api.herokuapp.com/api/current/${id}`,{
        headers:{
            'Authorization': `Bearer ${token}`
        }
    });
   
    return data.data;
}

// Add New Device
exports.addNewDevice = async(deviceData,token)=>{

    const data  = await axios.post(`https://nel-api.herokuapp.com/api/current`, deviceData, {
        headers:{
            'Authorization': `Bearer ${token}`
        }
    });

    // console.log(data);
    return data.data;
}

// Update Current Device
exports.updateCurrentDevice= async(id, deviceData,token)=>{

    const data  = await axios.put(`https://nel-api.herokuapp.com/api/current/${id}`, deviceData, {
        headers:{
            'Authorization': `Bearer ${token}`
        }
    });

    // console.log(data);
    return data.data;
}