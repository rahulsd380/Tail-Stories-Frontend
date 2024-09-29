import Post from "./Post";
import Posts from "./Posts/Posts";


const NewsFeed = () => {
    return (
        <div className="h-screen flex flex-col gap-5">
            <Post/>
            <Posts/>
        </div>
    );
};

export default NewsFeed;