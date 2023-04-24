import React from 'react';
import register from '../assets/imgs/register.png';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import callApi from '../axios/config';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ResetPassword = (props) => {
    const navigate = useNavigate();
    // const resetpw = async (newPassword) => {
    //     const currentUrl = window.location.href;
    //     const params = currentUrl.substring(currentUrl.lastIndexOf('/') + 1);
    //     // const token = props.match.params.token;
    //     await callApi(`api/user/forgot/${params}`, 'post', {
    //         newPassword: newPassword,
    //     })
    //         .then((res) => {
    //             console.log(res.password);
    //             console.log('Đã gửi thành công');
    //             toast.success('Update password sucess!', {
    //                 position: 'top-right',
    //                 autoClose: 1000,
    //                 hideProgressBar: false,
    //                 closeOnClick: true,
    //                 pauseOnHover: true,
    //                 draggable: true,
    //                 progress: undefined,
    //                 theme: 'light',
    //             });
    //             setTimeout(() => {
    //                 navigate('/login');
    //             }, 3000);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //             console.log('Thất bại');
    //         });
    // };
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const formData = new FormData(event.target);
    //     const newPassword = formData.get('newPassword');
    //     console.log(newPassword, 'pw');
    //     resetpw(newPassword);
    // };
    const formik = useFormik({
        initialValues: {
            newPassword: '',
            cfPassword: '',
        },
        validationSchema: Yup.object({
            newPassword: Yup.string()
                .required('New password is not empty')
                .min(6, 'Your new password has at least 6 characters'),
            cfPassword: Yup.string()
                .required('Confirm password is not empty')
                .oneOf([Yup.ref('newPassword'), null], 'Passwords must match'),
        }),
        onSubmit: async (values) => {
            const currentUrl = window.location.href;
            const params = currentUrl.substring(currentUrl.lastIndexOf('/') + 1);
            await callApi(`api/user/forgot/${params}`, 'post', {
                newPassword: values.newPassword,
            })
                .then((data) => {
                    console.log(data);
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
                    setTimeout(() => {
                        navigate('/login');
                    }, 3000);
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
                });
        },
    });

    return (
        <form className="h-screen w-screen" onSubmit={formik.handleSubmit}>
            <div className="flex items-center flex-col xl:mt-[40px] xl:flex-row gap-x-20 pb-20 ">
                <div className="object-cover w-80 xl:w-[40%] flex items-center justify-center ml-20 ">
                    <img src={register} alt="" />
                </div>
                <div className=" w-[50%] xl:w-[30%] flex flex-col justify-center items-center   h-full">
                    <div className="font-bold text-xl w-full items-center justify-center flex">
                        <h3>Change your password!</h3>
                    </div>
                    <div>
                        <h4>Enter your new password</h4>
                    </div>
                    <div className="flex flex-col gap-y-2 w-full mb-6 mt-6">
                        <div>New password:</div>
                        <input
                            name="newPassword"
                            id="newPassword"
                            type="password"
                            className="border-[#656ED3] border-2 rounded-full px-3 py-1 outline-none"
                            value={formik.values.newPassword}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.newPassword && formik.touched.newPassword ? (
                            <p className="text-red-500">{formik.errors.newPassword}</p>
                        ) : null}
                    </div>
                    <div className="flex flex-col gap-y-2 w-full mb-6">
                        <div>Confirm password:</div>
                        <input
                            name="cfPassword"
                            id="cfPassword"
                            type="password"
                            className="border-[#656ED3] border-2 rounded-full px-3 py-1 outline-none"
                            value={formik.values.cfPassword}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.cfPassword && formik.touched.cfPassword ? (
                            <p className="text-red-500">{formik.errors.cfPassword}</p>
                        ) : null}
                    </div>
                    <div className="bg-[#656ED3] hover:bg-[#6a73d4] cursor-pointer transition-all rounded-full w-full flex justify-center items-center ">
                        <button type="submit" className="text-white w-full py-3">
                            Accept
                        </button>
                    </div>
                    <div className="flex gap-x-6 mt-4">
                        {/* <div> Have and account ?</div> */}
                        {/* <Link to="/login" className="font-bold border-r border-black pr-8">
                            Login
                        </Link>
                        <Link to="/login" className="font-bold">
                            Register
                        </Link> */}
                    </div>
                    {/* <div className="flex gap-x-2 mt-4">
                        <div>Dont have and account ?</div>
                        <Link to="/login" className="font-bold">
                            Register
                        </Link>
                    </div> */}
                </div>
            </div>
        </form>
    );
};

export default ResetPassword;
