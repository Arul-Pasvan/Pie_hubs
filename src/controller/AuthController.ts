import { Request, Response } from "express";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";
import smtp from "../config/mailer";
import { User } from "../model/Auth/M_User";
import { Student } from "../model/Auth/M_Student";
import { updateOtp, updateVerify, getUser } from "../services/UserService";

export default {
  signup: async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      const hashpassword = await bcrypt.hash(password, 10);
      const users = await User.findOneBy({ email });
      if (users?.email_verified) {
        res.status(400).json({ success: false, msg: "Email already exists" });
      } else {
        let transporter = nodemailer.createTransport({ ...smtp });
        let otp = Math.floor(100000 + Math.random() * 900000);
        transporter
          .sendMail({
            from: "genie@truetechsolutions.in",
            to: email,
            subject: "Email OTP Verification",
            html: `<!DOCTYPE html><html><head><title></title></head><body><div><p>Hello,</p><p>Welcome to Pie Hub Labs</p><p>Please use the following OTP ${otp} to complete your sign-up process.</p><p>Enter the code and get connected.</p><p>Best Wishes,</p><p>Pie Hub Labs</p></div></body></html>`,
          })
          .catch(console.error);
        if (!users) {
          const user = User.create({
            email,
            password: hashpassword,
            otp,
          });
          await user.save();
        } else if (users.id) {
          updateOtp(otp, users.id);
        }
        res.status(201).json({ success: true, msg: "Please verify email" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false, msg: "invalid request" });
    }
  },

  signin: async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOneBy({ email });
      if (!user) {
        res.status(400).json({ success: false, msg: "Invalid credentials" }); // Can't find user
      } else {
        const pwd: any = user.password;
        if ((await bcrypt.compare(password, pwd)) && user.email_verified) {
          const key: any = process.env.ACCESS_TOKEN_SECRET;
          const token = jwt.sign({ userID: user.id }, key);
          res
            .status(200)
            .json({ success: true, msg: "Successfully logged in", token });
        } else {
          res.status(400).json({ success: false, msg: "Invalid credentials" }); // Incorrect Password or OTP not verified
        }
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false, msg: "invalid request" });
    }
  },

  verification: async (req: Request, res: Response) => {
    try {
      const { email, otp } = req.body;
      if (email && otp) {
        const user = await User.findOneBy({ email });
        if (!user || user.otp != otp) {
          res.status(400).json({ success: false, msg: "Invalid credentials" }); // invalid user or otp not match
        } else {
          updateVerify(user.email);
          res.status(200).json({
            success: true,
            msg: "Otp Verified Successfully",
            id: user.id,
          });
        }
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false, msg: "invalid request" });
    }
  },

  register: async (req: Request, res: Response) => {
    try {
      const { first_name, last_name, mobile, school_name } = req.body;
      const { user_id } = req.params;
      const user = await getUser(user_id);
      if (!user) {
        res.status(400).json({ success: false, msg: "Invalid User" });
      } else {
        const student = Student.create({
          first_name,
          last_name,
          mobile,
          school_name,
          user_id,
        });
        await student.save();
        res.status(200).json({ success: true, msg: "Successfully registered" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false, msg: "invalid request" });
    }
  },
  get: async (req: Request, res: Response) => {
    const user = await User.find();
    res.json({ success: true, msg: "success", user });
  },
};
