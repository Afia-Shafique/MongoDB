const mongoose = require('mongoose')

const StudentSchema = mongoose.Schema(
    {
        StName: {
            type: String,
            required: [true, "Please enter name"]
        },
        StDepartment: {
            type: String,
            required: true,
            default: 0
        },
        StAge: {
            type: Number,
            required: true,
        },
        StGpa: {
            type: Number,
            required: false,
        }
    },
    {
        timestamps: true
    }
)


const Student = mongoose.model('', StudentSchema);

module.exports = Student;