import React, { useContext, useState } from 'react';

// import icon
import { RxCaretRight } from 'react-icons/rx';
import { GrClose } from 'react-icons/gr';

import imgtt from '../assets/imgs/icontiktok.svg';
import imgtw from '../assets/imgs/icontw.svg';
import imgpinter from '../assets/imgs/iconpinterest.svg';
import { ModalContext } from '../contexts/ModalContext';

const Modal = () => {
    const { isActive, setIsActive } = useContext(ModalContext);

    const [urlInput, setUrlInput] = useState('');
    const [isLink, setIsLink] = useState(false);
    const handleUrlInputChange = (event) => {
        const value = event.target.value;
        setUrlInput(value);
        setIsLink(isValidUrl(value));
    };
    const isValidUrl = (url) => {
        try {
            new URL(url);
            return true;
        } catch (error) {
            return false;
        }
    };
    return (
        <section>
            <div className="w-full h-[350px] z-20 shadow-lg ">
                <div className={`${isActive ? 'hidden ' : 'block'} `}>
                    <div className="flex justify-between pt-4">
                        <div className="font-medium text-sm">Enter Url</div>
                        <div
                            onClick={() => {
                                setIsActive(!isActive);
                            }}
                            className="px-2 py-1 cursor-pointer flex justify-end mr-6"
                        >
                            <GrClose />
                        </div>
                    </div>
                    <div className="bodyModal w-full border-b py-2">
                        <div className="flex justify-between px-16 items-center">
                            <input
                                type="url"
                                placeholder="URL"
                                className="border rounded-xl w-[80%] px-2 h-12 text-sm"
                                value={urlInput}
                                onChange={handleUrlInputChange}
                            />
                            <button
                                className={`w-20 py-3 rounded-3xl font-medium ${
                                    isLink ? 'bg-red-500 text-white' : 'bg-gray-300 text-gray-500'
                                }`}
                            >
                                Add
                            </button>
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="flex justify-between items-center">
                            <div className="text-sm font-medium text-[#666b5f]">Inspired by your interests</div>
                            <div className="flex gap-x-1 items-center font-medium text-[#8129d9] px-2 py-1 cursor-pointer ">
                                <div className="border-b border-transparent  hover:border-b hover:border-[#8129d9]">
                                    View all
                                </div>
                                <RxCaretRight className="text-xl" />
                            </div>
                        </div>
                        <div className="flex gap-x-2 px-6">
                            <div class="my-2 flex flex-col items-center justify-center relative transition duration-75 ease-out first:pl-4 last:pr-4 md:first:pl-0 md:last:pr-0">
                                <button
                                    class="hover:ring-sand hover:ring-2 hover:ring-inset active:bg-chalk  focus-visible:outline-black w-[88px] h-[88px] outline-none outline-offset-[-2px] bg-marble rounded-lg  antialiased text-black overflow-hidden mb-2"
                                    aria-label="Pinterest"
                                >
                                    <div class="flex justify-center items-center" aria-hidden="true">
                                        <div class="rounded-sm overflow-hidden">
                                            <img src={imgtt} alt="" class="w-10 h-10 object-contain" />
                                        </div>
                                    </div>
                                </button>
                                <p class="text-black text-xs w-full text-center font-semibold text-ellipsis overflow-hidden whitespace-nowrap">
                                    Tiktok
                                </p>
                            </div>
                            <div class="my-2 flex flex-col items-center justify-center relative transition duration-75 ease-out first:pl-4 last:pr-4 md:first:pl-0 md:last:pr-0">
                                <button
                                    class="hover:ring-sand hover:ring-2 hover:ring-inset active:bg-chalk  focus-visible:outline-black w-[88px] h-[88px] outline-none outline-offset-[-2px] bg-marble rounded-lg border-marble antialiased text-black overflow-hidden mb-2"
                                    aria-label="Pinterest"
                                >
                                    <div class="flex justify-center items-center" aria-hidden="true">
                                        <div class="rounded-sm overflow-hidden">
                                            <img src={imgtw} alt="" class="w-10 h-10 object-contain" />
                                        </div>
                                    </div>
                                </button>
                                <p class="text-black text-xs w-full text-center font-semibold text-ellipsis overflow-hidden whitespace-nowrap">
                                    Twitter
                                </p>
                            </div>
                            <div class="my-2 flex flex-col items-center justify-center relative transition duration-75 ease-out first:pl-4 last:pr-4 md:first:pl-0 md:last:pr-0">
                                <button
                                    class="hover:ring-sand hover:ring-2 hover:ring-inset active:bg-chalk  focus-visible:outline-black w-[88px] h-[88px] outline-none outline-offset-[-2px] bg-marble rounded-lg border-marble antialiased text-black overflow-hidden mb-2"
                                    aria-label="Pinterest"
                                >
                                    <div class="flex justify-center items-center" aria-hidden="true">
                                        <div class="rounded-sm overflow-hidden">
                                            <img src={imgpinter} alt="" class="w-10 h-10 object-contain" />
                                        </div>
                                    </div>
                                </button>
                                <p class="text-black text-xs w-full text-center font-semibold text-ellipsis overflow-hidden whitespace-nowrap">
                                    Pinterest
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Modal;
