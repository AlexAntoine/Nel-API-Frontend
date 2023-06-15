const axios = require('axios');
const Users = require('../models/users');

const getOldDeviceData = async(token)=>{

    const data  = await axios.get(`https://nel-api.herokuapp.com/api/old`, {
        headers:{
            'Authorization': `Bearer ${token}`
        }
    });

    return console.log(data);

}

const getDeviceAgeData = async(token)=>{

    const data  = await axios.get(`https://nel-api.herokuapp.com/api/deviceage`, {
        headers:{
            'Authorization': `Bearer ${token}`
        }
    });

    return data;

}

exports.getUsersData = async(token)=>{

    const {data}  = await axios.get(`https://nel-api.herokuapp.com/api/nelusers`, {
        headers:{
            'Authorization': `Bearer ${token}`
        }
    });
    
   return data.data 

}

//GET Single user data
exports.getSingleUsersData = async(id, token)=>{

    const {data}  = await axios.get(`https://nel-api.herokuapp.com/api/nelusers/:${id}`, {
        headers:{
            'Authorization': `Bearer ${token}`
        }
    });
    
   return data.data 

}

exports.loginApi = async(req)=>{
   
    const userData = {
        email:req.user.email,
        role:'user'
    }

    const {data} = await axios.post(`https://nel-api.herokuapp.com/api/auth/web/login`, userData);
    // console.log(data.token);

    req.user.token = data.token;
    // console.log('line 49: ', req.user.token);
    console.log('line 50: ', req);

    return data.token;
}