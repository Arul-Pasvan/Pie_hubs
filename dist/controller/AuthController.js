"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const typeorm_1 = require("typeorm");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const M_User_1 = require("../model/Auth/M_User");
const M_Student_1 = require("../model/Auth/M_Student");
const mailer_1 = __importDefault(require("../config/mailer"));
exports.default = {
    signup: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { email, password } = req.body;
            const hashpassword = yield bcrypt_1.default.hash(password, 10);
            const users = yield M_User_1.User.findOneBy({ email });
            if (!users) {
                let transporter = nodemailer_1.default.createTransport(Object.assign({}, mailer_1.default));
                let otp = Math.floor(100000 + Math.random() * 900000);
                transporter
                    .sendMail({
                    from: "genie@truetechsolutions.in",
                    to: email,
                    subject: "Email OTP Verification",
                    html: `<!DOCTYPE html><html><head><title></title></head><body><div><p>Hello,</p><p>Welcome to Pie Hub Labs</p><p>Please use the following OTP ${otp} to complete your sign-up process.</p><p>Enter the code and get connected.</p><p>Best Wishes,</p><p>Pie Hub Labs</p></div></body></html>`,
                })
                    .catch(console.error);
                const user = M_User_1.User.create({
                    email,
                    password: hashpassword,
                    otp,
                });
                yield user.save();
                res.status(201).json({ msg: "Please verify email" });
            }
            else {
                if (!users.email_verified) {
                    let transporter = nodemailer_1.default.createTransport(Object.assign({}, mailer_1.default));
                    let otp = Math.floor(100000 + Math.random() * 900000);
                    transporter
                        .sendMail({
                        from: "genie@truetechsolutions.in",
                        to: email,
                        subject: "Email OTP Verification",
                        html: `<!DOCTYPE html><html><head><title></title></head><body><div><p>Hello,</p><p>Welcome to Pie Hub Labs</p><p>Please use the following OTP ${otp} to complete your sign-up process.</p><p>Enter the code and get connected.</p><p>Best Wishes,</p><p>Pie Hubs.</p></div></body></html>`,
                    })
                        .catch(console.error);
                    yield (0, typeorm_1.createQueryBuilder)("m_user")
                        .update(M_User_1.User)
                        .set({ otp })
                        .where("id = :id", { id: users.id })
                        .execute();
                    res.status(201).json({ msg: "Please verify email" });
                }
                else {
                    res.status(400).json({ msg: "Email already exists" });
                }
            }
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ msg: "internal server error" });
        }
    }),
    signin: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { email, password } = req.body;
            if (email && password) {
                const user = yield M_User_1.User.findOneBy({ email });
                if (!user) {
                    res.status(400).json({ msg: "Invalid credentials" });
                }
                else {
                    const pwd = user.password;
                    if ((yield bcrypt_1.default.compare(password, pwd)) && user.email_verified) {
                        const key = process.env.ACCESS_TOKEN_SECRET;
                        const token = jsonwebtoken_1.default.sign({ userID: user.id }, key);
                        res.status(200).json({ msg: "Successfully logged in", token });
                    }
                    else {
                        res.status(400).json({ msg: "Invalid credentials" });
                    }
                }
            }
            else {
                res.status(400).json({ msg: "Enter the credentials" });
            }
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ msg: "internal server error" });
        }
    }),
    verification: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { email, otp } = req.body;
            if (email && otp) {
                const user = yield M_User_1.User.findOneBy({ email });
                if (!user || user.otp != otp) {
                    res.status(400).json({ msg: "Invalid credentials" });
                }
                else {
                    yield (0, typeorm_1.createQueryBuilder)("m_user")
                        .update(M_User_1.User)
                        .set({ email_verified: true })
                        .where("email = :email", { email: user.email })
                        .execute();
                    res
                        .status(200)
                        .json({ msg: "Otp Verified Successfully", id: user.id });
                }
            }
            else {
                res.status(400).json({ msg: "Fill the required fields" });
            }
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ msg: "internal server error" });
        }
    }),
    register: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { first_name, last_name, mobile, school_name } = req.body;
            const { user_id } = req.params;
            const user = yield M_User_1.User.findOneById(user_id);
            console.log(user);
            if (!user) {
                res.status(400).json({ msg: "Invalid User" });
            }
            else {
                const student = M_Student_1.Student.create({
                    first_name,
                    last_name,
                    mobile,
                    school_name,
                    user_id,
                });
                yield student.save();
                res.status(200).json({ msg: "Successfully registered" });
            }
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ msg: "internal server error" });
        }
    }),
    get: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield M_User_1.User.find();
        res.json({ msg: "success", user });
    }),
};
//# sourceMappingURL=AuthController.js.map