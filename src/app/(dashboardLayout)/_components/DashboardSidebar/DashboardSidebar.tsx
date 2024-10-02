"use client";
import React, { useState } from "react";

// react icons
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import {
  IoMoonOutline,
  IoNewspaperOutline,
  IoNotificationsOutline,
  IoSettingsOutline,
  IoSunnyOutline,
} from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { RxDashboard } from "react-icons/rx";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { IMAGES } from "../../../../../public";
import Image from "next/image";
import Link from "next/link";

const DashboardSidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  return (
    <aside
      className={`custom-scrollbar bg-white border-r h-screen top-0 left-0 sticky overflow-y-auto boxShadow rounded-md transition-all duration-300 ease w-[250px]`}
    >
      <div className="mt-5 px-4">
      <Link
            href={"/"}
            className="flex items-center gap-2 text-2xl font-bold text-primary-30 dark:text-primary-40"
          >
            <Image
              src={IMAGES.tailStoriesLogo}
              height={35}
              width={35}
              alt="tailStoriesLogo"
            />
            Tail Stories
          </Link>

        {/* search bar */}
        <div className="relative mt-5">
          <input
            className="px-4 py-2 border border-border rounded-md w-full pl-[40px] outline-none focus:border-primary"
            placeholder="Search..."
          />
          <IoIosSearch className="absolute top-[9px] left-2 text-[1.5rem] text-[#adadad]" />
        </div>
      </div>


      {/* general section */}
      <div className="mt-6 px-4">
        <p className="text-start text-[0.9rem] text-gray-500">Main</p>

        <div className="mt-3 flex flex-col gap-[5px]">
          <div className="flex justify-between items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200">
            <div className="flex items-center gap-[8px]">
              <RxDashboard className="text-[1.3rem] text-gray-500" />
              <p className="inline text-[1rem] font-[400] text-gray-500">
                Dashboard
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200">
            <div className="flex items-center gap-[8px]">
              <GoPerson className="text-[1.3rem] text-gray-500" />
              <p className="inline text-[1rem] font-[400] text-gray-500">
                My Profile
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200">
            <div className="flex items-center gap-[8px]">
              <IoNewspaperOutline className="text-[1.3rem] text-gray-500" />
              <p className="inline text-[1rem] font-[400] text-gray-500">
                Posts
              </p>
            </div>
          </div>

          {/* dropdown menus */}
          <div
            className={`${
              isDropdownOpen && "bg-gray-50"
            } flex w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 flex-col`}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <div className="flex justify-between items-center gap-[8px] w-full">
              <div className="flex items-center gap-[8px]">
                <TbBrandGoogleAnalytics className="text-[1.3rem] text-gray-500" />
                <p className="inline text-[1rem] font-[400] text-gray-500">
                  Income
                </p>
              </div>

              <IoIosArrowDown
                className={`${
                  isDropdownOpen ? "rotate-[180deg]" : "rotate-0"
                } transition-all duration-300 text-[1rem] text-gray-500`}
              />
            </div>

            <ul
              className={`${
                isDropdownOpen
                  ? "h-auto my-3 opacity-100 z-[1]"
                  : "opacity-0 z-[-1] h-0"
              } transition-all duration-300 list-none ml-[20px] pl-[10px] border-l border-gray-300 flex flex-col gap-[3px] text-[1rem] text-gray-500`}
            >
              <li className="hover:bg-gray-50 cursor-pointer px-[10px] py-[5px] rounded-md">
                Earnings
              </li>
              <li className="hover:bg-gray-50 cursor-pointer px-[10px] py-[5px] rounded-md">
                Refunds
              </li>
              <li className="hover:bg-gray-50 cursor-pointer px-[10px] py-[5px] rounded-md">
                Declines
              </li>
              <li className="hover:bg-gray-50 cursor-pointer px-[10px] py-[5px] rounded-md">
                Payouts
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* setting section */}
      <div className="px-4 mt-4">
        <p className="text-start text-[0.9rem] text-gray-500">Settings</p>

        <div className="mt-3 flex flex-col gap-[5px]">
          <div className="flex justify-between items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200">
            <div className="flex items-center gap-[8px]">
              <IoNotificationsOutline className="text-[1.3rem] text-gray-500" />
              <p className="inline text-[1rem] font-[400] text-gray-500">
                Notification
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200">
            <div className="flex items-center gap-[8px]">
              <IoSettingsOutline className="text-[1.3rem] text-gray-500" />
              <p className="inline text-[1rem] font-[400] text-gray-500">
                Setting
              </p>
            </div>
          </div>

          {/* dark theme toggle button */}
          <div className="py-3 flex items-center mt-10">
            <div className="flex items-center bg-gray-200 p-[10px] rounded-md w-full justify-between relative">
              <div
                className={`${
                  isDark ? "translate-x-full" : "translate-x-0"
                } transition-all duration-300 absolute top-[50%] transform -translate-y-1/2 bg-white rounded-md h-[85%] w-[45%] z-10`}
              ></div>
              <button
                className="pl-4 py-[14px] sm:py-[3px] rounded-md flex items-center gap-[10px] text-[1rem] text-gray-500 z-20"
                onClick={() => setIsDark(false)}
              >
                <IoSunnyOutline className="text-[1.2rem]" />
                Light
              </button>
              <button
                className="pr-5 py-[14px] sm:py-[3px] rounded-md flex items-center gap-[10px] text-[1rem] text-gray-500 z-20"
                onClick={() => setIsDark(true)}
              >
                <IoMoonOutline className="text-[1.2rem]" />
                Dark
              </button>
            </div>
          </div>

          {/* light & dark mode switch */}
          {/* <div
            className="bg-gray-200 w-full rounded-full flex items-center p-[3px] cursor-pointer mt-4"
            onClick={() => setIsDark(!isDark)}
          >
            <div
              className={`${
                isDark ? "translate-x-full" : "translate-x-0"
              } bg-white p-[5px] w-[40px] h-[30px] rounded-full shadow-md transform transition-all duration-300`}
            />
          </div> */}
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
