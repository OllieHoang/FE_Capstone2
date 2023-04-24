import React, { useEffect, useRef, useState } from 'react';
// import icon
import { IoEarthOutline } from 'react-icons/io5';

import { BsFillSunFill } from 'react-icons/bs';
import { AiOutlineLeft } from 'react-icons/ai';
import QRCode from 'qrcode.react';
import * as htmlToImage from 'html-to-image';
import { saveAs } from 'file-saver';
import { HiDownload } from 'react-icons/hi';
// import { FiFacebook, FiInstagram } from 'react-icons/fi';
// import { BsTelephone, BsFillSunFill } from 'react-icons/bs';
import { CiShare2 } from 'react-icons/ci';
import { AiOutlineRight } from 'react-icons/ai';
import { HiQrCode } from 'react-icons/hi2';
import { BsLink45Deg } from 'react-icons/bs';
import { IoShapesOutline } from 'react-icons/io5';

import Tippy from '@tippyjs/react/headless';
import { Link } from 'react-router-dom';
import Wrapper from '../components/Wrapper';
import { ToastContainer, toast } from 'react-toastify';
import ViewLinkAccount from '../components/LinkAccount/ViewLinkAccount';
import axios from 'axios';
import CreateLink from '../components/LinkAccount/CreateLink';
import Appearance from '../components/LinkAccount/Appearance';

const tabs = [
    { id: '1', title: 'Link', icon: <BsLink45Deg /> },
    { id: '2', title: 'Appearance', icon: <IoShapesOutline /> },
];

const LinkAccount = () => {
    const [coppy, setCoppy] = useState('coppy');
    const [type, setType] = useState('Link');
    const [show, setShow] = useState(true);
    //code sao chep link
    const divRef = useRef(null);

    // handle Coppy Link
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
    //show level 2 QRcode
    const handleShow = () => {
        setShow(!show);
    };

    // ham dowload img qrcode
    function downloadQRCode() {
        const qrCodeNode = document.getElementById('qr-code');
        htmlToImage
            .toPng(qrCodeNode)
            .then(function (dataUrl) {
                saveAs(dataUrl, 'qr-code.png');
            })
            .catch(function (error) {
                console.error('Error:', error);
            });
    }

    // get QRCode
    // const defaultUrl = 'https://scis.hocit.com.vn/';
    const defaultUrl = 'http://localhost:3000/demo/';

    const domain = defaultUrl.replace(/^https?:\/\//, '').replace(/\/$/, '');
    const infoUser = JSON.parse(localStorage.getItem('infoUser'));
    const [qrCodeName, setQrCodeName] = useState('');
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/qrcode/${infoUser.userID}`)
            .then((response) => {
                setQrCodeName(response.data.qrCodeName);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [infoUser.userID]);

    return (
        <section>
            <div className="text-base font-medium pt-20  mx-24 flex justify-between border-b-2 py-2">
                <div className="flex gap-x-6">
                    {tabs.map((tab) => (
                        <div
                            className="flex gap-x-1 items-center cursor-pointer"
                            key={tab.id}
                            onClick={() => {
                                setType(tab.title);
                            }}
                        >
                            {tab.icon} {tab.title}
                        </div>
                    ))}
                </div>
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
                                {show ? (
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
                                                    <div
                                                        onClick={handleShow}
                                                        // to={`/qrcode`}
                                                        className="cursor-pointer w-full flex items-center justify-between hover:bg-slate-200 hover:rounded-lg"
                                                    >
                                                        <div className="flex items-center gap-x-2 ">
                                                            <HiQrCode className="text-sm bg-pink-300 px-2 py-2 w-10 h-10 rounded-xl" />
                                                            <div>My SCSS QRcode</div>
                                                        </div>
                                                        <AiOutlineRight />
                                                    </div>
                                                </div>
                                                <div className="flex gap-x-2 items-center">
                                                    <Link
                                                        target="_blank"
                                                        to={`/demo/${qrCodeName}`}
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
                                                    {domain}/{qrCodeName}
                                                </div>
                                                {coppy ? (
                                                    <span>coppy</span>
                                                ) : (
                                                    <span className="text-green-700">coppied</span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className=" py-4 px-4">
                                        <div className="rounded-lg bg-white md:-mx-4 md:rounded-md flex-col flex gap-x-2 my-4 justify-center gap-y-2">
                                            <div className="flex justify-between px-4 font-base text-base items-center">
                                                <AiOutlineLeft
                                                    onClick={() => {
                                                        setShow(!show);
                                                    }}
                                                    className="cursor-pointer px-2 py-1 w-8 h-8"
                                                />
                                                <div>QRcode</div>
                                                {/* <AiOutlineClose /> */}
                                            </div>
                                            <div className="text-sm flex items-center text-[#757b74] font-extralight ">
                                                Here is your unique Linktree QR code that will direct people to your
                                                Linktree when scanned.
                                            </div>
                                        </div>
                                        <div className="flex flex-col my-4 rounded-lg bg-white md:-mx-4 md:rounded-md gap-x-2 ">
                                            <div className="flex gap-y-4 justify-center">
                                                <QRCode value={`${defaultUrl}${qrCodeName}`} size={150} id="qr-code" />
                                            </div>
                                        </div>
                                        <div className="pt-5">
                                            <div
                                                onClick={handleCopyClick}
                                                className=" flex justify-between  items-center  border-2 h-full rounded px-3 py-2  text-sm gap-x-2 cursor-pointer"
                                            >
                                                <div ref={divRef} className="flex items-center gap-x-1">
                                                    <BsFillSunFill />
                                                    {domain}/{qrCodeName}
                                                </div>
                                                {coppy ? (
                                                    <span>coppy</span>
                                                ) : (
                                                    <span className="text-green-700">coppied</span>
                                                )}
                                            </div>
                                        </div>
                                        <div
                                            className="flex justify-between items-center pb-4 pt-8 cursor-pointer"
                                            onClick={downloadQRCode}
                                        >
                                            <div>
                                                <div>Dowload .PNG</div>
                                                <div className="text-xs text-[#757b74]">High quality image</div>
                                            </div>
                                            <div className="flex items-center gap-x-1 text-sm font-extralight text-[#757b74]">
                                                .PNG
                                                <HiDownload className="w-5 h-5 " />
                                            </div>
                                        </div>
                                    </div>
                                )}
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
            <div className="h-max-screen py-2 flex justify-around relative pb-20">
                <div className="w-[750px] h-full mt-4 border-r px-12 placeholder:">
                    {/* add link */}
                    {type === 'Link' ? <CreateLink /> : <Appearance />}
                </div>
                <div className="flex justify-center mt-5  relative w-[280px] h-[560px]">
                    <ViewLinkAccount />
                </div>
            </div>
        </section>
    );
};

export default LinkAccount;
