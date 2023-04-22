import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import callApi from '../axios/config';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import login2 from '../assets/imgs/login2.png';
import '../index.css';

const LoginPage = () => {
    const navigate = useNavigate();
    // const [userId, setUserId] = useState();

    const onLogin = async (email, password) => {
        await callApi('api/user/login', 'post', {
            email: email,
            password: password,
        })
            .then((data) => {
                toast.success('Login sucess!', {
                    position: 'top-right',
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                });
                setTimeout(() => {
                    const userId = localStorage.getItem('infoUser');
                    if (infoUser.userID) {
                        // setUserId(infoUser.userID);
                    }
                    console.log(userId);
                    navigate(`/home`);
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
                toast.error('Login err! Account or password is not correct', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                });

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
            <div className="flex flex-col justify-between mt-[20px] xl:flex-row xl:mt-0">
                <div className=" w-[640px] flex flex-col gap-y-3 ml-10 ">
                    <Link to={'/'} className="text-red-600 text-xl font-medium mt-4">
                        SCSS.com.vn
                    </Link>
                    <div className="ml-10 flex flex-col gap-y-4">
                        <div className="text-3xl font-bold mt-10">Login to your Scss</div>
                        <div className="font-bold text-xl w-full items-center justify-center flex mt-6">
                            <h3>Welcome to SCIS!</h3>
                        </div>
                        <div className="flex flex-col gap-y-2 w-full ">
                            <div>Email:</div>
                            <input
                                required
                                name="email"
                                type="text"
                                className="border-[#656ED3] border-2 rounded-full px-4 py-2 outline-none "
                            />
                        </div>
                        <div className="flex flex-col gap-y-2 w-full">
                            <div>Password:</div>
                            <input
                                required
                                name="password"
                                type="password"
                                className="border-[#656ED3] border-2 rounded-full px-4 py-2 outline-none"
                            />
                        </div>

                        <div className="bg-[#A8AAA2] hover:bg-[#6a73d4] mt-4 cursor-pointer transition-all rounded-full w-full flex justify-center items-center ">
                            <button className="text-white w-full py-3">Login</button>
                            <ToastContainer />
                        </div>
                        <div className="w-full flex justify-center my-2 ">
                            <Link to="/forgotpw" className="border-b-2 border-[#8129D9] text-[#8129D9]">
                                Forgot Password?
                            </Link>
                        </div>
                        <div className="w-full flex justify-center my-1 gap-x-2">
                            <div>Dont have an account? </div>
                            <Link to="/register" className="border-b-2 border-[#8129D9] text-[#8129D9] ">
                                Signup
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="">
                    <img src={login2} alt="" className="h-screen object-cover w-[640px] " />
                </div>
            </div>
        </form>
    );
};

export default LoginPage;
