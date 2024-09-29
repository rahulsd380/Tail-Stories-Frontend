import Image from "next/image";
import { ICONS } from "../../../../../public";


const Post = () => {
    const postIcons = [
        {
            label : "Go Live",
            icon : ICONS.live,
        },
        {
            label : "Photo",
            icon : ICONS.photo,
        },
        {
            label : "Video",
            icon : ICONS.video,
        },
        {
            label : "Feelings",
            icon : ICONS.feelings,
        },
    ]
    return (
        <div className="bg-[#F6F7F8] p-4 border rounded-xl font-Lato">
            <div className="flex items-center gap-3">
                {/* Profile pic */}
                <div className="size-11 rounded-full bg-primary-20"></div>
                {/* Input */}
                <input 
            placeholder="What's heppening?"
            type="text" 
            className="bg-primary-60 px-3 py-[10px] rounded-3xl border focus:outline-none focus:border-primary-20 transition duration-300 focus:shadow flex-1" />
            </div>

            <div className="flex justify-between items-center border-t-2 pt-6 mt-6">
                {
                    postIcons.map((icon, index) => 
                        <div key={index} className="flex items-center gap-3">
                    <Image
                    src={icon.icon}
                    width={25}
                    height={25}
                    alt="icon"
                    />
                    <h1 className="font-semibold text-primary-10">{icon.label}</h1>
                </div>
                    )
                }
            </div>
        </div>
    );
};

export default Post;