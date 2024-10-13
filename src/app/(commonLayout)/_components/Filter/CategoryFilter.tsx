import Image from 'next/image';
import React from 'react';
import { useGetAllPostsQuery } from '@/redux/features/Posts/postsApi';
import { ICONS } from '../../../../../public';
import { TPost } from '../NewsFeed/Posts/posts.types';
type TCategoryFilterProps = {
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
};
const CategoryFilter:React.FC<TCategoryFilterProps> = ({ setSelectedCategory, selectedCategory }) => {
  const { data: allPosts } = useGetAllPostsQuery({});
  const tip = allPosts?.data?.filter((data:TPost) => data?.category === "Tip");
  const story = allPosts?.data?.filter((data:TPost) => data?.category === "Story");

  const categories = [
    {
      label: "Tip",
      icon: ICONS.pet,
      postLength: tip?.length,
      bgClass: selectedCategory === "Tip" ? "bg-primary-gradient text-white" : "bg-primary-70 text-primary-10/70"
    },
    {
      label: "Story",
      icon: ICONS.pet,
      postLength: story?.length,
      bgClass: selectedCategory === "Story" ? "bg-primary-gradient text-white" : "bg-primary-70 text-primary-10/70"
    },
  ];

  return (
    <div className='bg-[#F6F7F8] p-4 border rounded-xl font-Lato'>
      <div className="border-b pb-2">
        <h1 className="text-lg">Categories</h1>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        
        {/* Button for All Posts */}
        <button
          onClick={() => setSelectedCategory(null)} // Set category to null for all posts
          className={`${selectedCategory === null ? "bg-primary-gradient text-white" : "bg-primary-70 text-primary-10/70"} font-medium flex items-center justify-between text-[15px] rounded-md px-3 py-3 w-full`} // Change background and text color for "All"
        >
          <div className="flex items-center gap-2">
            <Image
              src={ICONS.pet} // Use an appropriate icon for "All"
              width={20}
              height={20}
              alt="All"
            />
            <h1>All</h1>
          </div>
          <h1>{allPosts?.data?.length}</h1>
        </button>

        {/* Buttons for specific categories */}
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category.label)} // Update category on click
            className={`${category.bgClass} font-medium flex items-center justify-between text-[15px] rounded-md px-3 py-3 w-full`} // Apply dynamic class
          >
            <div className="flex items-center gap-2">
              <Image
                src={category.icon}
                width={20}
                height={20}
                alt={category.label}
              />
              <h1>{category.label}</h1>
            </div>
            <h1>{category?.postLength}</h1>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
