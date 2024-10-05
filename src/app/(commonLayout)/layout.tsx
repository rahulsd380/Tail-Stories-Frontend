import React, { ReactNode } from 'react';
import Navbar from './_components/Navbar/Navbar';
import Footer from './_components/Footer/Footer';
import ClientProvider from '@/providers/ClientProvider';

const layout = ({children} : {children : ReactNode}) => {
    return (
        <div>
            <Navbar/>
            <ClientProvider>
        {children}
      </ClientProvider>
            <Footer/>
        </div>
    );
};

export default layout;