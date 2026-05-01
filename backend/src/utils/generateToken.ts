import jwt from "jsonwebtoken";

interface TokenPayload {
  userId: number;
  role: string;
}

export const generateToken = (
  payload: TokenPayload
): string => {
  const JWT_SECRET = process.env["JWT_SECRET"];

  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is missing");
  }

  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: "7d",
  });
};