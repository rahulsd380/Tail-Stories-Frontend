"use client";
import Filter from '@/components/Home/Filter/Filter';
import Container from './../../../components/Container/Container';
import { useGetAllPostsQuery } from '@/redux/features/Posts/postsApi';
import { useState, useEffect } from 'react';
import Posts from './../../../components/Home/NewsFeed/Posts/Posts';
import { TPost } from '@/components/Home/NewsFeed/Posts/posts.types';

export default function AllPosts() {
  const [searchQuery, setSearchQuery] = useState('');
  const { data: allPosts } = useGetAllPostsQuery({});
  
  // State to manage selected category
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedContentType, setSelectedContentType] = useState<string | null>(null);

  // Effect to handle the query parameter from the URL
  useEffect(() => {
    const { search } = window.location;
    const params = new URLSearchParams(search);
    const query = params.get('search');
    if (query) {
      setSearchQuery(query);
    }
  }, []);

  // Filter posts based on selected category and search query
  const filteredPosts = allPosts?.data?.filter((post: TPost) => {
    const categoryMatch = selectedCategory ? post.category === selectedCategory : true;
    const contentTypeMatch = selectedContentType ? post.contentType === selectedContentType : true;
    const searchMatch = searchQuery ? post.title.toLowerCase().includes(searchQuery.toLowerCase()) : true;
    
    return categoryMatch && contentTypeMatch && searchMatch;
  });

  return (
    <div className="mt-10 h-[calc(100vh-40px)]">
      <Container>
        <div className="flex flex-col md:flex-row gap-10 w-full">
          <div className="w-full md:w-[30%] h-fit overflow-y-auto scrollbar-hide">
            <Filter
              setSelectedCategory={setSelectedCategory} 
              selectedCategory={selectedCategory} 
              setSelectedContentType={setSelectedContentType}
              selectedContentType={selectedContentType}
            />
          </div>

          <div className="w-full md:w-[70%] overflow-y-auto h-screen scrollbar-hide">
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
                <button className="px-4 py-3 bg-primary-gradient text-white hover:opacity-90 rounded-md transition-all duration-300">
                  Search
                </button>
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
