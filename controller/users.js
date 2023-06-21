const axios = require('axios');
const {loginApi, updateAUser, removeUser, addUser, getUsersData, getSingleUsersData} = require('../utils/userCalls');

exports.getNewUserPage = async(req, res)=>{
    res.render('addUser');
}

exports.getUserEditPage = async(req, res)=>{

    console.log(req);
    // try{
    //     const data = await getSingleUsersData(req.params.id, res.session.token);
        
    //     res.render('editUser',{user:''});

    // }catch(error){

    //     console.log(error);
        
    //     res.redirect('/users');
    // }
    // try {
        
    //     console.log(req.session.cookie.token);
    //     const data = await getSingleUsersData(req.params.id, req.session.cookie.token)
        
    //     res.render('editUser',{user:''});
        
    // } catch (error) {
    //     console.log(error);
        
    //     res.redirect('/users');

    // }
}

exports.getUsersPage = async(req, res)=>{
    // console.log(req);
    // if(!req.session.cookie.token){
    //     console.log('Hello 1');
    //     const token = await loginApi(req);
    //     req.session.cookie.token = token;
        
    //     const data  = await getUsersData(token);
    
    //     res.render('users',{users:data})
    // }

    const token =await loginApi(req);
    req.session.token = token;

    console.log('line 54: ',req);

    const data  = await getUsersData(token); 
    res.render('users',{users:data})   
   
}

exports.updateUser = async(req, res)=>{
    
    try {
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

        const result = await updateAUser(id, data, req.session.token)
        // console.log(result);
        res.redirect('/users')

    } catch (error) {

        console.log(error);

        req.flash('errro_msg', 'Unable to update user');
        res.redirect('/users');
    }
}

exports.addNewUser = async(req,res)=>{
    try {

        const {name, displayName,email, username,title,office} = req.body;

        const newUserData = {
            CN:name,
            DisplayName:displayName,
            UserPrincipalName:email,
            SamAccountName:username,
            Title:title,
            Office:office
        }

        await addUser(newUserData, req.session.token);

        req.flash('success_msg', 'New User Added!');
        
        res.redirect('/users');
        
    } catch (error) {
        console.log(error);

        req.flash('error_msg', `Unable to to add new user. Try Agian!`);

        res.redirect('/add/users');
    }

}

exports.deleteUser = async(req, res)=>{

    try{
        await removeUser(req.params.id,req.session.token);
        
        req.flash('success_msg',`User was successfully Deleted`);

        res.redirect('/users');

    }catch(error){
        console.log(error);

        req.flash('error_msg','User could not be delted. Try Again!');

        res.redirect('/users');
    }
  
}





