import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Login as authLogin } from "../store/authSlice";
import { Button, Input, Logo } from "./index";
import authService, { AuthService } from "../appwrite/auth";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState();

    const login = async () => {
        setError("");
        try {
            const session = await authService.login(data);
            if (session) {
                const userData = await authService.getCurrentUser();
                if (userData) dispatch(authLogin(userData));
                navigate("/");
            }
        } catch (err) {
            console.log(err);
        }
    };
    return <div>Login</div>;
};

export default Login;
