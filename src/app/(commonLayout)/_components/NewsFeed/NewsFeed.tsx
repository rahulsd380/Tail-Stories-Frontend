import Post from "./Post";
import Posts from "./Posts/Posts";
import { TPost } from "./Posts/posts.types";


const NewsFeed = ({ posts }:{posts:TPost[]}) => {
    return (
        <div className="h-screen flex flex-col gap-5">
            <Post/>
            <Posts posts={posts}/>
        </div>
    );
};

export default NewsFeed;