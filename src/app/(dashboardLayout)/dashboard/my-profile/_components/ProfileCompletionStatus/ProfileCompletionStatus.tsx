'use client'
import React, { useState } from 'react';
import { TiTick } from "react-icons/ti";


const ProfileCompletionStatus = () => {
    const [progress, setProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const handleStartLoading = () => {
        if (isLoading) {
            setProgress(0);
            setIsLoading(false);
        }

        setProgress(0);
        setIsLoading(true);
    };

    const profileCompletionStatus=[
       "Upload Profile Picture",
       "Update Personal Details",
        "Add Bio",
        "Add Location",
        "Use Secure Password",
        "Update Notification Settings",
    ]
    return (
        <div className="font-Lato bg-white border rounded-3xl p-7 w-full h-fit max-w-full lg:max-w-[300px]">
            <h1 className="text-primary-10 font-Lato text-xl font-bold">Complete Your Profile</h1>

            <div className="mt-5">
            <div onClick={handleStartLoading} className="relative w-[150px] h-[150px] mx-auto">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                        cx="50"
                        cy="50"
                        r="45"
                        className="text-gray-200"
                        strokeWidth="10"
                        fill="none"
                    />

                    <circle
                        cx="50"
                        cy="50"
                        r="45"
                        stroke="#e2e2e2"
                        strokeWidth="10"
                        fill="none"
                        strokeDasharray="282.6"
                        strokeDashoffset={0}
                        strokeLinecap="round"
                        transform="rotate(-90 50 50)"
                    />

                    <circle
                        cx="50"
                        cy="50"
                        r="45"
                        className="text-gray-200"
                        strokeWidth="10"
                        fill="none"
                    />

                    <circle
                        cx="50"
                        cy="50"
                        r="45"
                        stroke="#C662E3"
                        strokeWidth="10"
                        fill="none"
                        strokeDasharray="282.6"
                        strokeDashoffset={70}
                        strokeLinecap="round"
                        transform="rotate(-90 50 50)"
                    />
                </svg>

                <p className="absolute top-[35%] left-[35%] translate-x-1/2 transform translate-y-1/2">{progress}%</p>
            </div>

            
        </div>

        <div className="flex flex-col gap-3 mt-5">
            {
                profileCompletionStatus.map((status, index) => 
                    <div key={index} className="flex items-center gap-3">
        <TiTick className="text-xl text-green-600"/>
        <p className="text-primary-80 text-sm">{status}</p>
        </div>
                )
            }
        
        </div>
        </div>
    );
};

export default ProfileCompletionStatus;