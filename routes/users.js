const express = require('express');
const {auth} = require('../middleware/auth');
const router = express.Router();
const {getUsersPage, getNewUserPage, getUserEditPage, updateUser, addNewUser, deleteUser, downloadUsersData} = require('../controller/users');

router.route('/users').get(auth,getUsersPage);
router.route('/edit/users/:id').get(auth,getUserEditPage).put(auth,updateUser);
router.route('/add/users').get(auth, getNewUserPage).post(auth, addNewUser);
router.route('/users/delete/:id').post(auth, deleteUser);
router.route('/users/download').get(downloadUsersData);
module.exports = router;