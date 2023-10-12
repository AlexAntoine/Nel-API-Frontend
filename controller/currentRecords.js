const {getAllCurrentRecords} = require('../utils/currentRecordsCalls');

exports.getAllRecords = async(req, res)=>{

    const records = await getAllCurrentRecords(req.cookies.token);
    
    // console.log(records);

    res.render('currentRecords',{records:records})
}