import { Request, Response } from "express";
import { createUser } from "../services/user.service";
import {IRegisterResponse, RegisterUserInput } from "../Interfaces/auth.interface";
import { loginUser } from "../services/user.service";
import { AuthenticatedRequest } from "../Interfaces/auth.interface";
import { IProfileResponse } from "../Interfaces/auth.interface";
import { AUTH_MESSAGES } from "../constants/messages";

export const registerUser = async (
  req:Request<{},{},RegisterUserInput>,
  res: Response<IRegisterResponse>
): Promise< Response<IRegisterResponse>> => 
  {
  try {
    const user = await createUser(req.body);

     return res.status(201).json({
      message:AUTH_MESSAGES.REGISTER_SUCCESS,
      data: user,
    });
  } catch (error) {
     return res.status(400).json({
      message:
        error instanceof Error
          ? error.message
          : AUTH_MESSAGES.REGISTER_FAILED,
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

export const getProfile=async(
  req:AuthenticatedRequest,
  res:Response<IProfileResponse>
):Promise <Response<IProfileResponse>> =>
{
  try{
    const 
  }
  catch(error)
  {

  }
};


 



