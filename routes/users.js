const express = require('express');
const {auth} = require('../middleware/auth');
const router = express.Router();
const {getUsersPage, getNewUserPage, getUserEditPage, updateUser, addNewUser, deleteUser, getHome, apiLogin, } = require('../controller/users');

router.route('/users').get(getUsersPage);
// router.route('/home').get(isAuthenticated, getHome).post(apiLogin);
router.route('/edit/users/:id').get(getUserEditPage).put(updateUser);
router.route('/add/users').get(auth,getNewUserPage).post(addNewUser);
router.route('/delete/:id').post(deleteUser);
module.exports = router;