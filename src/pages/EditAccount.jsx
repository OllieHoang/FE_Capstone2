import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import ProfileAccount from '../components/Account/ProfileAccount';
import PasswordAccount from '../components/Account/PasswordAccount';
import BillingAccount from '../components/Account/BillingAccount';
import { AiOutlineSetting } from 'react-icons/ai';
import { Link } from 'react-router-dom';

// import icon

const tabs = ['Profile', 'Password', 'Billing', 'Usage'];

const EditAccount = () => {
    const [active, setActive] = useState(false);
    const [type, setType] = useState('Profile');
    const [userId, setUserId] = useState();

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        setUserId(userId);
    }, []);
    return (
        <section className="h-screen w-screen">
            <div className="header w-full  bg-gradient-to-r border-b-2 py-2   lg:px-20">
                <Header />
            </div>
            <div className="w-full mt-4">
                <div className="w-[70%] mx-auto">
                    <div className=" flex flex-col gap-y-4">
                        <Link
                            to={`/profile/${userId}`}
                            className="text-[#28979A] font-medium text-xl flex gap-x-2 items-center hover:opacity-80 transition-all"
                        >
                            <AiOutlineSetting />
                            Account
                        </Link>
                        <div className="text-gray-600">Set your account settings</div>
                    </div>
                    {/* Setting  */}
                    <div className="mt-6 w-[80%] mx-auto">
                        <div className="flex justify-between">
                            {tabs.map((tab) => (
                                <div
                                    className={` text-xl font-medium cursor-pointer`}
                                    key={tab}
                                    style={
                                        type === tab
                                            ? {
                                                  color: 'black',
                                              }
                                            : {
                                                  color: 'gray',
                                              }
                                    }
                                    onClick={() => {
                                        setType(tab);
                                        setActive(!active);
                                    }}
                                >
                                    {tab}
                                </div>
                            ))}
                        </div>
                        <div className=""></div>
                    </div>

                    <div className="w-full mt-10">
                        {type === 'Profile' ? (
                            <ProfileAccount />
                        ) : type === 'Password' ? (
                            <PasswordAccount />
                        ) : (
                            <BillingAccount />
                        )}
                    </div>

                    <div className="w-full flex justify-center ">
                        <button className="w-[60%] h-12 bg-[#070B27] rounded my-20 text-white ">Save changes</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EditAccount;
