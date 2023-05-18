const express = require('express');
const router = express.Router();

const {getOldDevicesPage,getOldDevicesEditPage, getAddPage, updateOldDevice, addNewDevice, deleteDevice} = require('../controller/oldDevices');

router.route('/old').get(getOldDevicesPage);
router.route('/edit/old/:id').get(getOldDevicesEditPage).put(updateOldDevice);
router.route('/add/old').get(getAddPage).post(addNewDevice);
router.route('/delete/:id').post(deleteDevice)

module.exports = router;