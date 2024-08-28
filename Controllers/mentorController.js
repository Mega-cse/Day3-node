import Mentor from "../Models/mentor.schema.js";
import Student from "../Models/student.schema.js";
export const createMentor = async(req, res)=>{
    try{
        const newMentor = new Mentor(req.body)
        await newMentor.save();
        res.status(200).json({message:"Mentor Added Successfully", data:newMentor})
    }catch(error){
        console.log(error);
        
    }
}

//Assign student to a mentor
export const assignStudentToMentor = async (req, res) => {
    try {
      const { studentId, mentorId } = req.params;
      
      // Check if the mentor exists
      const mentor = await Mentor.findById(mentorId);
      if (!mentor) return res.status(404).json({ error: 'Mentor not found' });
  
      // Check if the student exists
      const student = await Student.findById(studentId);
      if (!student) return res.status(404).json({ error: 'Student not found' });
  
      // Assign the mentor to the student
      student.mentor = mentorId;
      await student.save();
  
      res.status(200).json(student);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };


 // Show all Students for a particular Mentor
 export const getStudentsByMentor = async (req, res) => {
    try {
      const { mentorId } = req.params;
      const students = await Student.find({ mentor: mentorId });
      res.status(200).json(students);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };