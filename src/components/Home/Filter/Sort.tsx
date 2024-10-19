'use client';

import React from 'react';
import { TbSortAscending, TbSortDescending } from "react-icons/tb";
import { useGetAllPostsQuery } from '@/redux/features/Posts/postsApi';
import { TPost } from '../NewsFeed/Posts/posts.types';

type TContentTypeFilter = {
    selectedSortOption?: string | null;
  setSelectedSortOption?: (category: string | null) => void;
};

const Sort: React.FC<TContentTypeFilter> = ({ setSelectedSortOption, selectedSortOption }) => {
  const { data: allPosts } = useGetAllPostsQuery({});
  const posts = allPosts?.data || [];

  const mostUpvotedPosts = [...posts].sort((a: TPost, b: TPost) => b.upvotes.length - a.upvotes.length);
  const mostDownvotedPosts = [...posts].sort((a: TPost, b: TPost) => b.downvotes.length - a.downvotes.length);

  const contentTypes = [
    {
      label: "Most Upvoted Content",
      icon: <TbSortAscending />,
      postLength: mostUpvotedPosts.length,
    },
    {
      label: "Most Downvoted Content",
      icon: <TbSortDescending />,
      postLength: mostDownvotedPosts.length,
    },
  ];

  return (
    <div className='bg-[#F6F7F8] p-4 border rounded-xl font-Lato'>
      <div className="border-b pb-2">
        <h1 className="text-lg">Sort By-</h1>
      </div>

      <div className="flex flex-col gap-2 mt-4">
        {contentTypes.map((type, index) => (
          <button
            key={index}
            onClick={() => setSelectedSortOption!(type.label)}
            className={`${selectedSortOption === type.label ? "bg-primary-gradient text-white" : "bg-primary-70 text-primary-10/70"} font-medium flex items-center justify-between text-[15px] rounded-md px-3 py-3 w-full`}
          >
            <div className="flex items-center gap-2">
              {type.icon}
              <h1 className="capitalize">{type.label}</h1>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sort;
