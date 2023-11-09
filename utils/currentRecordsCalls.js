const axios = require('axios');

//Get All Current Records
exports.getAllCurrentRecords = async(token)=>{
    
    const {data}  = await axios.get(`https://nel-api.herokuapp.com/api/records`, {
        headers:{
            'Authorization': `Bearer ${token}`
        }
    });

    return data.data;
}

// Delete Current Records
exports.deleteCurrentRecordCall = async(id, token)=>{

   const {data} =await axios.delete(`https://nel-api.herokuapp.com/api/records/${id}`, {
        headers:{
            'Authorization': `Bearer ${token}`
        }
    });
    
    return data;
}