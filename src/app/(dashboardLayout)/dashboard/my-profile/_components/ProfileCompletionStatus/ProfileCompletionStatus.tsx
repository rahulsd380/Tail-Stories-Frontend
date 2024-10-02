'use client'
import React, { useState } from 'react';

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
    return (
        <div className="font-Lato bg-white border rounded-3xl p-7 w-full h-fit max-w-[300px]">
            <h1 className="text-primary-10 font-Lato text-xl font-bold">Complete Your Profile</h1>

            <div className="mt-5">
            <div className="relative w-[150px] h-[150px] mx-auto">
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
        </div>
    );
};

export default ProfileCompletionStatus;