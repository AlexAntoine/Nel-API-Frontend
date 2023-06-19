const axios = require('axios');
const {loginApi, getUsersData, getSingleUsersData} = require('../utils/apiCalls');

exports.getNewUserPage = async(req, res)=>{
    res.render('addUser');
}

exports.getUserEditPage = async(req, res)=>{
    const data = await getSingleUsersData(req.params.id, req.session.token)

    res.render('editUser',{user:data});
}

exports.getUsersPage = async(req, res)=>{
    if(!req.session.token){
        console.log('Hello');

        const token = await loginApi(req);
        req.session.token  = token;
    
        const data  = await getUsersData(token);
    
        res.render('users',{users:data})
    }
    
   const data = await getUsersData(req.session.token);

   res.render('users',{users:data});
   
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





