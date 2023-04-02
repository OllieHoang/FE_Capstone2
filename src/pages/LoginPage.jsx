import React from 'react';
import login from '../assets/imgs/login.png';
import { Link, useNavigate } from 'react-router-dom';
import callApi from '../axios/config';

const LoginPage = () => {
    const navigate = useNavigate();
    const onLogin = async (email, password) => {
        await callApi('api/user/login', 'post', {
            email: email,
            password: password,
        })
            .then(async (data) => {
                await localStorage.setItem('fullname', data.data.fullName?.toString());
                await localStorage.setItem('userId', data.data.userId?.toString());
                await localStorage.setItem('email', data.data.email?.toString());

                console.log('đăng nhập thành công');
                setTimeout(() => {
                    navigate('/');
                }, 1000);
            })
            .catch((err) => {
                console.log('miss');
            });
    };

    const handleSummit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get('email');
        const password = formData.get('password');

        onLogin(email, password);
    };
    return (
        <form className="h-screen w-screen" onSubmit={handleSummit}>
            <div className="flex justify-center items-center flex-col mt-[20px] xl:flex-row xl:mt-0">
                <div className=" w-[50%] xl:w-[30%] flex flex-col justify-center items-center gap-y-3 ">
                    <div className="font-bold text-xl w-full items-center justify-center flex">
                        <h3>Welcome to SCIS!</h3>
                    </div>
                    <div className="flex flex-col gap-y-2 w-full ">
                        <div>Email:</div>
                        <input
                            name="email"
                            type="text"
                            className="border-[#656ED3] border-2 rounded-full px-3 py-1 outline-none"
                        />
                    </div>
                    <div className="flex flex-col gap-y-2 w-full">
                        <div>Password:</div>
                        <input
                            name="password"
                            type="password"
                            className="border-[#656ED3] border-2 rounded-full px-3 py-1 outline-none"
                        />
                    </div>
                    <div className="w-full flex justify-end my-2">
                        <Link to="/forgotpw" className="">
                            Forgot Password?
                        </Link>
                    </div>
                    <div className="bg-[#656ED3] mb-2 hover:bg-[#6a73d4] cursor-pointer transition-all rounded-full w-full flex justify-center items-center ">
                        <button className="text-white w-full py-3">Login</button>
                    </div>
                    <div className="flex gap-x-2 mt-4">
                        <div>Dont have and account ?</div>
                        <Link to="/register" className="font-bold">
                            Register
                        </Link>
                    </div>
                </div>
                <div className="object-cover w-96 xl:w-[40%] flex items-center justify-center ml-20 ">
                    <img src={login} alt="" />
                </div>
            </div>
        </form>
    );
};

export default LoginPage;
