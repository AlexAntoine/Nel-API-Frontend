const express = require('express');
const router = express.Router();
const {auth} = require('../middleware/auth');
const {getDeviceAgePage,addDevicePage, getDeviceAgeEditPage,updateDeviceAge, addNewDeviceAge, deleteDevice} = require('../controller/deviceAge');

router.route('/deviceage').get(auth, getDeviceAgePage);
router.route('/edit/deviceage/:id').get(getDeviceAgeEditPage).put(updateDeviceAge);
router.route('/add/deviceage').get(addDevicePage).post(addNewDeviceAge);
router.route('/delete/:id').post(deleteDevice);

module.exports = router;