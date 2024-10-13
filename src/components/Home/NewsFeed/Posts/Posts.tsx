"use client"
import PostCard from "./PostCard";
import { TPost } from "./posts.types";


const Posts = ({posts}:{posts:TPost[]}) => {
    return (
        <div className="">
            {
                posts?.map((post:TPost) => 
                    <PostCard key={post?._id} post={post}/>
                )
            }
           
        </div>
    );
};

export default Posts;