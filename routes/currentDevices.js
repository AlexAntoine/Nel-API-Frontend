const express = require('express');
const {getCurrentDevicePage,getCurrentDeviceEditPage, getAddCurrentDevicePage,updateCurrentDevice} = require('../controller/currentDevices');

const router = express.Router();

router.route('/current').get(getCurrentDevicePage);
router.route('/edit/current/:id').get(getCurrentDeviceEditPage).put(updateCurrentDevice);
router.route('/add/current').get(getAddCurrentDevicePage)

module.exports = router;