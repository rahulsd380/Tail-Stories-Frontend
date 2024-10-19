/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, { useState } from 'react';
import { useGetMeQuery, useGetmyPostsQuery, useUpdateProfileMutation } from '@/redux/features/Auth/authApi';
import { toast } from 'sonner'
import Image from "next/image";
import { ICONS } from '../../../../../../../public';
import PersonalDetails from '../PersonalDetails/PersonalDetails';
import Location from '../Location/Location';
import Bio from '../Bio/Bio';
import MyPosts from '../MyPosts/MyPosts';
import MyFollowers from '../MyFollowers/MyFollowers';
import Followings from '../Followings/Followings';
import ProfileCompletionStatus from '../ProfileCompletionStatus/ProfileCompletionStatus';

const MyProfile2 = () => {
    const {data, isLoading:isProfileLoading} = useGetMeQuery({});
    const [updateProfile] = useUpdateProfileMutation();
    const {data:myPosts, isLoading} = useGetmyPostsQuery(data?.data?._id);
    const [profileTab, setProfileTab] = useState("Personal Details");
    const profileTabButtons = ["Personal Details", "Posts", "My Followers", "Followings"];

    const handleFileChange = async (event: any) => {
        const file = event.target.files[0];
        if (file) {
            const formData = new FormData();
            formData.append("file", file);

            toast.promise(
                updateProfile(formData).unwrap(),
                {
                    loading: 'Updating profile picture...',
                    success: 'Profile picture updated successfully!',
                    error: 'Failed to update profile picture.',
                }
            );
        } else {
            console.log("No file selected");
        }
    };

    if(isLoading){
        return <p>Loading...</p>
    }

    return (
        <div className="font-Lato">
            <h1 className="text-primary-10 font-Lato text-3xl font-bold mb-5">My Profile</h1>
            <div className="flex flex-col lg:flex-row gap-3">
            <div className="bg-white border rounded-3xl p-7 w-full h-fit">
                <div className="border-b pb-4 flex gap-5 items-center">
                    {/* Profile photo */}
                {
                    isProfileLoading? 
                    <div className="size-28 rounded-full bg-gray-50 animate-pulse flex items-center justify-center">
                    </div>
                    :
                    <div className="size-28 rounded-full bg-primary-20 flex items-center justify-center">
                {
          data?.data?.profilePicture ?
          <Image
          width={110}
          height={110}
          className="size-[110px] rounded-full bg-slate-500 object-cover"
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
                </div>
                }

                <div>
                    <div>
                    <label htmlFor="image" className="text-gray-500 font-medium bg-white rounded-xl border px-3 py-[7px] hover:shadow transition duration-300 cursor-pointer">Upload new photo</label>
                    <input onChange={(e) => handleFileChange(e)} type="file" id="image" className="hidden" />

                        </div>
                    <p className="text-primary-80 text-sm mt-3">At least 800 x 800 px recomended.</p>
                    <p className="text-primary-80 text-sm">JPG or PNG is allowed</p>
                </div>
                </div>


                {/* profile tabs */}
                <div className="flex items-center gap-9 mt-8 overflow-x-auto whitespace-nowrap">
  {
    profileTabButtons.map((buttonLabel, index) => 
      <button 
        key={index} 
        onClick={() => setProfileTab(buttonLabel)} 
        className={`${profileTab === buttonLabel ? "border-primary-20 font-semibold text-primary-20" : "font-normal text-gray-500"} font-medium border-b-[2px] pb-2 transition duration-300 whitespace-nowrap`}
      >
        {buttonLabel}
      </button>
    )
  }
</div>



                <div className="flex flex-col gap-5 mt-5">
                {
                    profileTab === "Personal Details" &&
                   <div className="flex flex-col gap-5">
                     <PersonalDetails details={data?.data}/>
                     <Location location={data?.data?.location}/>
                     <Bio bio={data?.data?.bio}/>
                   </div>
                }
                {
                    profileTab === "Posts" &&
                   <div className="flex flex-col gap-5">
                    <MyPosts myPosts={myPosts?.data}/>
                   </div>
                }
                {
                    profileTab === "My Followers" &&
                   <div className="">
                    <MyFollowers followers={data?.data?.followers}/>
                   </div>
                }
                {
                    profileTab === "Followings" &&
                   <div className="">
                    <Followings following={data?.data?.following}/>
                   </div>
                }
                </div>
            </div>
            <ProfileCompletionStatus/>
            </div>
        </div>
    );
};

export default MyProfile2;