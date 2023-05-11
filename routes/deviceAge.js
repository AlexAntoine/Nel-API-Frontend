const express = require('express');
const router = express.Router();

const {getDeviceAgePage, getDeviceAgeEditPage,updateDeviceAge} = require('../controller/deviceAge');

router.route('/deviceage').get(getDeviceAgePage);
router.route('/edit/deviceage/:id').get(getDeviceAgeEditPage).put(updateDeviceAge);

module.exports = router;