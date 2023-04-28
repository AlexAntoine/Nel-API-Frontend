const express = require('express');
const {getCurrentDevicePage} = require('../controller/currentDevices');

const router = express.Router();

router.route('/current').get(getCurrentDevicePage);

module.exports = router;