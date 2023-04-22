import React, { useState } from 'react';
// import icon

import avatar from '../assets/imgs/avtar.jpg';

const Appearance = () => {
    const [isFocus, setIsFocus] = useState(false);
    const [isFocus1, setIsFocus1] = useState(false);

    const handleInFocus = () => {
        setIsFocus(true);
    };
    const handleInFocus1 = () => {
        setIsFocus1(true);
    };
    const handleOutFocus = () => {
        setIsFocus(false);
        setIsFocus1(false);
    };
    const [inputValue, setInputValue] = useState('');
    const maxInputLength = 70;

    function handleInputChange(event) {
        const value = event.target.value;
        setInputValue(value.slice(0, maxInputLength));
    }

    return (
        <section>
            <div className=" py-2 flex justify-around relative pb-20 flex-col gap-y-4">
                <div className="text-xl font-medium">Profile</div>
                <div className="w-full h-full mt-4  placeholder:">
                    <div className="flex flex-col gap-y-4">
                        <div className="flex gap-x-4 ">
                            <img src={avatar} alt="" className="w-20 h-20 rounded-full object-contain" />
                            <div className="flex flex-col w-[70%] justify-center gap-y-1">
                                <button className="bg-[#8129d9] text-white font-medium rounded-3xl w-full py-2">
                                    Pick an image
                                </button>
                                <button className=" text-black border-2 font-medium rounded-3xl w-full py-2">
                                    Remove
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-4">
                            <div className={`flex flex-col border-2  rounded-xl px-6 py-1 ${isFocus ? 'outline' : ''}`}>
                                <label htmlFor="input-field" className="text-xs font-extralight">
                                    Profile Title
                                </label>
                                <input
                                    type="text"
                                    id="input-field"
                                    className="outline-none"
                                    onFocus={handleInFocus}
                                    onBlur={handleOutFocus}
                                />
                            </div>
                            <div
                                className={`flex flex-col border-2 relative  rounded-xl px-6 py-2 ${
                                    isFocus1 ? 'outline' : ''
                                }`}
                            >
                                <label htmlFor="Introduction" className="text-xs font-extralight">
                                    Introduction
                                </label>
                                <textarea
                                    maxLength={maxInputLength}
                                    value={inputValue}
                                    type="text"
                                    id="Introduction"
                                    className="outline-none flex-wrap h"
                                    onChange={handleInputChange}
                                    onFocus={handleInFocus1}
                                    onBlur={handleOutFocus}
                                />
                                <p className="absolute top-0 right-2 text-gray-400 text-sm">
                                    {inputValue.length}/{maxInputLength}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-xl font-medium mt-10">Themes</div>
                <div>
                    <div className="w-[130px] h-[200px] border-black border rounded-md bg-slate-400 text-white">
                        <div className="w-full h-full flex flex-col items-center justify-center gap-y-1">
                            <div className="w-[80%] h-6 rounded-lg bg-slate-300 text-black flex items-center justify-center"></div>
                            <div className="w-[80%] h-6 rounded-lg bg-slate-300 text-black flex items-center justify-center"></div>
                            <div className="w-[80%] h-6 rounded-lg bg-slate-300 text-black flex items-center justify-center"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appearance;
