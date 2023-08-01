const express = require('express');
const {auth} = require('../middleware/auth');
const {getCurrentDevicePage,getCurrentDeviceEditPage,getAddCurrentDevicePage,updateCurrentDevice, addCurrentDevice, deleteCurrentDevice, downloadCurrentDevices} = require('../controller/currentDevices');

const router = express.Router();

router.route('/current').get(auth, getCurrentDevicePage);
router.route('/edit/current/:id').get(auth, getCurrentDeviceEditPage).put(updateCurrentDevice);
router.route('/add/current').get(auth, getAddCurrentDevicePage).post(addCurrentDevice);
router.route('/current/delete/:id').post(auth, deleteCurrentDevice);
router.route('/current/download').get(downloadCurrentDevices);
module.exports = router;