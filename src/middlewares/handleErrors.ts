import { validationResult } from "express-validator";

export const handleErrors = (req: Request, res: Response, next: Function) => {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    // const errors = err.errors.reduce((acc, { msg }) => (acc += msg + "-"), "");
    // return res.status(400).send(errors);
  } else {
    next();
  }
};
