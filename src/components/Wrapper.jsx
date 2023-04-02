import React from 'react';

const Wrapper = ({ children }) => {
    return (
        <div className="w-[320px] md:max-h-[calc(100vh-80px)] px-6 pt-2 pb-0 absolute right-0 top-0 shadow-max-elevation-light text-left bg-white rounded-t-lg md:rounded-lg overflow-auto opacity-100 translate-y-0">
            {children}
        </div>
    );
};

export default Wrapper;
