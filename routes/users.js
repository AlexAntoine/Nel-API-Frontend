const express = require('express');

const router = express.Router();
const {getUsersPage} = require('../controller/users');

router.route('/users').get(getUsersPage);

module.exports = router;