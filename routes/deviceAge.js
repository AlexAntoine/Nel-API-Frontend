const express = require('express');
const router = express.Router();

const {getDeviceAgePage, getDeviceAgeEditPage} = require('../controller/deviceAge');

router.route('/deviceage').get(getDeviceAgePage);
router.route('/edit/deviceage/:id').get(getDeviceAgeEditPage);

module.exports = router;