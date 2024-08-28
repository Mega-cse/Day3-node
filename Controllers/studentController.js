import Student from "../Models/student.schema.js";
import Mentor from "../Models/mentor.schema.js";

//Create student
export const createStudent= async(req, res)=>{
    try{
        const newStudent = new Student(req.body)
        await newStudent.save();
        res.status(200).json({message:"Student Added Successfully", data:newStudent})
    }catch(error){
        console.log(error);
        
    }
}
//A student who has a mentor should not be shown in List

export const withoutmentor= async (req, res) => {
  try {
    const students = await Student.find({ mentor: null });
    res.status(200).json(students);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};



// Assign or Change Mentor for a Student
export const updateStudentMentor = async (req, res) => {
    try {
      const { studentId, mentorId } = req.params;
      const student = await Student.findById(studentId);
      if (!student) return res.status(404).json({ error: 'Student not found' });
  
      student.mentor = mentorId;
      await student.save();
      res.status(200).json(student);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
 
  
  // Show the previously assigned Mentor for a particular Student
  export const previousmentor=  async (req, res) => {
    try {
      const { studentId } = req.params;
      const student = await Student.findById(studentId).populate('mentor');
      
      if (!student) {
        return res.status(404).json({ error: 'Student not found' });
      }
      if (!student.mentor) {
        return res.status(404).json({ message: 'No mentor assigned to this student' });
      }
      res.status(200).json(student.mentor);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  
  
  // List all Students who do not have a Mentor
  export const getStudentsWithoutMentor = async (req, res) => {
    try {
      const students = await Student.find({ mentor: null });
      res.status(200).json(students);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  