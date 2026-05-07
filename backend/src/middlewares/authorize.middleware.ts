import { Request,Response,NextFunction } from "express";


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
                    message:"Unauthorized",
                });
                 return;
        }
        
         if(!allowedRoles.includes(user.role))
        {
        res.status(403).json(
            {
                message:"Access Denied",

            }
        );
        return;
       }
       
    next();
    };
};