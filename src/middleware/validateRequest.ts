import { Request, Response, NextFunction, RequestHandler } from "express";
import { ObjectSchema } from "joi";

// middleware for validating the request body against a given Joi schema
const validateRequest = (schema: ObjectSchema): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction): void => {
    // validate the request body against the schema
    const { error } = schema.validate(req.body);
    if (error) {
      // if there is an error, return 400 status code
      res.status(400).json({ status: "Failed", message: error.message });
      return;
    }
    // if there is no error, continue to the next middleware
    next(); 
  };
};

export default validateRequest;
