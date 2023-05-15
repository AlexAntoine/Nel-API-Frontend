const express = require('express');
const router = express.Router();

const {getDeviceAgePage,addDevicePage, getDeviceAgeEditPage,updateDeviceAge} = require('../controller/deviceAge');

router.route('/deviceage').get(getDeviceAgePage);
router.route('/edit/deviceage/:id').get(getDeviceAgeEditPage).put(updateDeviceAge);
router.route('/add/deviceage').get(addDevicePage);

module.exports = router;