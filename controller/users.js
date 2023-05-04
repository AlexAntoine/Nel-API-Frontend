const axios = require('axios');

exports.getNewUserPage = async(req, res)=>{

    res.render('addUser');
}

exports.getUserEditPage = async(req, res)=>{
    console.log(req.params);

    res.render('editUser', {users:''})
}

exports.getUsersPage = async(req, res)=>{
    
    const {data} = await axios.get('https://nel-api.herokuapp.com/api/nelusers');
    console.log(data.data);
    res.render('users', {users:data.data});
}