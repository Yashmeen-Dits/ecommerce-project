import { Request } from "express";
import {role} from "../entities/User";


export interface IUserResponse
{
  id:number,
  username?:string,
  email:string;
  role:role;
}

export interface JwtPayload {
  userId: number;
  role: string;
}
 export interface RegisterUserInput
{
    username:string;
    email:string;
    password:string;
    role?:role;
}

export interface IRegisterResponse
{
  message?:string;
  data?:
  {
    id:number,
    email:string;
    role:role;
  };
}

export interface LoginUserInput{
    email:string;
    password:string;
}


export interface ILoginResponse
{
  message?:string;
  data?:
  {
    username?:string;
    token:string;
  }
}

export interface IUserProfile
{
    userId: number;
    role: role;
}

export interface IProfileResponse {
  message?: string;
  data?: IUserProfile;
}
export interface IAuthResponse
{
   message:string;
}

export interface AuthenticatedRequest extends Request {
  user?: {
    userId: number;
    role: string;
  };

}