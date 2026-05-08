import { useState } from "react";
import api from "../api/axios";
import "../styles/landing.css";
import { Link, useNavigate } from "react-router-dom";
import { validateRegister } from "../validation/validate";

const Register = () =>
{
    const navigate = useNavigate();
    const [formData, setFormData] = useState(
    {
        name: "",
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({});
    const handleChange = (e) =>
    {
        setFormData(
        {
            ...formData,

            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async (e) =>
    {
        e.preventDefault();
        const validationErrors =
            validateRegister(formData);

        setErrors(validationErrors);
        if (
            Object.keys(validationErrors)
            .length > 0
        )
        {
            return;
        }
        try
        {
            const response = await api.get(
                "https://dummyjson.com/users"
            );

            console.log(response.data);

            const apiUsers =
                response.data.users;


            const localUsers =
                JSON.parse(
                    localStorage.getItem("users")
                ) || [];

            const apiUserExists =
                apiUsers.find(
                    (user) =>
                        user.email ===
                        formData.email
                );
            const localUserExists =
                localUsers.find(
                    (user) =>
                        user.email ===
                        formData.email
                );

            if (
                apiUserExists ||
                localUserExists
            )
            {
                alert("User Already Exists");
                return;
            }

            localUsers.push(formData);
            localStorage.setItem("users",JSON.stringify(localUsers)
            );
            alert("Registration Successful");
            navigate("/login");
        }
        catch (error)
        {
            console.log(error);
            alert(
                "User Registration Unsuccessful"
            );
        }
    };

    return (
        <div className="register-container">
            <form
                className="register-form"
                onSubmit={handleSubmit}
            >
                <h1>Register</h1>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`register-input ${
                        errors.name
                        ? "input-error"
                        : ""
                    }`}
                />

                {
                    errors.name &&
                    <p className="error-text">
                        {errors.name}
                    </p>
                }
                <input
                    type="email"

                    name="email"

                    placeholder="Enter Email"

                    value={formData.email}

                    onChange={handleChange}

                    className={`register-input ${
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

                    className={`register-input ${
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
                    Register
                </button>
                <p>
                    Already have an account?
                    <Link to="/login">
                        Login
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Register;