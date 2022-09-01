"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuthController_1 = __importDefault(require("../controller/AuthController"));
const auth_middleware_1 = __importDefault(require("../middleware/auth_middleware"));
const Auth = (0, express_1.Router)();
Auth.post("/signup", AuthController_1.default.signup);
Auth.get("/users", auth_middleware_1.default, AuthController_1.default.get);
Auth.post("/signin", AuthController_1.default.signin);
Auth.post("/otp", AuthController_1.default.verification);
Auth.post("/user/:user_id/signup", AuthController_1.default.register);
exports.default = Auth;
//# sourceMappingURL=AuthRoute.js.map