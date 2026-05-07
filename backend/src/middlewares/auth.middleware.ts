import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AUTH_MESSAGES } from "../constants/messages";
import { AuthenticatedRequest,IAuthResponse ,JwtPayload} from "../Interfaces/auth.interface";


export const authenticate = (
  req: AuthenticatedRequest,
  res: Response<IAuthResponse>,
  next: NextFunction
): void => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({
      message: AUTH_MESSAGES.AUTH_TOKEN_MISSING,
    });
    return;
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    res.status(401).json({
      message: AUTH_MESSAGES.TOKEN_MISSING,
    });
    return;
  }
  const JWT_SECRET = process.env["JWT_SECRET"];
  

  if (!JWT_SECRET) {
    res.status(500).json({
      message: AUTH_MESSAGES.JWT_SECRET_MISSING,
    });
    return;
  }
  

  try {
    const decoded = jwt.verify(
      token,
      JWT_SECRET
    ) as JwtPayload;

    (req as Request & { user: JwtPayload }).user =
      decoded;

    next();
  } catch {
    res.status(401).json({
      message: AUTH_MESSAGES.INVALID_TOKEN,
    });
  }
};