const express = require('express');
const router = express.Router()
const studentController = require('../../controller/studentsController');
const ROLES_LIST = require("../../config/roles_list")
const verifyRoles = require('../../middleware/verifyRoles');

router.route('/')
// To Read
.get(studentController.getAllStudents)

// To create
.post(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor),studentController.createNewStudents)

// To Update
.put(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), studentController.updateStudents)

// To delete

.delete(verifyRoles(ROLES_LIST.Admin),studentController.deleteStudents)

router.route('/:id')
.get(studentController.getStudents)

module.exports = router;