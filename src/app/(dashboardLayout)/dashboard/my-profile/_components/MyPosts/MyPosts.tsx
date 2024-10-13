import React from 'react';
import CreatePost from './CreatePost';
import PostCard from '@/components/Home/NewsFeed/Posts/PostCard';
import { TPost } from '@/components/Home/NewsFeed/Posts/posts.types';

const MyPosts = ({myPosts} : {myPosts:TPost[]}) => {
    return (
        <div className="bg-white border rounded-3xl p-7 w-full h-fit flex flex-col gap-5">
            <CreatePost/>
            {
                myPosts?.map((post:TPost) => 
                <PostCard key={post?._id} post={post}/>

                )
            }
            
        </div>
    );
};

export default MyPosts;