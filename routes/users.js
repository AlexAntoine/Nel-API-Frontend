const express = require('express');

const router = express.Router();
const {getUsersPage, getNewUserPage, getUserEditPage} = require('../controller/users');

router.route('/users').get(getUsersPage);
router.route('/edit/users/:id').get(getUserEditPage);
router.route('/adduser').get(getNewUserPage);

module.exports = router;