import express from 'express';
import { authController } from '../controller/authController.js';

const authRouter = express.Router();
authRouter.post("/data",authController);

export default authRouter;