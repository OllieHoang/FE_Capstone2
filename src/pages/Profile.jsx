import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { useFormik } from 'formik';
import * as Yup from 'yup';
// import icon
import { AiOutlineClose, AiOutlineSetting } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import callApi from '../axios/config';
import bcrypt from 'bcryptjs';

const Profile = () => {
    const [userName, setUserName] = useState('');
    const [oldPass, setOldPass] = useState('');
    // const [checkOldPass, setCheckOldPass] = useState('');
    // const [email, setEmail] = useState('');
    const infoUser = JSON.parse(localStorage.getItem('infoUser'));
    useEffect(() => {
        const fechtApi = async () => {
            await callApi(`api/user/profile/${infoUser.userID}`, 'get')
                .then((data) => {
                    setUserName(data.data.fullName);
                    setOldPass(data.data.password);
                    // setEmail(data.data.email);
                    console.log('gọi lai api');
                })
                .catch((error) => {
                    console.log('fail', error);
                });
        };
        fechtApi();
    }, []);
    const handleChangeName = (event) => {
        event.preventDefault();
        setUserName(event.target.value);
    };
    const handleSubmitInfo = async (event) => {
        // event.preventDefault();
        await callApi(`api/user/update/${infoUser.userID}`, 'post', {
            fullName: userName,
        })
            .then((data) => {
                console.log('cap nhat thanh cong');
            })
            .catch((error) => {
                console.log('cap nhat that bai ', error);
            });
    };
    const checkOldpass = async (values) => {
        const errors = {};

        // Kiểm tra mật khẩu
        const isMatch = await bcrypt.compare(values.password, oldPass);
        if (!isMatch) {
            errors.password = 'Mật khẩu không chính xác';
        }

        return errors;
    };
    const formik = useFormik({
        initialValues: {
            oldpass: '',
            newpass: '',
            cfpass: '',
        },
        // checkOldpass,
        validationSchema: Yup.object({
            oldpass: Yup.string()
                .required('Old password is not empty')
                .min(6, 'Your old password must be at least 6 characters'),
            newpass: Yup.string()
                .required('New password is not empty')
                .min(6, 'Your new password has at least 6 characters'),
            cfpass: Yup.string()
                .required('Confirm password is not empty')
                .oneOf([Yup.ref('newpass'), null], 'Passwords must match'),
        }),
        onSubmit: async (values) => {
            const isOldPasswordCorrect = await bcrypt.compare(values.oldpass, oldPass);
            // console.log(values.oldpass);
            if (!isOldPasswordCorrect) {
                formik.setErrors({
                    oldpass: 'Mật khẩu cũ không đúng',
                });
                // } else if (values.newpass !== values.cfpass) {
                //     formik.setErrors({
                //         confirmNewPassword: 'Mật khẩu mới và xác nhận mật khẩu mới không giống nhau',
                //     });
            } else {
                await callApi(`api/user/password/${infoUser.userID}`, 'post', {
                    oldPassword: values.oldpass,
                    newPassword: values.newpass,
                })
                    .then((data) => {
                        // console.log(data.data);
                        console.log('cap nhat thanh cong');
                    })
                    .catch((error) => {
                        console.log('cap nhat that bai ', error);
                    });
            }
        },
    });

    return (
        <section>
            <div className="header w-full  bg-gradient-to-r border-b-2 py-2 lg:px-20">
                <Header ac={userName} />
            </div>
            <div className="w-full mt-8">
                <div className="w-[70%] mx-auto">
                    <div className="flex justify-between text-violet-600">
                        <div className="flex gap-x-2 justify-center items-center">
                            <AiOutlineSetting />
                            <div>Account</div>
                        </div>
                        <Link to={'/delete'}>
                            <div className="flex gap-x-3 justify-center items-center">
                                <AiOutlineClose className="text-black text-xl" />
                                <div>Detele account</div>
                            </div>
                        </Link>
                    </div>
                    {/* Setting  */}
                    <div className="mt-10">
                        <div className="text-2xl font-medium">Settings</div>
                        <div className="text-[#6B7280]">Basic profile settings of your account.</div>
                        <form className="px-10 mt-4 flex flex-col gap-y-4" onSubmit={handleSubmitInfo}>
                            <div className="flex flex-col gap-y-2">
                                <div className="text-[#111827] font-medium">Name</div>
                                <input
                                    name="name"
                                    type="text"
                                    className="w-full border-[#1976D2] border-2 outline-none h-12 px-5 "
                                    value={userName}
                                    onChange={(text) => handleChangeName(text)}
                                />
                            </div>
                            {/* <div className="flex flex-col gap-y-2">
                                <div className="text-[#111827] font-medium">Email</div>
                                <input
                                    type="text"
                                    className="w-full border-[#1976D2] border-2 outline-none h-12 px-5 "
                                    placeholder={email}
                                    disabled
                                />
                            </div> */}
                            <div className="w-full ">
                                <button type="submit" className="w-40 h-12 bg-[#0982FE] rounded ">
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="w-full bg-[#ACC4EB] h-1 mt-14 "></div>
                    {/* Change Password  */}
                    <div className="mt-10">
                        <div className="text-2xl font-medium">Change Password</div>
                        <div className="text-[#6B7280]">
                            If you do not want to change your password, do not fill any of those fields below.
                        </div>
                        <form className="px-10 mt-4 flex flex-col gap-y-4" onSubmit={formik.handleSubmit}>
                            <div className="flex flex-col gap-y-2">
                                <div className="text-[#111827] font-medium">Current Password</div>
                                <input
                                    type="password"
                                    name="oldpass"
                                    value={formik.values.oldpass}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className="w-full border-[#1976D2] border-2 outline-none h-12 px-5"
                                />
                                {formik.errors.oldpass && formik.touched.oldpass ? (
                                    <p className="text-red-500">{formik.errors.oldpass}</p>
                                ) : null}
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <div className="text-[#111827] font-medium">New Password </div>

                                <input
                                    type="xc"
                                    name="newpass"
                                    className="w-full border-[#1976D2] border-2 outline-none h-12 px-5"
                                    value={formik.values.newpass}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.newpass && formik.touched.newpass ? (
                                    <p className="text-red-500">{formik.errors.newpass}</p>
                                ) : null}
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <div className="text-[#111827] font-medium">Confirm Password </div>

                                <input
                                    type="text"
                                    name="cfpass"
                                    className="w-full border-[#1976D2] border-2 outline-none h-12 px-5"
                                    value={formik.values.cfpass}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.cfpass && formik.errors.cfpass ? (
                                    <p className="text-red-500">{formik.errors.cfpass}</p>
                                ) : null}
                            </div>

                            <div>
                                <button type="submit" className="w-40 h-12 bg-[#0982FE] rounded ">
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;
