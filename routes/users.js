const express = require('express');
const {isAuthenticated} = require('../middleware/auth');
const router = express.Router();
const {getUsersPage, getNewUserPage, getUserEditPage, updateUser, addNewUser, deleteUser, getHome, apiLogin, } = require('../controller/users');

router.route('/users').get(isAuthenticated, getUsersPage);
router.route('/home').get(isAuthenticated, getHome).post(apiLogin);
router.route('/edit/users/:id').get(isAuthenticated,getUserEditPage).put(isAuthenticated,updateUser);
router.route('/add/users').get(isAuthenticated,getNewUserPage).post(isAuthenticated,addNewUser);
router.route('/delete/:id').post(isAuthenticated,deleteUser);
module.exports = router;