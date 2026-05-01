import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface JwtPayload {
  userId: number;
  role: string;
}

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({
      message: "Authorization token missing",
    });
    return;
  }

  const token = authHeader.split(" ")[1];

  const JWT_SECRET = process.env["JWT_SECRET"];

  if (!JWT_SECRET) {
    res.status(500).json({
      message: "JWT secret not configured",
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
      message: "Invalid or expired token",
    });
  }
};