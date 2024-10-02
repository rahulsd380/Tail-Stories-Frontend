'use client'

import React, { useState } from 'react';
import ProfileCompletionStatus from './_components/ProfileCompletionStatus/ProfileCompletionStatus';
import PersonalDetails from './_components/PersonalDetails/PersonalDetails';
import Location from './_components/Location/Location';
import Bio from './_components/Bio/Bio';
import MyPosts from './_components/MyPosts/MyPosts';

const Myprofile = () => {
    const [profileTab, setProfileTab] = useState("Personal Details");
    const profileTabButtons = ["Personal Details", "Posts", "Notification", "Security"]
    return (
        <div className="font-Lato">
            <h1 className="text-primary-10 font-Lato text-3xl font-bold mb-5">My Profile</h1>
            <div className="flex gap-3">
            <div className="bg-white border rounded-3xl p-7 w-full h-fit">
                <div className="border-b pb-4 flex gap-5 items-center">
                    {/* Profile photo */}
                <div className="size-28 rounded-full bg-primary-20"></div>
                <div>
                    <button className="text-gray-500 font-medium bg-white rounded-xl border px-3 py-[7px] hover:shadow transition duration-300">Upload new photo</button>
                    <p className="text-primary-80 text-sm mt-3">At least 800 x 800 px recomended.</p>
                    <p className="text-primary-80 text-sm">JPG or PNG is allowed</p>
                </div>
                </div>


                {/* profile tabs */}
                <div className="flex items-center gap-9 mt-8">
                    {
                        profileTabButtons.map((buttonLabel, index) => 
                            <button key={index} onClick={() => setProfileTab(buttonLabel)} className={`${profileTab === buttonLabel ? "border-primary-20 font-semibold text-primary-20" : "font-normal text-gray-500"}  font-medium border-b-[2px] pb-2 transition duration-300`}>{buttonLabel}</button>
                        )
                    }
               
                </div>


                <div className="flex flex-col gap-5 mt-5">
                {
                    profileTab === "Personal Details" &&
                   <div className="flex flex-col gap-5">
                     <PersonalDetails/>
                     <Location/>
                     <Bio/>
                   </div>
                }
                {
                    profileTab === "Posts" &&
                   <div className="flex flex-col gap-5">
                    <MyPosts/>
                   </div>
                }
                </div>
            </div>
            <ProfileCompletionStatus/>
            </div>
        </div>
    );
};

export default Myprofile;