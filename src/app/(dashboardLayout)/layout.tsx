
import React, { ReactNode } from 'react';
import DashboardSidebar from './_components/DashboardSidebar/DashboardSidebar';
import DashboardHeader from './_components/DashboardHeader/DashboardHeader';
// import ClientProvider from './../../providers/ClientProvider';

const DashboardLayout = ({children} : {children : ReactNode}) => {
    return (
        // <ClientProvider>
            <div className="flex bg-bg-gradient">
            <DashboardSidebar/>
            <div className="flex flex-col gap-7 flex-1">
            <DashboardHeader/>
            

            <div className="px-6">
            {children}
            </div>
                </div>
        </div>
        // </ClientProvider>
    );
};

export default DashboardLayout;