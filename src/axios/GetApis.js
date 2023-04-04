import { useState } from 'react';
import callApi from './config';
import { navigate, Navigate } from 'react-router-dom';

export const verifyVali = async (v) => {
    await callApi('api/user/forgot', 'post', {
        verificationCode: v,
    })
        .then(() => {
            setTimeout(() => {
                Navigate('/ResetPassword');
            });
        })
        .catch((err) => {
            console.log(err);
            console.log('Thất bại');
        });
};

export const onLogin = async (email, password) => {
    await callApi('api/user/login', 'post', {
        email: email,
        password: password,
    })
        .then(async (data) => {
            await localStorage.setItem('fullname', data.data.fullName?.toString());
            await localStorage.setItem('userId', data.data.userId?.toString());
            console.log(localStorage.setItem('userId', data.data.userId?.toString()));
            console.log('đăng nhập thành công');
            setTimeout(() => {
                navigate('/');
            }, 1000);
        })
        .catch((err) => {
            console.log('miss');
        });
};
