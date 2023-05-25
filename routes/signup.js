const express = require('express');

const router = express.Router();
const { getSignupPage, sendNewUser } = require('../controller/signup');


router.route('/signup').get(getSignupPage).post(sendNewUser);

module.exports = router;