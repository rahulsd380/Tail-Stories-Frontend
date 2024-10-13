"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ICONS } from "../../../../../public";
import Link from "next/link";
import { IoLogOutOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { toast } from "sonner";
import { logout } from "@/redux/features/Auth/authSlice";

const UserDropdown = () => {
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
    { label: "Dashboard", path: "/dashboard", icon: ICONS.dashboard },
    {
      label: "View Profile",
      path: "/dashboard/my-profile",
      icon: ICONS.profileDark,
    },
    {
      label: "Account Settings",
      path: "/account-settings",
      icon: ICONS.comment,
    },
    { label: "Inbox", path: "/inbox", icon: ICONS.comment },
    { label: "Notifications", path: "/notifications", icon: ICONS.comment },
    { label: "My Saved Posts", path: "/saved-posts", icon: ICONS.comment },
    { label: "Contact Us", path: "/contact-us", icon: ICONS.comment },
    { label: "About Us", path: "/about-us", icon: ICONS.comment },
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
        <div className="size-8 rounded-full bg-primary-30"></div>
        <div className="flex items-center justify-between flex-1 gap-[6px]">
          <h1 className="font-medium">Rahul Sutradhar</h1>
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
            <Image
              src={item.icon}
              width={20}
              height={20}
              alt="notification icon"
            />
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
