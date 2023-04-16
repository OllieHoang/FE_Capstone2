import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import QRCode from 'qrcode.react';

const Test = () => {
    const [params, setParams] = useState(''); // Sử dụng state để lưu trữ giá trị của params
    const value = 'http://localhost:3000';
    return (
        <div>
            {/* Hiển thị mã QR với giá trị mặc định là "http://localhost:3000" và params */}
            <input type="text" defaultValue={value} readOnly />
            <input
                type="text"
                defaultValue="params" // Giá trị mặc định của input là "params"
                onChange={(e) => setParams(e.target.value)} // Sử dụng onChange để cập nhật giá trị của params khi input thay đổi
            />
            <button
                className="w-[50px] h-10"
                onClick={() => {
                    console.log(value + '/' + params);
                }}
            >
                hien
            </button>
            <QRCode value={`${value}/${params}`} />{' '}
        </div>
    );
};

export default Test;
