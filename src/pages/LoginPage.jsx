import React, { useEffect, useState } from 'react';
import login from '../assets/imgs/login.png';
import { Link, useNavigate } from 'react-router-dom';
import callApi from '../axios/config';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
    const navigate = useNavigate();
    const [userId, setUserId] = useState();
    const [verify, setVerify] = useState('Sai mật khẩu hoặc tài khoản');

    const onLogin = async (email, password) => {
        await callApi('api/user/login', 'post', {
            email: email,
            password: password,
        })
            .then((data) => {
                console.log('đăng nhập thành công');
                setTimeout(() => {
                    const userId = localStorage.getItem('userId');
                    if (userId) {
                        setUserId(userId);
                    }
                    navigate(`/home/${userId}`);
                }, 1000);
                const infoUser = {
                    userID: data.data.userId,
                    // name: data.data.fullName,
                    roleId: data.data.roleId,
                    token: data.data.token,
                    // các thông tin khác
                };
                localStorage.setItem('infoUser', JSON.stringify(infoUser));
            })
            .catch((err) => {
                // toast.error('Login err!', {
                //     position: 'top-right',
                //     autoClose: 1000,
                //     hideProgressBar: false,
                //     closeOnClick: true,
                //     pauseOnHover: true,
                //     draggable: true,
                //     progress: undefined,
                //     theme: 'light',
                // });
                // setVerify(verify);

                console.log(err);
            });
    };
    const handleSummit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get('email');
        const password = formData.get('password');
        console.log(email);
        onLogin(email, password);
    };
    return (
        <form className="h-screen w-screen" onSubmit={handleSummit}>
            <div className="flex justify-center items-center flex-col mt-[20px] xl:flex-row xl:mt-0">
                <div className=" w-[50%] flex flex-col justify-center items-center gap-y-3 ">
                    <div className="font-bold text-xl w-full items-center justify-center flex">
                        <h3>Welcome to SCIS!</h3>
                    </div>
                    <div className="flex flex-col gap-y-2 w-full ">
                        <div>Email:</div>
                        <input
                            name="email"
                            type="text"
                            className="border-[#656ED3] border-2 rounded-full px-3 py-1 outline-none"
                        />
                    </div>
                    <div className="flex flex-col gap-y-2 w-full">
                        <div>Password:</div>
                        <input
                            name="password"
                            type="password"
                            className="border-[#656ED3] border-2 rounded-full px-3 py-1 outline-none"
                        />
                    </div>
                    <div className="w-full flex justify-end my-2">
                        <Link to="/forgotpw" className="">
                            Forgot Password?
                        </Link>
                    </div>
                    <div className="bg-[#656ED3] hover:bg-[#6a73d4] cursor-pointer transition-all rounded-full w-full flex justify-center items-center ">
                        <button className="text-white w-full py-3">Login</button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default LoginPage;
