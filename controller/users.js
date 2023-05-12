const axios = require('axios');

exports.getNewUserPage = async(req, res)=>{
    res.render('addUser');
}

exports.getUserEditPage = async(req, res)=>{
    
    const {data} = await axios.get(`https://nel-api.herokuapp.com/api/nelusers/${req.params.id}`);
    
    res.render('editUser', {user:data.data})
}

exports.getUsersPage = async(req, res)=>{
    
    const {data} = await axios.get('https://nel-api.herokuapp.com/api/nelusers');
   
    res.render('users', {users:data.data});
}