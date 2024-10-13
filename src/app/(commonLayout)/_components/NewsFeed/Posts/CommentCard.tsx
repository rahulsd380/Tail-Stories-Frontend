'use client'
import Image, { StaticImageData } from "next/image";
import { ICONS } from "../../../../../../public";
import CommentDropdown from "./CommentDropdown";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useEditCommentMutation } from "@/redux/features/Posts/postsApi";
import { TComment } from "./posts.types";



interface CommentCardProps {
  commentInfo: TComment;
  postId:string;
  handleDeleteComment: (commentId: string) => void;
}

type TUpdateCommentData = {
  postId : string;
  comment:string;
}

const CommentCard: React.FC<CommentCardProps> = ({ commentInfo, postId, handleDeleteComment }) => {
  const { authorId, profileImage, commentedAt, comment, likes, _id } = commentInfo;
  const [editComment, {isLoading:isCommentEditing}] = useEditCommentMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TUpdateCommentData>();
const [isEditExpanded, setIsEditExpanded] = useState(false);

const handleEditComment = async (data : TUpdateCommentData) => {
  const updatedCommentData = {
    postId : postId,
    comment : data.comment
  };

  try{
    const response = await editComment({updatedCommentData, commentId : _id}).unwrap();
    console.log(response)
    if(response?.data?.success){
      setIsEditExpanded(false);
    }
   
  } catch(err){
    console.log(err)
  }
}
  

  return (
    <div className="flex gap-4 bg-primary-70 p-3 rounded-md">
      {/* Profile Image */}
      {profileImage ? (
        <Image
          src={profileImage}
          width={40}
          height={40}
          className="rounded-full size-10"
          alt={`${authorId}-profile-image`}
        />
      ) : (
        <div className="size-10 rounded-full bg-primary-20"></div>
      )}

      {/* Profile / header */}
      <div className="w-full flex-1">
       <div className="flex items-center justify-between">
       <div className="flex flex-1 items-center gap-3">
          {/* Username */}
          <h1 className="font-semibold text-primary-10">{authorId}</h1>

          <p className="text-xs text-primary-10/50">{commentedAt}</p>
        </div>
        <CommentDropdown setIsEditExpanded={setIsEditExpanded} handleDeleteComment={handleDeleteComment} commentId={_id}/>

       </div>

        {/* Time ago */}
        <div>
          <p className="text-sm text-primary-10/50 mt-1">{comment}</p>

          {
            isEditExpanded ?
            <form onSubmit={handleSubmit(handleEditComment)} className="relative w-full flex-1 my-5">
               <input 
               {...register("comment", { required: "Enter your thoughts!" })}
               defaultValue={comment}
            placeholder="What do you want to say?"
            type="text" 
            className="bg-primary-70 px-3 py-2 rounded-3xl border focus:outline-none focus:border-primary-20 transition duration-300 focus:shadow flex-1 w-full pr-10" />
            {
              isCommentEditing ?
              <div className="size-5 animate-[spin_2s_linear_infinite] rounded-full border-2 border-dotted border-primary-10 absolute top-2 bottom-0 right-3"></div>
              :
              <button type="submit">
            <Image
              src={ICONS.send}
              width={25}
              height={25}
              alt="send-icon"
              className="absolute top-2 bottom-0 right-3"
            />
            </button>
            }
            
               </form>
               :
               ""
          }

          <div className="flex items-center gap-4 mt-3">
            <div className="flex items-center justify-center gap-2 text-sm text-primary-10/80">
              <Image
                src={ICONS.like}
                width={20}
                height={20}
                alt="verified-icon"
              />
              {likes?.length > 0 ? likes?.length : 0}
            </div>
            <p className="text-sm text-primary-10/80">Reply</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
