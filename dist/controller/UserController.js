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
const User_1 = require("../model/User");
const Student_1 = require("../model/Student");
const nodemailer_1 = __importDefault(require("nodemailer"));
const typeorm_1 = require("typeorm");
exports.default = {
    signup: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { email, password } = req.body;
            const hashpassword = yield bcrypt_1.default.hash(password, 10);
            const users = yield User_1.User.findOneBy({ email });
            if (!users) {
                let transporter = nodemailer_1.default.createTransport({
                    name: "gmail",
                    host: "smtp.gmail.com",
                    port: 465,
                    auth: {
                        user: "genie@truetechsolutions.in",
                        pass: "Screenit@12345",
                    },
                });
                let otp = Math.floor(100000 + Math.random() * 900000);
                transporter
                    .sendMail({
                    from: "genie@truetechsolutions.in",
                    to: "pasvan.g@truetechsolutions.in",
                    subject: "Email OTP Verification",
                    html: `<!DOCTYPE html><html><head><title></title></head><body><div><p>Hello,</p><p>Welcome to Pie Hub Labs</p><p>Please use the following OTP ${otp} to complete your sign-up process.</p><p>Enter the code and get connected.</p><p>Best Wishes,</p><p>Pie Hub Labs</p></div></body></html>`,
                })
                    .catch(console.error);
                const user = User_1.User.create({
                    email,
                    password: hashpassword,
                    otp,
                });
                yield user.save();
                res.status(201).json({ msg: user.email + " Please verify email" });
            }
            else {
                if (!users.email_verified) {
                    let transporter = nodemailer_1.default.createTransport({
                        name: "gmail",
                        host: "smtp.gmail.com",
                        port: 465,
                        auth: {
                            user: "genie@truetechsolutions.in",
                            pass: "Screenit@12345",
                        },
                    });
                    let otp = Math.floor(100000 + Math.random() * 900000);
                    transporter
                        .sendMail({
                        from: "genie@truetechsolutions.in",
                        to: "pasvan.g@truetechsolutions.in",
                        subject: "Email OTP Verification",
                        html: `<!DOCTYPE html><html><head><title></title></head><body><div><p>Hello,</p><p>Welcome to Pie Hub Labs</p><p>Please use the following OTP ${otp} to complete your sign-up process.</p><p>Enter the code and get connected.</p><p>Best Wishes,</p><p>Pie Hub Labs</p></div></body></html>`,
                    })
                        .catch(console.error);
                    yield (0, typeorm_1.createQueryBuilder)("m_user")
                        .update(User_1.User)
                        .set({ otp })
                        .where("id = :id", { id: users.id })
                        .execute();
                    res.status(201).json({ msg: users.email + " Please verify email" });
                }
                else {
                    res.status(400).json({ msg: "Email already exists" });
                }
            }
        }
        catch (err) {
            console.log("Error \n", err);
        }
    }),
    signin: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { email, password } = req.body;
            if (email && password) {
                const user = yield User_1.User.findOneBy({ email });
                if (!user) {
                    res.status(400).json({ msg: "Invalid credentials" });
                }
                else {
                    const pwd = user.password;
                    if ((yield bcrypt_1.default.compare(password, pwd)) && user.email_verified) {
                        res.status(200).json({ msg: "Successfully logged in" });
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
            res.status(500).send(err);
        }
    }),
    verification: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { email_otp } = req.body;
            if (email_otp) {
                const user = yield User_1.User.findOneBy({ otp: email_otp });
                if (!user) {
                    res.status(400).json({ msg: "Invalid Otp" });
                }
                else {
                    const duser = yield (0, typeorm_1.createQueryBuilder)("m_user")
                        .update(User_1.User)
                        .set({ email_verified: true })
                        .where("otp = :otp", { otp: user.otp })
                        .execute();
                    console.log(duser.raw);
                    res.status(200).json({ msg: "Otp Verified Successfully" });
                }
            }
            else {
                res.status(400).json({ msg: "Enter otp" });
            }
        }
        catch (err) {
            console.log("Error \n", err);
        }
    }),
    register: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { first_name, last_name, mobile, school_name } = req.body;
            const { user_id } = req.params;
            const users = User_1.User.findOneBy({ id: user_id });
            if (!users) {
                res.status(400).json({ msg: "Invalid User" });
            }
            else {
                const student = Student_1.Student.create({
                    first_name,
                    last_name,
                    mobile,
                    school_name,
                    user_id,
                });
                yield student.save();
            }
            res.status(200).json({ msg: "Successfully registered" });
        }
        catch (err) {
            console.log("Error \n", err);
        }
    }),
};
//# sourceMappingURL=UserController.js.map