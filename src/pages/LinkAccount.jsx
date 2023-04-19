import React, { useContext, useState } from 'react';
import device from '../assets/imgs/Device13PM.png';
import Modal from '../components/Modal';
// import icon

import { IoAdd } from 'react-icons/io5';
import ContentLinkAccount from '../components/LinkAccount/ContentLinkAccount';
import { ModalContext } from '../contexts/ModalContext';

const LinkAccount = () => {
    const { isActive, setIsActive } = useContext(ModalContext);

    return (
        <section>
            <div className="text-base font-medium pt-20 mx-24 flex gap-x-4">
                <div>Link</div>
                {/* <div>Appearance</div> */}
            </div>
            <div className="h-screen py-2  flex justify-around relative">
                <div className="w-[750px] h-full mt-4 border-r px-12 placeholder:">
                    {/* add link */}
                    <div
                        onClick={() => {
                            setIsActive(!isActive);
                        }}
                        className="bg-red-500 text-white px-2 py-2 rounded-2xl flex justify-center cursor-pointer items-center font-medium gap-x-2"
                    >
                        <IoAdd className="text-xl font-medium" />
                        <button>Add link</button>
                    </div>
                    <div className={`${isActive ? ' hidden ' : ' block '}  `}>
                        <Modal />
                    </div>
                    <div>
                        <ContentLinkAccount isActive={isActive} />
                    </div>
                </div>
                <div className="flex justify-center mt-5 ">
                    <img src={device} alt="" className="w-[300px] h-[580px] " />
                </div>
            </div>
        </section>
    );
};

export default LinkAccount;
