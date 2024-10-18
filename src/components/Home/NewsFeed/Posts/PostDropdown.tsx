'use client'
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ICONS } from "../../../../../public";
import { useDeletePostMutation } from "@/redux/features/Posts/postsApi";
import { toast } from "sonner";
import Modal from "@/components/Modal/Modal";
import EditPostModal from "./EditPostModal";
import { TPost } from "./posts.types";



const PostDropdown = ({postId, post}:{postId:string, post:TPost}) => {
  const [deletePost] = useDeletePostMutation();
  const [isOpen, setIsOpen] = useState(false);
  const [openEditPostModal, setOpenEditPostModal] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  // Delete post func
  const handleDeletePost = async () => {
    const loadingToastId = toast.loading('Deleting post...');
    try {
      const res = await deletePost(postId).unwrap();
      toast.success(res.message, { id: loadingToastId });
    } catch (err) {
      console.error(err);
      toast.error('Failed to delete post.', { id: loadingToastId });
    }
  };

  useEffect(() => {
    // Add event listener for clicks outside the dropdown
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      {/* Dots Icon */}
      <button onClick={toggleDropdown} className="focus:outline-none">
        <Image
          src={ICONS.menuDots}
          width={20}
          height={20}
          alt="menu dots"
          className="cursor-pointer"
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-md border border-gray-200 z-10">
          <ul className="flex flex-col gap-2 p-2 text-sm text-gray-700">
            <li onClick={() => setOpenEditPostModal(true)} className="hover:bg-gray-100 px-3 py-2 cursor-pointer rounded-md">Edit Post</li>
            <li onClick={handleDeletePost} className="hover:bg-gray-100 px-3 py-2 cursor-pointer rounded-md">Delete Post</li>
            <li className="hover:bg-gray-100 px-3 py-2 cursor-pointer rounded-md">Hide Post</li>
          </ul>
        </div>
      )}


      {/* Edit post modal */}
      <Modal
  openModal={openEditPostModal}
  setOpenModal={setOpenEditPostModal}
  classNames="max-w-[700px] w-full h-[470px] p-4">

            <EditPostModal setOpenEditPostModal={setOpenEditPostModal} post={post} />
</Modal>
    </div>
  );
};

export default PostDropdown;
