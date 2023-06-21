const express = require('express');
const router = new express.Router();
const {auth} = require('../middleware/auth');

const {getChangePasswordPage,getChangePassword} = require('../controller/changePassword');

router.route('/password/change').get(auth,getChangePasswordPage).post(getChangePassword);

module.exports = router;


