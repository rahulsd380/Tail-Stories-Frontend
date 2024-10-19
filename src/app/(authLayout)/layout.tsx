import React, { ReactNode } from "react";
import { IMAGES } from "../../../public";
import Link from "next/link";
import Image from "next/image";
import ClientProvider from "@/providers/ClientProvider";
import Animation from "./login/_components/Animation";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col xl:flex-row gap-0 xl:gap-10 w-full max-w-[1536px] mx-auto">
      {/* Left side container */}
      <div className="w-full lg:w-[35%] md:w-[60%] mx-auto p-7 h-screen flex flex-col">
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
        <div className="flex items-center justify-center flex-1 w-full">
          <ClientProvider>{children}</ClientProvider>
        </div>
      </div>

      {/* Right side container */}
      <div className="relative w-full xl:w-[65%] h-screen bg-primary-gradient hidden md:flex items-center justify-center">
        {/* Background Image */}
        <Image
          src={IMAGES.lineBgImage}
          alt="Background"
          fill
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        {/* Animation component */}
        <div className="relative z-10">
          <Animation />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
