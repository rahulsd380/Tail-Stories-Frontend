'use client';

import Image from 'next/image';
import React from 'react';
import { ICONS } from '../../../../public';
import { useGetAllPostsQuery } from '@/redux/features/Posts/postsApi';
import { TPost } from '../NewsFeed/Posts/posts.types';
type TContentTypeFilter = {
  selectedContentType: string | null;
  setSelectedContentType: (category: string | null) => void;
};

const ContentTypeFilter:React.FC<TContentTypeFilter> = ({ setSelectedContentType, selectedContentType }) => {
  const { data: allPosts } = useGetAllPostsQuery({});
  const free = allPosts?.data?.filter((data:TPost) => data?.contentType === "free");
  const premium = allPosts?.data?.filter((data:TPost) => data?.contentType === "premium");

  const contentTypes = [
    {
      label: "free",
      icon: ICONS.free,
      selectedIcon: ICONS.freeWhite,
      postLength: free?.length,
    },
    {
      label: "premium",
      icon: ICONS.premium,
      selectedIcon: ICONS.premiumWhite,
      postLength: premium?.length,
    },
  ];

  return (
    <div className='bg-[#F6F7F8] p-4 border rounded-xl font-Lato'>
      <div className="border-b pb-2">
        <h1 className="text-lg">Content Types</h1>
      </div>

      <div className="flex flex-col gap-2 mt-4">
        {contentTypes.map((type, index) => (
          <button
            key={index}
            onClick={() => setSelectedContentType(type.label)}
            className={`${selectedContentType === type.label ? "bg-primary-gradient text-white" : "bg-primary-70 text-primary-10/70"} font-medium flex items-center justify-between text-[15px] rounded-md px-3 py-3 w-full`}
          >
            <div className="flex items-center gap-2">
              <Image
                src={selectedContentType === type.label ? type.selectedIcon : type.icon}
                width={20}
                height={20}
                alt={type.label}
              />
              <h1 className="capitalize">{type.label}</h1>
            </div>
            <h1>{type?.postLength}</h1>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ContentTypeFilter;
