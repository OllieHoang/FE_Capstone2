import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import QRCode from 'qrcode.react';
//import icont
import { SlReload } from 'react-icons/sl';
import { ImEarth } from 'react-icons/im';
import hinhnen from '../assets/imgs/hinhnen.jpg';
import axios from 'axios';
import callApi from '../axios/config';

const Card = () => {
    const [inputValue, setInputValue] = useState('');
    const [inputName, setInputName] = useState('');

    const handleInputName = (e) => {
        setInputName(e.target.value);
    };
    //chọn ảnh
    const [selectedFile, setSelectedFile] = useState(null);
    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    // goi api lay qrcode
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
                console.log(response.data);
                setParams(response.data.qrCodeName);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    //gọi api để post lên database

    const PostQRcode = async (params) => {
        await callApi(`api/qrcode/update/${userIdUser}`, 'post', {
            qrCodeName: params,
        })
            .then((res) => {
                console.log('success');
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
                console.log('Thất bại');
            });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const params = formData.get('params');
        PostQRcode(params);
        console.log(params);
    };
    return (
        <section>
            <div className="header w-full  bg-gradient-to-r from-emerald-500 lg:px-20">
                <Header />
            </div>
            <div className="lg:px-40 h-screen mt-20 flex  ">
                <div className="flex flex-col flex-auto gap-y-4">
                    <form onSubmit={handleSubmit}>
                        {/* img  */}
                        <div>
                            <div className="text-[#41B60B] text-xl font-medium">Chọn ảnh </div>
                            <div className="flex gap-x-4 border border-[#B2BABB] px-2 py-2 items-center rounded">
                                <ImEarth className="text-[#707B7C]" />
                                <input type="file" onChange={handleFileInput} />
                            </div>
                        </div>
                        {/* link  */}
                        <div>
                            <div className="text-[#41B60B] text-xl font-medium">Nhập website (URL)</div>
                            <div className="flex gap-x-1 border border-[#B2BABB] px-2 py-2 items-center rounded">
                                <div className="flex gap-x-4 items-center justify-center">
                                    <ImEarth className="text-[#707B7C]" />
                                    <input
                                        type="text"
                                        name="defaultValue"
                                        defaultValue={defaultValue}
                                        readOnly
                                        className="outline-none text-gray-500 w-[175px]"
                                    />
                                </div>
                                <input
                                    className="w-full outline-none "
                                    name="params"
                                    type="text"
                                    defaultValue={params} // Giá trị mặc định của input là "params"
                                    onChange={(e) => setParams(e.target.value)} // Sử dụng onChange để cập nhật giá trị của params khi input thay đổi
                                />
                            </div>
                            <div className="flex gap-x-10 mt-2 justify-center">
                                <div className="px-4  cursor-pointer border-[#B2BABB] border">-</div>
                                <div className="px-4  cursor-pointer border-[#B2BABB] border">+</div>
                            </div>
                        </div>
                        {/* name */}
                        <div className="flex flex-col ">
                            <div className="text-[#41B60B]">Enter your name</div>
                            <div className="flex gap-x-4 border border-[#B2BABB] px-2 py-2 items-center rounded">
                                <input
                                    type="text"
                                    name={inputName}
                                    onChange={handleInputName}
                                    className="w-full outline-none"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="flex gap-x-10 mt-2 justify-center">
                                <div className="px-4  cursor-pointer border-[#B2BABB] border">-</div>
                                <div className="px-4  cursor-pointer border-[#B2BABB] border">+</div>
                            </div>
                        </div>
                        {/* tao qrcode  */}
                        <div className="bg-[#009F52] hover:bg-[#35A46E] transition-all duration-500 justify-center rounded text-white flex gap-x-3 items-center w-[230px] h-[40px]">
                            <button className=" w-full h-full cursor-pointer flex items-center justify-center gap-x-2  px-4 py-1">
                                <SlReload />
                                Create QRCODE
                            </button>
                        </div>
                    </form>
                </div>
                <div className=" flex flex-auto items-center flex-col gap-y-8">
                    {selectedFile ? (
                        <div className="relative">
                            <img
                                src={URL.createObjectURL(selectedFile)}
                                alt="Selected file"
                                style={{ maxWidth: '100%' }}
                                className="w-[500px] h-[350px] relative flex object-contain"
                            />
                            <div className="absolute bottom-10 left-10 text-3xl font-medium text-white">
                                {inputName}
                            </div>
                            <QRCode
                                value={`${defaultValue}${params}`}
                                size={100}
                                id="qr-code"
                                className="top-10 right-10 absolute"
                            />
                        </div>
                    ) : (
                        //
                        <div
                            className="w-[500px] h-[350px] relative object-contain"
                            style={{ backgroundImage: `url(${hinhnen})` }}
                        >
                            <div className="absolute bottom-10 left-10 text-3xl font-medium text-white">
                                {inputName ? inputName : 'Your Name'}
                            </div>
                            <QRCode
                                value={`${defaultValue}${params}`}
                                size={100}
                                id="qr-code"
                                className="top-10 right-10 absolute"
                            />
                        </div>
                    )}
                </div>
            </div>

            <div>
                <Footer />
            </div>
        </section>
    );
};

export default Card;
