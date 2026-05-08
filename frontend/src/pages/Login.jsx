import React from 'react';
import {useState} from "react";
import {Link,useNavigate} from "react-router-dom" ;
import api from '../api/axios';
import "../styles/login.css";
import {validateLogin}from "../validation/validate";

const Login=()=>
{
    const navigate=useNavigate();
    const[formData,setFormData]=useState(
        {
            email:"",
            password:""
        }
    );
    const [errors,setErrors] =useState({});


    const handleChange=(e)=>
    {
        setFormData(
            {
                ...formData,
            [e.target.name]: e.target.value,
      });
    };


const handleSubmit = async(e)=>
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
    const savedUsers =
        JSON.parse(
            localStorage.getItem("users")
        ) || [];
    const validUser =
        savedUsers.find(
            (user)=>
                user.email ===
                formData.email &&
                user.password ===
                formData.password
        );



    if(validUser)
    {
        alert("Login Successful");

        navigate("/home");
    }

    else
    {
        alert("Invalid Credentials");
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
                    type="email"

                    name="email"

                    placeholder="Enter Email"

                    value={formData.email}

                    onChange={handleChange}

                    className={`login-input ${
                        errors.email
                        ? "input-error"
                        : ""
                    }`}
                />

                {
                    errors.email &&

                    <p className="error-text">
                        {errors.email}
                    </p>
                }

                <input
                    type="password"

                    name="password"

                    placeholder="Enter Password"

                    value={formData.password}

                    onChange={handleChange}

                    className={`login-input ${
                        errors.password
                        ? "input-error"
                        : ""
                    }`}

                />

                {
                    errors.password &&

                    <p className="error-text">
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