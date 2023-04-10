import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import QRCode from 'qrcode.react';
// import { saveAs } from 'file-saver';
//import icont
import { SlReload } from 'react-icons/sl';
import { ImEarth } from 'react-icons/im';
import { BsDownload } from 'react-icons/bs';

const QRcode = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInput = (e) => {
        setInputValue(e.target.value);
    };
    // const handleDowload = () => {
    //     const canvas = document.getElementById('qr-code');
    //     canvas.toBlob((blob) => {
    //         saveAs(blob, 'qr-code.png');
    //     });
    // };

    return (
        <section>
            <div className="header w-full  bg-gradient-to-r from-emerald-500 lg:px-20">
                <Header />
            </div>
            <div className="lg:px-40 h-screen mt-20 flex  ">
                <div className="flex flex-col flex-auto gap-y-4">
                    <div className="text-[#41B60B] text-xl font-medium">Nhập website (URL)</div>
                    <div className="flex gap-x-4 border border-[#B2BABB] px-2 py-2 items-center rounded">
                        <ImEarth className="text-[#707B7C]" />
                        <input
                            type="text"
                            name={inputValue}
                            onChange={handleInput}
                            className="w-full outline-none"
                            placeholder="http://localhost:3000/qrcode"
                        />
                    </div>
                    <div className="bg-[#009F52] hover:bg-[#35A46E] transition-all duration-500 justify-center rounded text-white flex gap-x-3 items-center w-[230px] h-[40px]">
                        <button className=" w-full h-full cursor-pointer flex items-center justify-center gap-x-2  px-4 py-1">
                            <SlReload />
                            Create QRCODE
                        </button>
                    </div>
                </div>
                <div className=" flex flex-auto items-center flex-col gap-y-8">
                    <QRCode value={inputValue} size={250} id="qr-code" />
                    {/* <img src={Qrcode} alt="" className="w-[400px] h-[400px]" />npm s */}
                    <div className="bg-[#009F52] hover:bg-[#35A46E] transition-all duration-500 justify-center rounded text-white flex gap-x-3 items-center w-[230px] h-[40px]">
                        <button
                            className=" w-full h-full cursor-pointer flex items-center justify-center gap-x-2  px-4 py-1"
                            // onClick={handleDowload}
                        >
                            <BsDownload className="font-bold" />
                            Dowload
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </section>
    );
};

export default QRcode;
