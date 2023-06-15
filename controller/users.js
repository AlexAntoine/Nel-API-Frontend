const axios = require('axios');
const {loginApi, getUsersData} = require('../utils/apiCalls');
exports.getNewUserPage = async(req, res)=>{
    res.render('addUser');
}

//Activates after hitting Generate Data button
exports.apiLogin = async(req, res, next)=>{
   

}

exports.getHome = async(req, res,next)=>{
    const token = await loginApi(req);
    console.log('line 15: ',token);
    const data =  await getUsersData(token);

    console.log('line 18: ',data);
    res.render('home')
}

exports.getUserEditPage = async(req, res)=>{
    
    const {data} = await axios.get(`https://nel-api.herokuapp.com/api/nelusers/${req.params.id}`);
    
    res.render('editUser', {user:data.data})
}

exports.getUsersPage = async(req, res)=>{
    console.log('hello');
    console.log(req.token);
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





