import Joi from 'joi';


 export const registerUserchema = Joi.object(
    {
        username:Joi.string().min(3).max(30).required(),
        email:Joi.string().email().required(),
        password:Joi.string().pattern(
         /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).+$/
       ).min(8).required(),

        role:Joi.string()
        .valid("customer","seller","admin")
        .optional(),

    });

export const loginUserSchema=Joi.object(
        {
        username:Joi.string().email().required,
        password: Joi.string().required(),
            
        }
    );












