import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from '../components/Container';
import Main from '../components/Main';

const HomePage = () => {
    return (
        <>
            <div className="container h-screen">
                <div className="header w-full  bg-gradient-to-r from-emerald-500 lg:px-20">
                    <Header />
                    <Container />
                </div>
                <div className="main">
                    <Main />
                </div>
                <div className="footer">
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default HomePage;
