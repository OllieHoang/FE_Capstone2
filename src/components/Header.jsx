import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { SidebarContext } from '../contexts/SidebarContext';
import NavbarRespon from './NavbarRespon';
import { BiLogIn } from 'react-icons/bi';
import { AiOutlinePlus, AiOutlineQuestionCircle } from 'react-icons/ai';
import { RiAccountBoxLine, RiMoneyDollarCircleLine, RiQuestionAnswerLine } from 'react-icons/ri';

import Tippy from '@tippyjs/react/headless';
import Wrapper from './Wrapper';
import avatar from '../assets/imgs/avtar.jpg';

const Header = () => {
    const navigate = useNavigate();
    const { isActive, setIsActive } = useContext(SidebarContext);
    const [userName, setUserName] = useState();
    const [isaction, setIsAction] = useState(false);
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
    }, []);

    const handleLogout = (e) => {
        localStorage.removeItem('fullname');
        localStorage.removeItem('email');
        localStorage.removeItem('userId');
        setUserName('');
        setUserId('');
        setIsAction(!isaction);
        navigate('/login');
    };

    return (
        <div className="flex justify-between items-center px-4 w-full flex-initial h-12 ">
            <div className="text-2xl text-red-800 ">
                <Link to={`${userId ? `/home/${userId}` : '/'}`}>SCIS.com.vn</Link>
            </div>
            <div className="flex ">
                <div className="lg:hidden">
                    <NavbarRespon />
                </div>
                <div className="lg:flex xl:gap-x-14 lg:gap-x-10 hidden justify-between w-full text-[18px]">
                    <Link to="/rules">Rules</Link>
                    <Link to="/demo">Demo</Link>
                    <Link to="/shortLink">Shorten Link</Link>
                    <Link to="/qrcode">Qrcode</Link>
                </div>
            </div>

            <div className="lg:flex lg:justify-center lg:items-center hidden   gap-x-2">
                {userName ? (
                    <div className="lg:flex lg:justify-center lg:items-center hidden gap-x-2 cursor-pointer">
                        <Tippy
                            interactive
                            delay={[0, 800]}
                            hideOnClick="toggle"
                            placement="bottom-end"
                            render={(attrs) => (
                                <div className="box" tabIndex="-1" {...attrs}>
                                    <Wrapper>
                                        <div className=" py-4 px-4">
                                            <div className="rounded-lg bg-white md:-mx-4 md:rounded-md flex gap-x-2 my-4">
                                                <img
                                                    src={avatar}
                                                    alt=""
                                                    className="w-8 h-8 rounded-full object-cover"
                                                />
                                                <div>
                                                    <div>{userName}</div>
                                                    <div className="text-xs text-gray-600">@minhdz142001</div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col my-4 rounded-lg bg-white md:-mx-4 md:rounded-md gap-x-2 ">
                                                <div className="text-concrete text-sm mb-3 font-semibold">Account</div>
                                                <div className="flex gap-y-4 flex-col">
                                                    <div className="flex gap-x-2 items-center ">
                                                        <RiAccountBoxLine />
                                                        <Link to={`/profile/${userId}`} className="w-full">
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
                                                <div className="text-concrete text-sm mb-3 font-semibold">Support</div>
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
                                        </div>
                                    </Wrapper>
                                </div>
                            )}
                            content="Hello"
                        >
                            <div className="flex items-center">
                                <AiOutlineMenu />
                                {userName}
                            </div>
                        </Tippy>
                        <div
                            onClick={() => {
                                handleLogout();
                            }}
                            className="flex justify-center items-center bg-[#38B2AC] w-[90px] h-full rounded px-2 py-1 text-white text-sm gap-x-2 cursor-pointer"
                        >
                            Logout
                        </div>
                    </div>
                ) : (
                    // </Tippy>
                    <div
                        className={`${
                            isaction ? 'lg:flex lg:justify-center lg:items-center  gap-x-2' : 'lg:flex  gap-x-2'
                        } `}
                    >
                        <Link
                            to="/login"
                            className="flex justify-center items-center w-[110px]] h-full bg-white rounded px-2 py-1 gap-x-2 text-black text-sm cursor-pointer border-2 "
                        >
                            <BiLogIn />
                            Login
                        </Link>
                        <Link
                            to="/register"
                            className="flex justify-center items-center bg-[#38B2AC] w-[90px] h-full rounded px-2 py-1 text-white text-sm gap-x-2 cursor-pointer"
                        >
                            <AiOutlinePlus />
                            Register
                        </Link>
                    </div>
                )}
            </div>
            <div
                className="text-2xl flex justify-center items-center w-8 h-8 cursor-pointer text-red-600 lg:hidden"
                onClick={() => {
                    setIsActive(!isActive);
                }}
            >
                <AiOutlineMenu />
            </div>
        </div>
    );
};

export default Header;
