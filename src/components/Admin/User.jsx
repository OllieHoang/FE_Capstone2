import React from 'react';
import { Table } from 'react-bootstrap';

const User = () => {
    return (
        <div>
            {/* action  */}
            <div className="mt-8 flex flex-col gap-y-4 ">
                <div className="font-bold text-xl">
                    <h4>Account</h4>
                </div>
                <div className="flex justify-between w-[80%]">
                    <div className="flex flex-col gap-y-2">
                        <h3 className="text-sm font-medium">Customer</h3>
                        <input
                            type="text"
                            className="border border-[#ADA7A7] px-4 py-2 outline-none text-sm"
                            placeholder="Enter customer name"
                        />
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <h3 className="text-sm font-medium ">Invoice ID</h3>
                        <input
                            type="text"
                            className="border border-[#ADA7A7] px-4 py-2 outline-none text-sm"
                            placeholder="Enter invoice ID"
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
                <div className="w-[80%]">
                    <Table striped hover>
                        <thead>
                            <tr>
                                <th className="">
                                    <input type="checkbox" />
                                </th>
                                <th className=" text-sm ">Full Name</th>
                                <th className=" text-sm ">Role</th>
                                <th className=" text-sm ">Email</th>
                                <th className=" text-sm ">Phone</th>
                                <th className=" text-sm ">Sex</th>
                            </tr>
                        </thead>
                        <tbody className="">
                            <tr>
                                <td className="text-sm">
                                    <input type="checkbox" />
                                </td>
                                <td className="text-sm">Vo Minh</td>
                                <td className="text-sm">
                                    <select name="" id="1">
                                        <option value="Customer">Customer</option>
                                        <option value="Manager">Manager</option>
                                    </select>
                                </td>
                                <td className="text-sm">minhdz142001@gmaiil.com</td>
                                <td className="text-sm">0123123123</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default User;
