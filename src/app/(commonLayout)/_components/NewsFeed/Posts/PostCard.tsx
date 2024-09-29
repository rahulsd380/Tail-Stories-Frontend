import Image from "next/image";
import { ICONS } from "../../../../../../public";

const PostCard = () => {
  return (
    <div className="bg-[#F6F7F8] p-4 border rounded-xl font-Lato flex gap-4">

        <div className="size-10 rounded-full bg-primary-20"></div>

        <div className="flex-1">
        {/* Profile / header */}
        <div className="">
          <div className="flex items-center gap-3">
            <h1 className="font-semibold text-primary-10">Rahul Sutradhar</h1>
            <Image
              src={ICONS.verified}
              width={16}
              height={16}
              alt="verified-icon"
            />
          </div>
          <p className="text-sm text-primary-10/50">1 hr ago</p>
        </div>


      {/* Card body */}
      <div className="mt-4">
        <p className="text-sm text-primary-10/80 border-b pb-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio ipsam ab ullam ipsa ratione neque magni est inventore! Molestiae itaque esse ea rerum assumenda omnis totam ipsa sapiente atque soluta!</p>

        <div className="flex items-center justify-between mt-4">
        <div className="flex items-center justify-center gap-2 text-sm text-primary-10/80">
            <Image
              src={ICONS.like}
              width={20}
              height={20}
              alt="verified-icon"
            />
            20K
            </div>
        <div className="flex items-center justify-center gap-2 text-sm text-primary-10/80">
            <Image
              src={ICONS.comment}
              width={20}
              height={20}
              alt="verified-icon"
            />
            20K
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
            <div className="flex items-center justify-center gap-2 text-sm text-primary-10/80 bg-primary-60 px-4 py-3 rounded-xl w-full">
            <Image
              src={ICONS.comment}
              width={20}
              height={20}
              alt="verified-icon"
            />
            Comment
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-primary-10/80 bg-primary-60 px-4 py-3 rounded-xl w-full">
            <Image
              src={ICONS.share}
              width={20}
              height={20}
              alt="verified-icon"
            />
            Share
            </div>
        </div>


      </div>
      </div>
    </div>
  );
};

export default PostCard;
