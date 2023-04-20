import React, { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import Mail from '../components/Admin/Mail';
import Billing from '../components/Admin/Billing';
import Setting from '../components/Admin/Setting';
import User from '../components/Admin/User';
import Wrapper from '../components/Wrapper';
import { Link, useNavigate } from 'react-router-dom';

// import icon
import { AiOutlineSearch } from 'react-icons/ai';
import { IoMdNotificationsOutline } from 'react-icons/io';
import avatar from '../assets/imgs/avtar.jpg';
import { RxDashboard } from 'react-icons/rx';
import { FiMail } from 'react-icons/fi';
import { BsWallet } from 'react-icons/bs';
import { IoSettingsOutline } from 'react-icons/io5';
import { AiOutlineQuestionCircle, AiFillCaretDown } from 'react-icons/ai';
import { RiAccountBoxLine, RiMoneyDollarCircleLine, RiQuestionAnswerLine } from 'react-icons/ri';

const tabs = [
    { id: '1', title: 'Account', icon: <RxDashboard /> },
    { id: '2', title: 'Mail', icon: <FiMail /> },
    { id: '3', title: 'Billing', icon: <BsWallet /> },
    { id: '4', title: 'Setting', icon: <IoSettingsOutline /> },
];

const AdminPage = () => {
    const navigate = useNavigate();
    const [active, setActive] = useState(false);
    const [type, setType] = useState('Account');
    const handleLogout = () => {
        localStorage.removeItem('infoUser');
        navigate('/login');
    };
    return (
        <section>
            <div className=" flex font-normal  " style={{ fontFamily: ' Poppins' }}>
                <div className="flex flex-col gap-y-8  z-20 h-screen  pt-6 bg-[#2c2c2c] ">
                    <div className="text-white text-xl  font-bold px-4 mx-1 flex items-center ">Admin</div>
                    <div className="flex flex-col gap-y-6 w-[200px] ">
                        {tabs.map((tab) => {
                            return (
                                <div
                                    className="flex items-center gap-x-2 font-medium px-10 cursor-pointer  text-sm"
                                    key={tab.id}
                                    style={
                                        type === tab.title
                                            ? {
                                                  //   color: '#013CC6',
                                                  color: '#fff',
                                              }
                                            : {
                                                  color: 'gray',
                                              }
                                    }
                                    onClick={() => {
                                        setType(tab.title);
                                        setActive(!active);
                                    }}
                                >
                                    {tab.icon} {tab.title}
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="w-full ">
                    {/* Search  */}
                    <div className="flex justify-end w-full pr-10 border-b  py-4">
                        <div className="flex gap-x-4 justify-end">
                            <div className="flex items-center">
                                <IoMdNotificationsOutline className="text-xl" />
                            </div>
                            <div className="flex items-center">
                                <Tippy
                                    interactive
                                    trigger="click"
                                    hideOnClick="toggle"
                                    placement="bottom-end"
                                    render={(attrs) => (
                                        <div className="box" tabIndex="-1" {...attrs}>
                                            <Wrapper>
                                                <div className=" py-4 px-4">
                                                    <Link
                                                        to={'/profile'}
                                                        className="rounded-lg bg-white md:-mx-4 md:rounded-md flex gap-x-2 my-4"
                                                    >
                                                        {avatar ? (
                                                            <img
                                                                src={avatar}
                                                                alt=""
                                                                className="w-8 h-8 rounded-full object-contain"
                                                            />
                                                        ) : (
                                                            <img
                                                                src={avatar}
                                                                alt=""
                                                                className="w-8 h-8 rounded-full object-contain"
                                                            />
                                                        )}
                                                        <div>
                                                            <div>Admin</div>
                                                            <div className="text-xs text-gray-600">@minhdz142001</div>
                                                        </div>
                                                    </Link>
                                                    <div className="flex flex-col my-4 rounded-lg bg-white md:-mx-4 md:rounded-md gap-x-2 ">
                                                        <div className="text-concrete text-sm mb-3 font-semibold">
                                                            Account
                                                        </div>
                                                        <div className="flex gap-y-4 flex-col">
                                                            <div className="flex gap-x-2 items-center ">
                                                                <RiAccountBoxLine />
                                                                <Link to={`/profile`} className="w-full">
                                                                    My account
                                                                </Link>
                                                            </div>
                                                            <div className="flex gap-x-2 items-center">
                                                                <RiMoneyDollarCircleLine />
                                                                <Link to="/payment" className="w-full">
                                                                    Billing
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col my-4 rounded-lg bg-white md:-mx-4 md:rounded-md gap-x-2 ">
                                                        <div className="text-concrete text-sm mb-3 font-semibold">
                                                            Support
                                                        </div>
                                                        <div className="flex gap-y-4 flex-col">
                                                            <div className="flex gap-x-2 items-center">
                                                                <AiOutlineQuestionCircle />
                                                                <div>Ask a question</div>
                                                            </div>
                                                            <div className="flex gap-x-2 items-center ">
                                                                <RiQuestionAnswerLine />
                                                                <div>Submit feedback</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        onClick={() => {
                                                            handleLogout();
                                                        }}
                                                        className=" flex justify-center items-end bg-[#38B2AC] w-[90px] h-full rounded px-2 py-1 text-white text-sm gap-x-2 cursor-pointer"
                                                    >
                                                        Logout
                                                    </div>
                                                </div>
                                            </Wrapper>
                                        </div>
                                    )}
                                    content="Hello"
                                >
                                    <div className="flex items-center gap-x-3">
                                        <img src={avatar} alt="" className="w-8 h-8 rounded-full cursor-pointer" />
                                        <div>Admin</div>
                                        <AiFillCaretDown />
                                    </div>
                                </Tippy>
                            </div>
                        </div>
                    </div>
                    {/* Content */}
                    <div className="w-full px-10 ">
                        {type === 'Account' ? (
                            <User title={'User list'} />
                        ) : type === 'Mail' ? (
                            <Mail title={'Mail'} />
                        ) : type === 'Billing' ? (
                            <Billing />
                        ) : (
                            <Setting />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdminPage;
