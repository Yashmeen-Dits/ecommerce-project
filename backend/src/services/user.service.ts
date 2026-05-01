import { AppDataSource } from "../config/data-source";
import {User, role }  from "../entities/User";
import { hashPassword } from "../utils/hashPassword";
import { comparePassword } from "../utils/comparePassword";
import { generateToken } from "../utils/generateToken";

const userRepository = AppDataSource.getRepository(User);

interface RegisterUserInput
{
    username:string;
    email:string;
    password:string;
    role?:role;
}

interface LoginUserInput{
    email:string;
    password: string;
}

export const createUser = async (
    userData: RegisterUserInput
): Promise <User> =>
{
    const existingUser = await  userRepository.findOne({
            where:
            {
                email: userData.email
            },

        });
        if(existingUser)
        {
            throw new Error("User with this email already exits");
        }

        const hashedPassword = await hashPassword(userData.password);

        const user =userRepository.create(
            {
                ...userData,
              password:hashedPassword,
            });
         return await userRepository.save(user);
};



export const loginUser=async(
    userData: LoginUserInput

):Promise<{user:User; token:string}>=>
{
    const user =await userRepository.findOne({
            where:{
                email:userData.email,
            },
        });
        if(!user)
        {
            throw new Error("Invalid Credentials");
        }

        const isPasswordValid= await comparePassword(
            userData.password,
            user.password
        );

        if(!isPasswordValid)
        {
            throw new Error("Invalid credentials");
        }

        const token = generateToken({
            userId: user.id,
            role: user.role,

            });

            return{
                user,
                token
            };
};

