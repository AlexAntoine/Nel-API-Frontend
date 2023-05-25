const passport = require('passport');
const express = require('express');

const router = express.Router();
const {getLoginPage, userLogin} = require('../controller/login')


router.route('/').get(getLoginPage).post(passport.authenticate('local',{successRedirect:'/users',failureRedirect:'/login',failureFlash:'Invalid email or password. Try Again!'}), userLogin);
router.route('/login').get(getLoginPage);
module.exports = router
