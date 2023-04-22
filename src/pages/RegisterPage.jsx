import React from 'react';
import register from '../assets/imgs/register.png';
import { Link } from 'react-router-dom';
import callApi from '../axios/config';
import { toast, ToastContainer } from 'react-toastify';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const RegisterPage = () => {
    // const onSignUp = async (fullName, email, password) => {
    //     await callApi('api/user/register', 'post', {
    //         fullName: fullName,
    //         email: email,
    //         password: password,
    //     })
    //         .then((res) => {
    //             console.log(res.data);
    //             toast.success('Register successfull. Please check your mail!', {
    //                 position: 'top-right',
    //                 autoClose: 1000,
    //                 hideProgressBar: false,
    //                 closeOnClick: true,
    //                 pauseOnHover: true,
    //                 draggable: true,
    //                 progress: undefined,
    //                 theme: 'light',
    //             });
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //             toast.error('Login err! Account or password is not correct', {
    //                 position: 'top-right',
    //                 autoClose: 3000,
    //                 hideProgressBar: false,
    //                 closeOnClick: true,
    //                 pauseOnHover: true,
    //                 draggable: true,
    //                 progress: undefined,
    //                 theme: 'light',
    //             });
    //         });
    // };
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const formData = new FormData(event.target);
    //     const fullname = formData.get('fullname');
    //     const email = formData.get('email');
    //     const password = formData.get('password');

    //     onSignUp(fullname, email, password);
    // };
    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            password: '',
            cfpass: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email').required('Please enter your email'),
            password: Yup.string()
                .required('New password is not empty')
                .min(6, 'Your new password has at least 6 characters')
                .max(16, 'Your new password has at most 16 characters'),
            cfpass: Yup.string()
                .required('Confirm password is not empty')
                .oneOf([Yup.ref('password'), null], 'Passwords must match'),
        }),
        onSubmit: async (values) => {
            await callApi('api/user/register', 'post', {
                fullName: values.fullName,
                email: values.email,
                password: values.password,
            })
                .then((res) => {
                    console.log(res.data);
                    toast.success('Register successfull. Please check your mail!', {
                        position: 'top-right',
                        autoClose: 1000,
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
                });
        },
    });
    return (
        <form className="h-screen w-screen" onSubmit={formik.handleSubmit}>
            <div className="flex items-center flex-col xl:mt-[40px] xl:flex-row gap-x-20 pb-20 ">
                <div className="object-cover w-80 xl:w-[40%] flex items-center justify-center ml-20 ">
                    <img src={register} alt="" />
                </div>
                <div className=" w-[50%] xl:w-[30%] flex flex-col justify-center items-center gap-y-3 h-full">
                    <div className="font-bold text-xl w-full items-center justify-center flex">
                        <h3>Welcome to SCIS!</h3>
                    </div>
                    <div className="flex flex-col gap-y-2 w-full ">
                        <div>Fullname:</div>
                        <input
                            required
                            name="fullName"
                            type="text"
                            placeholder="John Nguyễn"
                            value={formik.values.fullName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="border-[#656ED3] border-2 rounded-full px-3 py-1 outline-none"
                        />
                    </div>
                    {/* <div className="flex flex-col gap-y-2 w-full ">
                        <div>Username:</div>
                        <input
                        required type="text" className="border-[#656ED3] border-2 rounded-full px-3 py-1 outline-none" />
                    </div> */}
                    <div className="flex flex-col gap-y-2 w-full ">
                        <div>Email:</div>
                        <input
                            required
                            name="email"
                            type="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="example@gmail.com"
                            className="border-[#656ED3] border-2 rounded-full px-3 py-1 outline-none"
                        />
                        {formik.errors.email && formik.touched.email ? (
                            <p className="text-red-500">{formik.errors.email}</p>
                        ) : null}
                    </div>
                    <div className="flex flex-col gap-y-2 w-full">
                        <div>Password:</div>
                        <input
                            // required
                            name="password"
                            type="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="border-[#656ED3] border-2 rounded-full px-3 py-1 outline-none"
                        />
                        {formik.errors.password && formik.touched.password ? (
                            <p className="text-red-500">{formik.errors.password}</p>
                        ) : null}
                    </div>
                    <div className="flex flex-col gap-y-2 w-full">
                        <div>Confirm Password:</div>
                        <input
                            // required
                            type="password"
                            name="cfpass"
                            value={formik.values.cfpass}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="border-[#656ED3] border-2 rounded-full px-3 py-1 outline-none"
                        />
                        {formik.errors.cfpass && formik.touched.cfpass ? (
                            <p className="text-red-500">{formik.errors.cfpass}</p>
                        ) : null}
                    </div>
                    <div className="w-full flex justify-end my-2">
                        <Link to="/forgotpw" className="">
                            Forgot Password?
                        </Link>
                    </div>
                    <div className="bg-[#656ED3] hover:bg-[#6a73d4] cursor-pointer transition-all rounded-full w-full flex justify-center items-center ">
                        <button className="text-white w-full py-3">Register</button>
                        <ToastContainer />
                    </div>
                    <div className="flex gap-x-2 mt-4">
                        <div> Have and account ?</div>
                        <Link to="/login" className="font-bold">
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default RegisterPage;
