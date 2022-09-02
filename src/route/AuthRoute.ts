import { Router } from "express";
import validation from "../middleware/validation";
import { signupSchema, userSchema } from "../validation/UserValidation";
import User from "../controller/AuthController";
import checkToken from "../middleware/auth_middleware";

const Auth = Router();

Auth.post("/signup", validation(signupSchema), User.signup);
Auth.get("/users", checkToken, User.get);
Auth.post("/signin", User.signin);
Auth.post("/otp", User.verification);
Auth.post("/user/:user_id/signup", validation(userSchema), User.register);

export default Auth;
