const express = require('express');

const router = express.Router();
const {getUsersPage, getNewUserPage, getUserEditPage, updateUser} = require('../controller/users');

router.route('/users').get(getUsersPage);
router.route('/edit/users/:id').get(getUserEditPage).put(updateUser);
router.route('/adduser').get(getNewUserPage);

module.exports = router;