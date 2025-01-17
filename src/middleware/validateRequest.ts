import { Request, Response, NextFunction, RequestHandler } from "express";
import { ObjectSchema } from "joi";

const validateRequest = (schema: ObjectSchema): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const { error } = schema.validate(req.body);
    if (error) {
      res.status(400).json({ status: "Failed", message: error.message });
      return;
    }
    next(); 
  };
};

export default validateRequest;
