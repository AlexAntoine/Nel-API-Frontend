const express = require('express');
const router = new express.Router();
const {isAuthenticated} = require('../middleware/auth');

const {getChangePasswordPage,getChangePassword} = require('../controller/changePassword');

router.route('/password/change').get(isAuthenticated, getChangePasswordPage).post(getChangePassword);

module.exports = router;


