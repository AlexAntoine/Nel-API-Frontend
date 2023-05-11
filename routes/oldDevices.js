const express = require('express');
const router = express.Router();

const {getOldDevicesPage,getOldDevicesEditPage} = require('../controller/oldDevices');

router.route('/old').get(getOldDevicesPage);
router.route('/edit/old/:id').get(getOldDevicesEditPage).put();

module.exports = router;