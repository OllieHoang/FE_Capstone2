import React, { useEffect, useState } from 'react';
import avtar from '../../assets/imgs/avtar.jpg';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import callApi from '../../axios/config';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const ProfileAccount = () => {
    const [userName, setUserName] = useState('');
    const [phone, setPhone] = useState('');
    const [birthday, setBirthday] = useState('');
    const [cardID, setCardID] = useState('');
    const infoUser = JSON.parse(localStorage.getItem('infoUser'));
    const navigate = useNavigate();
    useEffect(() => {
        const fechtApi = async () => {
            await callApi(`api/user/profile/${infoUser.userID}`, 'get')
                .then((data) => {
                    console.log(setUserName(data.data.fullName));
                    setUserName(data.data.fullName);
                    setPhone(data.data.phone);
                    setBirthday(data.data.dateOfBirth);
                    setCardID(data.data.IDcard);
                })
                .catch((error) => {
                    console.log('fail', error);
                });
        };
        fechtApi();
    }, [userName, phone, birthday, cardID]);
    const formik = useFormik({
        initialValues: {
            usernamee: '',
            phone: '',
            birthday: '',
            cardid: '',
        },
        validationSchema: Yup.object({}),
        onSubmit: async (values) => {
            await callApi(`api/user/update/${infoUser.userID}`, 'post', {
                fullName: values.usernamee,
                phone: values.phone,
                dateOfBirth: values.birthday,
                IDcard: values.cardid,
            })
                .then((data) => {
                    toast.success('Update profile sucess!', {
                        position: 'top-right',
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'light',
                    });
                    console.log('cap nhat thanh cong');
                    setUserName('');
                    setPhone('');
                    setBirthday('');
                    setCardID('');
                    formik.resetForm();
                    navigate('/profile');
                })
                .catch((error) => {
                    toast.error('Update profile error!', {
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
        <form className="w-[50%] mx-auto flex flex-col gap-y-6 mt-6" onSubmit={formik.handleSubmit}>
            <div className="flex gap-x-4">
                <img
                    src={avtar}
                    alt=""
                    className="rounded-full flex items-center justify-center w-14 h-14 object-cover"
                />
                <div>
                    <div className="font-medium">{userName}</div>
                    <div className="text-gray-500">Min 200x200px JPG or PNG</div>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="font-medium">Name:</div>
                <input
                    type="text"
                    name="usernamee"
                    placeholder={userName}
                    value={formik.values.usernamee}
                    className="py-1 outline-none border-b border-gray-400"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.errors.usernamee && formik.touched.usernamee ? (
                    <p className="text-red-500">{formik.errors.usernamee}</p>
                ) : null}
            </div>
            <div className="flex flex-col">
                <div className="font-medium">Phone:</div>
                <input
                    type="text"
                    name="phone"
                    placeholder={phone}
                    value={formik.values.phone}
                    className="py-1 outline-none border-b border-gray-400"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.errors.phone && formik.touched.phone ? (
                    <p className="text-red-500">{formik.errors.phone}</p>
                ) : null}
            </div>
            <div className="flex flex-col">
                <div className="font-medium">Date of birth:</div>
                <input
                    type="text"
                    name="birthday"
                    placeholder={birthday}
                    value={formik.values.birthday}
                    className="py-1 outline-none border-b border-gray-400"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.errors.birthday && formik.touched.birthday ? (
                    <p className="text-red-500">{formik.errors.birthday}</p>
                ) : null}
            </div>
            <div className="flex flex-col">
                <div className="font-medium">IDcard:</div>
                <input
                    type="text"
                    name="cardid"
                    placeholder={cardID}
                    value={formik.values.cardid}
                    className="py-1 outline-none border-b border-gray-400"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.errors.cardid && formik.touched.oldcardidpass ? (
                    <p className="text-red-500">{formik.errors.cardid}</p>
                ) : null}
            </div>
            <div className="w-full flex justify-center ">
                <button type="submit" className="w-[60%] h-12 bg-[#070B27] rounded my-10 text-white ">
                    Save changes
                </button>
                <ToastContainer />
            </div>
        </form>
    );
};

export default ProfileAccount;
