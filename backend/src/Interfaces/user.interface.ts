

export interface IUserProfile
{
    userID: number;
    role: string;
}

export interface IProfileResponse {
  message: string;
  data: IUserProfile;
}

export interface IUserRequestBody
{
    email:string;
    password:string;
}

export interface ILoginResponse
{
    message:string;
    data:
    {
        user:unknown;
        token:string;
    };
}