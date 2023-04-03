import React from 'react';
import Header from '../components/Header';

// import icon
import { AiOutlineClose, AiOutlineSetting } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Profile = () => {
    return (
        <section>
            <div className="header w-full  bg-gradient-to-r border-b-2 py-2   lg:px-20">
                <Header />
            </div>
            <div className="w-full mt-8">
                <div className="w-[70%] mx-auto">
                    <div className="flex justify-between text-violet-600">
                        <div className="flex gap-x-2 justify-center items-center">
                            <AiOutlineSetting />
                            <div>Account</div>
                        </div>
                        <Link to={'/delete'}>
                            <div className="flex gap-x-3 justify-center items-center">
                                <AiOutlineClose className="text-black text-xl" />
                                <div>Detele account</div>
                            </div>
                        </Link>
                    </div>
                    {/* Setting  */}
                    <div className="mt-10">
                        <div className="text-2xl font-medium">Settings</div>
                        <div className="text-[#6B7280]">Basic profile settings of your account.</div>
                        <div className="px-10 mt-4 flex flex-col gap-y-4">
                            <div className="flex flex-col gap-y-2">
                                <div className="text-[#111827] font-medium">Name</div>
                                <input type="text" className="w-full border-[#1976D2] border-2 outline-none h-12 " />
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <div className="text-[#111827] font-medium">Email</div>
                                <input type="text" className="w-full border-[#1976D2] border-2 outline-none h-12 " />
                            </div>
                        </div>
                    </div>
                    <div className="w-full bg-[#ACC4EB] h-1 mt-20 "></div>
                    <div className="w-full bg-[#EA0808] h-1 mt-8 "></div>
                    {/* Two-factor authentication */}
                    <div className="mt-10">
                        <div className="text-2xl font-medium">Two-factor authentication</div>
                        <div className="px-10 mt-4 flex flex-col gap-y-4 text-[#6B7280]">
                            Use a mobile authentication app to get a verification code to enter every time you log in.
                        </div>
                        <div className="px-10 mt-4 flex flex-col gap-y-4 ">
                            <select name="" id="" className="border-2 border-black px-4 py-2">
                                <option value="1">Yes</option>
                                <option value="2">No</option>
                            </select>
                        </div>
                    </div>
                    <div className="w-full bg-[#EA0808] h-1 mt-14 "></div>
                    {/* Change Password  */}
                    <div className="mt-10">
                        <div className="text-2xl font-medium">Change Password</div>
                        <div className="text-[#6B7280]">
                            If you do not want to change your password, do not fill any of those fields below.
                        </div>
                        <div className="px-10 mt-4 flex flex-col gap-y-4">
                            <div className="flex flex-col gap-y-2">
                                <div className="text-[#111827] font-medium">Current Password</div>
                                <input type="text" className="w-full border-[#1976D2] border-2 outline-none h-12 " />
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <div className="text-[#111827] font-medium">Repeat Password </div>
                                <input type="text" className="w-full border-[#1976D2] border-2 outline-none h-12 " />
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <div className="text-[#111827] font-medium">New Password </div>
                                <input type="text" className="w-full border-[#1976D2] border-2 outline-none h-12 " />
                            </div>
                        </div>
                    </div>
                    {/* Button submit  */}
                    <div>
                        <button className="w-full h-12 bg-[#0982FE] rounded my-20">Update</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;
