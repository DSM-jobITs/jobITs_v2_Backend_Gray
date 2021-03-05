import { verify } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import config from "@/config";
import { TokenRequired } from "@/exception";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token: string = req.headers.authorization;
  if (!token) next(TokenRequired);
  const bearer: string = token.split("Bearer ")[1];
  verify(bearer, config.secretKey, (err, decoded) => {
    if (err) res.status(403).json({ message: err.message });
    req["decoded"] = decoded;
    next();
  });
};
