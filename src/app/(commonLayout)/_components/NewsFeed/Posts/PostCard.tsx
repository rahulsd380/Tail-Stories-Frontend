import Image from "next/image";
import { ICONS } from "../../../../../../public";
import PostDropdown from "./PostDropdown";
import ShareButton from "./ShareButton";
import CommentButton from "./CommentButton";
import PostDescription from "./PostDescription";
import PostImages from "./PostImages";
import { TPost } from "./posts.types";

const PostCard = ({ post }: { post: TPost }) => {
  return (
    <div className="bg-[#F6F7F8] p-4 border rounded-xl font-Lato flex flex-col gap-4">
      <div className="flex gap-4">
        <div className="size-10 rounded-full bg-primary-20"></div>
        {/* Profile / header */}
        <div className="w-full flex-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h1 className="font-semibold text-primary-10">Rahul Sutradhar</h1>

              <Image
                src={ICONS.verified}
                width={16}
                height={16}
                alt="verified-icon"
              />
            </div>
            <PostDropdown />
          </div>
          <p className="text-sm text-primary-10/50">1 hr ago</p>
        </div>
      </div>

      <div className="flex-1">
        {/* Card body */}
        <div className="">
          {/* Post description */}
          <PostDescription title={post?.title} description={post?.body} />

          {/* Post Images */}
          <PostImages images={post?.images} />

          {/* Total likes and comments */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center justify-center gap-2 text-sm text-primary-10/80">
              <Image
                src={ICONS.like}
                width={20}
                height={20}
                alt="verified-icon"
              />
              {post?.upvotes?.length}
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-primary-10/80">
              <Image
                src={ICONS.comment}
                width={20}
                height={20}
                alt="verified-icon"
              />
              {post?.comments?.length}
            </div>
          </div>

          {/* Like, comment, share button */}
          <div className="mt-4 flex items-center justify-between gap-5">
            <div className="flex items-center justify-center gap-2 text-sm text-primary-10/80 bg-primary-60 px-4 py-3 rounded-xl w-full">
              <Image
                src={ICONS.like}
                width={20}
                height={20}
                alt="verified-icon"
              />
              Like
            </div>
            <CommentButton
            postId = {post?._id}
            postedAt={post?.createdAt}
              title={post?.title}
              description={post?.body}
              images={post?.images}
              category={post?.category}
              upvotes={post?.upvotes}
              downvotes={post?.downvotes}
              comments={post?.comments}
            />
            <ShareButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
