"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = __importDefault(require("../controller/UserController"));
const Home = (0, express_1.Router)();
Home.post("/signup", UserController_1.default.signup);
Home.post("/signin", UserController_1.default.signin);
Home.post("/otp", UserController_1.default.verification);
Home.post("/user/:user_id/register", UserController_1.default.register);
exports.default = Home;
//# sourceMappingURL=UserRoute.js.map