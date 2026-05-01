import { Router} from "express";
import { validateRequest } from "../middlewares/validateRequest";
import { registerUserchema } from "../validations/user.validation";
import { registerUser } from "../controllers/user.controller";
import {login} from "../controllers/user.controller";
import { loginUserSchema } from "../validations/user.validation";
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

export default router;