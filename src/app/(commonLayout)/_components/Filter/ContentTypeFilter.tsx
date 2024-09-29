"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { ICONS } from '../../../../../public';

const ContentTypeFilter = () => {
    const [contentType, setContentType] = useState("All")
    const contentTypes = [
        {
            label : "All",
            icon : ICONS.all,
            selectedIcon : ICONS.allWhite,
        },
        {
            label : "Free",
            icon : ICONS.free,
            selectedIcon : ICONS.freeWhite,
        },
        {
            label : "Premium",
            icon : ICONS.premium,
            selectedIcon : ICONS.premiumWhite,
        },
      ]
    return (
        <div className='bg-[#F6F7F8] p-4 border rounded-xl font-Lato'>
            <div className="border-b pb-2">
      <h1 className="text-lg">Content Types</h1>
      </div>

             <div className="flex flex-col gap-2 mt-4">
      {contentTypes.map((type, index) => (
        <button
        onClick={() => setContentType(type.label)}
          key={index}
          className={`${contentType === type.label ? "bg-primary-gradient text-white" : "bg-primary-70 text-primary-10/70"} font-medium flex items-center justify-between text-[15px] rounded-md px-3 py-3 w-full`}
        >
          <div className="flex items-center gap-2">
            <Image
            src={contentType === type.label ? type.selectedIcon : type.icon}
            width={20}
            height={20}
            alt="pet"
            />
          <h1>{type.label}</h1>
          </div>
          <h1>26</h1>
        </button>
      ))}
      </div>
        </div>
    );
};

export default ContentTypeFilter;