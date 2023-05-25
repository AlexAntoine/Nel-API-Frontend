const express = require('express');

const router = express.Router();
const { getSignupPage } = require('../controller/signup');


router.route('/signup').get(getSignupPage);

module.exports = router;