import React, { ReactNode } from 'react';
import Navbar from './_components/Navbar/Navbar';
import Footer from './_components/Footer/Footer';

const layout = ({children} : {children : ReactNode}) => {
    return (
        <div>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    );
};

export default layout;