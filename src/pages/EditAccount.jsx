import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import ProfileAccount from '../components/Account/ProfileAccount';
import PasswordAccount from '../components/Account/PasswordAccount';
import BillingAccount from '../components/Account/BillingAccount';
import { AiOutlineSetting } from 'react-icons/ai';
import { Link } from 'react-router-dom';

// import icon

const tabs = ['Profile', 'Password', 'Billing'];

const EditAccount = () => {
    const [active, setActive] = useState(false);
    const [type, setType] = useState('Profile');

    useEffect(() => {}, []);
    return (
        <section className=" pt-20">
            <div className="w-full mt-4 h-screen ">
                <div className="w-[70%] mx-auto">
                    <div className=" flex flex-col gap-y-4">
                        <Link
                            to={`/profile`}
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
                </div>
            </div>
        </section>
    );
};

export default EditAccount;
