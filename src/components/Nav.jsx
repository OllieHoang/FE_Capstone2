import React from 'react';

const Nav = ({ title, icon, style }) => {
    return (
        <div className="w-[220px] px-6 ">
            <ul className="">
                <li className="flex items-center gap-x-2 px-2  font-medium">
                    {icon} {title}
                </li>
                {/* <li className="flex items-center gap-x-2 px-2  font-medium">
                        <FiMail /> Mail
                    </li>

                    <li className="flex items-center gap-x-2 px-2  font-medium">
                        <BsWallet /> Billing
                    </li>
                    <li className="flex items-center gap-x-2 px-2  font-medium">
                        <IoSettingsOutline />
                        Setting
                    </li> */}
            </ul>
        </div>
    );
};

export default Nav;
