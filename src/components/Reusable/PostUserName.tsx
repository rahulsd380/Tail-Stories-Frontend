import Image, { StaticImageData } from "next/image";
import { ICONS } from "../../../public";

interface User {
  username: string;
  profileImage?: StaticImageData;
//   profileImage?: string;
  isVerified?: boolean;
  timeAgo: string;
}

interface UserHeaderProps {
  user: User;
}

const PostUserName: React.FC<UserHeaderProps> = ({ user }) => {
  const { username, profileImage, isVerified, timeAgo } = user;

  return (
    <div className="flex gap-4">
      {/* Profile Image */}
      {profileImage ? (
        <Image
          src={profileImage}
          width={40}
          height={40}
          className="rounded-full"
          alt={`${username}-profile-image`}
        />
      ) : (
        <div className="size-10 rounded-full bg-primary-20"></div>
      )}

      {/* Profile / header */}
      <div className="w-full flex-1">
        <div className="flex items-center gap-3">
          {/* Username */}
          <h1 className="font-semibold text-primary-10">{username}</h1>

          {/* Verified Icon */}
          {isVerified && (
            <Image
              src={ICONS.verified}
              width={16}
              height={16}
              alt="verified-icon"
            />
          )}
        </div>
        
        {/* Time ago */}
        <p className="text-sm text-primary-10/50">{timeAgo}</p>
      </div>
    </div>
  );
};

export default PostUserName;
