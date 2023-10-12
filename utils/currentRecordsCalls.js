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