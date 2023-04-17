import React from 'react';
import { RxDashboard } from 'react-icons/rx';
import { FiMail } from 'react-icons/fi';
import { BsWallet } from 'react-icons/bs';
import { IoSettingsOutline } from 'react-icons/io5';

const Nav = ({ name }) => {
    return (
        <div>
            <div className="w-[240px]  ">
                <ul className="flex flex-col gap-y-8 font-thin ">
                    <li className="flex items-center gap-x-2 px-2  text-[#0B63F8] font-normal">
                        <RxDashboard /> Account
                    </li>
                    <li className="flex items-center gap-x-2 px-2  font-normal">
                        <FiMail /> Mail
                    </li>

                    <li className="flex items-center gap-x-2 px-2  font-normal">
                        <BsWallet /> Billing
                    </li>
                    <li className="flex items-center gap-x-2 px-2  font-normal">
                        <IoSettingsOutline />
                        Setting
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Nav;
