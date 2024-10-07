import Image, { StaticImageData } from "next/image";
import { ICONS } from "../../../../../../public";

interface ICommentInfo {
  authorId: string;
  profileImage?: StaticImageData;
  commentedAt: string;
  comment: string;
  likes:number
}

interface CommentCardProps {
  commentInfo: ICommentInfo;
}

const CommentCard: React.FC<CommentCardProps> = ({ commentInfo }) => {
  const { authorId, profileImage, commentedAt, comment, likes } = commentInfo;

  return (
    <div className="flex gap-4 bg-primary-70 p-3 rounded-md">
      {/* Profile Image */}
      {profileImage ? (
        <Image
          src={profileImage}
          width={40}
          height={40}
          className="rounded-full size-10"
          alt={`${username}-profile-image`}
        />
      ) : (
        <div className="size-10 rounded-full bg-primary-20"></div>
      )}

      {/* Profile / header */}
      <div className="w-full flex-1">
        <div className="flex flex-1 items-center gap-3">
          {/* Username */}
          <h1 className="font-semibold text-primary-10">{authorId}</h1>

          <p className="text-xs text-primary-10/50">{commentedAt}</p>
        </div>

        {/* Time ago */}
        <div>
          <p className="text-sm text-primary-10/50 mt-1">{comment}</p>

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
