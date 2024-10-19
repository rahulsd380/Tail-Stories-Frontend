'use client'
import React, { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import DashboardSidebar from './_components/DashboardSidebar/DashboardSidebar';
import DashboardHeader from './_components/DashboardHeader/DashboardHeader';
import DashboardHamburgerMenu from './_components/DashboardHamburgerMenu/DashboardHamburgerMenu';
import UserDropdown from '@/components/Home/Navbar/UserDropdown';
import { useAppSelector } from '@/redux/hooks';
import { selectCurrentUser } from '@/redux/features/Auth/authSlice';
import { TUser } from '@/components/Home/NewsFeed/Posts/Comments';

const DashboardLayout = ({ children }: { children: ReactNode }) => {
    const user = useAppSelector(selectCurrentUser) as TUser | null;
    const router = useRouter();

    // Checking if the user is authenticated
    useEffect(() => {
        if (!user) {
            router.push('/login');
        }
    }, [user, router]);

    return (
        <div className="w-full">
            <div className="px-4 mt-5 lg:mt-0 lg:hidden flex items-center justify-between w-full">
                <DashboardHamburgerMenu />
                <UserDropdown />
            </div>

            <div className="flex bg-bg-gradient mt-10 lg:mt-0">
                <DashboardSidebar />

                <div className="flex flex-col gap-7 flex-1">
                    <DashboardHeader />
                    <div className="px-6">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
