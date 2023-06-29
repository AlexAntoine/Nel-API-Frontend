const {addOldDevice, updateOldDeviceData, getOldDeviceData, getSingleOldDevice, deleteOldDeviceData} = require('../utils/oldDeviceCalls');

exports.getOldDevicesPage = async(req, res)=>{
    
    try {
        const results = await getOldDeviceData(token);
    
        res.render('old', {devices:results});

    } catch (error) {

        console.log(error);

        req.flash('error_msg', 'Unable to retrieve page');
        res.redirect('/users');
    }
}

exports.getOldDevicesEditPage = async(req, res)=>{

    try {
        const {token} = req.cookies;
        const {id} = req.params;

        const results = await getSingleOldDevice(id, token);
        console.log('line 26: ',results);

        req.flash('success_msg', 'Device successfully updated');

        res.render('editOldDevice', {devices:results});

    } catch (error) {

        console.log(error);

        req.flash('error_msg', 'Unable to retrieve page');
        res.redirect('/old');
    }
}

exports.getAddPage = async(req,res)=>{
    res.render('addOldDevice')
}

exports.updateOldDevice = async(req, res)=>{

    const {ComputerName,Manufacturer,SerialNumber,ModelNumber,Age,CurrentYear,ShipDate, AssignedTo,notes} = req.body;
    console.log(req.body);
    
    const data ={
        ComputerName: ComputerName,
        Manufacturer: Manufacturer,
        SerialNumber:SerialNumber,
        ModelNumber:ModelNumber,
        Age:Age,
        CurrentYear:CurrentYear,
        ShipDate:ShipDate,
        assignedTo:AssignedTo,
        notes:notes  
    }
    const {token} = req.cookies;
    const {id} = req.params;
  
    try {
       

        const results = await updateOldDeviceData(id, data, token);
        // console.log(results);

        req.flash('success_msg', 'Device successfully updated');

        res.redirect('/old');

    } catch (error) {

        console.log(error);

        req.flash('error_msg', 'Unable to update device');
        res.redirect('/old');
    }

}



exports.addNewDevice = async(req, res)=>{

    const {ComputerName,Manufacturer,SerialNumber,ModelNumber,Age,CurrentYear,ShipDate, AssignedTo,Notes} = req.body;
    
    const data ={
        ComputerName: ComputerName,
        Manufacturer: Manufacturer,
        SerialNumber:SerialNumber,
        ModelNumber:ModelNumber,
        Age:Age,
        CurrentYear:CurrentYear,
        ShipDate:ShipDate,
        assignedTo:AssignedTo,
        notes:Notes  
    }
    const {token} = req.cookies;
  
    try {
       

        const results = await addOldDevice(data, token);
        console.log(results);

        req.flash('success_msg', 'Device successfully added');

        res.redirect('/old');

    } catch (error) {

        console.log(error);

        req.flash('error_msg', 'Unable to add device');
        res.redirect('/old');
    }

}

exports.deleteDevice = async(req, res)=>{

    try {
        
        const result = await deleteOldDeviceData(req.params.id, req.cookies.token);
        // console.log(result);

        req.flash('success_msg','Device successfully deleted');

        res.redirect('/old');

    } catch (error) {

        console.log(error);

        req.flash('error_msg', 'Unable to delete device');

        res.redirect('/deviceage');
    }
}