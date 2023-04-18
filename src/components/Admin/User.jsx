import React from 'react';

// import ic
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';

const User = ({ title }) => {
    return (
        <div>
            {/* action  */}
            <div className="mt-8 flex flex-col gap-y-6 ">
                <div className="font-bold text-xl">
                    <h4>{title}</h4>
                </div>
                <div className="flex justify-between w-[90%]  ">
                    <div className="flex flex-col gap-y-2">
                        <h3 className="text-sm font-medium">Customer</h3>
                        <input
                            type="text"
                            className="border  px-4 py-2 outline-none text-sm rounded-md"
                            placeholder="Enter customer name"
                        />
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <h3 className="text-sm font-medium ">Invoice ID</h3>
                        <input
                            type="text"
                            className="border  px-4 py-2 outline-none text-sm rounded-md"
                            placeholder="Enter invoice ID"
                        />
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <h3 className="text-sm font-medium">Start date</h3>
                        <input
                            type="text"
                            className="border  px-4 py-2 outline-none text-sm rounded-md"
                            placeholder="Start date"
                        />
                    </div>

                    <div className="flex flex-col gap-y-2">
                        <h3 className="text-sm font-medium">End date</h3>
                        <input
                            type="text"
                            className="border  px-4 py-2 outline-none text-sm rounded-md"
                            placeholder="End date"
                        />
                    </div>
                </div>
            </div>

            {/* Content  */}
            <div className="mt-8 flex  w-full ">
                <div className="w-[90%] flex flex-col gap-y-2">
                    <div className="flex gap-x-24">
                        <input type="checkbox" />
                        <div className="font-medium text-sm">Invoice ID</div>
                        <div className="font-medium text-sm">User name</div>
                        <div className="font-medium text-sm">Role</div>
                    </div>
                    <div className="flex gap-x-24 mt-2">
                        <input type="checkbox" />
                        <div className="text-sm ml-9">1</div>
                        <div className="text-sm ml-12">Minh</div>
                        <div className="text-sm ml-12">1</div>
                        <div className="text-sm flex gap-x-8">
                            <button className="flex gap-x-2 items-center px-6 border text-sm hover:text-[#013CC6]">
                                <AiOutlineEdit />
                                Edit
                            </button>
                            <button className="flex gap-x-2 items-center px-6 border text-sm hover:text-red-500">
                                <AiOutlineDelete />
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;
