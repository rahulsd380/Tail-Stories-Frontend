"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ICONS } from "../../../../public";
import Link from "next/link";
import { IoLogOutOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { toast } from "sonner";
import { logout } from "@/redux/features/Auth/authSlice";
import { useGetMeQuery } from "@/redux/features/Auth/authApi";
import {IoNotificationsOutline,} from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { GoPerson } from "react-icons/go";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { RiContactsBook2Line } from "react-icons/ri";
import { FaChalkboardUser } from "react-icons/fa6";



const UserDropdown = () => {
  const {data} = useGetMeQuery({});
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const dropDownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const userMenuItems = [
    { label: "Dashboard", path: "/dashboard", icon: <RxDashboard /> },
    {
      label: "View Profile",
      path: "/dashboard/my-profile",
      icon: <GoPerson className="text-[1.3rem]" />,
    },
    { label: "Inbox", path: "/inbox", icon: <MdOutlineForwardToInbox /> },
    { label: "Notifications", path: "/notifications", icon: <IoNotificationsOutline className="text-" /> },
    { label: "Contact Us", path: "/contact-us", icon: <RiContactsBook2Line /> },
    { label: "About Us", path: "/about-us", icon: <FaChalkboardUser />
    },
  ];

  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
    toast.success("Logged out successfully.");
  };

  return (
    <div ref={dropDownRef} className="relative mx-auto w-fit">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="bg-primary-70 px-2 py-[6px] rounded-3xl border border-primary-30 focus:outline-none focus:border-primary-20 transition duration-300 focus:shadow flex items-center gap-3 w-[200px]"
      >
        <div className="size-8 rounded-full bg-white border flex items-center justify-center">
        {
          data?.data?.profilePicture ?
          <Image
          width={40}
          height={40}
        className="size-8 rounded-full object-cover"
          src={data?.data?.profilePicture}
          alt=""
        />
        :
        <Image
          width={25}
          height={25}
          className="size-6 rounded-full object-cover"
          src={ICONS.user}
          alt=""
        />
        }
        </div>
        <div className="flex items-center justify-between flex-1 gap-[6px]">
          <h1 className="font-medium">{data?.data?.name}</h1>
          <Image
            src={ICONS.downArrow}
            width={15}
            height={15}
            alt="notification icon"
            className="dark:hidden cursor-pointer"
          />
        </div>
      </button>

      <div
        className={`${
          open ? "visible" : "invisible"
        } absolute top-14 z-50 w-full space-y-1 bg-white py-3 rounded-xl flex flex-col`}
      >
        {userMenuItems.map((item, index) => (
          <Link
            href={item.path}
            key={index}
            className={`rounded-sm px-3 py-2 ${
              open ? "opacity-100 duration-500" : "opacity-0 duration-150"
            } hover:bg-primary-gradient hover:text-white flex items-center gap-3 text-primary-10/70 text-sm`}
            style={{
              transform: `translateY(${open ? 0 : (index + 1) * 10}px)`,
            }}
          >
           {item.icon}
            {item.label}
          </Link>
        ))}

        {/* Logout button */}
        <button
          onClick={handleLogout}
          className={`rounded-sm px-3 py-2 ${
            open ? "opacity-100 duration-500" : "opacity-0 duration-150"
          } hover:bg-primary-gradient hover:text-white flex items-center gap-3 text-primary-10/70 text-sm`}
          style={{
            transform: `translateY(${
              open ? 0 : (userMenuItems.length + 1) * 10
            }px)`,
          }}
        >
          <IoLogOutOutline className="text-xl" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserDropdown;
