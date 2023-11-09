const express = require('express');

const {getAllRecords, deleteCurrentRecords, downloadCurrentRecords} = require('../controller/currentRecords')
const {auth} = require('../middleware/auth');
const router = new express.Router();


router.route('/records').get(getAllRecords);
router.route('/records/delete/:id').post(auth,deleteCurrentRecords);
router.route('/records/download').get(auth, downloadCurrentRecords);


module.exports = router