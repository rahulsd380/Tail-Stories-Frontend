import UserDropdown from '@/components/Home/Navbar/UserDropdown';
import Image from 'next/image';
import React from 'react';
import { ICONS } from '../../../../../public';

const DashboardHeader = () => {
    return (
        <div className="hidden lg:flex items-center justify-between py-[14px] w-full bg-white px-6 top-0 sticky z-20">

          <div className="hidden lg:block w-[300px]">
            <input 
            placeholder="Find post"
            type="text" 
            className="bg-primary-70 px-3 py-[10px] rounded-lg border border-primary-30 focus:outline-none focus:border-primary-20 transition duration-300 focus:shadow w-full" />
          </div>

        

        <div className="hidden lg:flex items-center gap-8">

           {/* Theme icon */}
           <div>
          <Image
          src={ICONS.moon}
          width={25}
          height={25}
          alt="notification icon"
          className="dark:hidden cursor-pointer"
          />
          <Image
          src={ICONS.sun}
          width={30}
          height={30}
          alt="notification icon"
          className="hidden dark:block cursor-pointer"
          />
          </div>

          {/* Message icon */}
          <div>
          <Image
          src={ICONS.emailGray}
          width={25}
          height={25}
          alt="notification icon"
          className="dark:hidden cursor-pointer"
          />
          <Image
          src={ICONS.emailPurple}
          width={30}
          height={30}
          alt="notification icon"
          className="hidden dark:block cursor-pointer"
          />
          </div>
          
          {/* Notification icon */}
          <div className="relative">
          <Image
          src={ICONS.notificationGray}
          width={30}
          height={30}
          alt="notification icon"
          className="dark:hidden cursor-pointer"
          />
          <Image
          src={ICONS.notificationPurple}
          width={30}
          height={30}
          alt="notification icon"
          className="hidden dark:block cursor-pointer"
          />

          <div className="size-4 rounded-full bg-primary-30 text-white text-xs flex items-center justify-center absolute -top-0.5 -right-0.5">2</div>
          </div>
         
          {/* USer dropdown menu */}
          <UserDropdown/>
        </div>
        </div>
    );
};

export default DashboardHeader;