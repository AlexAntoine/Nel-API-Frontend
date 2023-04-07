const express = require('express');

const router = express.Router();
const {homePage} = require('../controller/employees');

router.get('/', homePage);

module.exports = router; 