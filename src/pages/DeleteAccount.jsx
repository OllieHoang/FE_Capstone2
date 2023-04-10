import React from 'react';
import { AiOutlineClose, AiOutlineSetting } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const DeleteAccount = () => {
    return (
        <div className="w-full mt-8">
            <div className="w-[70%] mx-auto">
                <div className="flex justify-between text-violet-600">
                    <Link to={'/profile'}>
                        <div className="flex gap-x-2 justify-center items-center">
                            <AiOutlineSetting />
                            <div>Account</div>
                        </div>
                    </Link>
                    <div className="flex gap-x-3 justify-center items-center">
                        <AiOutlineClose className="text-black text-xl" />
                        <div>Detele account</div>
                    </div>
                </div>

                <div className="mt-10">
                    <div className="text-2xl font-medium">Delete account</div>
                    <div className="text-[#6B7280]">
                        By deleting the account, all of your stored data will be deleted.This action is irreversible
                        once done.
                    </div>
                    <div className="px-10 mt-4 flex flex-col gap-y-4">
                        <div className="flex flex-col gap-y-2">
                            <div className="text-[#111827] font-medium">Current Password</div>
                            <input type="text" className="w-full border-[#1976D2] border-2 outline-none h-12 " />
                        </div>
                    </div>
                </div>
                <div>
                    <button className="w-full h-12 bg-[#EA0808] rounded my-20">Update</button>
                </div>
            </div>
        </div>
    );
};

export default DeleteAccount;
