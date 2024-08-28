import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './Databases/config.js';
import studentRoutes from './Routers/studentRoutes.js';
import mentorRoutes from './Routers/mentorRoutes.js';



const app=express();
dotenv.config()
app.use(cors())
app.use(express.json())
const PORT = process.env.PORT

connectDB()
app.use('/api/mentor', mentorRoutes);
app.use('/api/student', studentRoutes);

app.listen(PORT, ()=>{
    console.log("App is running on the PORT -", PORT);
})