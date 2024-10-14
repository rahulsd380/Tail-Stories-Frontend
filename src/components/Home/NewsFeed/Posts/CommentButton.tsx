"use client";
import Image from "next/image";
import React, { ReactNode, useState } from "react";
import { ICONS, IMAGES } from "../../../../../public";
import Modal from "@/components/Modal/Modal";
import PostUserName from "@/components/Reusable/PostUserName";
import PostDescription from "./PostDescription";
import PostImages from "./PostImages";
import Comments, { TUser } from "./Comments";
import Button from "@/components/Reusable/Button";
import { TComment, TVote } from "./posts.types";
import { useUpvotePostMutation, useDownvotePostMutation, useDeleteCommentMutation } from "@/redux/features/Posts/postsApi";
import { useAppSelector } from "@/redux/hooks";
import { selectCurrentUser } from "@/redux/features/Auth/authSlice";

type TCommentprops = {
  postId:string
  postedAt:ReactNode;
  category:string;
  upvotes : TVote[];
  downvotes : TVote[];
  title:string;
  description:string;
  images:string[];
comments:TComment[];
isVerified:boolean;
contentType:string;
}

const CommentButton:React.FC<TCommentprops> = ({description,isVerified,contentType, title, images, category, upvotes, downvotes, postedAt, postId, comments}) => {
  const user = useAppSelector(selectCurrentUser) as TUser | null;
  const [upvotePost] = useUpvotePostMutation();
  const [downvotePost] = useDownvotePostMutation();
  const [deleteComment] = useDeleteCommentMutation();
  const [openPostModal, setOpenPostModal] = useState<boolean>(false);

  const userInfo = {
    username: "Rahul Sutradhar",
    profileImage: IMAGES.img1,
    isVerified: true,
    timeAgo: "1 hr ago"
  };

  const handleUpvote = async () => {
    const upvoteData = {
      postId: postId,
      userId: user?.userId as string
    }
    try{
      const res = await upvotePost(upvoteData).unwrap();
      console.log(res)
    } catch(err){
      console.log(err)
    }
  };

  const handleDownvote = async () => {
    const downvoteData = {
      postId: postId,
      userId: user?.userId
    }
    try{
      const res = await downvotePost(downvoteData).unwrap();
      console.log(res)
    } catch(err){
      console.log(err)
    }
  };

  const handleDeleteComment = async (commentId:string) => {
    try{
      const res = await deleteComment({postId, commentId}).unwrap();
      console.log(res)
    } catch(err){
      console.log(err)
    }
  };



  return (
    <div className="w-full font-Lato">
      <button
        onClick={() => setOpenPostModal(true)}
        className="flex items-center justify-center gap-2 text-sm text-primary-10/80 bg-primary-60 px-4 py-3 rounded-xl w-full"
      >
        <Image src={ICONS.comment} width={20} height={20} alt="verified-icon" />
        Comment
      </button>

      <Modal
  openModal={openPostModal}
  setOpenModal={setOpenPostModal}
  classNames="max-w-[1000px] w-full h-[500px] p-4"
>

    {/* Header */}
      {/* Close button */}
      <button
        onClick={() => setOpenPostModal(false)}
        className="flex items-center gap-2"
      >
        <Image
          src={ICONS.leftArrow}
          width={20}
          height={20}
          alt="verified-icon"
        />
        <h1 className="text-sm">Go Back</h1>
      </button>

  <div className="flex gap-10 h-full mt-5">
    {/* Left side */}
    <div className="w-[65%] overflow-y-auto scrollbar-hide">
    
      <div className="space-y-3">
        <PostUserName user={userInfo} />
        <PostDescription title={title} description={description} isVerified={isVerified} contentType={contentType}/>
        <PostImages images={images}/>
        <Comments postId={postId} comments={comments} handleDeleteComment={handleDeleteComment}/>
      </div>
    </div>

    {/* Right side */}
    <div className="w-[35%] border-l pl-3 overflow-y-auto scrollbar-hide">
      <div className="border-b pb-2 flex items-cente justify-between">
        <h1 className="text-primary-10/90">Post Info</h1>

        <div className="flex items-center gap-4">
        <Image src={ICONS.bookmarkOutline} width={17} height={17} alt="bookmark-icon" />
        <Image src={ICONS.copyLink} width={17} height={17} alt="link-icon" />
        </div>
      </div>

        {/* Post info */}
      <div className="flex items-center gap-6 mt-5 border-b pb-5">
        <div className="flex flex-col gap-4">
          <p className="text-primary-10 px-3 py-1">Category</p>
          <p className="text-primary-10 px-3 py-1">Post Date</p>
          <p className="text-primary-10 px-3 py-1">Upvotes</p>
          <p className="text-primary-10 px-3 py-1">Downvotes</p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="px-3 py-1 flex justify-center items-center gap-3 border rounded-md text-primary-10/70 w-fit">
            <Image src={ICONS.pet} width={17} height={17} alt="date-icon" />
            {category}
          </div>

          <div className="px-3 py-1 flex justify-center items-center gap-3 border rounded-md text-primary-10/70 w-fit">
            <Image src={ICONS.date} width={17} height={17} alt="date-icon" />
            {postedAt}
          </div>

          <div className="px-3 py-1 flex justify-center items-center gap-3 border rounded-md text-primary-10/70 w-fit">
            <Image src={ICONS.upvote} width={20} height={20} alt="upvote-icon" />
            {upvotes?.length}
          </div>

          <div className="px-3 py-1 flex justify-center items-center gap-3 border rounded-md text-primary-10/70 w-fit">
            <Image src={ICONS.downvote} width={20} height={20} alt="downvote-icon" />
            {downvotes?.length}
          </div>
        </div>
      </div>


      <div className="flex items-center justify-between gap-4 w-full mt-5">
      {/* <button onClick={handleDownvote} className="w-full"> */}
      <Button onClick={handleDownvote} variant="bordered" classNames="w-full">
            Downvote
        </Button>
      {/* </button> */}
        <Button onClick={handleUpvote} variant="primary" classNames="w-full">
            Upvote
        </Button>
        
      </div>
    </div>
  </div>
</Modal>

    </div>
  );
};

export default CommentButton;
