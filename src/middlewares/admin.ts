import { Request, Response, NextFunction } from "express";
import { IsNotAdmin } from "@/exception";

export const adminCheckMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const isAdmin: boolean = req["decoded"].isAdmin;
  if (isAdmin) return next();
  next(IsNotAdmin);
};
