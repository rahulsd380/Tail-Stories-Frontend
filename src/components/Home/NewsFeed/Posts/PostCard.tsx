"use client";
import Image from "next/image";
import { ICONS } from "../../../../../public";
import PostDropdown from "./PostDropdown";
import ShareButton from "./ShareButton";
import CommentButton from "./CommentButton";
import PostDescription from "./PostDescription";
import PostImages from "./PostImages";
import { TPost } from "./posts.types";
import { useGetMeQuery } from "@/redux/features/Auth/authApi";
import { useUpvotePostMutation } from "@/redux/features/Posts/postsApi";
import Modal from "@/components/Modal/Modal";
import { useState } from "react";
import PaymentModal from "./PaymentModal";
import { selectCurrentUser } from "@/redux/features/Auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { TUser } from "./Comments";

const PostCard = ({ post }: { post: TPost }) => {
  const user = useAppSelector(selectCurrentUser) as TUser | null;
  const [openPaymentModal, setOpenPaymentModal] = useState<boolean>(false);
  const [upvotePost] = useUpvotePostMutation();
  const { data } = useGetMeQuery({});
  const isVerified = data?.data?.isVerified;
  const contentType = post?.contentType;

  const handleUpvote = async () => {
    const upvoteData = {
      postId: post?._id,
      userId: data?.data?._id,
    };
    try {
      const res = await upvotePost(upvoteData).unwrap();
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-[#F6F7F8] p-4 border rounded-xl font-Lato flex flex-col gap-4 mb-4">
      <div className="flex gap-4">
        <div className="size-10 rounded-full bg-white border flex items-center justify-center">
          {post?.authorId?.profilePicture ? (
            <Image
              width={40}
              height={40}
              className="size-10 rounded-full object-cover"
              src={data?.data?.profilePicture}
              alt=""
              quality={100}
            />
          ) : (
            <Image
              width={32}
              height={32}
              className="size-8 rounded-full object-cover"
              src={ICONS.user}
              alt=""
              quality={100}
            />
          )}
        </div>
        {/* Profile / header */}
        <div className="w-full flex-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h1 className="font-semibold text-primary-10">{post?.authorId?.name}</h1>

              {isVerified && (
                <Image
                  src={ICONS.verified}
                  width={16}
                  height={16}
                  alt="verified-icon"
                  quality={100}
                />
              )}
              {post?.contentType === "premium" && (
                <Image
                  src={ICONS.premium}
                  width={16}
                  height={16}
                  alt="premium-icon"
                  quality={100}
                />
              )}
            </div>
            {user?.userId === post?.authorId?._id ? (
              <PostDropdown post={post} postId={post?._id} />
            ) : (
              ""
            )}
          </div>
          <p className="text-sm text-primary-10/50">1 hr ago</p>
        </div>
      </div>

      <div className="flex-1">
        {/* Card body */}
        <div className="">
          {/* Post description */}
          <PostDescription
            title={post?.title}
            description={post?.body}
            isVerified={isVerified}
            contentType={contentType}
          />

          {/* Post Images */}
          {isVerified && contentType === "premium" ? (
            <div className="blur-md">
              <PostImages images={post?.images || []} />
            </div>
          ) : (
            <PostImages images={post?.images || []} />
          )}

          {/* Total likes and comments */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center justify-center gap-2 text-sm text-primary-10/80">
              <Image
                src={ICONS.like}
                width={20}
                height={20}
                alt="like-icon"
                quality={100}
              />
              {post?.upvotes?.length}
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-primary-10/80">
              <Image
                src={ICONS.comment}
                width={20}
                height={20}
                alt="comment-icon"
                quality={100}
              />
              {post?.comments?.length}
            </div>
          </div>

          {/* Like, comment, share button */}
          <div className="mt-4 flex items-center justify-between gap-5">
            <button
              onClick={handleUpvote}
              className="flex items-center justify-center gap-2 text-sm text-primary-10/80 bg-primary-60 px-4 py-3 rounded-xl w-full"
            >
              <Image
                src={ICONS.like}
                width={20}
                height={20}
                alt="like-icon"
                quality={100}
              />
              Like
            </button>
            <CommentButton
              postId={post?._id}
              postedAt={post?.createdAt ? new Date(post.createdAt).toLocaleDateString() : ""}
              title={post?.title}
              description={post?.body}
              images={post?.images || []}
              category={post?.category}
              upvotes={post?.upvotes}
              downvotes={post?.downvotes}
              comments={post?.comments}
              contentType={contentType}
              isVerified={isVerified}
            />
            {!isVerified && contentType === "premium" ? (
              <button
                onClick={() => setOpenPaymentModal(true)}
                className="flex justify-center text-sm text-white bg-primary-gradient px-4 py-3 rounded-xl w-full"
              >
                Unlock
              </button>
            ) : (
              <ShareButton />
            )}
          </div>
        </div>
      </div>

      <Modal
        openModal={openPaymentModal}
        setOpenModal={setOpenPaymentModal}
        classNames="max-w-[700px] w-full h-[470px]"
      >
        <PaymentModal setOpenPaymentModal={setOpenPaymentModal} />
      </Modal>
    </div>
  );
};

export default PostCard;
