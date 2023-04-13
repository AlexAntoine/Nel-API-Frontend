const express = require('express');

const router = express.Router();
const {homePage, updateEmployee, deleteEmployee,getEditPage, newEmployee,createEmployee,findOneEmployee, searchEmployee,editEmployee } = require('../controller/employees');

router.route('/').get(homePage);
router.route('/search').get(searchEmployee);
router.route('/edit/:id').get(editEmployee);
router.route('/edit/:id').put(updateEmployee);
router.route('/delete/:id').delete(deleteEmployee);
router.route('/edit').get(getEditPage)
router.route('/employee').get(findOneEmployee);
router.route('/new').get(newEmployee).post(createEmployee);



module.exports = router; 