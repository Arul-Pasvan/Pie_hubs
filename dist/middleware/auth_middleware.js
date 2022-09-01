"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.default = (req, res, next) => {
    const token = req.header("authorization");
    if (token) {
        const accessToken = process.env.ACCESS_TOKEN_SECRET;
        jsonwebtoken_1.default.verify(token, accessToken, (err) => {
            if (err) {
                res.status(400).json({ msg: "access denied" });
            }
            else {
                next();
            }
        });
    }
    else {
        res.status(400).json({ msg: "access denied" });
    }
};
//# sourceMappingURL=auth_middleware.js.map