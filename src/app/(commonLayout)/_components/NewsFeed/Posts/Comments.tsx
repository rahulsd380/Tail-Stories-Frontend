import Image from "next/image";
import { ICONS, IMAGES } from "../../../../../../public";
import CommentCard from "./CommentCard";
import { useCommentOnPostMutation } from "@/redux/features/Posts/postsApi";
import { selectCurrentUser } from "@/redux/features/Auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { toast } from "sonner";
import { useForm } from "react-hook-form";


type TCommentData = {
    authorId:string;
    comment:string;
}

const Comments = ({postId, comments:allComments} : {postId:string}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<TCommentData>();

    const user = useAppSelector(selectCurrentUser);

    const [commentOnPost] = useCommentOnPostMutation();

    const commentInfo = {
        username:"Rahul",
        profileImage:IMAGES.img1,
        timeAgo:"12 mins ago",
        comment:"kjhdf sdhfsd sidufhsd sioudf sdufsd uosidyfsd ouiysdf "
    };

    const handleComment = async (data:TCommentData) => {
        const commentData = {
            authorId:user?.userId,
            comment: data.comment,
        };

        console.log(commentData)
        try{
            const res = await commentOnPost({postId, commentData}).unwrap();
            toast.success("Commented Successfully!")
            console.log(res)
          } catch(err){
            console.log(err)
          }
    }
    return (
        <div className="font-Lato">
            

            {/* Post comment */}
            <div className="flex items-center gap-3 mt-5">
                <div className="size-10 rounded-full bg-primary-30"></div>

               <form onSubmit={handleSubmit(handleComment)} className="relative w-full flex-1">
               <input 
               {...register("comment", { required: "Enter your thoughts!" })}
            placeholder="What do you want to say?"
            type="text" 
            className="bg-primary-70 px-3 py-2 rounded-3xl border focus:outline-none focus:border-primary-20 transition duration-300 focus:shadow flex-1 w-full pr-10" />
            <button type="submit">
            <Image
              src={ICONS.send}
              width={25}
              height={25}
              alt="send-icon"
              className="absolute top-2 bottom-0 right-3"
            />
            </button>
               </form>
            </div>

                {/* All comments */}

                    <h1 className="text-base text-primary-10/80 mt-7">Comments</h1>
                <div className="flex flex-col gap-4 mt-2">
                    {
                        allComments?.map(comment => 
                        <CommentCard key={comment?._id} commentInfo={comment}/>
                        )
                    }
                    
                </div>


        </div>
    );
};

export default Comments;