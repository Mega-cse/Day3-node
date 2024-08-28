import mongoose from "mongoose";
 
const mentorSchema = mongoose.Schema({
    Name:String,
    email:String,
    
})

const Mentor = mongoose.model('Mentor', mentorSchema)
export default Mentor;