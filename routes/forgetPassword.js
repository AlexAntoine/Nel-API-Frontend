const express = require('express');
const {isAuthenticated} = require('../middleware/auth');
const { forgetPassword, recoverPassword, getNewPasswordPage, sendNewPassword} = require('../controller/forgetPassword');

const router = express.Router();

router.route('/forgot').get(isAuthenticated, forgetPassword).post(recoverPassword);

router.route('/reset/:token').get(isAuthenticated,getNewPasswordPage).post(sendNewPassword);

module.exports = router;