const express = require('express');
const {isAuthenticated} = require('../middleware/auth');
const router = express.Router();
const {getUsersPage, getNewUserPage, getUserEditPage, updateUser, addNewUser, deleteUser} = require('../controller/users');

router.route('/users').get(isAuthenticated, getUsersPage);
router.route('/edit/users/:id').get(isAuthenticated,getUserEditPage).put(updateUser);
router.route('/add/users').get(isAuthenticated,getNewUserPage).post(addNewUser);
router.route('/delete/:id').post(deleteUser);
module.exports = router;