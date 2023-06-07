const express = require('express');
const router = express.Router();
const {isAuthenticated} = require('../middleware/auth');

const {getOldDevicesPage,getOldDevicesEditPage, getAddPage, updateOldDevice, addNewDevice, deleteDevice} = require('../controller/oldDevices');

router.route('/old').get(isAuthenticated, getOldDevicesPage);
router.route('/edit/old/:id').get(isAuthenticated, getOldDevicesEditPage).put(updateOldDevice);
router.route('/add/old').get(isAuthenticated, getAddPage).post(addNewDevice);
router.route('/delete/:id').post(isAuthenticated,deleteDevice)

module.exports = router;