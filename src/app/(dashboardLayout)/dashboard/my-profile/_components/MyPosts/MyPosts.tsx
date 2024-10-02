import React from 'react';
import CreatePost from './CreatePost';
import PostCard from '@/app/(commonLayout)/_components/NewsFeed/Posts/PostCard';

const MyPosts = () => {
    return (
        <div className="bg-white border rounded-3xl p-7 w-full h-fit flex flex-col gap-5">
            <CreatePost/>
            <PostCard/>
        </div>
    );
};

export default MyPosts;