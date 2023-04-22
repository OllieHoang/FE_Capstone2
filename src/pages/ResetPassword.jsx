import React from 'react';
import register from '../assets/imgs/register.png';
import { Link, Navigate } from 'react-router-dom';
import callApi from '../axios/config';

const ResetPassword = () => {
    const resetpw = async (password) => {
        await callApi('api/user/update/:`${id}`', 'post', {})
            .then((res) => {
                console.log(res.password);

                console.log('Đã gửi thành công');
                setTimeout(() => {
                    Navigate('/resetpw');
                }, 1000);
            })
            .catch((err) => {
                console.log(err);
                console.log('Thất bại');
            });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const password = formData.get('password');

        resetpw(password);
    };
    return (
        <form className="h-screen w-screen" onSubmit={handleSubmit}>
            <div className="flex items-center flex-col xl:mt-[40px] xl:flex-row gap-x-20 pb-20 ">
                <div className="object-cover w-80 xl:w-[40%] flex items-center justify-center ml-20 ">
                    <img src={register} alt="" />
                </div>
                <div className=" w-[50%] xl:w-[30%] flex flex-col justify-center items-center   h-full">
                    <div className="font-bold text-xl w-full items-center justify-center flex">
                        <h3>Change your password!</h3>
                    </div>
                    <div>
                        <h4>Enter your new password</h4>
                    </div>
                    <div className="flex flex-col gap-y-2 w-full mb-6 mt-6">
                        <div>New password:</div>
                        <input
                            name="password"
                            type="password"
                            className="border-[#656ED3] border-2 rounded-full px-3 py-1 outline-none"
                        />
                    </div>
                    <div className="flex flex-col gap-y-2 w-full mb-6">
                        <div>Confirm password:</div>
                        <input
                            name="password"
                            type="password"
                            className="border-[#656ED3] border-2 rounded-full px-3 py-1 outline-none"
                        />
                    </div>
                    <div className="bg-[#656ED3] hover:bg-[#6a73d4] cursor-pointer transition-all rounded-full w-full flex justify-center items-center ">
                        <button className="text-white w-full py-3">Accept</button>
                    </div>
                    <div className="flex gap-x-6 mt-4">
                        {/* <div> Have and account ?</div> */}
                        {/* <Link to="/login" className="font-bold border-r border-black pr-8">
                            Login
                        </Link>
                        <Link to="/login" className="font-bold">
                            Register
                        </Link> */}
                    </div>
                    {/* <div className="flex gap-x-2 mt-4">
                        <div>Dont have and account ?</div>
                        <Link to="/login" className="font-bold">
                            Register
                        </Link>
                    </div> */}
                </div>
            </div>
        </form>
    );
};

export default ResetPassword;
