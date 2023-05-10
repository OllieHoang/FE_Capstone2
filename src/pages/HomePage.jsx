import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Page = ({ children }) => {
    return (
        <>
            <div className=" h-screen ">
                <div className="header ">
                    <Header />
                </div>
                <div>{children}</div>
                <div className="footer">
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default Page;
