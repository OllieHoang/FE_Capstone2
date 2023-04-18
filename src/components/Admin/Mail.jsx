import React from 'react';

const Mail = ({ title }) => {
    return (
        <div>
            {/* action  */}
            <div className="mt-8 flex flex-col gap-y-4 ">
                <div className="font-bold text-xl">
                    <h4>{title}</h4>
                </div>
                <div className="flex gap-x-14 w-[90%]">
                    <div className="flex flex-col gap-y-2">
                        <h3 className="text-sm font-medium">Mail</h3>
                        <input
                            type="text"
                            className="border border-[#ADA7A7] px-4 py-2 outline-none text-sm"
                            placeholder="Enter customer name"
                        />
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <h3 className="text-sm font-medium">Start date</h3>
                        <input
                            type="text"
                            className="border border-[#ADA7A7] px-4 py-2 outline-none text-sm"
                            placeholder="Start date"
                        />
                    </div>

                    <div className="flex flex-col gap-y-2">
                        <h3 className="text-sm font-medium">End date</h3>
                        <input
                            type="text"
                            className="border border-[#ADA7A7] px-4 py-2 outline-none text-sm"
                            placeholder="End date"
                        />
                    </div>
                </div>
            </div>

            {/* Content  */}
            <div className="mt-8 flex flex-col gap-y-4 ">
                <div className="w-[90%]">
                    <table className="table border w-full">
                        <thead>
                            <tr>
                                <th className="text-sm border px-4 py-2">
                                    <input type="checkbox" />
                                </th>
                                <th className=" text-sm px-4 py-2 border ">Full Name</th>
                                <th className=" text-sm px-4 py-2 border ">Email</th>
                                <th className=" text-sm px-4 py-2 border ">Title</th>
                                <th className=" text-sm px-4 py-2 border ">Content</th>
                            </tr>
                        </thead>
                        <tbody className="">
                            <tr>
                                <td className="text-sm border py-3 flex justify-center">
                                    <input type="checkbox" />
                                </td>
                                <td className="text-sm border px-4 py-2">Vo Minh</td>
                                <td className="text-sm border px-4 py-2">minhdz142001@gmaiil.com</td>
                                <td className="text-sm border px-4 py-2">Mua gói</td>
                                <td className="text-sm border px-4 py-2">Gói vip </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Mail;
