const express = require('express');
const router = express.Router();

const {getOldDevicesPage,getOldDevicesEditPage, getAddPage, updateOldDevice} = require('../controller/oldDevices');

router.route('/old').get(getOldDevicesPage);
router.route('/edit/old/:id').get(getOldDevicesEditPage).put(updateOldDevice);
router.route('/add/old').get(getAddPage)

module.exports = router;