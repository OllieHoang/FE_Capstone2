import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import callApi from '../axios/config';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import avatar from '../assets/imgs/avtar.jpg';

import { RiAccountCircleLine } from 'react-icons/ri';
import { AiOutlineSetting } from 'react-icons/ai';

const Profile = () => {
    // const navigate = useNavigate();
    const [userName, setUserName] = useState();
    const [userEmail, setUserEmail] = useState();
    const [userId, setUserId] = useState();
    // const [dataUser, setDataUser] = useState();

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

    return (
        <section>
            <div className="header w-full  bg-gradient-to-r border-b-2 py-2   lg:px-20">
                <Header />
            </div>
            <div className="flex justify-between items-center mx-auto  mt-8  w-[70%]">
                <Link
                    to={`/profile/${userId}`}
                    className="text-[#28979A] font-medium text-xl flex gap-x-2 items-center hover:opacity-80 transition-all"
                >
                    <AiOutlineSetting />
                    Account
                </Link>
                <Link
                    to={`/editacc/${userId}`}
                    className="text-[#28979A] font-medium text-xl flex gap-x-2 items-center hover:opacity-80 transition-all"
                >
                    <RiAccountCircleLine />
                    Edit Account
                </Link>
            </div>
            <div className="h-screen mt-6 mx-auto w-[50%]">
                <div className=" flex flex-col">
                    <div className="w-full">
                        <h2 className="text-2xl flex  justify-center mb-8">My account</h2>
                        <div className="flex flex-col justify-center  gap-y-2">
                            <h5>My information</h5>
                            <div className="mx-4 flex flex-col gap-y-4">
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
                                    <div className="py-1 outline-none border-b border-gray-400">{userEmail}</div>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="" className="text-xs">
                                        Phone number:
                                    </label>
                                    <div className="py-1 outline-none border-b border-gray-400">000000000</div>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="" className="text-xs">
                                        Ngày sinh:
                                    </label>
                                    <div className="py-1 outline-none border-b border-gray-400">20-10-2020</div>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="" className="text-xs">
                                        CardId:
                                    </label>
                                    <div className="py-1 outline-none border-b border-gray-400">xxx</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="w-full flex flex-col justify-center ">
                            <h5 className="mb-2 font-medium mt-4">Current account</h5>
                            <div className="flex gap-x-2 mx-2">
                                <img src={avatar} alt="" className="rounded-full w-8 h-8 object-contain" />
                                <div className="text-gray-500">@minhdz142001</div>
                            </div>
                            <div className="ml-12">
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

                    <form>
                        <div className="flex flex-col gap-y-4">
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
