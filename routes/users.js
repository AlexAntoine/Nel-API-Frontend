const express = require('express');

const router = express.Router();
const {getUsersPage, getNewUserPage, getUserEditPage, updateUser, addNewUser, deleteUser} = require('../controller/users');

router.route('/users').get(getUsersPage);
router.route('/edit/users/:id').get(getUserEditPage).put(updateUser);
router.route('/add/users').get(getNewUserPage).post(addNewUser);
router.route('/delete/:id').post(deleteUser);
module.exports = router;