const passport = require('passport');
const express = require('express');

const router = express.Router();
const {getLoginPage} = require('../controller/login')


router.route('/').get(getLoginPage).post(passport.authenticate('local',{successRedirect:'/users',failureRedirect:'/login',failureFlash:'Invalid email or password. Try Again!'}));
router.route('/login').get(getLoginPage);
module.exports = router
