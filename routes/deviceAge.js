const express = require('express');
const router = express.Router();
const {auth} = require('../middleware/auth');
const {getDeviceAgePage,getAddDevicePage,getDeviceAgeEditPage,updateDeviceAge, addNewDeviceAge, deleteDevice} = require('../controller/deviceAge');

router.route('/deviceage').get(auth, getDeviceAgePage);
router.route('/edit/deviceage/:id').get(auth,getDeviceAgeEditPage).put(updateDeviceAge);
router.route('/add/deviceage').get(auth,getAddDevicePage).post(addNewDeviceAge);
router.route('/delete/:id').post(deleteDevice);

module.exports = router;