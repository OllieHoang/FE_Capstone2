import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import callApi from '../axios/config';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState();
    const [userEmail, setUserEmail] = useState();
    const [userId, setUserId] = useState();
    useEffect(() => {
        const dataName = localStorage.getItem('fullname');
        if (dataName) {
            setUserName(dataName);
        }
        const dataUserId = localStorage.getItem('userId');
        if (dataUserId) {
            setUserId(dataUserId);
        }
        const dataUserEmail = localStorage.getItem('email');
        if (dataUserEmail) {
            setUserEmail(dataUserEmail);
        }
    }, []);

    const onUpdate = async (fullName, email) => {
        await callApi(`api/user/update/${userId}`, 'post', {
            fullName: fullName,
            email: email,
        })
            .then(async (data) => {
                try {
                    const response = await axios.get('http://localhost:8000/api/user/profile');
                    console.log(response);
                    console.log(response.data);
                } catch (error) {
                    console.log(error);
                }
                console.log(data);
                await localStorage.setItem('fullname', data.data.fullName?.toString());

                console.log('cập nhật thành công');
                setTimeout(() => {
                    navigate(`/`);
                }, 1000);
            })
            .catch((err) => {
                console.log('miss');
            });
    };

    const handleUpdateInfo = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const fullname = formData.get('fullname');
        const email = formData.get('email');
        onUpdate(fullname, email);
    };

    const fg = async (password) => {
        await callApi(`api/user/password/${userId}`, 'post', {
            password: password,
        })
            .then((res) => {
                setTimeout(() => {
                    navigate('/verifyaccount');
                }, 1000);
            })
            .catch((err) => {
                console.log(err);
                console.log('Thất bại');
            });
    };

    const handleResetPW = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const password = formData.get('password');

        fg(password);
    };
    return (
        <section>
            <div className="header w-full  bg-gradient-to-r border-b-2 py-2   lg:px-20">
                <Header />
            </div>
            <div className="h-screen mt-20 mx-96">
                <div className=" flex flex-col">
                    <form onSubmit={handleUpdateInfo}>
                        <div className="w-full">
                            <h2 className="text-2xl flex  justify-center mb-14">My account</h2>
                            <div className="flex flex-col justify-center  gap-y-2">
                                <h5>My information</h5>
                                <div className="mx-4 flex flex-col gap-y-2">
                                    <div className="flex flex-col">
                                        <label htmlFor="" className="text-xs">
                                            Name:
                                        </label>
                                        <input
                                            type="text"
                                            name="fullname"
                                            placeholder={userName}
                                            className="py-1 outline-none border-b border-gray-400"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="" className="text-xs">
                                            Email:
                                        </label>
                                        <input
                                            type="text"
                                            placeholder={userEmail}
                                            value={userEmail}
                                            className="py-1 outline-none border-b border-gray-400"
                                        />
                                    </div>
                                </div>
                                <button className="mx-2 px-2 py-1 bg-green-500 rounded font-medium w-[160px]">
                                    Save details
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className="mt-4">
                        <div className="w-full flex flex-col justify-center ">
                            <h5 className="mb-4">Current account</h5>
                            <div className="flex gap-x-2 mx-2">
                                <div>avt</div>
                                <div className="text-gray-500">@minhdz142001</div>
                            </div>
                            <div className="mx-12">
                                <div>Plan</div>
                                <div className="text-gray-500">Free</div>
                            </div>
                            <div className="flex justify-end">
                                <button className="w-[100px] bg-[#7c41ff] px-3 py-2 rounded font-medium text-white">
                                    Upgrade
                                </button>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={handleResetPW}>
                        <h2>Account actions for {} </h2>
                        <div className="mt-2">New password</div>
                        <input type="password" name="password" className="py-1 outline-none border-b border-gray-400" />

                        <div className="flex gap-x-8 my-8 mx-4">
                            <button className="px-4 py-2 border-2 border-black rounded">Change username</button>
                            <button className="bg-[#53585f] px-4 py-2 text-white rounded">Reset password</button>
                        </div>
                    </form>
                    <form>
                        <div className="flex flex-col gap-y-8">
                            <h2 className="">Danger zone </h2>
                            <div>
                                <button className="px-4 py-2 bg-red-600 text-white rounded font-medium">
                                    Delete Account
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Profile;
