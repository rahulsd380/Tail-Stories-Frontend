import Image from "next/image";
import React from "react";

const Profile = () => {
  return (
    <div className="flex max-w-[280px] flex-col items-center justify-center space-y-4 rounded-xl bg-white p-4 shadow-lg dark:bg-[#18181B]">
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
        <p className="text-sm text-gray-400">UI/UX Designer</p>
      </div>
      <div className="flex w-full justify-between py-2">
        <div className="space-y-1 text-center">
          <p className="text-gray-500 dark:text-white/70">Posts</p>
          <p className="font-mono text-xl text-gray-700 dark:text-white/50">
            11
          </p>
        </div>
        <div className="space-y-1 text-center">
          <p className="text-gray-500 dark:text-white/70">Following</p>
          <p className="font-mono text-xl text-gray-700 dark:text-white/50">
            250
          </p>
        </div>
        <div className="space-y-1 text-center ">
          <p className="text-gray-500 dark:text-white/70">Followers</p>
          <p className="font-mono text-xl text-gray-700 dark:text-white/50">
            11
          </p>
        </div>
      </div>
      {/* bio  */}
      <p className="pb-2 text-center text-sm text-gray-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore error
        ipsum officiis debitis quo odio?
      </p>
      <button className="w-full rounded-full py-2 text-[12px] font-semibold text-sky-700 ring-1 ring-sky-700 hover:bg-sky-700 hover:text-white sm:text-sm md:text-base">
        View Profile
      </button>
    </div>
  );
};

export default Profile;
