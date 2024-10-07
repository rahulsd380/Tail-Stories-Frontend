"use client"
import { useGetAllPostsQuery } from "@/redux/features/Posts/postsApi";
import PostCard from "./PostCard";
import { TPost } from "./posts.types";


const Posts = () => {
    const {data:allPosts} = useGetAllPostsQuery({});
    console.log(allPosts)
    return (
        <div className="">
            {
                allPosts?.data?.map((post:TPost) => 
                    <PostCard post={post}/>
                )
            }
           
        </div>
    );
};

export default Posts;