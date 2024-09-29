import Image from "next/image";
import Link from "next/link";
import React from "react";

const Profile = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center space-y-4 rounded-xl bg-[#F6F7F8] p-4 border dark:bg-[#18181B] font-Lato">
      <div className="group relative">
        <Image
          width={110}
          height={110}
          className="h-[110px] w-[110px] rounded-full bg-slate-500 object-cover"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop"
          alt="card navigate ui"
        />
        <span className="absolute bottom-3 right-0 h-5 w-5 rounded-full border-[3px] border-white bg-green-500 dark:border-[#18181B]"></span>
        <span className="absolute bottom-3 right-0 h-5 w-5 animate-ping rounded-full bg-green-500"></span>
      </div>
      <div className="space-y-1 text-center">
        <h1 className="text-2xl text-gray-700 dark:text-white/90">Nullify</h1>
        <p className="text-sm text-gray-400">@rahul</p>
        {/* bio  */}
      <p className="pb-2 text-center text-sm text-gray-500 mt-2 max-w-[240px] mx-auto">
        Lorem ipsum, dolor sit amet consectetur adipihg jkhgh
      </p>
      </div>
      <div className="flex gap-10 items-center justify-center border-y w-full py-2">
        <div className="space-y-1 text-center">
          <p className="text-xl font-semibold dark:text-white/50">
            11
          </p>
          <p className="text-gray-500 dark:text-white/70 text-sm">Posts</p>
        </div>

        <div className="bg-primary-30 h-10 w-0.5"></div>

        <div className="space-y-1 text-center ">
          <p className="text-xl font-semibold dark:text-white/50">
            11
          </p>
          <p className="text-gray-500 dark:text-white/70 text-sm">Followers</p>
        </div>
      </div>
      
     <Link href={"/user/dashboard/my-profile"} className="text-primary-20 hover:text-primary-30 font-medium hover:underline">
     My Profile 
     </Link>
    </div>
  );
};

export default Profile;
