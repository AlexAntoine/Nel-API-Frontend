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

exports.updateUser = async(req, res)=>{
    const {id} = req.params;

    const {name, email,username,title,office} = req.body;
    
    const data = {
        CN:name,
        DisplayName:name,
        SamAccountName:username,
        UserPrincipalName:email,
        Title:title,
        Office:office
    };
    await axios.put(`https://nel-api.herokuapp.com/api/nelusers/${id}`,data);

    res.redirect('/users')
}

exports.addNewUser = async(req,res)=>{
    console.log(req.body);
    const {name, displayName,email, username,title,office} = req.body;

    const data = {
        CN:name,
        DisplayName:displayName,
        UserPrincipalName:email,
        SamAccountName:username,
        Title:title,
        Office:office
    }

    const result = await axios.post(`https://nel-api.herokuapp.com/api/nelusers`,data);

    res.redirect('/users')
}

exports.deleteUser = async(req, res)=>{
    const result = await axios.delete(`https://nel-api.herokuapp.com/api/nelusers/${req.params.id}`);

    res.redirect('/users')
}