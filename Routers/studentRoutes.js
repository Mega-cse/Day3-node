import express from 'express'
import {createStudent,previousmentor, updateStudentMentor, withoutmentor } from '../Controllers/studentController.js'


const studentRoutes = express.Router()

studentRoutes.post('/create-student',createStudent)
studentRoutes.put('/:studentId/mentor/:mentorId',updateStudentMentor)
studentRoutes.get('/students/:studentId/mentor',previousmentor);
studentRoutes.get('/no-mentor',withoutmentor)
export default studentRoutes;