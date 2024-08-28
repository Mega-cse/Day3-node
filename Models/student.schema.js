import mongoose from "mongoose";
 
const studentSchema = mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    course:String,
    mentor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Mentor', 
        default: null 
      }
})

const Student = mongoose.model('Student',studentSchema)
export default Student;