const express = require('express');

const router = express.Router();
const {homePage, newEmployee,createEmployee, searchEmployee,findOneEmployee } = require('../controller/employees');

router.route('/').get(homePage);
router.route('/search').get(searchEmployee);
router.route('/employee').get(findOneEmployee);
router.route('/new').get(newEmployee).post(createEmployee);



module.exports = router; 