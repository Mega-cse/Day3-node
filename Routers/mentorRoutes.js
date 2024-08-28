import express from 'express';
import { createMentor, getStudentsByMentor,assignStudentToMentor} from '../Controllers/mentorController.js';

const mentorRoutes = express.Router()
mentorRoutes.post('/create-mentor',createMentor)
mentorRoutes.post('/assign/:studentId/:mentorId',assignStudentToMentor)
mentorRoutes.get('/mentors/:mentorId/students',getStudentsByMentor);
export default mentorRoutes;