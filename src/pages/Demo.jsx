import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import QRCode from 'qrcode.react';
//import icont
import { SlReload } from 'react-icons/sl';
import { ImEarth } from 'react-icons/im';
import axios from 'axios';
import device from '../assets/imgs/Device13PM.png';

const Card = () => {
    const defaultValue = 'http://localhost:3000/';

    //lay user xong get api ra để láy qrcodename
    const [userIdUser, setUserId] = useState();
    useEffect(() => {
        const userId = localStorage.getItem('userId');
        if (userId) {
            setUserId(userId);
        }
    }, []);
    const [params, setParams] = useState();
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/qrcode/${userIdUser}`)
            .then((response) => {
                console.log(response.data.qrCodeName);
                setParams(response.data.qrCodeName);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <section>
            <div className="header w-full  bg-gradient-to-r from-emerald-500 lg:px-20">
                <Header />
            </div>
            <div className="lg:px-40 h-screen mt-20 flex  ">
                <div className="flex flex-col flex-auto gap-y-4">
                    <div>
                        <div className="text-[#41B60B] text-xl font-medium">Nhập website (URL)</div>
                        <div className="flex gap-x-1 border border-[#B2BABB] px-2 py-2 items-center rounded">
                            <div className="flex gap-x-4 items-center justify-center">
                                <ImEarth className="text-[#707B7C]" />
                                <input
                                    type="text"
                                    defaultValue={defaultValue}
                                    readOnly
                                    className="outline-none text-gray-500 w-[175px]"
                                />
                            </div>
                            <input
                                className="w-full outline-none "
                                type="text"
                                defaultValue={params} // Giá trị mặc định của input là "params"
                                onChange={(e) => setParams(e.target.value)} // Sử dụng onChange để cập nhật giá trị của params khi input thay đổi
                            />
                        </div>
                    </div>

                    {/* tao qrcode  */}
                    <div className="bg-[#009F52] hover:bg-[#35A46E] transition-all duration-500 justify-center rounded text-white flex gap-x-3 items-center w-[230px] h-[40px]">
                        <button
                            onClick={() => console.log(defaultValue + params)}
                            className=" w-full h-full cursor-pointer flex items-center justify-center gap-x-2  px-4 py-1"
                        >
                            <SlReload />
                            Create QRCODE
                        </button>
                    </div>
                </div>
                <div className=" flex flex-auto items-center flex-col gap-y-8">
                    <div className="w-[330px] h-full relative">
                        <img src={device} alt="Device" className="object-contain w-full h-full" />
                        <div className="absolute bottom-10 left-10 text-3xl font-medium text-white"></div>
                        <QRCode
                            value={`${defaultValue}${params}`}
                            size={50}
                            id="qr-code"
                            className="top-20 right-10 absolute"
                        />
                    </div>
                </div>
            </div>

            <div>
                <Footer />
            </div>
        </section>
    );
};

export default Card;
