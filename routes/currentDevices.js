const express = require('express');
const {getCurrentDevicePage,getCurrentDeviceEditPage, getAddCurrentDevicePage} = require('../controller/currentDevices');

const router = express.Router();

router.route('/current').get(getCurrentDevicePage);
router.route('/edit/current/:id').get(getCurrentDeviceEditPage);
router.route('/add/current').get(getAddCurrentDevicePage)

module.exports = router;