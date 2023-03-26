import React from 'react';
import login from '../assets/imgs/login.png';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <section className="h-screen w-screen">
            <div className="flex justify-center items-center flex-col mt-[20px] xl:flex-row xl:mt-0">
                <div className=" w-[50%] flex flex-col justify-center items-center gap-y-3 ">
                    <div className="font-bold text-xl w-full items-center justify-center flex">
                        <h3>Welcome to SCIS!</h3>
                    </div>
                    <div className="flex flex-col gap-y-2 w-full ">
                        <div>Username:</div>
                        <input type="text" className="border-[#656ED3] border-2 rounded-full px-3 py-1 outline-none" />
                    </div>
                    <div className="flex flex-col gap-y-2 w-full">
                        <div>Password:</div>
                        <input
                            type="password"
                            className="border-[#656ED3] border-2 rounded-full px-3 py-1 outline-none"
                        />
                    </div>
                    <div className="w-full flex justify-end my-2">
                        <Link to="/forgot-pw" className="">
                            Forgot Password?
                        </Link>
                    </div>
                    <div className="bg-[#656ED3] hover:bg-[#6a73d4] cursor-pointer transition-all rounded-full w-full flex justify-center items-center ">
                        <button className="text-white w-full py-3">Login</button>
                    </div>
                </div>
                <div className="object-cover w-96 xl:w-[40%] flex items-center justify-center ml-20 ">
                    <img src={login} alt="" />
                </div>
            </div>
        </section>
    );
};

export default LoginPage;
