const express = require('express');
const router = express.Router();

const {getDeviceAgePage} = require('../controller/deviceAge');

router.route('/deviceage').get(getDeviceAgePage);

module.exports = router;