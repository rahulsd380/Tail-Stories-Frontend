"use client";
import Image from "next/image";
import React, { useState } from "react";
import { ICONS, IMAGES } from "../../../../../../public";
import Modal from "@/components/Modal/Modal";
import PostUserName from "@/components/Reusable/PostUserName";
import PostDescription from "./PostDescription";
import PostImages from "./PostImages";
import Comments from "./Comments";
import Button from "@/components/Reusable/Button";

const CommentButton = () => {
  const [openPostModal, setOpenPostModal] = useState<boolean>(false);

  const user = {
    username: "Rahul Sutradhar",
    profileImage: IMAGES.img1,
    isVerified: true,
    timeAgo: "1 hr ago"
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
  classNames="max-w-[1000px] h-[500px] p-4"
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
        <PostUserName user={user} />
        <PostDescription />
        <PostImages />
        <Comments />
      </div>
    </div>

    {/* Right side */}
    <div className="w-[35%] border-l pl-3 overflow-y-auto scrollbar-hide">
      <div className="border-b pb-2">
        <h1 className="text-primary-10/90">Post Info</h1>
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
            Pets Health
          </div>

          <div className="px-3 py-1 flex justify-center items-center gap-3 border rounded-md text-primary-10/70 w-fit">
            <Image src={ICONS.date} width={17} height={17} alt="date-icon" />
            12 Sep, 2024
          </div>

          <div className="px-3 py-1 flex justify-center items-center gap-3 border rounded-md text-primary-10/70 w-fit">
            <Image src={ICONS.upvote} width={20} height={20} alt="upvote-icon" />
            123
          </div>

          <div className="px-3 py-1 flex justify-center items-center gap-3 border rounded-md text-primary-10/70 w-fit">
            <Image src={ICONS.downvote} width={20} height={20} alt="downvote-icon" />
            50
          </div>
        </div>
      </div>


      <div className="flex items-center justify-between gap-4 w-full mt-5">
      <Button variant="bordered" classNames="w-full">
            Downvote
        </Button>
        <Button variant="primary" classNames="w-full">
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
