import React from 'react';
import Vectornn from '../assets/imgs/Vectornn.png';
import Vectorsun from '../assets/imgs/Vectorsun.png';
import icface from '../assets/imgs/face.png';
import twit from '../assets/imgs/twit.png';
import youtube from '../assets/imgs/youtube.png';
import insta from '../assets/imgs/insta.png';

const Footer = () => {
    return (
        <div className="bg-black">
            <div className="text-white px-20 py-14 lg:flex justify-between flex-col lg:flex-row">
                <div className="flex flex-col gap-y-2 ">
                    <div>
                        <div>SCIS.com.vn</div>
                        <div className="text-xs">Coppyright ©2023 Capton2 .</div>
                    </div>
                    <ul className="lg:flex gap-x-4 flex-col lg:flex-row">
                        <li>Blog</li>
                        <li>How to add a link on your TikTok</li>
                        <li>What is Scss Link?</li>
                        <li>Why user Scss Link ?</li>
                    </ul>
                    <div>Privacy Policy</div>
                </div>
                <div className="flex flex-col gap-y-10">
                    <div className=" flex gap-x-4">
                        <div className="flex justify-center items-center gap-x-1">
                            <img src={Vectornn} alt="" className="w-4 flex justify-center items-center h-3" />
                            Việt Nam
                        </div>
                        <div className="flex justify-center items-center gap-x-1">
                            <img src={Vectorsun} alt="" className="w-4 flex justify-center items-center h-4" /> Sáng
                        </div>
                    </div>
                    <div className="flex w-10  gap-x-3 items-center ">
                        <img src={icface} alt="" className="h-5 w-10 cursor-pointer" />
                        <img src={twit} alt="" className="h-5 w-10 cursor-pointer" />
                        <img src={youtube} alt="" className="h-5 w-10 cursor-pointer" />
                        <img src={insta} alt="" className="h-5 w-10 cursor-pointer" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
