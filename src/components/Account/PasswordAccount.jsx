import React, { useEffect, useState } from 'react';
// import Header from '../components/Header';
import { useFormik } from 'formik';
import * as Yup from 'yup';
// import { toast, ToastContainer } from 'react-toastify';

import bcrypt from 'bcryptjs';
import callApi from '../../axios/config';
import { ToastContainer, toast } from 'react-toastify';
const PasswordAccount = () => {
    const [oldPass, setOldPass] = useState('');
    const infoUser = JSON.parse(localStorage.getItem('infoUser'));
    useEffect(() => {
        const fechtApi = async () => {
            await callApi(`api/user/profile/${infoUser.userID}`, 'get')
                .then((data) => {
                    setOldPass(data.data.password);
                    // setEmail(data.data.email);
                })
                .catch((error) => {
                    console.log('fail', error);
                });
        };
        fechtApi();
    }, [oldPass]);
    const formik = useFormik({
        initialValues: {
            oldpass: '',
            newpass: '',
            cfpass: '',
        },
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
            if (!isOldPasswordCorrect) {
                formik.setErrors({
                    oldpass: 'Mật khẩu cũ không đúng',
                });
            } else {
                await callApi(`api/user/password/${infoUser.userID}`, 'post', {
                    oldPassword: values.oldpass,
                    newPassword: values.newpass,
                })
                    .then((data) => {
                        toast.success('Update password sucess!', {
                            position: 'top-right',
                            autoClose: 1000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: 'light',
                        });
                        setOldPass('');
                        formik.resetForm();
                    })
                    .catch((error) => {
                        toast.error('Update password error!', {
                            position: 'top-right',
                            autoClose: 1000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: 'light',
                        });
                        console.log('cap nhat that bai ', error);
                        setOldPass('');
                    });
            }
        },
    });
    return (
        <form className="w-[50%] mx-auto flex flex-col gap-y-5 mt-6" onSubmit={formik.handleSubmit}>
            <div className="flex flex-col gap-y-2">
                <div className="">Current password</div>
                <input
                    type="password"
                    name="oldpass"
                    value={formik.values.oldpass}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full border-black border-2 px-2 py-1 rounded ml-4"
                />
                {formik.errors.oldpass && formik.touched.oldpass ? (
                    <p className="text-red-500">{formik.errors.oldpass}</p>
                ) : null}
            </div>
            <div className="flex flex-col gap-y-2">
                <div className="">New password</div>
                <input
                    type="password"
                    name="newpass"
                    value={formik.values.newpass}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full border-black border-2 px-2 py-1 rounded ml-4"
                />
                {formik.errors.newpass && formik.touched.newpass ? (
                    <p className="text-red-500">{formik.errors.newpass}</p>
                ) : null}
            </div>
            <div className="flex flex-col gap-y-2">
                <div className="">Confirm password</div>
                <input
                    type="password"
                    name="cfpass"
                    value={formik.values.cfpass}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full border-black border-2 px-2 py-1 rounded ml-4"
                />
                {formik.errors.cfpass && formik.touched.cfpass ? (
                    <p className="text-red-500">{formik.errors.cfpass}</p>
                ) : null}
            </div>
            <div className="w-full flex justify-center ">
                <button type="submit" className="w-[60%] h-12 bg-[#070B27] rounded my-10 text-white ">
                    Update
                </button>
                <ToastContainer />
            </div>
        </form>
    );
};

export default PasswordAccount;
