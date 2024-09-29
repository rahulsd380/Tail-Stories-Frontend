import Image from "next/image";
import { ICONS, IMAGES } from "../../../../../../public";
import CommentCard from "./CommentCard";


const Comments = () => {
    const commentInfo = {
        username:"Rahul",
        profileImage:IMAGES.img1,
        timeAgo:"12 mins ago",
        comment:"kjhdf sdhfsd sidufhsd sioudf sdufsd uosidyfsd ouiysdf "
    }
    return (
        <div className="font-Lato">
            

            {/* Post comment */}
            <div className="flex items-center gap-3 mt-5">
                <div className="size-10 rounded-full bg-primary-30"></div>

               <div className="relative w-full flex-1">
               <input 
            placeholder="What do you want to say?"
            type="text" 
            className="bg-primary-70 px-3 py-2 rounded-3xl border focus:outline-none focus:border-primary-20 transition duration-300 focus:shadow flex-1 w-full pr-10" />
            <Image
              src={ICONS.send}
              width={25}
              height={25}
              alt="send-icon"
              className="absolute top-2 bottom-0 right-3"
            />
               </div>
            </div>


                    <h1 className="text-base text-primary-10/80 mt-7">Comments</h1>
                <div className="flex flex-col gap-4 mt-2">
                    <CommentCard commentInfo={commentInfo}/>
                </div>


        </div>
    );
};

export default Comments;