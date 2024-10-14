"use client";
import Image from "next/image";
import Link from "next/link";
import { ICONS, IMAGES } from "../../../../public";
import Button from "@/components/Reusable/Button";
import Container from "@/components/Container/Container";
import UserDropdown from "./UserDropdown";
import HamburgerMenu from "./HamburgerMenu";
import { useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react";
import { selectCurrentUser } from "@/redux/features/Auth/authSlice";

const Navbar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const user = useAppSelector(selectCurrentUser);

  // To prevent hydration error, wait until the component is mounted
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    // Optionally, you can return null or a loading skeleton here
    return null;
  }
  return (
    <Container>
      <div className="font-Lato flex items-center justify-between py-4">
        <div className="flex items-center gap-6">
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

          <div className="hidden lg:block">
            <input
              placeholder="Find post"
              type="text"
              className="bg-primary-70 px-3 py-[10px] rounded-lg border border-primary-30 focus:outline-none focus:border-primary-20 transition duration-300 focus:shadow"
            />
          </div>
        </div>

        {user !== null ? (
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

              <div className="size-4 rounded-full bg-primary-30 text-white text-xs flex items-center justify-center absolute -top-0.5 -right-0.5">
                2
              </div>
            </div>

            {/* USer dropdown menu */}
            {/* <div className="bg-primary-70 p-2 rounded-3xl border border-primary-30 focus:outline-none focus:border-primary-20 transition duration-300 focus:shadow flex items-center gap-3">
              <div className="size-8 rounded-full bg-primary-30"></div>
              <div className="flex items-center gap-[6px]">
              <h1 className="font-medium">Rahul Sutradhar</h1>
              <Image
              src={ICONS.downArrow}
              width={15}
                height={15}
              alt="notification icon"
              className="dark:hidden cursor-pointer"
          />
              </div>
          </div> */}
            <UserDropdown />
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <Link href={"/login"}>
              <Button variant="bordered">Login</Button>
            </Link>
            <Link href={"/signup"}>
              <Button variant="primary">Create Account</Button>
            </Link>
          </div>
        )}
        <HamburgerMenu />
      </div>
    </Container>
  );
};

export default Navbar;
