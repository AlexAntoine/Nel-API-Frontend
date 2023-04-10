const express = require('express');

const router = express.Router();
const {homePage, newEmployee,createEmployee} = require('../controller/employees');

router.route('/').get(homePage);
router.route('/new').get(newEmployee).post(createEmployee);


module.exports = router; 