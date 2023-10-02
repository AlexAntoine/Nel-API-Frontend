const express = require('express');

const {getAllRecords} = require('../controller/currentRecords')
const router = new express.Router();


router.route('/records').get(getAllRecords);


module.exports = router