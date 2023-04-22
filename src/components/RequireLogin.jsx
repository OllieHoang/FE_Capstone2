import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const RequireLogin = ({ children }) => {
    // Sử dụng hook navigate để điều hướng đến trang đăng nhập
    const navigate = useNavigate();
    // Kiểm tra xem người dùng đã đăng nhập hay chưa
    const isLoggedIn = false; // Sử dụng biến isLoggedIn để kiểm tra xem người dùng đã đăng nhập hay chưa
    // Nếu chưa đăng nhập, chuyển hướng đến trang đăng nhập
    if (!isLoggedIn) {
        navigate('/login'); // Chuyển hướng đến trang đăng nhập
        return null; // Trả về null để không render children
    }
    // Nếu đã đăng nhập, render các component con bên trong
    return <React.Fragment>{children}</React.Fragment>;
};

export default RequireLogin;
