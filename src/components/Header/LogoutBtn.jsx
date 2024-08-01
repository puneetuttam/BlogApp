import React from "react";
import { useDispatch, useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";
const LogoutBtn = () => {
    const dispatch = useDispatch();
    const logoutHandler = () => {
        authService.logout().then(() => { dispatch(logout())});
    };
    return <div>LogoutBtn</div>;
};

export default LogoutBtn;
