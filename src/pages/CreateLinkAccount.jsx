import React, { useContext, useRef, useState } from 'react';
// import icon
import { RxCaretRight } from 'react-icons/rx';
import { GrClose } from 'react-icons/gr';
import { IoAdd, IoEarthOutline } from 'react-icons/io5';
import { FiFacebook, FiInstagram } from 'react-icons/fi';
import { BsTelephone, BsFillSunFill } from 'react-icons/bs';
import ContentLinkAccount from '../components/LinkAccount/ContentLinkAccount';
import { ModalContext } from '../contexts/ModalContext';
import { CiShare2 } from 'react-icons/ci';
import { AiOutlineRight } from 'react-icons/ai';
import { HiQrCode } from 'react-icons/hi2';

import imgtt from '../assets/imgs/icontiktok.svg';
import imgtw from '../assets/imgs/icontw.svg';
import imgpinter from '../assets/imgs/iconpinterest.svg';

import avatar from '../assets/imgs/avtar.jpg';
import Tippy from '@tippyjs/react/headless';
import { Link } from 'react-router-dom';
import Wrapper from '../components/Wrapper';
import { ToastContainer, toast } from 'react-toastify';

const LinkAccount = () => {
    const { isActive, setIsActive } = useContext(ModalContext);
    const [urlInput, setUrlInput] = useState('');
    const [isLink, setIsLink] = useState(false);
    const [coppy, setCoppy] = useState('coppy');

    //code sao chep link
    const divRef = useRef(null);

    const handleCopyClick = () => {
        // Lấy nội dung của phần tử div
        const text = divRef.current.textContent;
        // Sao chép nội dung vào clipboard
        navigator.clipboard.writeText(text);
        toast.success('Coppied!', {
            position: 'top-right',
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
        });
        setCoppy(!coppy);
        setTimeout(() => {
            setCoppy(coppy);
        }, 2000);
    };

    const handleUrlInputChange = (event) => {
        const value = event.target.value;
        setUrlInput(value);
        setIsLink(isValidUrl(value));
    };
    const isValidUrl = (url) => {
        try {
            new URL(url);
            return true;
        } catch (error) {
            return false;
        }
    };

    return (
        <section>
            <div className="text-base font-medium pt-20  mx-24 flex justify-between border-b-2 py-2">
                <div>Link</div>
                <ToastContainer />
                <Tippy
                    interactive
                    delay={[0, 100]}
                    hideOnClick="toggle"
                    trigger="click"
                    placement="bottom-end"
                    render={(attrs) => (
                        <div className="box" tabIndex="-1" {...attrs}>
                            <Wrapper>
                                <div className=" py-4 px-4">
                                    <div className="rounded-lg bg-white md:-mx-4 md:rounded-md flex-col flex gap-x-2 my-4 justify-center gap-y-2">
                                        <div className="flex justify-center font-base text-base">
                                            Share your link SCSS
                                        </div>
                                        <div className="text-sm flex items-center text-[#757b74] font-extralight">
                                            Get more visitors by sharing your Linktree everywhere.
                                        </div>
                                    </div>
                                    <div className="flex flex-col my-4 rounded-lg bg-white md:-mx-4 md:rounded-md gap-x-2 ">
                                        <div className="flex gap-y-4 flex-col">
                                            <div className="flex gap-x-2 items-center ">
                                                <Link
                                                    to={`/qrcode`}
                                                    className="w-full flex items-center justify-between hover:bg-slate-200 hover:rounded-lg"
                                                >
                                                    <div className="flex items-center gap-x-2">
                                                        <HiQrCode className="text-sm bg-pink-300 px-2 py-2 w-10 h-10 rounded-xl" />
                                                        <div>My SCSS QRcode</div>
                                                    </div>
                                                    <AiOutlineRight />
                                                </Link>
                                            </div>
                                            <div className="flex gap-x-2 items-center">
                                                <Link
                                                    to={`/`}
                                                    className="w-full flex items-center justify-between hover:bg-slate-200 hover:rounded-lg"
                                                >
                                                    <div className="flex items-center gap-x-2">
                                                        <IoEarthOutline className="text-sm bg-yellow-300 px-2 py-2 w-10 h-10 rounded-xl" />
                                                        <div>Open my SCSS</div>
                                                    </div>
                                                    <AiOutlineRight />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-5">
                                        <div
                                            onClick={handleCopyClick}
                                            className=" flex justify-between  items-center  border-2 h-full rounded px-3 py-2  text-sm gap-x-2 cursor-pointer"
                                        >
                                            <div ref={divRef} className="flex items-center gap-x-1">
                                                <BsFillSunFill />
                                                SCSS/minhdz
                                            </div>
                                            {coppy ? (
                                                <span>coppy</span>
                                            ) : (
                                                <span className="text-green-700">coppied</span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </Wrapper>
                        </div>
                    )}
                    content="Hello"
                >
                    <div className="px-2 py-1 border rounded-3xl flex gap-x-1 items-center text-base cursor-pointer">
                        <CiShare2 /> Share
                    </div>
                </Tippy>
                {/* <div className="px-2 py-1 border rounded-3xl flex gap-x-1 items-center text-base">
                    <CiShare2 /> Share
                </div> */}
            </div>
            <div className="h-screen py-2  flex justify-around relative pb-20">
                <div className="w-[750px] h-full mt-4 border-r px-12 placeholder:">
                    {/* add link */}
                    <div
                        onClick={() => {
                            setIsActive(!isActive);
                        }}
                        className="bg-red-500 text-white px-2 py-2 rounded-2xl flex justify-center cursor-pointer items-center font-medium gap-x-2"
                    >
                        <IoAdd className="text-xl font-medium" />
                        <button>Add link</button>
                    </div>
                    <div className={`${isActive ? ' hidden ' : ' block '}  `}>
                        <div className="w-full h-[350px] z-20 shadow-lg ">
                            <div className={`${isActive ? 'hidden ' : 'block'} `}>
                                <div className="flex justify-between pt-4">
                                    <div className="font-medium text-sm">Enter Url</div>
                                    <div
                                        onClick={() => {
                                            setIsActive(!isActive);
                                        }}
                                        className="px-2 py-1 cursor-pointer flex justify-end mr-6"
                                    >
                                        <GrClose />
                                    </div>
                                </div>
                                <div className="bodyModal w-full border-b py-2">
                                    <div className="flex justify-between px-16 items-center">
                                        <input
                                            type="url"
                                            placeholder="URL"
                                            className="border rounded-xl w-[80%] px-2 h-12 text-sm"
                                            value={urlInput}
                                            onChange={handleUrlInputChange}
                                        />
                                        <button
                                            className={`w-20 py-3 rounded-3xl font-medium ${
                                                isLink ? 'bg-red-500 text-white ' : 'bg-gray-300 text-gray-500 '
                                            }`}
                                        >
                                            Add
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="flex justify-between items-center">
                                        <div className="text-sm font-medium text-[#666b5f]">
                                            Inspired by your interests
                                        </div>
                                        <div className="flex gap-x-1 items-center font-medium text-[#8129d9] px-2 py-1 cursor-pointer ">
                                            <div className="border-b border-transparent  hover:border-b hover:border-[#8129d9]">
                                                View all
                                            </div>
                                            <RxCaretRight className="text-xl" />
                                        </div>
                                    </div>
                                    <div className="flex gap-x-2 px-6">
                                        <div className="my-2 flex flex-col items-center justify-center relative transition duration-75 ease-out first:pl-4 last:pr-4 md:first:pl-0 md:last:pr-0">
                                            <button
                                                className="hover:ring-sand hover:ring-2 hover:ring-inset active:bg-chalk  focus-visible:outline-black w-[88px] h-[88px] outline-none outline-offset-[-2px] bg-marble rounded-lg  antialiased text-black overflow-hidden mb-2"
                                                aria-label="Pinterest"
                                            >
                                                <div className="flex justify-center items-center" aria-hidden="true">
                                                    <div className="rounded-sm overflow-hidden">
                                                        <img src={imgtt} alt="" className="w-10 h-10 object-contain" />
                                                    </div>
                                                </div>
                                            </button>
                                            <p className="text-black text-xs w-full text-center font-semibold text-ellipsis overflow-hidden whitespace-nowrap">
                                                Tiktok
                                            </p>
                                        </div>
                                        <div className="my-2 flex flex-col items-center justify-center relative transition duration-75 ease-out first:pl-4 last:pr-4 md:first:pl-0 md:last:pr-0">
                                            <button
                                                className="hover:ring-sand hover:ring-2 hover:ring-inset active:bg-chalk  focus-visible:outline-black w-[88px] h-[88px] outline-none outline-offset-[-2px] bg-marble rounded-lg border-marble antialiased text-black overflow-hidden mb-2"
                                                aria-label="Pinterest"
                                            >
                                                <div className="flex justify-center items-center" aria-hidden="true">
                                                    <div className="rounded-sm overflow-hidden">
                                                        <img src={imgtw} alt="" className="w-10 h-10 object-contain" />
                                                    </div>
                                                </div>
                                            </button>
                                            <p className="text-black text-xs w-full text-center font-semibold text-ellipsis overflow-hidden whitespace-nowrap">
                                                Twitter
                                            </p>
                                        </div>
                                        <div className="my-2 flex flex-col items-center justify-center relative transition duration-75 ease-out first:pl-4 last:pr-4 md:first:pl-0 md:last:pr-0">
                                            <button
                                                className="hover:ring-sand hover:ring-2 hover:ring-inset active:bg-chalk  focus-visible:outline-black w-[88px] h-[88px] outline-none outline-offset-[-2px] bg-marble rounded-lg border-marble antialiased text-black overflow-hidden mb-2"
                                                aria-label="Pinterest"
                                            >
                                                <div className="flex justify-center items-center" aria-hidden="true">
                                                    <div className="rounded-sm overflow-hidden">
                                                        <img
                                                            src={imgpinter}
                                                            alt=""
                                                            className="w-10 h-10 object-contain"
                                                        />
                                                    </div>
                                                </div>
                                            </button>
                                            <p className="text-black text-xs w-full text-center font-semibold text-ellipsis overflow-hidden whitespace-nowrap">
                                                Pinterest
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        {/* {contents.map((content, index) => {
                            return <ContentLinkAccount isActive={isActive} />;
                        })} */}
                        <ContentLinkAccount isActive={isActive} urlInput={''} />
                    </div>
                </div>
                <div className="flex justify-center mt-5 w-[280px] h-[560px] relative ">
                    <div className="w-full h-full border-[10px] border-black rounded-[40px] bg-black"></div>
                    <div className="absolute top-4  w-[90%] h-[90%] flex flex-col items-center text-white gap-y-4">
                        <div className="flex items-center flex-col">
                            <img
                                src={avatar}
                                alt=""
                                className="w-16 h-16 mt-10 rounded-full object-contain flex justify-center"
                            />
                            <div className="flex flex-col items-center gap-y-1">
                                <div className="text-sm  font-medium">Võ Minh</div>
                                <div className="text-xs">Liên hệ: 09633765405</div>
                            </div>
                        </div>
                        <div className="flex flex-col mt-2 gap-y-3 items-center w-full">
                            <div className="bg-[#222222] rounded-xl w-[90%] h-[36px] flex items-center ">
                                <div className="h-full w-[20%] flex items-center justify-center">
                                    <FiFacebook className="w-[80%] h-[60%]" />
                                </div>
                                <div className="text-xs flex items-center pl-10">Facebbook</div>
                            </div>
                            <div className="bg-[#222222] rounded-xl w-[90%] h-[36px] flex items-center ">
                                <div className="h-full w-[20%] flex items-center justify-center">
                                    <FiInstagram className="w-[80%] h-[60%]" />
                                </div>
                                <div className="text-xs flex items-center pl-10">Instagram</div>
                            </div>
                            <div className="bg-[#222222] rounded-xl w-[90%] h-[36px] flex items-center ">
                                <div className="h-full w-[20%] flex items-center justify-center">
                                    <BsTelephone className="  w-[80%] h-[50%]" />
                                </div>
                                <div className="text-xs flex items-center pl-10">Zalo</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-x-1 text-xs font-medium items-center absolute bottom-10 text-white ">
                        SCSS <BsFillSunFill />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LinkAccount;
