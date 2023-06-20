const axios = require('axios');

// Add new User
exports.addUser = async(userData,token)=>{

    const data  = await axios.post(`https://nel-api.herokuapp.com/api/nelusers`, userData, {
        headers:{
            'Authorization': `Bearer ${token}`
        }
    });

    return data.data;
}

// Update User
exports.updateAUser = async(id, userData,token)=>{

    const data  = await axios.put(`https://nel-api.herokuapp.com/api/nelusers/${id}`, userData, {
        headers:{
            'Authorization': `Bearer ${token}`
        }
    });

    return data.data;
}


// Get All Users Data
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

    const {data}  = await axios.get(`https://nel-api.herokuapp.com/api/nelusers/${id}`, {
        headers:{
            'Authorization': `Bearer ${token}`
        }
    });
    
   return data.data 

}

// Log into Api
exports.loginApi = async(req, email)=>{
   
    const userData = {
        email:req.user.email,
        role:'user'
    }

    const {data} = await axios.post(`https://nel-api.herokuapp.com/api/auth/web/login`, userData);
    // console.log(data.token);

    // console.log('line 50: ', req);

    return data.token;
}

// Delete User
exports.removeUser = async(id,token)=>{

    const data  = await axios.delete(`https://nel-api.herokuapp.com/api/nelusers/${id}`,{
        headers:{
            'Authorization': `Bearer ${token}`
        }
    });

    return data.data;
}