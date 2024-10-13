import Image from "next/image";
import { ICONS } from "../../../../../../../public";

type TFollowerCardProps = {
   data : {
    name:string;
    occupation:string;
    profilePicture:string
   }
}
const MyFollowersCard:React.FC<TFollowerCardProps> = ({data}) => {
    const {profilePicture, name, occupation} = data;
    return (
        <div className="bg-white border rounded-xl flex items-center gap-5 p-3 font-Inter">

            <div className="size-[70px] rounded-lg bg-primary-70">
            <Image
          width={110}
          height={110}
          className="size-[70px] rounded-lg object-cover"
          src={profilePicture ? profilePicture : ICONS.user}
          alt="user"
        />
            </div>

        <div>
        <h1 className="text-primary-10/60 font-Lato text-lg font-bold">{name}</h1>
        <p className="text-primary-10/50 text-[15px] mt-0.5">{occupation ? occupation : 'N/A'}</p>
        </div>
            
        </div>
    );
};

export default MyFollowersCard;