/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import Image from "next/image";
import { ICONS } from "../../../../public";
import Modal from "@/components/Modal/Modal";
import { useState } from "react";
import PostModal from "./Posts/PostModal";
import { useGetMeQuery } from "@/redux/features/Auth/authApi";


const Post = () => {
    const { data } = useGetMeQuery({});
    const [openPostModal, setOpenPostModal] = useState<boolean>(false);
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
    ];

    return (
        <div>
            {/* Create Post box */}
            <div className="bg-[#F6F7F8] p-4 border rounded-xl font-Lato">
            <div className="flex items-center gap-3">
                {/* Profile pic */}
                <div className="size-11 rounded-full bg-white border flex items-center justify-center">
                {
          data?.data?.profilePicture ?
          <Image
          width={40}
          height={40}
        className="size-10 rounded-full object-cover"
          src={data?.data?.profilePicture}
          alt=""
        />
        :
        <Image
          width={32}
          height={32}
          className="size-7 rounded-full object-cover"
          src={ICONS.user}
          alt=""
        />
        }
                </div>
                {/* Input */}
                <input 
                onClick={() => setOpenPostModal(true)}
            placeholder="What's heppening?"
            type="text" 
            className="bg-primary-60 px-3 py-[10px] rounded-3xl border focus:outline-none focus:border-primary-20 transition duration-300 focus:shadow flex-1" />
            </div>

            <div className="flex justify-between items-center border-t-2 pt-6 mt-6">
                {
                    postIcons.map((icon, index) => 
                        <div  onClick={() => setOpenPostModal(true)} key={index} className="flex items-center gap-3 cursor-pointer">
                    <Image
                    src={icon.icon}
                    alt="icon"
                    className="size-4 md:size-[25px]"
                    />
                    <h1 className="text-sm md:text-base font-semibold text-primary-10/70">{icon.label}</h1>
                </div>
                    )
                }
            </div>
        </div>

        {/* Create post modal */}
        <Modal
        openModal={openPostModal}
        setOpenModal={setOpenPostModal}
        classNames="w-full max-w-[700px] h-[500px] p-5"
        >
            <PostModal showCrossIcon={true} setOpenPostModal={setOpenPostModal}/>
        </Modal>

        
        </div>
    );
};

export default Post;