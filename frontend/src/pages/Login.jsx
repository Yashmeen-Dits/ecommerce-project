import React from 'react';
import { useState ,useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";


import api from '../api/axios';

import "../styles/login.css";

import { validateLogin }
from "../validation/validate";

const Login = () =>
{
    const navigate = useNavigate();

    useEffect(()=>
    {
        const token=localStorage.getItem("token");

        if(token)
        {
            navigate("/home");
        }
    },[])

    const [formData, setFormData] =
    useState(
    {
        username:"",
        password:""
    });

    const [errors, setErrors] =
    useState({});

    const handleChange = (e) =>
    {
        setFormData(
        {
            ...formData,

            [e.target.name]:
            e.target.value,
        });
    };

    const handleSubmit = async (e) =>
    {
        e.preventDefault();
        const validationErrors =
            validateLogin(formData);
        setErrors(validationErrors);
        if(
            Object.keys(validationErrors)
            .length > 0
        )
        {
            return;
        }
        try
        {
            const loginResponse =
                await api.post(
                    "/auth/login",
                    {
                        username:
                            formData.username,
                        password:
                            formData.password,
                    }
                );

            console.log(
                loginResponse.data
            );
            const token =
                loginResponse.data
                .accessToken;
            localStorage.setItem(
                "token",
                token
            );
            const userResponse = await api.get( "/user/me",
                    {
                        headers:
                        {
                            Authorization:
                            `Bearer ${token}`,
                        },
                    }
                );

            console.log(
                userResponse.data
            );

            localStorage.setItem(
                "currentUser",
                JSON.stringify(
                    userResponse.data
                )
            );

            alert("Login Successful");
            navigate("/home");
        }
        catch(error)
        {
            console.log(error);
            alert(
                "Invalid Credentials"
            );
        }
    };



    return (

        <div className="login-container">
            <form
                className="login-form"
                onSubmit={handleSubmit}
            >
                <h1>Login</h1>
                <input
                    type="text"
                    name="username"
                    placeholder=
                    "Enter Username"
                    value={formData.username}
                    onChange={handleChange}
                    className={`login-input ${
                        errors.username
                        ? "input-error"
                        : ""
                    }`}
                />

                {
                    errors.username &&
                    <p className="error-text">
                        {errors.username}
                    </p>
                }



                <input
                    type="password"
                    name="password"
                    placeholder=
                    "Enter Password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`login-input ${
                        errors.password
                        ? "input-error"
                        : ""
                    }`}
                />

                {
                    errors.password && <p className="error-text">
                     {errors.password}
                    </p>
                }

                <button type="submit">
                    Login
                </button>
                <p>
                    Don't have an account?
                    <Link to="/">
                        Register
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Login;