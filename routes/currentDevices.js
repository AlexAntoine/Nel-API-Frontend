const express = require('express');
const {auth} = require('../middleware/auth');
const {getCurrentDevicePage,getCurrentDeviceEditPage,getAddCurrentDevicePage,updateCurrentDevice, addCurrentDevice, deleteCurrentDevice} = require('../controller/currentDevices');

const router = express.Router();

router.route('/current').get(auth, getCurrentDevicePage);
router.route('/edit/current/:id').get(auth, getCurrentDeviceEditPage).put(updateCurrentDevice);
router.route('/add/current').get(auth, getAddCurrentDevicePage).post(addCurrentDevice);
router.route('/current/delete/:id').post(auth, deleteCurrentDevice);

module.exports = router;