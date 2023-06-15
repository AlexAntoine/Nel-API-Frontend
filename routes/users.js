const express = require('express');
const {isAuthenticated} = require('../middleware/auth');
const router = express.Router();
const {getUsersPage, getNewUserPage, getUserEditPage, updateUser, addNewUser, deleteUser, getHome, apiLogin, } = require('../controller/users');

router.route('/users').get(isAuthenticated, getUsersPage);
// router.route('/home').get(isAuthenticated, getHome).post(apiLogin);
router.route('/edit/users/:id').get(getUserEditPage).put(updateUser);
router.route('/add/users').get(getNewUserPage).post(addNewUser);
router.route('/delete/:id').post(deleteUser);
module.exports = router;