const axios = require('axios');

exports.getOldDevicesPage = async(req, res)=>{
    
    const {data} = await axios.get('https://nel-api.herokuapp.com/api/old');

    res.render('old',{devices:data.data})
    
}

exports.getOldDevicesEditPage = async(req, res)=>{
   const {id} = req.params;
    
   const {data} =  await axios.get(`https://nel-api.herokuapp.com/api/old/${id}`);
   res.render('editOldDevice', {devices:data.data});
    
}

exports.getAddPage = async(req,res)=>{
    res.render('addOldDevice')
}