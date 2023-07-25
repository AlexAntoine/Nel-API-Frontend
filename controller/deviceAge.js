const {getDeviceAgeData,addNewDevice, deleteDeviceAgeData, getSingleDeviceage} = require('../utils/deviceAgeCalls');
const converter = require('json-2-csv');
const fs = require('fs');

exports.getDeviceAgePage = async(req, res)=>{
    
    try {
        const {token} = req.cookies;

        const result = await getDeviceAgeData(token);

        if(!result){
            throw new Error('Unable to retrieve data');
        }
        
        res.render('deviceage', {devices:result});

    } catch (error) {
        
        console.log(error);
        
        req.flash('error_msg', `${error.message}`);
       res.rediret('/users');
    }

}

exports.getDeviceAgeEditPage = async(req,res)=>{

    try {
        const {id} = req.params;
        const {token} = req.cookies;

        const result = await getSingleDeviceage(id,token);

        if(!result){
            throw new Error('Unable to retrieve data');
        }
        
        res.render('editDeviceAge', {devices:result});

    } catch (error) {
        
        console.log(error);
        
        req.flash('error_msg', `${error.message}`);
        res.redirect('/deviceage');
    }

}

exports.updateDeviceAge = async(req, res)=>{
    const {devicename,shipdate} = req.body;
    const {id} = req.params;
    const data =  {
        DeviceName:devicename,
        ShipDate:shipdate
    }
   
   try {
      
      const result = await updateDeviceAge(id,data,req.cookies.token);

      if(!result){
        throw new Error('Unable to update device');
      }

      req.flash('success_msg', 'Device successfully updated');

      res.redirect('/devicage');

   } catch (error) {
    
        console.log(error);

        req.flash('error_msg',`${error.message}`);

        res.redirect('/devicage');
   }
}

exports.getAddDevicePage =(req, res)=>{
    
    res.render('addDeviceAge')
}

exports.addNewDeviceAge = async(req, res)=>{
   const {devicename,shipdate} = req.body;

   const data = {
        DeviceName:devicename,
        ShipDate:shipdate
   }
   
   try {
        const result = await addNewDevice(data, req.cookies.token);
        
        if(!result){

            throw new Error('Unable to add device');
        }

        req.flash('success_msg', 'Device added successfully');

        res.redirect('/deviceage');

   } catch (error) {

     console.log(error);

     req.flash('error_msg',`${error.message}`);

     res.redirect('/add/deviceage');
   }
}

exports.deleteDevice = async(req, res)=>{

    try {
        const {token} = req.cookies;
        const {id} = req.params;

        const result = await deleteDeviceAgeData(id, token);
        
        req.flash('success_msg', 'Device was successfully deleted');

        res.redirect('/deviceage');

    } catch (error) {
        console.log(error);

        req.flash('error_msg','unable to delete device');

        res.redirect('/deviceage');
    }
}

exports.download = async(req, res)=>{
    const {token} = req.cookies;

    const result = await getDeviceAgeData(token);
   ;
    const options = {
        keys:[
            "DeviceName",
            "ShipDate"
        ]
    }

    const csv = await converter.json2csv(result, options);
   
    res.attachment('test.csv');
    res.status(200).send(csv);
}

