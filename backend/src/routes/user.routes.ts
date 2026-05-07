import { Router,Response} from "express";
import { validateRequest } from "../middlewares/validateRequest";
import { registerUserchema,loginUserSchema } from "../validations/user.validation";
import { registerUser } from "../controllers/user.controller";
import { authenticate } from "../middlewares/auth.middleware";
import { IUserProfile } from "../Interfaces/user.interface";
import {AUTH_MESSAGES} from "../constants/messages";
import {login} from "../controllers/user.controller";



const router=Router();

router.post(
    "/register",
    validateRequest(registerUserchema),
    registerUser

    
);

router.post(

    "/login",
    validateRequest(loginUserSchema),
    login

);

router.get(

  "/profile",
  authenticate,

);

export default router;