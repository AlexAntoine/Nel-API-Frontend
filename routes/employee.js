const express = require('express');

const router = express.Router();
const {homePage, getTestPage, updateEmployee, deleteEmployee,newEmployee,createEmployee,findOneEmployee, searchEmployee,editEmployee } = require('../controller/employees');

router.route('/').get(homePage);
router.route('/search').get(searchEmployee);
router.route('/edit/:id').get(editEmployee);
router.route('/edit/:id').put(updateEmployee);
router.route('/delete/:id').delete(deleteEmployee);

router.route('/employee').get(findOneEmployee);
router.route('/new').get(newEmployee).post(createEmployee);
router.route('/test').get(getTestPage);



module.exports = router; 