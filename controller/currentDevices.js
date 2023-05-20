const axios = require('axios');

// Get
exports.getCurrentDevicePage = async(req, res)=>{

    const {data} = await axios.get('https://nel-api.herokuapp.com/api/current');
    
    res.render('currentDevices', {devices:data.data})
}

exports.getCurrentDeviceEditPage = async (req, res)=>{
   
    const {data} = await axios.get(`https://nel-api.herokuapp.com/api/current/${req.params.id}`);
    
    res.render('editCurrentDevice',{devices:data.device});
}

exports.getAddCurrentDevicePage = async (req, res)=>{
   res.render('addCurrentDevice')
}

// PUT
exports.updateCurrentDevice = async (req, res)=>{
   
   const {ComputerName,Manufacturer,SerialNumber,ModelNumber,Age,CurrentYear,ShipDate,AssignedTo,Notes} = req.body;

   const data = {
      ComputerName: ComputerName,
      Manufacturer: Manufacturer,
      SerialNumber:SerialNumber,
      ModelNumber:ModelNumber,
      Age:Age,
      CurrentYear:CurrentYear,
      ShipDate:ShipDate,
      assignTo:AssignedTo,
      notes:Notes
   }

    await axios.put(`https://nel-api.herokuapp.com/api/current/${req.params.id}`,data);
    
    res.redirect('/current');
}


//POST
exports.addCurrentDevice = async(req, res)=>{

    // console.log(req.body);
    // const {ComputerName,Manufacturer,SerialNumber,ModelNumber,OsVersion,ChassisTypesRaw,Age,CurrentYear,CompId,ReplacementCost,shouldRetire,Type,assignedTo,oldEnough,ChassisType,ChassisSubType,ShipDate,notes,LastLogin,GetLastDeviceLogin} = req.body;
    // const data ={
    //     ComputerName,
    //     Manufacturer,
    //     SerialNumber,
    //     ModelNumber,
    //     OsVersion,
    //     ChassisTypesRaw,
    //     ShipDate,
    //     Age,
    //     CurrentYear,
    //     CompId,
    //     ReplacementCost,
    //     Type,
    //     assignedTo,
    //     shouldRetire,
    //     oldEnough,
    //     ChassisSubType,
    //     ChassisType,
    //     notes,
    //     LastLogin,
    //     GetLastDeviceLogin
    // }

    // const data = {
    //     ...req.body
    // }


    
    // const result = await axios.post(`https://nel-api.herokuapp.com/api/current`,data);
    // console.log(result);

    // res.redirect('/current');
}

// Delete
exports.deleteCurrentDevice = async(req, res)=>{

    console.log('Hello World');
}

