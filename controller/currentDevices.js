const axios = require('axios');
const {getCurrentDevices, addNewDevice, updateCurrentDevice, getSingleCurrentDevice, deleteDevice} = require('../utils/currentDeviceCalls');

// Get
exports.getCurrentDevicePage = async(req, res)=>{
    try{
        const {token} = req.cookies;
       
        const data = await getCurrentDevices(token);
        console.log(data);

        if(!data){
            throw new Error('No data to display')
        }
    
        res.render('current',{devices:data});

    }catch(error){
        console.log(error);

        req.flash('error_msg', `${error.message}`);

        res.render('current',{devices:[]});
    }
    
}

exports.getCurrentDeviceEditPage = async (req, res)=>{
   
    const {token} = req.cookies;

    try{    
        
        const data = await getSingleCurrentDevice(req.params.id,token);
        // console.log('line 35: ', data);
        if(!data){
            throw new Error('Unable to retrive data')
        }
       
        res.render('editCurrentDevice', {devices:data})

    }catch(error){
        console.log(error);

        req.flash('error_msg', `${error.message}`);

        res.redirect('/current');
    }
}

exports.getAddCurrentDevicePage = async (req, res)=>{
   res.render('addCurrentDevice')
}

// PUT
exports.updateCurrentDevice = async (req, res)=>{
   
   const {ComputerName,Manufacturer, ReplacementCost,SerialNumber,ModelNumber,Age,CurrentYear,ShipDate,assignedTo,Notes} = req.body;
   const {id}= req.params;
   const {token} = req.cookies;

   const data = {
      ComputerName: ComputerName,
      Manufacturer: Manufacturer,
      SerialNumber:SerialNumber,
      ReplacementCost:ReplacementCost,
      ModelNumber:ModelNumber,
      Age:Age,
      CurrentYear:CurrentYear,
      ShipDate:ShipDate,
      assignedTo:assignedTo,
      notes:Notes
   }

   try {
        const result = await updateCurrentDevice(id, data, token);
        // console.log('line 76: ', result);
        if(!result){
            throw new Error('Unable to update device')
        }
        
        req.flash('success_msg', 'Device Successfully updated');

        res.redirect('/current');

   } catch (error) {

     console.log(error);
     
     req.flash('error_msg', `${error.message}`);

     res.redirect('/current');
   }
}


//POST
exports.addCurrentDevice = async(req, res)=>{

    const data = {
        ...req.body
    }

    try {
    
        const result = await addNewDevice(data, req.cookies.token);

        if(!result.success){
            throw new Error('Unable to save new device')
        }

        req.flash('success_msg', 'New device saved successfully!');

        res.redirect('/current');

    } catch (error) {
        console.log(error);

        req.flash('error_msg',`${error.message}`);

        res.redirect('/add/current')
    }
}

// Delete
exports.deleteCurrentDevice = async(req, res)=>{

    const {id} = req.params;

    try {
        const data = await deleteDevice(id, req.cookies.token);

        if(!data.success){
            throw new Error('Unable to delete device')
        }

        req.flash('success_msg',"Device deleted successfully");

        res.redirect('/current');

    } catch (error) {
        console.log(error);

        req.flash('error_msg', `${error.message}`);

        res.redirect('/current');
    }
}

