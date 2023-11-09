const {getAllCurrentRecords, deleteCurrentRecordCall} = require('../utils/currentRecordsCalls');
const converter = require('json-2-csv');

exports.getAllRecords = async(req, res)=>{

    const records = await getAllCurrentRecords(req.cookies.token);
    // console.log(records);
    res.render('currentRecords',{records:records})
}

// GET Edit Page

//Update Function

//Delete Function
exports.deleteCurrentRecords = async(req, res)=>{

    try {
        const {id} = req.params;
        const data =await deleteCurrentRecordCall(id, req.cookies.token);
        
        //why is success spell incorrectly
        if(!data.success){
            throw new Error('Unable to delete devices')
        }

        req.flash('success_msg','Item has been deleted.');
        res.redirect('/records');

    } catch (error) {
        console.log(error);

        req.flash('error_msg','Unable to preform action. Please try again')
        res.redirect('/current');
                
    }

}

//Download Function
exports.downloadCurrentRecords = async(req, res)=>{
    const {token} = req.cookies;

    const result = await getAllCurrentRecords(token);

    const options = {
        keys:[
           "UserName",
           "DeviceName",
           "LoginCount",
           "Date",
           "Client",
        ],
        emptyFieldValue:""
    }

    const csv = await converter.json2csv(result, options);

    res.attachment('currentRecords.csv');
    res.status(200).send(csv);

}