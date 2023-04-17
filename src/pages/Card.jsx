import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode.react';
//import icont
import { SlReload } from 'react-icons/sl';
import { ImEarth } from 'react-icons/im';
import hinhnen from '../assets/imgs/hinhnen.jpg';
import axios from 'axios';
import callApi from '../axios/config';
import { ToastContainer, toast } from 'react-toastify';

const Card = () => {
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
    const infoUser = JSON.parse(localStorage.getItem('infoUser'));
    const [qrCodeName, setQrCodeName] = useState('');
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/qrcode/${infoUser.userID}`)
            .then((response) => {
                console.log(response.data);
                setQrCodeName(response.data.qrCodeName);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [infoUser.userID]);
    //gọi api để post lên database
    const PostQRcode = async (qrCodeName) => {
        await callApi(`api/qrcode/update/${infoUser.userID}`, 'post', {
            qrCodeName: qrCodeName,
        })
            .then((res) => {
                toast.success('Create QRcode success!', {
                    position: 'top-right',
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                });
            })
            .catch((err) => {
                console.log(err);
                console.log('Thất bại');
                toast.error('Create QRcode errol!', {
                    position: 'top-right',
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                });
            });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const params = formData.get('params');
        PostQRcode(params);
    };

    return (
        <section className=" ">
            {/* <div className="header w-full">
                <Header />
            </div> */}
            <div className="lg:px-40 h-screen  flex pt-28 ">
                <div className="flex flex-col flex-auto gap-y-4">
                    <form onSubmit={handleSubmit} className="flex flex-col flex-auto gap-y-4">
                        {/* img  */}
                        <div className="flex flex-col gap-y-2">
                            <div className="text-[#41B60B] text-xl font-medium">Chọn ảnh </div>
                            <div className="flex gap-x-4 border border-[#B2BABB] px-2 py-2 items-center rounded">
                                <ImEarth className="text-[#707B7C]" />
                                <input type="file" onChange={handleFileInput} />
                            </div>
                        </div>
                        {/* <div className="flex flex-col gap-y-2">
                            <div className="text-[#41B60B] text-xl font-medium">Chọn ảnh </div>
                            <div className="flex gap-x-4 border border-[#B2BABB] px-2 py-2 items-center rounded">
                                <ImEarth className="text-[#707B7C]" />
                                <input type="file" onChange={handleFileInput} />
                            </div>
                        </div> */}
                        {/* link  */}
                        <div className="flex flex-col gap-y-2">
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
                                    defaultValue={qrCodeName} // Giá trị mặc định của input là "params"
                                    onChange={(e) => setQrCodeName(e.target.value)} // Sử dụng onChange để cập nhật giá trị của params khi input thay đổi
                                />
                            </div>
                            {/* <div className="flex gap-x-10 mt-2 justify-center">
                                <div className="px-4  cursor-pointer border-[#B2BABB] border">-</div>
                                <div className="px-4  cursor-pointer border-[#B2BABB] border">+</div>
                            </div> */}
                        </div>
                        {/* name */}
                        <div className="flex flex-col gap-y-2 ">
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
                            {/* <div className="flex gap-x-10 mt-2 justify-center">
                                <div className="px-4  cursor-pointer border-[#B2BABB] border">-</div>
                                <div className="px-4  cursor-pointer border-[#B2BABB] border">+</div>
                            </div> */}
                        </div>
                        {/* tao qrcode  */}
                        <div className="bg-[#009F52] mt-4 hover:bg-[#35A46E] transition-all duration-500 justify-center rounded text-white flex gap-x-3 items-center w-[230px] h-[40px]">
                            <button className=" w-full h-full cursor-pointer flex items-center justify-center gap-x-2  px-4 py-1">
                                <SlReload />
                                Create QRCODE
                            </button>
                            <ToastContainer />
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
                                className="w-[500px] h-[350px] relative flex object-contain border border-black"
                            />
                            <div className="absolute bottom-10 left-10 text-3xl font-medium text-white">
                                {inputName}
                            </div>
                            <QRCode
                                value={`${defaultValue}${qrCodeName}`}
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
                                value={`${defaultValue}${qrCodeName}`}
                                size={100}
                                id="qr-code"
                                className="top-10 right-10 absolute"
                            />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Card;
