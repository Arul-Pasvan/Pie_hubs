import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export default (req: Request, res: Response, next: NextFunction) => {
  const token = req.header("authorization");

  if (token) {
    const accessToken: any = process.env.ACCESS_TOKEN_SECRET;
    jwt.verify(token, accessToken, (err) => {
      if (err) {
        res.status(400).json({ msg: "access denied" }); //token is invalid
      } else {
        next();
      }
    });
  } else {
    res.status(400).json({ msg: "access denied" }); //token is required
  }
};
