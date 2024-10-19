"use client"
import { useGetMeQuery, useGetmyPostsQuery } from "@/redux/features/Auth/authApi";
import Image from "next/image";
import Link from "next/link";
import { ICONS } from '../../../../public/index';

const Profile = () => {
  const {data, isLoading} = useGetMeQuery({});
  console.log(data)
  const {data:myPosts} = useGetmyPostsQuery(data?.data?._id);
  return (
    <div className="flex w-full flex-col items-center justify-center space-y-4 rounded-xl bg-[#F6F7F8] p-4 border font-Lato">
      {
        isLoading ?
        <div className="size-28 rounded-full bg-gray-50 animate-pulse flex items-center justify-center">
                    </div>
                    :
                    <div className="group relative size-[110px] rounded-full">
        {
          data?.data?.profilePicture ?
          <Image
          width={110}
          height={110}
          className="h-[110px] w-[110px] rounded-full bg-slate-500 object-cover"
          src={data?.data?.profilePicture}
          alt="card navigate ui"
        />
        :
        <Image
          width={110}
          height={110}
          className="h-[110px] w-[110px] rounded-full bg-white p-3 object-cover"
          src={ICONS.user}
          alt="card navigate ui"
        />
        }
        <span className="absolute bottom-3 right-0 h-5 w-5 rounded-full border-[3px] border-white bg-green-500 "></span>
        <span className="absolute bottom-3 right-0 h-5 w-5 animate-ping rounded-full bg-green-500"></span>
      </div>

      }
      
     { 
     data?.data &&
      <div className="space-y-1 text-center">
        
        {
          isLoading ?
          <div className="bg-gray-50 w-[100px] h-3"></div>
          :
          <h1 className="text-lg xl:text-2xl text-gray-700 ">{data?.data?.name}</h1>
        }
        <p className="text-sm text-gray-400">{data?.data?.userName}</p>
        {/* bio  */}
      <p className="pb-2 text-center text-sm text-gray-500 mt-2 max-w-[240px] mx-auto">
        {data?.data?.bio}
      </p>
      </div>}
      <div className="flex gap-10 items-center justify-center border-y w-full py-2">
        <div className="space-y-1 text-center">
          <p className="text-xl font-semibold ">
            {myPosts?.data?.length ? myPosts?.data?.length : 0}
          </p>
          <p className="text-gray-500  text-sm">Posts</p>
        </div>

        <div className="bg-primary-30 h-10 w-0.5"></div>

        <div className="space-y-1 text-center ">
          <p className="text-xl font-semibold ">
            {data?.data?.followers?.length ?data?.data?.followers?.length : 0}
          </p>
          <p className="text-gray-500  text-sm">Followers</p>
        </div>
      </div>
      
     <Link href={data?.data ? "/dashboard/my-profile" : "/login"} className="text-primary-20 hover:text-primary-30 font-medium hover:underline">
     {
     data?.data ?
     "My Profile"
    :
    "Login"
    }
     </Link>
    </div>
  );
};

export default Profile;
