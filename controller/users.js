const axios = require('axios');
const {loginApi, updateAUser, removeUser, addUser, getUsersData, getSingleUsersData} = require('../utils/userCalls');

exports.getNewUserPage = async(req, res)=>{
    res.render('addUser');
}

exports.getUserEditPage = async(req, res)=>{
        // console.log(req.cookies.token);
    try{
        const data = await getSingleUsersData(req.params.id,req.cookies.token);
        
        if(!data){
            throw new Error('Unable to retireve data')
        }
        res.render('editUser',{user:data});

    }catch(error){

        console.log(error);
        
        res.redirect('/users');
    }
    
}

exports.getUsersPage = async(req, res)=>{

    if(!req.cookies.token){
        console.log('Hello World');
        try{
            const data = await getUsersData(req.cookies.token);
    
            if(!data){
                
                throw new Error('Unable to retrieve data')
            }
            res.render('users', {users:data});
    
        }catch(error){
    
            console.log(error);
            req.flash('error_msg', `${error.message}`)
            res.render('users', {users:[]});
        }
    }
    const data = await getUsersData(req.cookies.token);

    res.render('users', {users: data})
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

        const result = await updateAUser(id, data, req.cookies.token)
        // console.log(result);
        res.redirect('/users')

    } catch (error) {

        console.log(error);

        req.flash('error_msg', 'Unable to update user');
        res.redirect('/users');
    }
}

// POST 
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

        await addUser(newUserData, req.cookies.token);

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
        await removeUser(req.params.id,req.cookies.token);
        
        req.flash('success_msg',`User was successfully Deleted`);

        res.redirect('/users');

    }catch(error){
        console.log(error);

        req.flash('error_msg','User could not be delted. Try Again!');

        res.redirect('/users');
    }
  
}





