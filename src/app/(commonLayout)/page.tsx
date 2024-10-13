'use client'
import Container from "@/components/Container/Container";
import Profile from "./_components/Profile/Profile";
import NewsFeed from "./_components/NewsFeed/NewsFeed";
import Filter from "./_components/Filter/Filter";
import { useGetAllPostsQuery } from "@/redux/features/Posts/postsApi";
import { useState } from "react";
import People from "./_components/People/People";
import { TPost } from "./_components/NewsFeed/Posts/posts.types";

export default function Home() {
  const { data: allPosts } = useGetAllPostsQuery({});
  
  // State to manage selected category
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedContentType, setSelectedContentType] = useState<string | null>(null);

  // Filter posts based on selected category
  const filteredPosts = allPosts?.data?.filter((post:TPost) => {
    const categoryMatch = selectedCategory ? post.category === selectedCategory : true;
    const contentTypeMatch = selectedContentType ? post.contentType === selectedContentType : true;
    
    return categoryMatch && contentTypeMatch;
  });
  
    
  return (
    <Container>
      <div className="font-Lato mt-5 gap-4 lg:gap-8 grid grid-cols-12 w-full h-[calc(100vh-40px)]">
        {/* Left Sidebar */}
        <div className="col-span-0 lg:col-span-3 overflow-y-auto scrollbar-hide hidden lg:flex flex-col gap-4">
          <Profile />
          <People/>
        </div>

        {/* NewsFeed */}
        <div className="col-span-12 md:col-span-8 lg:col-span-6 overflow-y-auto scrollbar-hide">
          <NewsFeed posts={filteredPosts}/>
        </div>

        {/* Right Sidebar */}
        <div className="col-span-3 md:col-span-4 lg:col-span-3 overflow-y-auto scrollbar-hide hidden md:block">
          <Filter
          setSelectedCategory={setSelectedCategory} 
          selectedCategory={selectedCategory} 
          setSelectedContentType={setSelectedContentType}
          selectedContentType={selectedContentType}
          />
        </div>
      </div>
    </Container>
  );
}
