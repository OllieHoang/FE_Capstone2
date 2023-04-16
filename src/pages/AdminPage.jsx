import React from 'react';

// import icon
import { RxDashboard } from 'react-icons/rx';
import { FiMail } from 'react-icons/fi';
import { BsWallet } from 'react-icons/bs';
import { IoSettingsOutline } from 'react-icons/io5';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoMdNotificationsOutline } from 'react-icons/io';

const AdminPage = () => {
    return (
        <section>
            <div className="mt-4 flex">
                <div className="flex flex-col gap-y-14  z-20 bg-white  h-screen ">
                    <div className="text-[#013CC6] text-xl  font-bold px-4 mx-1 flex items-center ">SCSS.</div>
                    <div className="w-[250px] ">
                        <ul className="flex flex-col gap-y-8 font-thin justify-center ">
                            <li className="flex items-center gap-x-2 px-8 text-[#0B63F8]">
                                <RxDashboard /> Dashboard
                            </li>
                            <li className="flex items-center gap-x-2 px-8">
                                <FiMail /> Message
                            </li>
                            <li className="flex items-center gap-x-2 px-8">
                                <BsWallet /> Payment
                            </li>
                            <li className="flex items-center gap-x-2 px-8">
                                <IoSettingsOutline />
                                Setting
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-full">
                    {/* Search  */}
                    <div className="flex justify-between w-full pr-10">
                        <div className="flex gap-x-4 items-center border-2 border-[#ADA7A7] w-[650px] px-4 ">
                            <AiOutlineSearch />
                            <input type="text" placeholder="Search" className="w-full outline-none h-full" />
                        </div>
                        <div className="flex items-center">
                            <IoMdNotificationsOutline className="w-12 text-xl" />
                            <img src="" alt="" className="w-12 h-12 rounded-full" />
                        </div>
                    </div>
                    {/* Content */}
                    <div>
                        {/* action  */}
                        <div className="mt-8 flex flex-col gap-y-6">
                            <div className="font-bold text-xl">
                                <h2>Sales Information</h2>
                            </div>
                            <div className="flex gap-x-4 ">
                                <div className="flex flex-col gap-y-2">
                                    <h3 className="text-xs font-medium">Customer</h3>
                                    <input
                                        type="text"
                                        className="border border-[#ADA7A7] px-4 py-1 outline-none"
                                        placeholder="Enter customer name"
                                    />
                                </div>
                                <div className="flex flex-col gap-y-2">
                                    <h3 className="text-xs font-medium ">Invoice ID</h3>
                                    <input
                                        type="text"
                                        className="border border-[#ADA7A7] px-4 py-1 outline-none"
                                        placeholder="Enter invoice ID"
                                    />
                                </div>
                                <div className="flex flex-col gap-y-2">
                                    <h3 className="text-xs font-medium">Start date</h3>
                                    <input
                                        type="text"
                                        className="border border-[#ADA7A7] px-4 py-1 outline-none"
                                        placeholder="Start date"
                                    />
                                </div>
                                <div className="flex flex-col gap-y-2">
                                    <h3 className="text-xs font-medium">End date</h3>
                                    <input
                                        type="text"
                                        className="border border-[#ADA7A7] px-4 py-1 outline-none"
                                        placeholder="End date"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Content  */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdminPage;
