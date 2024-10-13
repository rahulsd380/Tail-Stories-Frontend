import React from 'react';
import { useGetAllPostsQuery } from '@/redux/features/Posts/postsApi';
import { TPost } from '../NewsFeed/Posts/posts.types';
import { MdPostAdd } from "react-icons/md";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { BsClockHistory } from "react-icons/bs";




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
      icon: <MdOutlineTipsAndUpdates className="text-lg"/>,
      postLength: tip?.length,
      bgClass: selectedCategory === "Tip" ? "bg-primary-gradient text-white" : "bg-primary-70 text-primary-10/70"
    },
    {
      label: "Story",
      icon: <BsClockHistory className="" />,
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
          <MdPostAdd />
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
            {category.icon}
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
