const axios = require('axios');

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

    const data  = await axios.get(`https://nel-api.herokuapp.com/api/users`, {
        headers:{
            'Authorization': `Bearer ${token}`
        }
    });

    return data;

}

exports.loginApi = async(req)=>{
    const userData = {
        email:req.user.email,
        role:'user'
    }

    const {data} = await axios.post(`https://nel-api.herokuapp.com/api/auth/web/login`, userData);
    // console.log(data.token);

    req.token = data.token;

    return data.token;
}