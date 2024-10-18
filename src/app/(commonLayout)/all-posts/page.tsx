"use client";
import Filter from '@/components/Home/Filter/Filter';
import Container from './../../../components/Container/Container';
import { useGetAllPostsQuery } from '@/redux/features/Posts/postsApi';
import { useState } from 'react';
import Posts from './../../../components/Home/NewsFeed/Posts/Posts';
import { TPost } from '@/components/Home/NewsFeed/Posts/posts.types';
import Button from '@/components/Reusable/Button';

export default function AllPosts() {
  const { data: allPosts } = useGetAllPostsQuery({});
  
  // State to manage selected category
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedContentType, setSelectedContentType] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Filter posts based on selected category and search query
  const filteredPosts = allPosts?.data?.filter((post: TPost) => {
    const categoryMatch = selectedCategory ? post.category === selectedCategory : true;
    const contentTypeMatch = selectedContentType ? post.contentType === selectedContentType : true;
    const searchMatch = searchQuery ? post.title.toLowerCase().includes(searchQuery.toLowerCase()) : true;
    
    return categoryMatch && contentTypeMatch && searchMatch;
  });
  
  return (
    <div className="mt-10">
      <Container>
        <div className="flex flex-col md:flex-row gap-10 w-full">
          <div className="w-full md:w-[30%]">
            <Filter
              setSelectedCategory={setSelectedCategory} 
              selectedCategory={selectedCategory} 
              setSelectedContentType={setSelectedContentType}
              selectedContentType={selectedContentType}
            />
          </div>

          <div className="w-full md:w-[70%]">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-0">
              <h1 className="font-semibold text-2xl text-primary-10">All Posts</h1>
              <div className="flex justify-end gap-5 w-full md:w-fit">
                <input
                  placeholder="Find post"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-primary-70 px-3 py-[10px] rounded-lg border border-primary-30 focus:outline-none focus:border-primary-20 transition duration-300 focus:shadow w-full md:w-[280px] lg:w-[400px]"
                />
                <Button variant="primary">
                  Search
                </Button>
              </div>
            </div>

            <div className="mt-5">
              <Posts posts={filteredPosts} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
