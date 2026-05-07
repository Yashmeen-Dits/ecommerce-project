import { Request, Response } from "express";
import { createUser } from "../services/user.service";
import {ILoginResponse, IRegisterResponse, LoginUserInput, RegisterUserInput } from "../Interfaces/auth.interface";
import { loginUser } from "../services/user.service";
import { AuthenticatedRequest } from "../Interfaces/auth.interface";
import { IProfileResponse } from "../Interfaces/auth.interface";
import { AUTH_MESSAGES } from "../constants/messages";
import { getProfile } from "../services/user.service"; 

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
    req:Request<{},{},LoginUserInput>,
    res:Response<ILoginResponse>
):Promise <Response<ILoginResponse>> =>
{
    try {
        const result = await loginUser(req.body);
         return res.status(200).json({
                message:AUTH_MESSAGES.LOGIN_SUCCESS,
                data: 
                {
                  username:result.user.username,
                  token:result.token,
                },
            });
    }
    catch(error)
    {
       return res.status(400).json({
            message: error instanceof Error?error.message:AUTH_MESSAGES.LOGIN_FAILED,
            });
    }

};


export const getProfileService=async(
  req:AuthenticatedRequest,
  res:Response<IProfileResponse>,
):Promise <Response<IProfileResponse>> =>
{
  try{
    const user=await getProfile(req.user!.userId)
    return res.status(200).json(
      {
        message:AUTH_MESSAGES.PROFILE_FETCHED,
        data:
        {
          userId:user.id,
          role:user.role ,
        }
      }
    );
  }
  catch(error)
  {

    return res.status(404).json(
      {
        message:
        error instanceof Error
        ? error.message:AUTH_MESSAGES.PROFILE_FETCH_FAILED,
      }
    );

  }
};


 



