import React from 'react';

// import icon
import { AiOutlineSearch } from 'react-icons/ai';
import { IoMdNotificationsOutline } from 'react-icons/io';
import 'bootstrap/dist/css/bootstrap.min.css';
import avatar from '../assets/imgs/avtar.jpg';
import Nav from '../components/Nav';
import User from '../components/Admin/User';

const tabs = ['Dashboard', 'User', 'Billing', 'Setting'];

const AdminPage = () => {
    return (
        <section>
            <div className=" flex font-normal gap-x-4" style={{ fontFamily: ' Poppins' }}>
                <div className="flex flex-col gap-y-14  z-20  h-screen bg-slate-200 pt-6">
                    <div className="text-[#013CC6] text-xl  font-bold px-4 mx-1 flex items-center ">SCSS.</div>
                    <Nav />
                </div>
                <div className="w-full pt-6">
                    {/* Search  */}
                    <div className="flex justify-between w-full pr-10">
                        <div className="flex gap-x-4 items-center border border-[#ADA7A7] rounded-sm py-2 outline-none text-sm w-[650px] px-4 ">
                            <AiOutlineSearch />
                            <input type="text" placeholder="Search" className="outline-none w-full  " />
                        </div>
                        <div className="flex items-center">
                            <IoMdNotificationsOutline className="w-12 text-xl" />
                            <img src={avatar} alt="" className="w-12 h-12 rounded-full" />
                        </div>
                    </div>
                    {/* Content */}
                    <div className="w-full">
                        <User />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdminPage;
