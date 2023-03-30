import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { SidebarContext } from '../contexts/SidebarContext';
import NavbarRespon from './NavbarRespon';
import { BiLogIn } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';
import Tippy from '@tippyjs/react/headless';
import Wrapper from './Wrapper';

const Header = () => {
    const { isActive, setIsActive } = useContext(SidebarContext);
    const [userName, setUserName] = useState();
    const [isaction, setIsAction] = useState(false);
    useEffect(() => {
        const dataName = localStorage.getItem('fullname');
        if (dataName) {
            setUserName(dataName);
        }
    }, []);

    return (
        <div className="flex justify-between items-center px-4 w-full flex-initial h-12 ">
            <div className="text-2xl text-red-800 ">SCIS.com.vn</div>
            <div className="flex ">
                <div className="lg:hidden">
                    <NavbarRespon />
                </div>
                <div className="lg:flex xl:gap-x-14 lg:gap-x-10 hidden justify-between w-full text-[18px]">
                    <Link to="/rules">Rules</Link>
                    <Link to="/demo">Demo</Link>
                    <Link to="/shortLink">Shorten Link</Link>
                    <Link to="/tools">Tools</Link>
                </div>
            </div>

            <div className="lg:flex lg:justify-center lg:items-center hidden  h-[60%] gap-x-2">
                {userName ? (
                    // <Tippy
                    //     render={(attrs) => (
                    //         <div className="box" tabIndex="-1" {...attrs}>
                    //             My tippy box
                    //         </div>
                    //     )}
                    //     content="Hello"
                    // >
                    <div className="lg:flex lg:justify-center lg:items-center hidden  h-[60%] gap-x-2 cursor-pointer">
                        <Tippy
                            interactive
                            render={(attrs) => (
                                <Wrapper>
                                    <div className="box" tabIndex="-1" {...attrs}>
                                        123
                                    </div>
                                </Wrapper>
                            )}
                            content="Hello"
                        >
                            <div>{userName}</div>
                        </Tippy>
                        <div
                            onClick={(event) => {
                                localStorage.removeItem('fullname');
                                setUserName('');
                                setIsAction(!isaction);
                            }}
                            className="flex justify-center items-center bg-[#38B2AC] w-[90px] h-full rounded px-4 py-4 text-white text-sm gap-x-2 cursor-pointer"
                        >
                            Logout
                        </div>
                    </div>
                ) : (
                    // </Tippy>
                    <div
                        className={`${
                            isaction
                                ? 'lg:flex lg:justify-center lg:items-center h-[60%] gap-x-2'
                                : 'lg:flex h-[60%] gap-x-2'
                        } `}
                    >
                        <Link
                            to="/login"
                            className="flex justify-center items-center w-[110px]] h-full bg-white rounded px-4 py-4 gap-x-2 text-black text-sm cursor-pointer border-2 "
                        >
                            <BiLogIn />
                            Login
                        </Link>
                        <Link
                            to="/register"
                            className="flex justify-center items-center bg-[#38B2AC] w-[90px] h-full rounded px-4 py-4 text-white text-sm gap-x-2 cursor-pointer"
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
