import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import authRouter from './route/authRoute.js';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use('/api/auth', authRouter);



app.listen(PORT,()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
})