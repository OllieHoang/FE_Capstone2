import React from 'react';
import { FiFacebook, FiInstagram } from 'react-icons/fi';
import { BsTelephone, BsFillSunFill } from 'react-icons/bs';
import avatar from '../../assets/imgs/avtar.jpg';

const ViewLinkAccount = ({ width, height }) => {
    return (
        <div>
            <div className={`flex justify-center relative ${width} ${height}`}>
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
                    <div className="flex flex-col mt-2 lg:gap-y-4 items-center w-full">
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
    );
};

export default ViewLinkAccount;
