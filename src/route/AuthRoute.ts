import { Router } from "express";
import User from "../controller/AuthController";
import checkToken from "../middleware/auth_middleware";

const Auth = Router();

Auth.post("/signup", User.signup);
Auth.get("/users", checkToken, User.get);
Auth.post("/signin", User.signin);
Auth.post("/otp", User.verification);
Auth.post("/user/:user_id/signup", User.register);

export default Auth;
