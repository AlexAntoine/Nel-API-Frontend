const express = require('express');
const { forgetPassword, recoverPassword } = require('../controller/forgetPassword');

const router = express.Router();

router.route('/forgot').get(forgetPassword).post(recoverPassword)
module.exports = router;