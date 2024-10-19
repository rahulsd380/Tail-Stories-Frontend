
import React, { ReactNode } from 'react';
import DashboardSidebar from './_components/DashboardSidebar/DashboardSidebar';
import DashboardHeader from './_components/DashboardHeader/DashboardHeader';
import DashboardHamburgerMenu from './_components/DashboardHamburgerMenu/DashboardHamburgerMenu';
import UserDropdown from '@/components/Home/Navbar/UserDropdown';

const DashboardLayout = ({children} : {children : ReactNode}) => {
    return (
            <div className="w-full">

            <div className="px-4 mt-5 lg:mt-0 lg:hidden flex items-center justify-between w-full">
            <DashboardHamburgerMenu/>
            <UserDropdown/>
            </div>


                <div className="flex bg-bg-gradient mt-10 lg:mt-0">
            <DashboardSidebar/>

            <div className="flex flex-col gap-7 flex-1">
            <DashboardHeader/>
            <div className="px-6">
            {children}
            </div>
                </div>

        </div>
            </div>
    );
};

export default DashboardLayout;