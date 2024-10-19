'use client'
import Container from '@/components/Container/Container';
import React, { useState } from 'react';
import Profile from '../../../../components/Home/Profile/Profile';
import People from '../../../../components/Home/People/People';
import NewsFeed from '../../../../components/Home/NewsFeed/NewsFeed';
import Filter from '../../../../components/Home/Filter/Filter';
import { TPost } from '../../../../components/Home/NewsFeed/Posts/posts.types';
import { useGetAllPostsQuery } from '@/redux/features/Posts/postsApi';

const CommonLayoutPage = () => {
    const { data: allPosts } = useGetAllPostsQuery({});

    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedContentType, setSelectedContentType] = useState<string | null>(null);
    const [selectedSortOption, setSelectedSortOption] = useState<string | null>(null);

    let filteredPosts = allPosts?.data?.filter((post: TPost) => {
        const categoryMatch = selectedCategory ? post.category === selectedCategory : true;
        const contentTypeMatch = selectedContentType ? post.contentType === selectedContentType : true;
        return categoryMatch && contentTypeMatch;
    });
    
    if (selectedSortOption === 'Most Upvoted Content') {
        filteredPosts = [...(filteredPosts || [])].sort((a, b) => b.upvotes.length - a.upvotes.length);
    } else if (selectedSortOption === 'Most Downvoted Content') {
        filteredPosts = [...(filteredPosts || [])].sort((a, b) => b.downvotes.length - a.downvotes.length);
    }

    return (
        <Container>
            <div className="font-Lato mt-5 gap-4 lg:gap-8 grid grid-cols-12 w-full h-[calc(100vh-40px)]">
                {/* Left Sidebar */}
                <div className="col-span-0 lg:col-span-3 overflow-y-auto scrollbar-hide hidden lg:flex flex-col gap-4">
                    <Profile />
                    <People />
                </div>

                {/* NewsFeed */}
                <div className="col-span-12 md:col-span-8 lg:col-span-6 overflow-y-auto scrollbar-hide">
                    <NewsFeed posts={filteredPosts} />
                </div>

                {/* Right Sidebar */}
                <div className="col-span-3 md:col-span-4 lg:col-span-3 overflow-y-auto scrollbar-hide hidden md:block">
                    <Filter
                        setSelectedCategory={setSelectedCategory}
                        selectedCategory={selectedCategory}
                        setSelectedContentType={setSelectedContentType}
                        selectedContentType={selectedContentType}
                        setSelectedSortOption={setSelectedSortOption}
                        selectedSortOption={selectedSortOption}
                    />
                </div>
            </div>
        </Container>
    );
};

export default CommonLayoutPage;
