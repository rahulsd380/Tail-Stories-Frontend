"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
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
import { MdOutlinePayment, MdOutlinePostAdd } from "react-icons/md";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { IMAGES } from "../../../../../public";
import Image from "next/image";
import Link from "next/link";
import { useAppSelector } from "@/redux/hooks";
import { selectCurrentUser } from "@/redux/features/Auth/authSlice";
import { TUser } from "@/components/Home/NewsFeed/Posts/Comments";
import { usePathname } from 'next/navigation'

const userLinks = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: <RxDashboard className="text-[1.3rem]" />,
  },
  {
    title: "My Profile",
    href: "/dashboard/my-profile",
    icon: <GoPerson className="text-[1.3rem]" />,
  },
  {
    title: "News Feed",
    href: "/",
    icon: <IoNewspaperOutline className="text-[1.3rem]" />,
  },
];

const adminLinks = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: <MdOutlineDashboardCustomize className="text-[1.3rem]" />,
  },
  {
    title: "Users",
    href: "/dashboard/manage-users",
    icon: <FaUsers className="text-[1.3rem]" />,
  },
  {
    title: "Payment History",
    href: "/dashboard/payment-history",
    icon: <MdOutlinePayment className="text-[1.3rem]" />,
  },
  {
    title: "Create Post",
    href: "/dashboard/create-post",
    icon: <MdOutlinePostAdd className="text-[1.3rem]" />,
  },
  {
    title: "My Profile",
    href: "/dashboard/my-profile",
    icon: <GoPerson className="text-[1.3rem]" />,
  },
];

const socialEngagementLinks = [
  { title: "Groups/Communities", href: "/groups" },
  { title: "Events", href: "/events" },
  { title: "Likes & Reactions", href: "/reactions" },
  { title: "Saved Posts", href: "/saved-posts" },
];

const settingLinks = [
  {
    title: "Notification",
    href: "/notifications",
    icon: <IoNotificationsOutline className="text-[1.3rem] text-gray-500" />,
  },
  {
    title: "Setting",
    href: "/settings",
    icon: <IoSettingsOutline className="text-[1.3rem] text-gray-500" />,
  },
];

const DashboardSidebar = () => {
  const pathname = usePathname()
  const user = useAppSelector(selectCurrentUser) as TUser | null;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  return (
    <aside className="custom-scrollbar bg-white border-r h-screen top-0 left-0 sticky overflow-y-auto boxShadow rounded-md transition-all duration-300 ease w-[250px] hidden lg:block">
      <div className="mt-5 px-4">
        <Link
          href="/"
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
      </div>

      {/* general section */}
      <div className="mt-6 px-4">
        <p className="text-start text-[0.9rem] text-gray-500">Main</p>

        <div className="mt-3 flex flex-col gap-[5px]">
          {user && user?.role === "user" ? (
            userLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`${pathname === link.href ? "bg-primary-gradient text-white" : "bg-white hover:bg-gray-50 text-gray-500"} flex justify-between items-center w-full  p-[5px] rounded-md cursor-pointer transition-all duration-200`}
              >
                <div className="flex items-center gap-[8px]">
                  {link.icon}
                  <p className="inline text-[1rem] font-[400] ">
                    {link.title}
                  </p>
                </div>
              </Link>
            ))
          ) : (
            adminLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`${pathname === link.href ? "bg-primary-gradient text-white" : "bg-white hover:bg-gray-50 text-gray-500"} flex justify-between items-center w-full  p-[5px] rounded-md cursor-pointer transition-all duration-200`}
              >
                <div className="flex items-center gap-[8px]">
                  {link.icon}
                  <p className="inline text-[1rem] font-[400]">
                    {link.title}
                  </p>
                </div>
              </Link>
            ))
          )}

          {/* dropdown for Social Engagement */}
          {user && user!.role === "user" && (
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
                    Social Engagement
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
                {socialEngagementLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="hover:bg-gray-50 cursor-pointer px-[10px] py-[5px] rounded-md"
                  >
                    {link.title}
                  </Link>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* setting section */}
      <div className="px-4 mt-4">
        <p className="text-start text-[0.9rem] text-gray-500">Settings</p>
        <div className="mt-3 flex flex-col gap-[5px]">
          {settingLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="flex justify-between items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200"
            >
              <div className="flex items-center gap-[8px]">
                {link.icon}
                <p className="inline text-[1rem] font-[400] text-gray-500">
                  {link.title}
                </p>
              </div>
            </Link>
          ))}

          {/* dark mode toggle or logout button */}
          {user && user!.role === "user" ? (
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
                  <IoSunnyOutline />
                </button>
                <button
                  className="pr-4 py-[14px] sm:py-[3px] rounded-md flex items-center gap-[10px] text-[1rem] text-gray-500 z-20"
                  onClick={() => setIsDark(true)}
                >
                  <IoMoonOutline />
                </button>
              </div>
            </div>
          ) : (
            <button className="w-full mt-4 py-2 bg-primary text-white rounded-md">
              Logout
            </button>
          )}
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
