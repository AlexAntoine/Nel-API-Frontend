const express = require('express');
const router = express.Router();
const {auth} = require('../middleware/auth');

const {getOldDevicesPage,getOldDevicesEditPage, downloadOldDevices, getAddPage, updateOldDevice, addNewDevice, deleteDevice} = require('../controller/oldDevices');

router.route('/old').get(auth, getOldDevicesPage);
router.route('/edit/old/:id').get(auth, getOldDevicesEditPage).put(updateOldDevice);
router.route('/add/old').get(auth, getAddPage).post(addNewDevice);
router.route('/old/delete/:id').post(auth,deleteDevice);
router.route('/old/download').get(downloadOldDevices);

module.exports = router;