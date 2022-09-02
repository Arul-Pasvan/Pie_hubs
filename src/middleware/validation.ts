import { Request, Response, NextFunction } from "express";

const validation =
  (schema) => async (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;
    try {
      await schema.validate(body);
      next();
      return next();
    } catch (err) {
      return res.status(400).json({ Error: err });
    }
  };

export default validation;
