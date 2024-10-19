"use client";
import { useEffect, useState } from "react";
import { ICONS } from "../../../../public";
import Image from "next/image";
import Link from "next/link";
import { useGetMeQuery } from "@/redux/features/Auth/authApi";
import { GoPerson } from "react-icons/go";
import { RxDashboard } from "react-icons/rx";
import {IoNewspaperOutline} from "react-icons/io5";
import { usePathname } from 'next/navigation'
import { FiSearch } from "react-icons/fi";
import { useRouter } from "next/navigation";


const HamburgerMenu = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    router.push(`/all-posts?search=${encodeURIComponent(searchQuery)}`);
  };
  const pathname = usePathname()
  const {data} = useGetMeQuery({});
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const toggleHamburgerMenu = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const closestDropdown = (event.target as HTMLElement).closest(
        ".hamburgerMenu"
      );
      if (isHamburgerOpen && closestDropdown === null) {
        setIsHamburgerOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isHamburgerOpen]);


  const hamburgerMenuLinks = [
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

  return (
    <div className="relative hamburgerMenu block lg:hidden">
      <Image
        onClick={toggleHamburgerMenu}
        src={ICONS.menu}
        alt="menu-icon"
        className="size-8 cursor-pointer"
      />

      {/* Background Overlay */}
      <div
        onClick={toggleHamburgerMenu}
        className={`fixed inset-0 bg-black z-50 transition-opacity duration-300 ${
          isHamburgerOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
      ></div>

      {/* Side Menu */}
      <div
        className={`p-3 fixed inset-y-0 right-0 z-50 bg-white w-[290px] overflow-y-auto h-screen transition-all duration-300 transform ${
          isHamburgerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Inner content here */}
        <div className="flex items-center gap-3">
        <div className="size-12 rounded-full bg-white border flex items-center justify-center">
        {
          data?.data?.profilePicture ?
          <Image
          width={40}
          height={40}
        className="size-11 rounded-full object-cover"
          src={data?.data?.profilePicture}
          alt=""
        />
        :
        <Image
          width={25}
          height={25}
          className="size-8 rounded-full object-cover"
          src={ICONS.user}
          alt=""
        />
        }
        </div>

        <div>
        <h1 className="font-medium text-lg">{data?.data?.name}</h1>
        <p className="text-xs mt-[2px]">{data?.data?.username ? data?.data?.username : "username not added"}</p>
        </div>

        </div>

        <div className="hidden lg:block relative">
            <input
            onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Find post"
              type="text"
              className="bg-primary-70 px-3 py-[10px] rounded-lg border border-primary-30 focus:outline-none focus:border-primary-20 transition duration-300 focus:shadow"
            />
           <FiSearch
              onClick={handleSearch}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-primary-30 cursor-pointer"
              size={20}
            />
          </div>



        {/* Links */}
        <div className="flex flex-col gap-3 mt-10">
          {
            hamburgerMenuLinks.map((link, index) => (
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
          }
        </div>
       




      </div>
    </div>
  );
};

export default HamburgerMenu;
