const axios = require('axios');

exports.getUsersPage = async(req, res)=>{

    // console.log('Hello');

    const {data} = await axios.get('https://nel-api.herokuapp.com/api/nelusers');
    // console.log(data.data);
    res.render('users',{users:data.data});
}