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
    const [userEmail, setUserEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [phone, setPhone] = useState('');
    const [birthday, setBirthday] = useState('');
    const [cardID, setCardID] = useState('');

    const infoUser = JSON.parse(localStorage.getItem('infoUser'));
    useEffect(() => {
        const fechtApi = async () => {
            await callApi(`api/user/profile/${infoUser.userID}`, 'get')
                .then((data) => {
                    setUserName(data.data.fullName);
                    setUserEmail(data.data.email);
                    setPhone(data.data.phone);
                    setBirthday(data.data.dateOfBirth);
                    setCardID(data.data.IDcard);
                })
                .catch((error) => {
                    console.log('fail', error);
                });
        };
        fechtApi();
    }, []);

    return (
        <section className="">
            <div className="header w-full">
                <Header />
            </div>
            <div className="flex justify-between items-center mx-auto  w-[70%] pt-20">
                <Link
                    to={`/profile`}
                    className="text-[#28979A] font-medium text-xl flex gap-x-2 items-center hover:opacity-80 transition-all"
                >
                    <AiOutlineSetting />
                    Account
                </Link>
                <Link
                    to={`/editacc`}
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
                                <div className="flex flex-col gap-y-2">
                                    <label htmlFor="" className="text-xs">
                                        Name:
                                    </label>
                                    <div className="text-gray-600 ml-6">{userName}</div>
                                    {/* <input
                                        type="text"
                                        name="fullname"
                                        placeholder={userName}
                                        className="py-1 outline-none"
                                        disabled
                                    /> */}
                                </div>
                                <div className="flex flex-col gap-y-2">
                                    <label htmlFor="" className="text-xs">
                                        Email:
                                    </label>
                                    <div className="text-gray-600 ml-6">{userEmail}</div>
                                </div>
                                <div className="flex flex-col gap-y-2">
                                    <label htmlFor="" className="text-xs">
                                        Phone number:
                                    </label>
                                    <div className="text-gray-600 ml-6">{phone}</div>
                                </div>
                                <div className="flex flex-col gap-y-2">
                                    <label htmlFor="" className="text-xs">
                                        Ngày sinh:
                                    </label>
                                    <div className="text-gray-600 ml-6">{birthday}</div>
                                </div>
                                <div className="flex flex-col gap-y-2">
                                    <label htmlFor="" className="text-xs">
                                        CardId:
                                    </label>
                                    <div className="text-gray-600 ml-6">{cardID}</div>
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
