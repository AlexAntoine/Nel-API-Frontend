const passport = require('passport');

const express = require('express');

const router = express.Router();
const {getLoginPage,logOut, userLogin} = require('../controller/login')


router.route('/').get(getLoginPage).post(userLogin);
router.route('/login').get(getLoginPage).post(userLogin);

router.route('/logout').get(logOut)
module.exports = router
