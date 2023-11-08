import React from 'react';
import Header from '../components/common/header/Header';
import Footer from '../components/common/footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
            
        </div>
    );
};

export default Main;