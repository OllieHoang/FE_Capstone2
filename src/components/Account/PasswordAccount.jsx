import React, { useEffect, useState } from 'react';

const PasswordAccount = () => {
    const [password, setPassword] = useState('');
    useEffect(() => {
        const password = localStorage.getItem('password');
        if (password) {
            setPassword(password);
            console.log(password);
        }
    }, []);

    return (
        <div className="w-[50%] mx-auto flex flex-col gap-y-8 mt-6">
            <div className="flex flex-col gap-y-2">
                <div className="">Current password</div>
                <input type="text" value={password} className="w-full border-black border-2 px-2 py-1 rounded ml-4" />
            </div>
            <div className="flex flex-col gap-y-2">
                <div className="">New password</div>
                <input type="text" className="w-full border-black border-2 px-2 py-1 rounded ml-4" />
            </div>
            <div className="flex flex-col gap-y-2">
                <div className="">Confirm password</div>
                <input type="text" className="w-full border-black border-2 px-2 py-1 rounded ml-4" />
            </div>
        </div>
    );
};

export default PasswordAccount;
