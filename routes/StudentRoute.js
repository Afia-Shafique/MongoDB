const express = require('express')
const { 
    createStudent, 
    deleteStudent, 
    getStudent, 
    getStudents, 
    updateStudent } = require("../controller/StudentController");


const StudentRoute = express.Router();


StudentRoute.route('/').get(getStudent).post(createStudent)
StudentRoute.route('/:id').get(getStudent).put(updateStudent).delete(deleteStudent)
module.exports = StudentRoute;

