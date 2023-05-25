const express = require('express');

const router = express.Router();
const {getLoginPage} = require('../controller/login')

router.route('/').get(getLoginPage)
router.route('/login').get(getLoginPage);
module.exports = router
