const express = require('express');
const {getCurrentDevicePage,getCurrentDeviceEditPage, deleteCurrentDevice, getAddCurrentDevicePage,updateCurrentDevice, addCurrentDevice} = require('../controller/currentDevices');

const router = express.Router();

router.route('/current').get(getCurrentDevicePage);
router.route('/edit/current/:id').get(getCurrentDeviceEditPage).put(updateCurrentDevice);
router.route('/add/current').get(getAddCurrentDevicePage).post(addCurrentDevice);
router.route('/delete/:id').post(deleteCurrentDevice);

module.exports = router;