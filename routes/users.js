const express = require('express');
const {auth} = require('../middleware/auth');
const router = express.Router();
const {getUsersPage, getNewUserPage, getUserEditPage, updateUser, addNewUser, deleteUser} = require('../controller/users');

router.route('/users').get(getUsersPage);
router.route('/edit/users/:id').get(auth,getUserEditPage).put(auth,updateUser);
router.route('/add/users').get(auth, getNewUserPage).post(auth, addNewUser);
router.route('/delete/:id').post(auth, deleteUser);
module.exports = router;