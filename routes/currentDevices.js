const express = require('express');
const {isAuthenticated} = require('../middleware/auth');
const {getCurrentDevicePage,getCurrentDeviceEditPage,getAddCurrentDevicePage,updateCurrentDevice, addCurrentDevice, deleteCurrentDevice} = require('../controller/currentDevices');

const router = express.Router();

router.route('/current').get(isAuthenticated, getCurrentDevicePage);
router.route('/edit/current/:id').get(isAuthenticated,getCurrentDeviceEditPage).put(updateCurrentDevice);
router.route('/add/current').get(isAuthenticated,getAddCurrentDevicePage).post(addCurrentDevice);
router.route('/delete').post(isAuthenticated,deleteCurrentDevice);

module.exports = router;