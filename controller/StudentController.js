const Student = require('../models/StudentModel')

const getStudent = async(req, res) => {
    try {
        const student = await Student.find({});
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


const createStudent = async(req, res) => {
    try {
        const student = await Student.create(req.body)
        res.status(200).json(student);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
}

const getStudents = async(req, res) =>{
    try {
        const {id} = req.params;
        const student = await Student.findById(id);
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({message: error.message})
    } 
}

const updateStudent = async(req, res) => {
    try {
        const {id} = req.params;
        const student = await Student.findByIdAndUpdate(id, req.body);
      
        if(!student){
            return res.status(404).json({message: `cannot find any student`})
        }
        const updatedStudent = await Student.findById(id);
        res.status(200).json(updateStudent);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const deleteStudent = async(req, res) =>{
    try {
        const {id} = req.params;
        const student = await Student.findByIdAndDelete(id);
        if(!student){
            return res.status(404).json({message: `cannot find any student`})
        }
        res.status(200).json(student);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


module.exports = {
    getStudent,
    getStudents,
    createStudent,
    updateStudent,
    deleteStudent
}