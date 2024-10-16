/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import Image from "next/image";
import { ICONS } from "../../../../public";
import Modal from "@/components/Modal/Modal";
import { useState } from "react";
import PostModal from "./Posts/PostModal";


const Post = () => {

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
                <div className="size-11 rounded-full bg-primary-20"></div>
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