import { Request,Response,NextFunction } from "express";
import { AUTH_MESSAGES } from "../constants/messages";


export const authorize =(...allowedRoles:string[])=>
{
    return(
    req:Request,
    res:Response,
    next:NextFunction
    ):void =>
    {
        const user=(req as Request &{
            user?:{role:string};
        }).user;

        if(!user)
        {
            res.status(401).json(
                {
                 message:AUTH_MESSAGES.UNAUTHORIZED,
                });
                 return;
        }
        
         if(!allowedRoles.includes(user.role))
        {
        res.status(403).json(
            {
                message:AUTH_MESSAGES.ACCESS_DENIED,

            }
        );
        return
       }
       
    next();
    };
};