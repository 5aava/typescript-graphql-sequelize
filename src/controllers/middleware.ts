import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';


export default function middleware (req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(403).json({ errors: errors.array() });
  }

  next();
}
