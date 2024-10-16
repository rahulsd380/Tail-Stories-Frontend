import PostModal from './../../../../components/Home/NewsFeed/Posts/PostModal';

const CreatePost = () => {
    return (
        <div className="bg-white border rounded-3xl p-5 w-full">
             {/* <h1 className="text-primary-10 font-Lato text-3xl font-bold mb-5">Create Post</h1> */}
             <PostModal showCrossIcon={false}/>
        </div>
    );
};

export default CreatePost;