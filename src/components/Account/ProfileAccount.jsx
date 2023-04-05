import React from 'react';
import avtar from '../../assets/imgs/avtar.jpg';

const ProfileAccount = () => {
    return (
        <div className="w-[50%] mx-auto flex flex-col gap-y-6 mt-6">
            <div className="flex gap-x-4">
                <img
                    src={avtar}
                    alt=""
                    className="rounded-full flex items-center justify-center w-14 h-14 object-cover"
                />
                <div>
                    <div className="font-medium">Name</div>
                    <div className="text-gray-500">Min 200x200px JPG or PNG</div>
                </div>
            </div>
            <div>
                <div className="font-medium">Name:</div>
                <div className="text-gray-600 ml-6">Minh</div>
            </div>
            <div>
                <div className="font-medium">Email:</div>
                <div className="text-gray-600 ml-6">minhdz14201@gmail.com</div>
            </div>
            <div>
                <div className="font-medium">Phone:</div>
                <div className="text-gray-600 ml-6">012312312</div>
            </div>
            <div>
                <div className="font-medium">Date of birth:</div>
                <input type="date" className="text-gray-600 ml-6 w-full" />
            </div>
            <div>
                <div className="font-medium">IDcard:</div>
                <div className="text-gray-600 ml-6">xxx</div>
            </div>
        </div>
    );
};

export default ProfileAccount;
