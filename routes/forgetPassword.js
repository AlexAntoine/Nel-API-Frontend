const express = require('express');
const { forgetPassword, recoverPassword, getNewPasswordPage, sendNewPassword} = require('../controller/forgetPassword');

const router = express.Router();

router.route('/forgot').get(forgetPassword).post(recoverPassword);

router.route('/reset/:token').get(getNewPasswordPage).post(sendNewPassword);

module.exports = router;