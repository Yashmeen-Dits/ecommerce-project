import { Request, Response } from "express";
import { createUser } from "../services/user.service";
import { loginUser } from "../services/user.service";

export const registerUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const user = await createUser(req.body);

    res.status(201).json({
      message: "User registered successfully",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      message:
        error instanceof Error
          ? error.message
          : "Registration failed",
    });
  }
};


export const login =async(
    req:Request,
    res:Response
):Promise <void> =>
{
    try {
        const result = await loginUser(req.body);

        res.status(200).json(
            {
                message:"Login successful",
                data: result,

            });
    }
    catch(error)
    {
        res.status(400).json(
            {
                message: error instanceof Error?error.message:"Login failed",
            });

    }
};