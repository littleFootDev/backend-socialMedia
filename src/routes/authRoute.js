import { Router } from "express";
import { login, signup } from "../controllers/authController";


const authRoute = Router();

authRoute.post('/signup', signup);
authRoute.post('/login', login);



export default authRoute;


