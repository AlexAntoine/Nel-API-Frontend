const passport = require('passport');

const express = require('express');

const router = express.Router();
const {getLoginPage,logOut} = require('../controller/login')


router.route('/').get(getLoginPage).post(passport.authenticate('local',{successRedirect:'/home',failureRedirect:'/login',failureFlash:'Invalid email or password. Try Again!'}));
router.route('/login').get(getLoginPage);

router.route('/logout').get(logOut)
module.exports = router
