const axios = require('axios');
const {loginApi, getUsersData, getSingleUsersData} = require('../utils/apiCalls');

exports.getNewUserPage = async(req, res)=>{
    res.render('addUser');
}

exports.getUserEditPage = async(req, res)=>{
    console.log(req);
    // const token = await loginApi(req);

    // const data = getSingleUsersData(req.params.id, token)

    // console.log(data);

}

exports.getUsersPage = async(req, res)=>{
    
    const token = await loginApi(req);
   
    const data  = await getUsersData(token);

    console.log('line 18: ',data);
    res.render('users',{users:data})
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





