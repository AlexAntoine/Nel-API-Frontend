const express = require('express');
const {getCurrentDevicePage,getCurrentDeviceEditPage} = require('../controller/currentDevices');

const router = express.Router();

router.route('/current').get(getCurrentDevicePage);
router.route('/edit/current/:id').get(getCurrentDeviceEditPage);

module.exports = router;