import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import callApi from '../../axios/config';

const PasswordAccount = () => {
    const [Password, setPassword] = useState();
    useEffect(() => {
        const password = localStorage.getItem('passWord');
        if (password) {
            setPassword(password);
            console.log(password);
        }
    }, []);
    const navigate = useNavigate();
    const onChangePass = async (fullName, email, password) => {
        await callApi('api/user/register', 'post', {
            fullName: fullName,
            email: email,
            password: password,
        })
            .then((res) => {
                console.log(res.data);

                setTimeout(() => {
                    navigate('/verifyaccount');
                }, 1000);
                console.log('Đăng ký thành công');
            })
            .catch((err) => {
                console.log(err);
                console.log('Thất bại');
            });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const fullname = formData.get('fullname');
        const password = formData.get('password');
        const email = formData.get('email');

        onChangePass(fullname, email, password);
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className="w-[50%] mx-auto flex flex-col gap-y-8 mt-6">
                <div className="flex flex-col gap-y-2">
                    <div className="">Current password</div>
                    <input
                        type="password"
                        name="password"
                        className="w-full border-black border-2 px-2 py-1 rounded ml-4"
                    />
                </div>
                <div className="flex flex-col gap-y-2">
                    <div className="">New password</div>
                    <input type="text" name="newpass" className="w-full border-black border-2 px-2 py-1 rounded ml-4" />
                </div>
                <div className="flex flex-col gap-y-2">
                    <div className="">Confirm password</div>
                    <input type="text" name="newpass" className="w-full border-black border-2 px-2 py-1 rounded ml-4" />
                </div>
            </div>
        </form>
    );
};

export default PasswordAccount;
