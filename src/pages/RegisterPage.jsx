import React from 'react';
import register from '../assets/imgs/register.png';
import { Link, useNavigate } from 'react-router-dom';
import callApi from '../axios/config';

const RegisterPage = () => {
    const navigate = useNavigate();
    const onSignUp = async (fullName, email, password) => {
        await callApi('api/user/register', 'post', {
            fullName: fullName,
            email: email,
            password: password,
        })
            .then((res) => {
                console.log(res.data);

                setTimeout(() => {
                    navigate('/verifyaccount');
                }, 1000);
                console.log('Đăng ký thành công');
            })
            .catch((err) => {
                console.log(err);
                console.log('Thất bại');
            });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const fullname = formData.get('fullname');
        const password = formData.get('password');
        const email = formData.get('email');

        onSignUp(fullname, email, password);
    };
    return (
        <form className="h-screen w-screen" onSubmit={handleSubmit}>
            <div className="flex items-center flex-col xl:mt-[40px] xl:flex-row gap-x-20 pb-20 ">
                <div className="object-cover w-80 xl:w-[40%] flex items-center justify-center ml-20 ">
                    <img src={register} alt="" />
                </div>
                <div className=" w-[50%] xl:w-[30%] flex flex-col justify-center items-center gap-y-3 h-full">
                    <div className="font-bold text-xl w-full items-center justify-center flex">
                        <h3>Welcome to SCIS!</h3>
                    </div>
                    <div className="flex flex-col gap-y-2 w-full ">
                        <div>Fullname:</div>
                        <input
                            name="fullname"
                            type="text"
                            className="border-[#656ED3] border-2 rounded-full px-3 py-1 outline-none"
                        />
                    </div>
                    {/* <div className="flex flex-col gap-y-2 w-full ">
                        <div>Username:</div>
                        <input type="text" className="border-[#656ED3] border-2 rounded-full px-3 py-1 outline-none" />
                    </div> */}
                    <div className="flex flex-col gap-y-2 w-full ">
                        <div>Email:</div>
                        <input
                            name="email"
                            type="email"
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
                    <div className="flex flex-col gap-y-2 w-full">
                        <div>Confirm Password:</div>
                        <input
                            type="password"
                            className="border-[#656ED3] border-2 rounded-full px-3 py-1 outline-none"
                        />
                    </div>
                    <div className="w-full flex justify-end my-2">
                        <Link to="/forgotpw" className="">
                            Forgot Password?
                        </Link>
                    </div>
                    <div className="bg-[#656ED3] hover:bg-[#6a73d4] cursor-pointer transition-all rounded-full w-full flex justify-center items-center ">
                        <button className="text-white w-full py-3">Register</button>
                    </div>
                    <div className="flex gap-x-2 mt-4">
                        <div> Have and account ?</div>
                        <Link to="/login" className="font-bold">
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default RegisterPage;
